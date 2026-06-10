# Data & privacy

We open-source our **code**. We do **not** open-source charities' data — especially anything about the vulnerable people they serve. This is the line that lets us be open by default without putting anyone at risk.

## Hard rules

- **Never commit real data.** No beneficiary records, donor lists, addresses, health info, or anything personally identifying. Use synthetic / sample data in the repo.
- **Never commit secrets.** API keys, passwords, tokens, `.env` files, private keys — none of it. The [`.gitignore`](../.gitignore) blocks the common cases, but you are the last line of defense.
- **Sample data only in fixtures.** If a project needs example data to run or demo, generate fake data that looks real but isn't.
- **Credentials belong to the org.** Deploys, databases, and accounts are created in the organization's ownership, or handed to them at the end. We don't hold the keys.

## When code can't be fully open

Sometimes the logic itself is sensitive (e.g. it encodes rules about a vulnerable population). If so:

- Keep the open-source code generic and move the sensitive config/data into the org's private environment.
- If a whole project genuinely can't be public, note it in the client README and keep only a description here, with the code in a repo the org controls.

This should be rare. Default to open.

## If you leak something

It happens. Tell a maintainer immediately — don't quietly force-push and hope. We'll rotate the secret, scrub history, and notify the org if their data was involved. Speed matters more than embarrassment.
