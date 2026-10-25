# agent-dev-base

一套**通用的 coding-agent 开发底座**：给「人 + 外部 coding agent」一起养代码仓用的工程骨架，不是又一个面向终端用户的 agent 产品。

## 要干嘛（一句话）

把我们从 dsh / OpenClaw / goose / magpie 里挖到的共性，收成**可 clone、可改、可长规矩**的最小约定，让新仓不用从零发明「怎么少让 agent 翻车」。

## 更直白一点

- **不是**：聊天机器人、ACP 产品功能、模型路由、菜单栏网关。
- **是**：仓库里那一层——agent 读什么、怎么证明验过了、翻车怎么记下来、记满怎么变成硬规矩、合入怎么钉住审过的 head。
- **默认抄的节奏**：薄 `AGENTS.md` 入口 → 提交正文写清「跑了什么 / Not tried」→ 夜间 `LESSONS` 复盘 → 连见多日升格进 `code-standards`；skills / hook / 审查 bot 按痛点再加，不一次性堆满。

## 本仓现状

刚建好空壳。下一步会往里塞最小可运行骨架（`AGENTS.md`、`LESSONS.md`、`docs/code-standards.md` 模板，以及可选的 CI / hook 开关说明）。

## 参考来源（研究笔记，不在本仓）

dsh（DeepSeek Harness）、OpenClaw、goose（Block）、magpie（yetone）——各自的 agent-dev 工程协作方式，不是它们的产品功能。
