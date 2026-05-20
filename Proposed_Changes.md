# Proposed Changes — NYT OSINT Application

Reviewer notes from a four-lens analysis (neutral reader, NYT recruiter, head of International Investigations, ATS keyword scan). Items below are recommendations for you to apply or reject manually.

---

## Already applied

- **CV.md** — "seven years inside Al Jazeera's Investigative Unit" → "six years" (Profile).
- **CV.md** — Investigative Unit start date "Oct 2019" → "Dec 2019".
- **CV_Print_Ready.html** — matching "seven years" → "six years" update.
- **index.html** — matching "seven years" → "six years" update.
- **build_docs.js** — Profile string and role header updated; DOCX/PDF regenerated.
- **Investigative_Memo.md** — Section III sketch #4 swapped from *Disinformation Factories* to *The Recycled Weapons Loop*. Surprises the reader, hits a job-ad bonus skill (large unstructured data analysis), introduces a serial-number "digital smoking gun," and connects to Ukraine implicitly through the donor-knowledge frame.

---

## High-leverage open recommendations

### 1. Close the ATS keyword gap (CV)

The job ad explicitly lists the following bonus skills. The literal words below are missing from `CV.md` and the rendered CV. Greenhouse parses keywords; an internal hiring panel may sort by them.

- **Git** — missing. The ad's last bonus bullet says "Experience in a production environment (deploying code, using Git and Bash)."
- **Bash** — missing.
- **GIS** — missing. The ad lists "GIS and cartography."
- **Image/video forensics** — your CV says "image and video verification." The ad's phrase is "Advanced image/video forensics." Use the ad's phrasing.

Suggested patch to the OSINT Toolbox section (under *Custom Tooling & Engineering*):

> Build bespoke Python scrapers, monitors, and structured-data pipelines using AI-assisted coding (Claude/Gemini), deployed with **Git and Bash** in production. Comfortable with **GIS and cartography** workflows for satellite and geospatial analysis.

And under *Visual investigations*, change:

> "image and video verification" → "image and video verification; advanced image/video forensics."

### 2. Fix one typo in the memo

`Investigative_Memo.md`, Section I, second paragraph:

> "I have spent six years building a routine working method that **stiches** together..." → **stitches**

### 3. Reconsider the "Producer" title framing

Eight-plus years of "Producer" at one organisation reads as static on a CV scan even though the work is clearly senior-reporter work. Options:

- If the network has ever used "Senior Producer" for your role, use it.
- Otherwise, consider an explanatory parenthetical: "Producer (reporting and writing lead)" — once, in the most recent role header.

This is the single biggest risk on a fast recruiter scan.

### 4. Add a LinkedIn URL to the CV contact line

Greenhouse has a separate field but parsers also look in the document. If you have a maintained LinkedIn profile, add it under the contact line in `CV.md`.

### 5. Anchor at least one memo sketch with a named actor

Each of the four sketches stays at the level of method. An editor reads them and thinks, "good toolkit — what would you actually publish?" Adding a single named actor or location per sketch changes the read:

- *Shadow Fleet*: name one specific Greek shipowner or one specific Marshall Islands shell.
- *Gaza*: name one specific strike location whose record you'd reopen.
- *China / Agaléga method*: name one specific island or port project.
- *Weapons Loop*: name one specific AMISOM contingent or one named UN Panel finding.

You don't have to commit — these are sketches — but a single proper noun in each makes the difference between "method" and "pitch."

### 6. Tighten memo Section II

Section II currently contains "A major differentiator I bring..." — LinkedIn voice in a document that is otherwise sharp. Consider rewriting in the same direct register as Section I. Optional draft:

> A second thing I bring is the ability to build **custom editorial tooling**. Using AI-assisted coding (Claude, Gemini), I write bespoke scrapers and data monitors that let one reporter listen to the world at the scale of a small engineering team — ships, aircraft, corporate registries, social networks — without ever putting sensitive source data into public models.

### 7. Replace Section IV's generic claim with one concrete anecdote

> "I see my role as a bridge between the raw digital evidence and the narrative desk."

True of every OSINT hire. One sentence about how the Agaléga interactive's graphics designer forced you to restructure the satellite time series — or any real collaboration moment — would do more work in less space.

### 8. Decide whether Ukraine should be explicit

The job ad names "Iran, Gaza, Ukraine, China, etc." The current memo addresses Russia through the Shadow Fleet sketch but never names Ukraine. Two choices:

- **Leave it.** Shadow Fleet is the Ukraine story (sanctions evasion is the war's economic theatre). Editor will see it.
- **Make it explicit.** Add a single sentence in the Shadow Fleet sketch's opening: "...the Western and Gulf infrastructure keeping Russia's oil — and therefore its war on Ukraine — flowing remains under-reported."

The second option is one word's worth of risk for a clearer signal.

---

## Lower-priority notes

- **Cover letter postscript** lists work samples. Make sure those URLs are also entered in the Greenhouse "Portfolio, Video, or Website Link" field on the application form.
- **Preferred bureau** — the job lists seven cities. Consider naming a preferred one (or "open to any") in the cover letter or the optional questions on the form.
- **The closing line of the memo** — "I'm ready to start hunting" — is a deliberate callback to the ad's "This is a job for a hunter." Half of readers will love it; half will find it slightly performative. Coin-flip. Your call.
- **`.gitignore`** is currently very short. If you want, expand to exclude `node_modules/`, `.DS_Store`, `lu*.tmp` artefacts, and any local environment files before pushing.

---

## Where this document lives

`Proposed_Changes.md` in the project root. Once you've finished editing, delete or archive this file before publishing the repo if you intend to share the repo publicly — it surfaces the editorial scaffolding of the application.
