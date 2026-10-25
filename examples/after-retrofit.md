# 技能跑完之后

目标仓有三条流水线，各有一个家。根上的 `AGENTS.md` 只链接过去。原来就有的 `README.md` 会留着；只有目标仓没有任何大小写形式的 `readme.md` 时，技能才写入一份待人改的短稿。

```text
your-repo/
├── README.md                      # 给人读。readme.md 已在则不动
├── AGENTS.md                      # 只放链接
├── CLAUDE.md -> AGENTS.md
├── LESSONS.md                     # 教训流水线。升格细则只在这里
├── docs/
│   ├── architecture-index.md      # 有什么、哪份文件说了算
│   └── code-standards.md          # 从 LESSONS 升上来的稳定规矩
└── .agents/
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

已经存在的父目录可以另有一份 `AGENTS.md`。技能默认不新建目录，也不新建这份文件，除非人明确要求。

技能不会把 `.agents/skills/retrofit-agent-collab/` 拷进目标仓。那份技能只住在本发布仓。
