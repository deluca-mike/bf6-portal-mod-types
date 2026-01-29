import { Node } from 'ts-morph';
import path from 'path';
import fs from 'fs';

/**
 * Returns a list of file paths relative to the baseDir.
 * recursive: true
 */
export function getRelativeFiles(baseDir) {
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

export function getSignatureId(node) {
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

export function getNamedChildren(node) {
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

export function isSignatureNode(node) {
    return (
        Node.isFunctionDeclaration(node) ||
        Node.isMethodDeclaration(node) ||
        Node.isConstructorDeclaration(node) ||
        Node.isMethodSignature(node) ||
        Node.isCallSignatureDeclaration(node)
    );
}

export function isContainer(node) {
    return Node.isClassDeclaration(node) || Node.isInterfaceDeclaration(node) || Node.isModuleDeclaration(node);
}
