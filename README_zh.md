# CLI Library Template

[English](./README.md) | 简体中文

一个现代化的、基于 TypeScript 的 CLI 工具和库开发模版。

## 特性

- ⚡️ **构建**: [tsup](https://tsup.egoist.dev/) - 极速 TypeScript 打包工具。
- 🧪 **测试**: [Vitest](https://vitest.dev/) - 极速单元测试框架。
- 💅 **规范**: [Biome](https://biomejs.dev/) - 快速的格式化和 Lint 工具。
- 🐶 **Git Hooks**: [Husky](https://typicode.github.io/husky/) + [Lint-staged](https://github.com/lint-staged/lint-staged) - 提交前自动检查代码质量。
- 📦 **包管理**: [pnpm](https://pnpm.io/) - 快速、节省磁盘空间的包管理器。

## 环境要求

- Node.js >= 24.10.0
- pnpm >= 10.0.0

## 快速开始

1. **安装依赖**

   ```bash
   pnpm install
   ```

2. **开发**

   启动监听模式进行开发：

   ```bash
   pnpm dev
   ```

3. **构建**

   构建生产版本 (输出到 `dist/`):

   ```bash
   pnpm build
   ```

4. **测试**

   运行单元测试：

   ```bash
   pnpm test
   ```

   查看测试覆盖率：

   ```bash
   pnpm test:coverage
   ```

5. **代码规范**

   检查代码问题：

   ```bash
   pnpm lint
   ```

   自动修复和格式化：

   ```bash
   pnpm format
   ```

## 项目结构

- `src/cli.ts`: CLI 命令行的入口文件。
- `src/index.ts`: 库的入口文件 (导出)。
- `test/`: 单元测试文件。

## 自定义配置

1. 修改 `package.json`:
   - 更新 `name`, `description`, `author`, `keywords`。
   - 更新 `bin` 中的命令名称。
2. 在 `src/index.ts` 中实现你的业务逻辑。
3. 在 `src/cli.ts` 中调用你的逻辑。

## 发布

```bash
npm publish
```

本项目配置了 `prepublishOnly` 脚本，发布时会自动运行构建和检查。
