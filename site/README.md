# Landing page

A single, dependency-free `index.html` (Tailwind via CDN). No build step.

## Preview locally

Just open the file, or serve it:

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy

The site is static (one `index.html`, no build), so any static host works.
Hosting is **separate** from the form backend — see "Connecting the contact
forms" below; the site works either way, the forms just need the Sheet wired up.

### Vercel (recommended)

A [`vercel.json`](../vercel.json) at the repo root already points Vercel at the
`site/` folder, so there's nothing to configure.

1. Push to GitHub (done).
2. At [vercel.com/new](https://vercel.com/new), **Import** this repo.
3. Framework preset: **Other**. Leave build/output settings as-is — `vercel.json`
   handles it (no build command, output dir = `site`).
4. **Deploy.** You get a `*.vercel.app` URL instantly; add a custom domain in
   the project settings if you have one.

After this, every `git push` to `main` auto-deploys. (CLI alternative: `npm i -g
vercel` then `vercel` from the repo root.)

### GitHub Pages (free alternative)

Pages can only serve from `/` or `/docs`, not `/site`. Easiest path: move
`index.html` to a `/docs` folder, then **Settings → Pages → Deploy from branch
`main`, folder `/docs`**. Site goes live at `https://<user>.github.io/fde-for-good/`.

## Connecting the contact forms

The **Request help** and **Volunteer** buttons open on-page forms (no GitHub needed). Submissions are written to a **Google Sheet** (the lightest real database — no server to run) via a Google Apps Script web app. They're wired through a single constant in `index.html`:

```js
const SHEET_ENDPOINT = "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec";
```

Until you replace that placeholder, the forms show a friendly "not connected yet" notice instead of sending. To make them live, follow **[../forms/SETUP.md](../forms/SETUP.md)** (~2 minutes): create a Sheet, paste in [`../forms/Code.gs`](../forms/Code.gs), deploy it as a web app, and paste the resulting URL into `SHEET_ENDPOINT`.

Each submission becomes a row in the Sheet — help requests and volunteer sign-ups on separate tabs, with auto-generated headers. Optional email notifications are a one-line change in `Code.gs`.

## Editing

All GitHub source links are wired from a single `REPO_URL` constant near the top of `index.html` — update it if the repo moves.
