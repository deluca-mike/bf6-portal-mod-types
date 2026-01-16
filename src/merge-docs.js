import { Project, Node } from 'ts-morph';
import path from 'path';
import fs from 'fs';

// --- CONFIGURATION ---
const SRC_DIR = 'src';
const OUTPUT_FILE = 'index.d.ts';
const ORIGINAL_FILENAME = 'mod.d.ts';
const OVERRIDES_FILENAME = 'documentedMod.d.ts';
const NAMESPACE_NAME = 'mod';

async function main() {
    console.log('--- HYBRID MERGE: AST READ + TEXT WRITE ---');

    const project = new Project({
        skipAddingFilesFromTsConfig: true,
        useInMemoryFileSystem: true,
    });

    const originalPath = path.join(SRC_DIR, ORIGINAL_FILENAME);
    const overridesPath = path.join(SRC_DIR, OVERRIDES_FILENAME);
    const outputPath = path.resolve(OUTPUT_FILE);

    // Load Files into Memory (Read-Only)
    console.log(`Loading ${ORIGINAL_FILENAME}...`);
    const originalText = fs.readFileSync(originalPath, 'utf-8');
    const originalFile = project.createSourceFile(`temp-${ORIGINAL_FILENAME}`, originalText);

    console.log(`Loading ${OVERRIDES_FILENAME}...`);
    const overridesText = fs.readFileSync(overridesPath, 'utf-8');
    const overridesFile = project.createSourceFile(`temp-${OVERRIDES_FILENAME}`, overridesText);

    // Locate Namespaces
    const sourceNS = overridesFile.getModules()[0];
    const targetNamespaces = originalFile.getModules().filter((m) => m.getName() === NAMESPACE_NAME);

    if (!sourceNS) {
        console.error(`❌ Error: Could not find any namespace in ${OVERRIDES_FILENAME}`);
        return;
    }

    if (targetNamespaces.length === 0) {
        console.error(`❌ Error: Could not find namespace '${NAMESPACE_NAME}' in ${ORIGINAL_FILENAME}`);
        return;
    }

    console.log(`Mapping '${sourceNS.getName()}' -> '${NAMESPACE_NAME}' (${targetNamespaces.length} blocks found)`);

    // GENERATE EDITS (Read Phase)
    // We strictly gather numbers here. We do NOT modify the original text yet.
    const edits = [];

    for (const targetNS of targetNamespaces) {
        collectEdits(sourceNS, targetNS, edits);
    }

    console.log(`✅ Identified ${edits.length} documentation updates.`);

    // APPLY EDITS (Write Phase)
    // We work strictly on the raw string now using the coordinates found above.
    let finalContent = originalText;

    // Sort edits BOTTOM-UP so indexes remain valid.
    edits.sort((a, b) => b.start - a.start);

    for (const edit of edits) {
        const before = finalContent.substring(0, edit.start);
        const after = finalContent.substring(edit.end);

        finalContent = before + edit.text + after;
    }

    // Write Output
    console.log(`Writing to ${OUTPUT_FILE}...`);
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

function getSignatureId(node) {
    if (!isSignatureNode(node)) return '';

    const params = node.getParameters().map((p) => {
        let typeText = 'any';
        const typeNode = p.getTypeNode();

        if (typeNode) {
            typeText = typeNode.getText();
            typeText = typeText.replace(/\s+/g, '');
            typeText = typeText.replace(/[a-zA-Z0-9_]+\./g, '');
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
