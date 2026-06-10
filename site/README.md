# Landing page

A single, dependency-free `index.html` (Tailwind via CDN). No build step.

## Preview locally

Just open the file, or serve it:

```bash
cd site
python3 -m http.server 8000
# open http://localhost:8000
```

## Deploy to GitHub Pages

1. Push the repo to GitHub.
2. Repo **Settings → Pages**.
3. Source: **Deploy from a branch**, branch `main`, folder `/site` (or move `index.html` to the root / a `docs/` folder if you prefer Pages' built-in options).
4. Save — your site goes live at `https://<user>.github.io/fde-for-good/`.

## Connecting the contact forms

The **Request help** and **Volunteer** buttons open on-page forms (no GitHub needed). Submissions are written to a **Google Sheet** (the lightest real database — no server to run) via a Google Apps Script web app. They're wired through a single constant in `index.html`:

```js
const SHEET_ENDPOINT = "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec";
```

Until you replace that placeholder, the forms show a friendly "not connected yet" notice instead of sending. To make them live, follow **[../forms/SETUP.md](../forms/SETUP.md)** (~2 minutes): create a Sheet, paste in [`../forms/Code.gs`](../forms/Code.gs), deploy it as a web app, and paste the resulting URL into `SHEET_ENDPOINT`.

Each submission becomes a row in the Sheet — help requests and volunteer sign-ups on separate tabs, with auto-generated headers. Optional email notifications are a one-line change in `Code.gs`.

## Editing

All GitHub source links are wired from a single `REPO_URL` constant near the top of `index.html` — update it if the repo moves.
