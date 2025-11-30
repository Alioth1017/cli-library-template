# CLI Library Template

English | [简体中文](./README_zh.md)

A modern, opinionated template for building CLI tools and libraries with TypeScript.

## Features

- ⚡️ **Build**: [tsup](https://tsup.egoist.dev/) - The simplest and fastest way to bundle your TypeScript library.
- 🧪 **Test**: [Vitest](https://vitest.dev/) - Blazing fast unit test framework.
- 💅 **Lint & Format**: [Biome](https://biomejs.dev/) - Fast formatter and linter.
- 🐶 **Git Hooks**: [Husky](https://typicode.github.io/husky/) + [Lint-staged](https://github.com/lint-staged/lint-staged) - Ensure code quality before commit.
- 📦 **Package Manager**: [pnpm](https://pnpm.io/) - Fast, disk space efficient package manager.

## Prerequisites

- Node.js >= 24.10.0
- pnpm >= 10.0.0

## Getting Started

1. **Install dependencies**

   ```bash
   pnpm install
   ```

2. **Development**

   Start build in watch mode:

   ```bash
   pnpm dev
   ```

3. **Build**

   Build for production (outputs to `dist/`):

   ```bash
   pnpm build
   ```

4. **Test**

   Run unit tests:

   ```bash
   pnpm test
   ```

   Check test coverage:

   ```bash
   pnpm test:coverage
   ```

5. **Lint & Format**

   Check for issues:

   ```bash
   pnpm lint
   ```

   Auto-fix and format:

   ```bash
   pnpm format
   ```

## Project Structure

- `src/cli.ts`: Entry point for the CLI command.
- `src/index.ts`: Entry point for the library (exports).
- `test/`: Unit tests.

## Customization

1. Modify `package.json`:
   - Update `name`, `description`, `author`, `keywords`.
   - Update `bin` command name.
2. Implement your logic in `src/index.ts`.
3. Hook it up in `src/cli.ts`.

## Publishing

```bash
npm publish
```

This project uses `np` for safer publishing (configured in `prepublishOnly` script).
