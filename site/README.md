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

## Editing

All GitHub links are wired from a single `REPO_URL` constant near the top of `index.html` — update it if the repo moves.
