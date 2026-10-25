# agent-dev-base

这是一个**技能的发布和维护仓库**。

技能只做一件事：拿**任何一个已经存在的仓库**，按固定步骤补上三条流水线。人读 `README.md`，agent 读 `AGENTS.md`。`AGENTS.md` 只放链接。

它不是业务模板，也不是「把本仓克隆出来当新项目的骨架」。

## 三条流水线

每条有自己的家。细则不写进根上的 `AGENTS.md`。

1. **决策**：`.agents/notes/`。为什么、放弃了什么。目录、Status 行、必备小节由脚本检查。
2. **教训**：`LESSONS.md` 升进 `docs/code-standards.md`。一条教训在至少 3 个不同的日历日被 Seen 之后才升格。这句话的细则只在 `LESSONS.md`。
3. **提交验收**：`.agents/skills/commit-acceptance/SKILL.md`。提交正文怎么写、什么样的检查太薄。这是装进目标仓的技能。

一条事实只放一个家，别的文件用链接指过去。

## 不装的东西

不把本发布技能 `retrofit-agent-collab` 拷进目标仓。不装 hooks、CI、CODEOWNERS、审查 bot、`--match-head-commit`、一个会话一个 worktree、`docs/subsystems/`。技能也不替目标仓发明模块目录。目标仓的 `.agents/skills/` 里只有 `commit-acceptance`。

## 怎么对另一个仓库运行

1. 让 coding agent 读到本仓的 `.agents/skills/retrofit-agent-collab/SKILL.md`。
2. 把目标仓库的路径交给它，让它按该文件里的步骤做，不要让它另加一套流程。
3. 看报告：三条流水线各自是新建还是原样留着，还要人写什么。

已经存在的文件不会被覆盖。根目录如果已有 `readme.md`（大小写不论），就当作 README 已在，不另写一份 `README.md`。目标仓不必是本仓的 fork。

本仓自己的笔记门禁这样跑（Node 22+，不用安装依赖）：

```bash
node --experimental-strip-types .agents/notes/scripts/verify-agent-note-format.mts
node --experimental-strip-types .agents/notes/scripts/verify-agent-note-classification.mts
```

## 本仓自己

维护这个技能的人也用同一套骨架，包括 `commit-acceptance`。目录图在 `docs/architecture-index.md`。步骤以 `SKILL.md` 为准。目标仓跑完后的形状见 `examples/after-retrofit.md`。
