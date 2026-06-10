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

The **Request help** and **Volunteer** buttons open on-page forms (no GitHub needed). Submissions are sent to a form service via a single constant in `index.html`:

```js
const FORMSPREE_ENDPOINT = "https://formspree.io/f/REPLACE_WITH_YOUR_FORM_ID";
```

Until you replace that placeholder, the forms show a friendly "not connected yet" notice instead of sending. To make them live:

1. Create a free form at [formspree.io](https://formspree.io) (or any service that accepts a `POST` of form fields and returns JSON).
2. Copy its endpoint (looks like `https://formspree.io/f/abcdwxyz`).
3. Paste it into `FORMSPREE_ENDPOINT` and redeploy.

Submissions then land in your Formspree inbox/email. The `form` hidden field tells you whether each one is a `help-request` or a `volunteer-signup`.

## Editing

All GitHub source links are wired from a single `REPO_URL` constant near the top of `index.html` — update it if the repo moves.
