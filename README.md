# FDE for Good

> Pro bono forward-deployed engineering for charities and mission-driven organizations. The work is done by volunteers, for free, and open-sourced for everyone.

**FDE for Good** pairs experienced engineers with charities and nonprofits that have a real technical problem but no budget to solve it. A "forward-deployed engineer" (FDE) embeds with the organization, understands their actual workflow, and ships software that fits — dashboards, automations, data pipelines, internal tools, websites, whatever moves the mission forward.

Everything we build lives here in the open, so the next charity with the same problem doesn't have to start from scratch.

## Principles

- **Free, always.** Volunteers are never paid by the organizations they help. No invoices, no strings.
- **Open by default.** Every engagement is open-sourced (MIT) unless there's a genuine reason not to (e.g. sensitive beneficiary data — see [docs/data-and-privacy.md](docs/data-and-privacy.md)).
- **Embedded, not transactional.** We sit with the organization, learn the real problem, and build *with* them — not a drive-by hand-off.
- **Leave them self-sufficient.** Good documentation and handover matter as much as the code.
- **Reusable wins.** A tool that helps one food bank should help the next one too.

## How it works

1. A charity or nonprofit [submits a request](docs/for-charities.md).
2. We scope the problem together and write it down as an engagement.
3. One or more volunteer FDEs [pick it up](docs/for-volunteers.md) and embed.
4. The work is built in the open under [`clients/`](clients/).
5. We hand it over with docs, and keep it open source for the next org.

See [docs/how-it-works.md](docs/how-it-works.md) for the full lifecycle.

## Repository structure

```
fde-for-good/
├── clients/                      # all engagements, organized by client
│   └── <client-name>/
│       ├── README.md             # who they are, contacts, status
│       └── projects/
│           └── <project-name>/
│               └── README.md     # the actual project + its code
├── docs/                         # how-it-works, guides for charities & volunteers
├── site/                         # the landing page (static, deployable to GitHub Pages)
└── .github/                      # issue templates, etc.
```

Templates to copy live at [`clients/_template-client/`](clients/_template-client/).

## Get involved

- **You run a charity / nonprofit?** → [docs/for-charities.md](docs/for-charities.md)
- **You're an engineer who wants to help?** → [docs/for-volunteers.md](docs/for-volunteers.md)
- **Want to contribute to this repo itself?** → [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](LICENSE) — use it, fork it, build on it.
