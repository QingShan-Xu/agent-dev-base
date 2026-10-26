# 技能跑完之后

目标仓有三条流水线，各有一个家。偏好轨道在旁边，不是第四条流水线。根上的 `AGENTS.md` 只做路由。原来就有的 `README.md` 留着。目标仓里没有任何大小写的 `readme.md` 时，技能才写一份短稿，等人改。

```text
your-repo/
├── README.md                      # 给人读。readme.md 已在则不动
├── AGENTS.md                      # 只做路由
├── CLAUDE.md -> AGENTS.md
├── LESSONS.md                     # 事后缺陷草稿。Seen、升格、降格只在这里
├── docs/
│   ├── architecture-index.md      # 有什么、哪份文件说了算。重复偏好按这张表找家
│   ├── code-standards.md          # 从 LESSONS 升上来的稳定规矩
│   └── postmortems/               # 事故。不是教训草稿
│       └── README.md
└── .agents/
    ├── prefs/                     # 当场纠正。怎么记、怎么升
    │   └── README.md
    ├── notes/                     # 决策流水线
    │   ├── README.md
    │   ├── AGENTS.md
    │   ├── scripts/
    │   │   ├── agent-note-tree.mts
    │   │   ├── verify-agent-note-format.mts
    │   │   └── verify-agent-note-classification.mts
    │   ├── proposed/<class>/
    │   ├── implemented/
    │   │   ├── AGENTS.md          # 和 <class>/ 并列，不在 class 里面
    │   │   └── <class>/
    │   ├── rejected/<class>/
    │   └── archived/
    │       ├── AGENTS.md
    │       └── <class>/
    └── skills/
        └── commit-acceptance/     # 提交验收流水线
            └── SKILL.md
```

`<class>` 只有这六个：`feature`、`bug-fix`、`simplification`、`architecture`、`process`、`testing`。

笔记门禁留在 `.agents/notes/scripts/`。脚本假定自己住在这个路径。

已经存在的父目录可以另有一份 `AGENTS.md`。人没有明确要求时，技能不新建目录，也不新建这份文件。

`.agents/skills/retrofit-agent-collab/` 只住在本发布仓，不拷进目标仓。
