import { Project, Node } from 'ts-morph';
import path from 'path';
import fs from 'fs';

// --- CONFIGURATION ---
const NAMESPACE_NAME = 'mod';
const OUTPUT_ROOT = '.'; // Project root
const ORIGINAL_DIR = path.join('src', 'original');
const DOCUMENTED_DIR = path.join('src', 'documented');

async function main() {
    console.log('--- BF6 PORTAL DOCS BUILDER ---');

    // 1. Initialize ts-morph (InMemory for speed)
    const project = new Project({
        skipAddingFilesFromTsConfig: true,
        useInMemoryFileSystem: true,
    });

    // 2. Get all files in 'src/original' recursively
    const allFiles = getRelativeFiles(ORIGINAL_DIR);
    console.log(`Found ${allFiles.length} files in ${ORIGINAL_DIR}`);

    for (const relPath of allFiles) {
        const originalPath = path.join(ORIGINAL_DIR, relPath);
        const documentedPath = path.join(DOCUMENTED_DIR, relPath);
        const outputPath = path.join(OUTPUT_ROOT, relPath);

        // Ensure output directory exists
        fs.mkdirSync(path.dirname(outputPath), { recursive: true });

        // Check if we have documentation overrides for this file
        if (fs.existsSync(documentedPath)) {
            console.log(`[MERGE] ${relPath}`);
            mergeFile(project, originalPath, documentedPath, outputPath);
        } else {
            console.log(`[COPY ] ${relPath}`);
            fs.copyFileSync(originalPath, outputPath);
        }
    }

    console.log('--- BUILD COMPLETE ---');
}

/**
 * Merges a single pair of files using AST-Read / Text-Write
 */
function mergeFile(project, originalPath, documentedPath, outputPath) {
    // A. Load Files into Memory (Read-Only)
    const originalText = fs.readFileSync(originalPath, 'utf-8');
    const originalFile = project.createSourceFile('original.ts', originalText, { overwrite: true });

    const documentedText = fs.readFileSync(documentedPath, 'utf-8');
    const documentedFile = project.createSourceFile('documented.ts', documentedText, { overwrite: true });

    // B. Locate Namespaces
    // In 'documented', we look for ANY namespace (e.g. "documentedMod")
    const sourceNS = documentedFile.getModules()[0];

    // In 'original', we look for the namespace we're interested in
    const targetNamespaces = originalFile.getModules().filter((m) => m.getName() === NAMESPACE_NAME);

    // If structure doesn't match expectations, warn and fallback to direct copy
    if (!sourceNS || targetNamespaces.length === 0) {
        console.warn(`   ⚠️  Warning: Could not match namespaces in ${path.basename(originalPath)}. Copying original.`);
        fs.writeFileSync(outputPath, originalText);
        return;
    }

    console.log(`Mapping '${sourceNS.getName()}' -> '${NAMESPACE_NAME}' (${targetNamespaces.length} blocks found)`);

    // C. GENERATE EDITS (Read Phase)
    // We strictly gather numbers here. We do NOT modify the original text yet.
    const edits = [];

    for (const targetNS of targetNamespaces) {
        collectEdits(sourceNS, targetNS, edits);
    }

    console.log(`✅ Identified ${edits.length} documentation updates.`);

    // D. APPLY EDITS (Write Phase)
    // We work strictly on the raw string now using the coordinates found above.
    let finalContent = originalText;

    // Sort edits BOTTOM-UP so indexes remain valid.
    edits.sort((a, b) => b.start - a.start);

    for (const edit of edits) {
        const before = finalContent.substring(0, edit.start);
        const after = finalContent.substring(edit.end);
        finalContent = before + edit.text + after;
    }

    console.log(`Writing to ${outputPath}...`);
    fs.writeFileSync(outputPath, finalContent);
    console.log('Done!');
}

/**
 * Traverses the AST and queues up text replacements.
 */
