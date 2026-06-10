/**
 * FDE for Good — form intake (Google Apps Script).
 *
 * Receives POSTs from the website's "Request help" and "Volunteer" forms and
 * appends each submission as a row in this spreadsheet. The spreadsheet is the
 * database: one tab per form type, headers added automatically.
 *
 * Setup (see forms/SETUP.md for the full walkthrough):
 *   1. Make a Google Sheet.
 *   2. Extensions ▸ Apps Script, paste this file in, Save.
 *   3. Deploy ▸ New deployment ▸ Web app
 *        - Execute as: Me
 *        - Who has access: Anyone
 *   4. Copy the Web app URL (ends in /exec) into SHEET_ENDPOINT in
 *      site/index.html.
 */

// Optional: get an email on every submission. Leave "" to disable.
const NOTIFY_EMAIL = "";

function doPost(e) {
  try {
    const data = (e && e.parameter) ? e.parameter : {};
    const formType = data.form || "unknown";

    const isVolunteer = formType === "volunteer-signup";
    const tabName = isVolunteer ? "Volunteers" : "Help requests";
    const columns = isVolunteer
      ? ["timestamp", "name", "email", "company", "linkedin", "github", "availability", "skills", "interests"]
      : ["timestamp", "name", "role", "email", "phone", "organization", "type", "location", "website", "about", "problem", "goal", "timeline", "affordability", "notes"];

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(tabName);
    if (!sheet) {
      sheet = ss.insertSheet(tabName);
      sheet.appendRow(columns.map(prettyHeader));
      sheet.setFrozenRows(1);
      sheet.getRange(1, 1, 1, columns.length).setFontWeight("bold");
    }

    const now = new Date();
    sheet.appendRow(columns.map((c) => (c === "timestamp" ? now : (data[c] || ""))));

    if (NOTIFY_EMAIL) {
      const subject = isVolunteer
        ? "New volunteer sign-up — FDE for Good"
        : "New help request — FDE for Good";
      const body = columns
        .filter((c) => c !== "timestamp")
        .map((c) => prettyHeader(c) + ": " + (data[c] || "—"))
        .join("\n");
      MailApp.sendEmail(NOTIFY_EMAIL, subject, body);
    }

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// Lets you sanity-check the deployment by opening the URL in a browser.
function doGet() {
  return json({ ok: true, message: "FDE for Good form endpoint is live." });
}

function prettyHeader(key) {
  return ({
    timestamp: "Timestamp",
    name: "Name",
    role: "Role",
    email: "Email",
    phone: "Phone",
    organization: "Organization",
    type: "Type",
    location: "Location",
    website: "Website / social",
    about: "What they do",
    problem: "Problem",
    goal: "Success looks like",
    timeline: "Timeline",
    affordability: "Can pay elsewhere?",
    notes: "Anything else",
    company: "Company / employer",
    linkedin: "LinkedIn",
    github: "GitHub",
    skills: "Skills",
    availability: "Availability",
    interests: "Interests / causes",
  })[key] || key;
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj))
    .setMimeType(ContentService.MimeType.JSON);
}
