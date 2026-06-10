# FDE for Good

> Pro bono forward-deployed engineering for mission-driven organizations and the small local businesses that can't afford an engineer. The work is done by volunteers, for free, and open-sourced for everyone.

**FDE for Good** pairs experienced engineers with organizations that have a real technical problem but no budget and no in-house engineering. A "forward-deployed engineer" (FDE) embeds with them, understands their actual workflow, and ships software that fits — a first website, a booking system, an automation that saves hours a week, a dashboard, a data clean-up — whatever moves them forward.

We help two kinds of organization:

- **Mission-driven organizations** — charities, nonprofits, community groups, mutual aid, social enterprises.
- **Small local businesses** — the family café, the corner shop, the one-person trade. Being for-profit is completely fine; what matters is that they're small, have no engineer, and no money to hire one, yet are the backbone of a neighborhood.

The common thread: **people doing good or genuinely useful work who are locked out of software because they can't afford it.** (See [who we help](docs/who-we-help.md) for how we keep this fair.)

Everything we build lives here in the open, so the next organization with the same problem doesn't start from scratch.

## Our own goal

FDE for Good starts as a volunteer collective. The intent is to **grow into a registered nonprofit / charity in its own right** — so we can take donations, sustain the work, and back our volunteers properly. The roadmap for that is in [docs/becoming-a-nonprofit.md](docs/becoming-a-nonprofit.md), and how we make decisions along the way is in [docs/governance.md](docs/governance.md).

## Principles

- **Free, always.** Volunteers are never paid by the organizations they help. No invoices, no strings.
- **For those who can't otherwise get it.** We help people priced out of software — not those who can comfortably pay for it.
- **Open by default.** Every engagement is open-sourced (MIT) unless there's a genuine reason not to (see [docs/data-and-privacy.md](docs/data-and-privacy.md)).
- **Embedded, not transactional.** We sit with the organization, learn the real problem, and build *with* them.
- **Leave them self-sufficient.** Good documentation and handover matter as much as the code.
- **Reusable wins.** A tool that helps one café or one food bank should help the next one too.

## How it works

1. An organization [submits a request](docs/for-partners.md).
2. We check it's a fit ([who we help](docs/who-we-help.md)) and scope the problem together.
3. One or more volunteer FDEs [pick it up](docs/for-volunteers.md) and embed.
4. The work is built in the open under [`clients/`](clients/).
5. We hand it over with docs, and keep it open source for the next org.

See [docs/how-it-works.md](docs/how-it-works.md) for the full lifecycle.

## Repository structure

```
fde-for-good/
├── clients/                      # all engagements, organized by partner
│   └── <client-name>/
│       ├── README.md             # who they are, contacts, status
│       └── projects/
│           └── <project-name>/
│               └── README.md     # the actual project + its code
├── docs/                         # how-it-works, eligibility, governance, the nonprofit roadmap
├── site/                         # the landing page (static, deployable to GitHub Pages)
└── .github/                      # issue templates, etc.
```

Templates to copy live at [`clients/_template-client/`](clients/_template-client/).

## Get involved

- **You run a mission-driven organization or a small business?** → [docs/for-partners.md](docs/for-partners.md)
- **You're an engineer who wants to help?** → [docs/for-volunteers.md](docs/for-volunteers.md)
- **Curious how we're run / where we're headed?** → [docs/governance.md](docs/governance.md) · [docs/becoming-a-nonprofit.md](docs/becoming-a-nonprofit.md)
- **Want to contribute to this repo itself?** → [CONTRIBUTING.md](CONTRIBUTING.md)

## License

[MIT](LICENSE) — use it, fork it, build on it.
