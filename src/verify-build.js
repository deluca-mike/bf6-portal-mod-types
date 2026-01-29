import { Project } from 'ts-morph';
import path from 'path';
import fs from 'fs';

import { getRelativeFiles, getSignatureId, getNamedChildren, isSignatureNode, isContainer } from './common.js';

// CONFIG
const DOCUMENTED_DIR = path.join('src', 'documented');
const OUTPUT_ROOT = '.'; // Check the actual root output

async function main() {
    console.log('--- VERIFYING BUILD ARTIFACTS ---');

    const project = new Project({
        skipAddingFilesFromTsConfig: true,
        useInMemoryFileSystem: true,
    });

    // 1. Get list of files we expect to contain documentation
    const filesToCheck = getRelativeFiles(DOCUMENTED_DIR);
    let totalChecks = 0;
    let errors = 0;

    for (const relPath of filesToCheck) {
        const documentedPath = path.join(DOCUMENTED_DIR, relPath);
        const outputPath = path.join(OUTPUT_ROOT, relPath);

        if (!fs.existsSync(outputPath)) {
            console.error(`❌ MISSING FILE: ${outputPath} does not exist.`);
            errors++;
            continue;
        }

        // Load both files
        const docFile = project.createSourceFile('source.ts', fs.readFileSync(documentedPath, 'utf-8'), {
            overwrite: true,
        });

        const outFile = project.createSourceFile('output.ts', fs.readFileSync(outputPath, 'utf-8'), {
            overwrite: true,
        });

        // Find the 'mod' or 'documentedMod' namespaces
        const sourceNS = docFile.getModules()[0];
        const targetNamespaces = outFile.getModules().filter((m) => m.getName() === 'mod');

        if (!sourceNS) continue; // Skip files with no namespace (unlikely)

        // 2. Walk the Source (Documented) nodes
        // We only care about nodes that YOU explicitly documented.
        const checks = compareNamespace(sourceNS, targetNamespaces);

        totalChecks += checks.total;
        errors += checks.failures;

        if (checks.failures > 0) {
            console.log(`❌ ${relPath}: Failed ${checks.failures}/${checks.total} checks.`);
        } else if (checks.total > 0) {
            console.log(`✅ ${relPath}: Verified ${checks.total} doc blocks.`);
        }
    }

    console.log('--------------------------------------------------');
    if (errors === 0) {
        console.log(`SUCCESS: All ${totalChecks} documentation blocks verified in output.`);
    } else {
        console.error(`FAILURE: Found ${errors} missing or mismatched documentation blocks.`);
        process.exit(1);
    }
}

function compareNamespace(sourceParent, targetParentList) {
    const stats = { total: 0, failures: 0 };
    const sourceChildren = getNamedChildren(sourceParent);

    // Flatten all target namespaces (in case of split 'mod') into one lookup map
    const targetChildren = new Map();

    targetParentList.forEach((ns) => {
        const children = getNamedChildren(ns);

        for (const [key, nodes] of children) {
            if (!targetChildren.has(key)) {
                targetChildren.set(key, []);
            }

            targetChildren.get(key).push(...nodes);
        }
    });

    for (const [name, sourceNodes] of sourceChildren) {
        const targetNodes = targetChildren.get(name);

        for (const sourceNode of sourceNodes) {
            // We only check if the SOURCE has docs.
            // If source has no docs, we don't care what the output has.
            const sourceDocs = sourceNode.getJsDocs();

            if (sourceDocs.length === 0) continue;

            stats.total++;

            // Find matching node in output
            let targetNode;

            if (isSignatureNode(sourceNode)) {
                const sig = getSignatureId(sourceNode);
                targetNode = targetNodes?.find((t) => isSignatureNode(t) && getSignatureId(t) === sig);
            } else {
                targetNode = targetNodes?.[0];
            }

            if (!targetNode) {
                console.error(`   ERR: Output missing declaration for '${name}'`);
                stats.failures++;
                continue;
            }

            // Verify Docs match
            const outputDocs = targetNode.getJsDocs();
            if (outputDocs.length === 0) {
                console.error(`   ERR: Output missing docs for '${name}'`);
                stats.failures++;
            } else {
                // strict check: does the output contain the text from the source?
                const srcText = sourceDocs[0].getComment(); // string or undefined
                const outText = outputDocs[0].getComment();

                // Simple check: Ensure the output doc contains the main source text
                // (We allow output to have extra formatting, but the core text must be there)
                if (srcText && (!outText || !outText.includes(srcText.trim()))) {
                    console.error(`   ERR: Doc mismatch for '${name}'`);
                    // console.log("Expected:", srcText);
                    // console.log("Actual:", outText);
                    stats.failures++;
                }
            }

            // Recurse (Container check)
            if (isContainer(sourceNode) && isContainer(targetNode)) {
                // Wrap single target node in array for recursive call to match 'targetParentList' signature
                const subStats = compareNamespace(sourceNode, [targetNode]);
                stats.total += subStats.total;
                stats.failures += subStats.failures;
            }
        }
    }
    return stats;
}

main().catch(console.error);
