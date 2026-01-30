# bf6-portal-mod-types

TypeScript definitions for the Battlefield 6 Portal **`mod`** namespace. Use this package in your Portal experience
project for type-safe access to the global `mod` API (players, rules, UI, events, etc.) with improved JSDoc where
available.

## Installation

Install as a dev dependency:

```bash
npm install -D bf6-portal-mod-types
```

## Configuring your project

Point TypeScript at this package’s types via `tsconfig.json`. The `mod` namespace is declared globally, so you do
**not** import it; you only need to include the types.

**Option A — only Portal mod types:**

```json
{
    "compilerOptions": {
        "types": ["bf6-portal-mod-types"]
    }
}
```

**Option B — Portal mod types plus other type packages** (e.g.
[quickjs-types](https://www.npmjs.com/package/quickjs-types) for the Portal runtime):

```json
{
    "compilerOptions": {
        "types": ["quickjs-types", "bf6-portal-mod-types"]
    }
}
```

Ensure your `include` (or default) covers the folders where you reference `mod` (e.g. `src/**/*.ts`). No
`/// <reference />` or imports are required for `mod`; once the package is in `types`, the global namespace is available
everywhere TypeScript compiles.

## Usage

After installation and `tsconfig` setup, the global `mod` namespace is available in your editor with editor completion,
hover docs (where JSDoc has been added), and type checking for `mod` APIs. The package ships only `.d.ts` files; there
is no runtime code.

## Version semantics

The official BF6 Portal SDK uses a **four-part** version (e.g. `1.1.3.0`) for the `mod` namespace and does not follow
semver. This package maps that to **three-part semver** by dropping the first segment:

| Official SDK (mod namespace) | This package |
| ---------------------------- | ------------ |
| `1.1.3.0`                    | `1.3.x`      |
| `1.1.4.0` (future)           | `1.4.x`      |

- **Minor** version changes (e.g. `1.3.0` → `1.4.0`) align with a new official SDK release and may add or change APIs.
- **Patch** versions (e.g. `1.3.0` → `1.3.1`) keep the same underlying SDK version and only add or improve documentation
  and usability (no API surface change).

When you upgrade patch versions, you can expect the same `mod` API with more or better JSDoc and no breaking changes.

## What’s inside

The types are derived from the SDK package provided at
[portal.battlefield.com](https://portal.battlefield.com/bf6/experiences), with the following improvements:

- **Split layout** — The single official `index.d.ts` is split into multiple files (e.g. `enums.d.ts`, `types.d.ts`,
  `event-handler-signatures.d.ts`, per-map `runtime-spawn-enums/*.d.ts`) to keep editor and tooling context manageable.
- **Extra JSDoc** — A growing subset of the `mod` namespace is documented with parameter descriptions, return types,
  examples, and usage notes. The rest of the API remains fully typed with the same signatures as the official SDK.

The published entry point is `index.d.ts`, which references the rest of the declaration files. Your project only needs
to list `bf6-portal-mod-types` in `compilerOptions.types`; resolution is handled by Node and TypeScript.

## Documentation site

The full API reference (generated from these type definitions and their JSDoc) is published as the **docs** for this
repo. If the repo uses GitHub Pages, you can find it at:

**https://deluca-mike.github.io/bf6-portal-mod-types/**

Use it to browse the `mod` namespace, see which symbols are documented, and copy examples.

## Summary

| Step      | Action                                                                                                      |
| --------- | ----------------------------------------------------------------------------------------------------------- |
| Install   | `npm install -D bf6-portal-mod-types`                                                                       |
| Configure | Add `"types": ["bf6-portal-mod-types"]` (and any other type packages) to `tsconfig.json` `compilerOptions`. |
| Use       | Use the global `mod` namespace in your Portal scripts (no imports).                                         |
| Upgrade   | Patch = docs/usability only; minor = new SDK version.                                                       |

For contribution, build, and verification details, see the main
[README](https://github.com/deluca-mike/bf6-portal-mod-types#readme) in the repository.
