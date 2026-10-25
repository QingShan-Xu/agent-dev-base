# agent-dev-base

这是一个**技能的发布和维护仓库**。

技能只做一件事：拿**任何一个已经存在的仓库**，按固定步骤补上 coding agent 协作要用的文件。人读 `README.md`，agent 读 `AGENTS.md`。

它不是业务模板，也不是「把本仓克隆出来当新项目的骨架」。

## 装进目标仓的东西

- `AGENTS.md`：给 agent 的长期规矩，只放链接，不抄细则。
- `CLAUDE.md`：指向 `AGENTS.md` 的符号链接。
- `docs/architecture-index.md`：仓库里有什么、哪份文件说了算。
- `LESSONS.md`：事后失败的草稿。升格条件以该文件为准：同一条草稿最早和最晚的 Seen 至少相隔 3 个日历日，才把规则候选写进 `docs/code-standards.md`。
- `.agents/notes/`：决策的为什么、放弃了什么。目录、Status 行、必备小节由脚本检查。

两套回溯都留着。notes 记决策，LESSONS 记翻车。一条事实只放一个家，别的文件用链接指过去。

## 不装的东西

hooks、CI、CODEOWNERS、审查 bot、`--match-head-commit`、一个会话一个 worktree、`docs/subsystems/`、额外的 skills 包。技能也不会替目标仓发明模块目录。

## 怎么对另一个仓库运行

1. 让 coding agent 读到本仓的 `.agents/skills/retrofit-agent-collab/SKILL.md`。
2. 把目标仓库的路径交给它，让它按该文件里的步骤做，不要让它另加一套流程。
3. 看报告：新建了什么、原样留了什么、还要人写什么。

已经存在的文件不会被覆盖。目标仓不必是本仓的 fork。

本仓自己的笔记门禁这样跑（Node 22+，不用安装依赖）：

```bash
node --experimental-strip-types .agents/notes/scripts/verify-agent-note-format.mts
node --experimental-strip-types .agents/notes/scripts/verify-agent-note-classification.mts
```

## 本仓自己

维护这个技能的人也用同一套骨架。目录图在 `docs/architecture-index.md`。步骤以 `SKILL.md` 为准。目标仓跑完后的形状见 `examples/after-retrofit.md`。
