# Form setup — Google Sheet as the database

The website's **Request help** and **Volunteer** forms send each submission to a
Google Sheet via a Google Apps Script web app. The Sheet *is* the database:
structured rows, one tab per form type, that you can sort, filter, export to CSV,
or share. Free, no server to run.

This takes about 2 minutes. You only do it once, then paste one URL back into the site.

## Steps

1. **Create the Sheet.** Go to [sheets.new](https://sheets.new) and name it
   something like *FDE for Good — Submissions*. (The tabs for "Help requests"
   and "Volunteers" get created automatically on the first submission — you don't
   need to add columns yourself.)

2. **Open the script editor.** In the Sheet: **Extensions ▸ Apps Script**.

3. **Paste the code.** Delete whatever's in `Code.gs`, then paste the full
   contents of [`forms/Code.gs`](Code.gs) from this repo. Click **Save** (💾).

   - *(Optional)* To get an email on every submission, set
     `const NOTIFY_EMAIL = "you@example.com";` near the top.

4. **Deploy as a web app.** Click **Deploy ▸ New deployment**.
   - Click the gear ⚙ next to "Select type" → **Web app**.
   - **Execute as:** Me
   - **Who has access:** **Anyone**  ← important, so the public form can post
   - Click **Deploy**.

5. **Authorize.** Google will ask you to authorize the script (it's writing to
   your own Sheet and, if enabled, sending email). Approve it. If you see an
   "unverified app" screen, choose **Advanced ▸ Go to … (unsafe)** — it's your
   own script, that's expected.

6. **Copy the Web app URL.** It looks like:
   `https://script.google.com/macros/s/AKfyc.../exec`
   You can paste it in a browser to check — it should show
   `{"ok":true,"message":"FDE for Good form endpoint is live."}`.

7. **Wire it into the site.** In [`site/index.html`](../site/index.html), find:

   ```js
   const SHEET_ENDPOINT = "https://script.google.com/macros/s/REPLACE_WITH_YOUR_DEPLOYMENT_ID/exec";
   ```

   Replace the whole URL with the one you copied. Commit and redeploy the site.

That's it. Submit a test through the site and watch the row appear in the Sheet.

## Updating the script later

If you change `Code.gs` (e.g. to turn on email), in Apps Script do
**Deploy ▸ Manage deployments ▸ ✏️ Edit ▸ Version: New version ▸ Deploy**.
The URL stays the same, so you don't need to touch the site again.

## Notes

- **Columns** are added automatically with friendly headers. Help requests and
  volunteer sign-ups go to separate tabs.
- **Privacy:** the Sheet is private to your Google account unless you share it.
  Submitters' data never appears in the public repo — only the code does.
- **Scale:** a Sheet handles tens of thousands of rows comfortably — far more
  than a volunteer org's intake. If you ever outgrow it, the front end just
  posts form fields to a URL, so swapping in a different backend is a one-line
  change to `SHEET_ENDPOINT`.
- **Switching providers:** prefer Formspree, Tally, or a real DB later? The form
  sends standard fields (`form`, plus the visible field names) as a normal POST,
  so any endpoint that accepts that will work.
