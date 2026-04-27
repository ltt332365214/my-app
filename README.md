# 项目名称

> **注意：本文件是人看的项目介绍，非 AI 配置。AI 配置请查看 CLAUDE.md、GEMINI.md、.agents/AGENTS.md**

## 项目简介

（请在此处添加项目描述）

## 技术栈

（请在此处添加技术栈信息）

## 快速开始

（请在此处添加快速开始指南）

## 项目文档

项目文档统一存放在 `docs/` 目录下，分为四类：

| 目录 | 用途 | 目标读者 |
|------|------|----------|
| `docs/guides/` | 环境搭建、开发规范、FAQ、故障排查 | 全体开发人员 |
| `docs/specs/` | 产品需求、技术设计、技术调研 | 产品经理、开发人员 |
| `docs/tech/` | 架构图、API定义、数据库设计、架构决策 | 架构师、开发人员 |
| `docs/ops/` | 部署流程、测试计划、安全策略、变更日志 | 运维、DevOps |

## 项目结构

```
.
├── README.md              # 本文件（项目介绍）
├── CLAUDE.md              # Claude Code 配置
├── GEMINI.md              # Gemini CLI 配置
├── .agents/               # 通用 AI 治理规则
├── .claude/               # Claude Code 专用目录
├── .codex/                # Codex 专用目录
├── .gemini/               # Gemini CLI 专用目录
├── docs/                  # 项目文档
│   ├── guides/            # 开发指南（环境、规范、FAQ、故障排查）
│   ├── specs/             # 需求规格（PRD、设计、调研）
│   ├── tech/              # 技术文档（架构、API、数据库、决策）
│   └── ops/               # 运维文档（部署、测试、安全、变更）
├── temp/scripts/          # 临时脚本（不跟踪）
├── sync.bat               # Git 同步脚本
├── start-claude.bat       # 启动 Claude Code
├── start-codex.bat        # 启动 Codex
├── start-gemini.bat       # 启动 Gemini CLI
└── sessions-cleaner.bat   # 清理 AI 会话历史数据
```

## AI 配置说明

本项目配置了多个 AI 工具，各工具配置文件：

- **CLAUDE.md** / **GEMINI.md** / **.agents/AGENTS.md**：三个文件内容必须保持一致，包含代码规范、文件大小限制、目录结构等规则

**重要**：修改任一配置文件时，务必同步更新其他两个文件！

## 代码规范（摘要）

- 单文件不超过 300 行代码
- 前端开发：HTML、CSS、JS/TS 分离
- 字符串常量单独提取到常量文件
- 充分解耦、分层架构、单一职责

完整规范见 CLAUDE.md / GEMINI.md / .agents/AGENTS.md

## 贡献指南

（请在此处添加贡献指南）

---

*本 README 文档待完善。*
