# 技能跑完之后

下面是目标仓里和 agent 协作有关的形状。原来就有的 `README.md` 会留着；只有目标仓没有 README 时，技能才写入一份待人改的短稿。

```text
your-repo/
├── README.md                      # 给人读。原来就有则不动
├── AGENTS.md                      # agent 入口，链接到目录图
├── CLAUDE.md -> AGENTS.md
├── LESSONS.md                     # 失败草稿。升格条件只写在这个文件里
├── docs/
│   ├── architecture-index.md      # 有什么、哪份文件说了算
│   └── code-standards.md          # 从 LESSONS 升上来的稳定规矩
└── .agents/notes/
    ├── README.md                  # 笔记格式
    ├── AGENTS.md
    ├── scripts/
    │   ├── agent-note-tree.mts
    │   ├── verify-agent-note-format.mts
    │   └── verify-agent-note-classification.mts
    ├── proposed/<class>/
    ├── implemented/
    │   ├── AGENTS.md              # 和 <class>/ 并列，不在 class 里面
    │   └── <class>/
    ├── rejected/<class>/
    └── archived/
        ├── AGENTS.md
        └── <class>/
```

`<class>` 只有这六个：`feature`、`bug-fix`、`simplification`、`architecture`、`process`、`testing`。

已经存在的父目录可以另有一份 `AGENTS.md`。技能默认不新建目录，也不新建这份文件，除非人明确要求。

技能不会把 `.agents/skills/retrofit-agent-collab/` 拷进目标仓。这份技能只住在本发布仓。