function collectEdits(sourceParent, targetParent, edits) {
    const sourceChildren = getNamedChildren(sourceParent);
    const targetChildren = getNamedChildren(targetParent);

    for (const [name, sourceNodes] of sourceChildren) {
        const targetNodes = targetChildren.get(name);

        // Skip if this name doesn't exist in the original file
        if (!targetNodes) continue;

        for (const sourceNode of sourceNodes) {
            let targetNode;

            // Match Signatures (for functions) or just Name (for classes/vars)
            if (isSignatureNode(sourceNode)) {
                const sourceSig = getSignatureId(sourceNode);

                // Find the target with the matching signature
                targetNode = targetNodes.find((t) => isSignatureNode(t) && getSignatureId(t) === sourceSig);
            } else {
                // For classes/interfaces, usually just taking the first one is safe
                targetNode = targetNodes[0];
            }

            if (!targetNode) continue;

            const jsDocs = sourceNode.getJsDocs();

            if (jsDocs.length > 0) {
                // Prepare new text.
                let newDocText = jsDocs.map((d) => d.getText()).join('\n');
                const indent = targetNode.getIndentationText();

                // Always append one newline + indent to the docs
                newDocText = newDocText + '\n' + indent;

                // Determine Start/End positions in the original text.
                const commentRanges = targetNode.getLeadingCommentRanges();

                let startPos, endPos;

                if (commentRanges.length > 0) {
                    // REPLACE: Wipe out all existing comments (// or /** */).
                    // Start at the very first comment.
                    startPos = commentRanges[0].getPos();

                    // `getStart()` points to the 'export' keyword.
                    // By extending the range here, we consume the old comments and  the whitespace/newline gap that followed them.
                    endPos = targetNode.getStart();
                } else {
                    // INSERT: Nothing exists, insert before the node.
                    startPos = targetNode.getStart();
                    endPos = targetNode.getStart();
                }

                // Queue the edit.
                edits.push({
                    start: startPos,
                    end: endPos,
                    text: newDocText,
                });
            }

            if (!isContainer(sourceNode) || !isContainer(targetNode)) continue;

            // RECURSE: Go deeper.
            collectEdits(sourceNode, targetNode, edits);
        }
    }
}

// --- HELPERS ---

/**
 * Returns a list of file paths relative to the baseDir.
 * recursive: true
 */
function getRelativeFiles(baseDir) {
    const results = [];
    const list = fs.readdirSync(baseDir);

    list.forEach((file) => {
        const fullPath = path.join(baseDir, file);
        const stat = fs.statSync(fullPath);

        if (stat && stat.isDirectory()) {
            // Recurse into subdirectory
            const subFiles = getRelativeFiles(fullPath);
            // Append current dir name to results (e.g. "enums/file.d.ts")
            subFiles.forEach((sub) => results.push(path.join(file, sub)));
        } else {
            // It's a file, just add the name
            results.push(file);
        }
    });

    return results;
}

function getSignatureId(node) {
    if (!isSignatureNode(node)) return '';

    const params = node.getParameters().map((p) => {
        let typeText = 'any';
        const typeNode = p.getTypeNode();

        if (typeNode) {
            typeText = typeNode.getText();
            typeText = typeText.replace(/\s+/g, '');
            typeText = typeText.replace(/[a-zA-Z0-9_]+\./g, ''); // Strip namespaces
        }

        const isOptional = p.isOptional() ? '?' : '';
        const isRest = p.isRestParameter() ? '...' : '';

        return `${isRest}${typeText}${isOptional}`;
    });

    return `(${params.join(',')})`;
}

function getNamedChildren(node) {
    const map = new Map();
    let scanNode = node;

    if (Node.isModuleDeclaration(node)) {
        const body = node.getBody();

        if (!body) return map;

        scanNode = body;
    }

    scanNode.forEachChild((child) => {
        let name;

        if (child.getName) {
            name = child.getName();
        } else if (Node.isConstructorDeclaration(child)) {
            name = 'constructor';
        }

        const isSupported =
            Node.isClassDeclaration(child) ||
            Node.isInterfaceDeclaration(child) ||
            Node.isModuleDeclaration(child) ||
            Node.isFunctionDeclaration(child) ||
            Node.isMethodDeclaration(child) ||
            Node.isPropertyDeclaration(child) ||
            Node.isPropertySignature(child) ||
            Node.isMethodSignature(child) ||
            Node.isEnumDeclaration(child) ||
            Node.isTypeAliasDeclaration(child);

        if (name && isSupported) {
            if (!map.has(name)) {
                map.set(name, []);
            }

            map.get(name).push(child);
        }
    });
    return map;
}

function isSignatureNode(node) {
    return (
        Node.isFunctionDeclaration(node) ||
        Node.isMethodDeclaration(node) ||
        Node.isConstructorDeclaration(node) ||
        Node.isMethodSignature(node) ||
        Node.isCallSignatureDeclaration(node)
    );
}

function isContainer(node) {
    return Node.isClassDeclaration(node) || Node.isInterfaceDeclaration(node) || Node.isModuleDeclaration(node);
}

main().catch(console.error);
