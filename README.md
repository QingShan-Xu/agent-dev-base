# agent-dev-base

本仓发布并维护一个技能。技能对着一个已经有代码的仓库，按固定步骤补上三条流水线。人读 `README.md`，agent 读 `AGENTS.md`。`AGENTS.md` 只放链接。

不要克隆本仓来开新项目。这里也没有业务模板。

## 三条流水线

每条流水线有自己的家。细则不写进根上的 `AGENTS.md`。

1. 决策。家在 `.agents/notes/`。记为什么、放弃了什么。目录、Status 行、必备小节由脚本检查。
2. 教训。草稿在 `LESSONS.md`，升格后的规矩在 `docs/code-standards.md`。升格条件：至少 3 个不同日历日 Seen。细则只在 `LESSONS.md`。
3. 提交验收。家在 `.agents/skills/commit-acceptance/SKILL.md`。写提交正文要记什么、什么样的检查太薄。这个技能会装进目标仓。

一条事实只放一个家。别的文件用链接指过去。

## 不装的东西

`retrofit-agent-collab` 留在本仓，不拷进目标仓。不装 hooks、CI、CODEOWNERS、审查 bot、`--match-head-commit`、一个会话一个 worktree、`docs/subsystems/`。不替目标仓新建模块目录。目标仓的 `.agents/skills/` 里只有 `commit-acceptance`。

## 怎么对另一个仓库运行

1. 让 coding agent 读本仓的 `.agents/skills/retrofit-agent-collab/SKILL.md`。
2. 把目标仓库的路径交给它，按该文件里的步骤做。
3. 看报告：三条流水线是新建的还是原来就有的，还有哪些要人写。

已经存在的文件不覆盖。根目录如果已有任意大小写的 `readme.md`，就当作 README 已在，不另写一份 `README.md`。目标仓不必是本仓的 fork。

本仓的笔记门禁这样跑（Node 22+，不用安装依赖）：

```bash
node --experimental-strip-types .agents/notes/scripts/verify-agent-note-format.mts
node --experimental-strip-types .agents/notes/scripts/verify-agent-note-classification.mts
```

## 本仓自己

维护技能的人用同一套骨架，包括 `commit-acceptance`。目录图在 `docs/architecture-index.md`。步骤以 `.agents/skills/retrofit-agent-collab/SKILL.md` 为准。目标仓跑完后的形状见 `examples/after-retrofit.md`。
