# Contributing

Thanks for wanting to help. There are two kinds of contribution here:

1. **FDE work** — building software for a partner organization. Start with [docs/for-volunteers.md](docs/for-volunteers.md).
2. **The repo itself** — improving docs, the landing page, templates, tooling. That's this file.

## Ground rules

- Be kind. Read the [Code of Conduct](CODE_OF_CONDUCT.md).
- Everything is open source under [MIT](LICENSE). By contributing, you agree your work is released under it.
- Never commit secrets, API keys, or personal data about beneficiaries. See [docs/data-and-privacy.md](docs/data-and-privacy.md).

## Working on an engagement

Each engagement lives under `clients/<client-name>/projects/<project-name>/`.

1. Copy the templates in [`clients/_template-client/`](clients/_template-client/) to a new folder.
2. Fill in the client `README.md` and the project `README.md`.
3. Build the project inside its `projects/<project-name>/` folder — it can hold its own code, package.json, etc., totally self-contained.
4. Keep the project README updated as status changes.

## Pull requests

- Branch off `main`, open a PR.
- Keep PRs focused. One engagement update or one repo improvement per PR is ideal.
- Describe *what* changed and *why* in the PR body.

## Commit messages

Plain and descriptive is fine. Reference the client/project where relevant, e.g. `food-bank-x: add inventory sync script`.
