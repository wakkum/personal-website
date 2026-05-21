// Build optimized CV and cover letter for Yarno Ritzen — NYT OSINT Reporter application
const fs = require("fs");
const {
  Document, Packer, Paragraph, TextRun, AlignmentType, LevelFormat,
  HeadingLevel, BorderStyle, PageOrientation, TabStopType, TabStopPosition,
  ExternalHyperlink
} = require("docx");

// ---------------------------------------------------------------------------
// Shared helpers
// ---------------------------------------------------------------------------
const FONT = "Calibri";

const baseStyles = {
  default: {
    document: { run: { font: FONT, size: 22 } } // 11pt
  },
  paragraphStyles: [
    { id: "Heading1", name: "Heading 1", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { size: 36, bold: true, font: FONT, color: "111111" },
      paragraph: { spacing: { before: 0, after: 60 }, outlineLevel: 0 } },
    { id: "Heading2", name: "Heading 2", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { size: 22, bold: true, font: FONT, color: "333333", allCaps: true },
      paragraph: {
        spacing: { before: 220, after: 80 }, outlineLevel: 1,
        border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "888888", space: 2 } }
      } },
    { id: "Heading3", name: "Heading 3", basedOn: "Normal", next: "Normal", quickFormat: true,
      run: { size: 22, bold: true, font: FONT, color: "111111" },
      paragraph: { spacing: { before: 140, after: 40 }, outlineLevel: 2 } }
  ]
};

const baseNumbering = {
  config: [{
    reference: "cv-bullets",
    levels: [{
      level: 0,
      format: LevelFormat.BULLET,
      text: "•",
      alignment: AlignmentType.LEFT,
      style: { paragraph: { indent: { left: 360, hanging: 240 } } }
    }]
  }]
};

const bullet = (children) =>
  new Paragraph({
    numbering: { reference: "cv-bullets", level: 0 },
    spacing: { after: 60 },
    children
  });

const text = (s, opts = {}) => new TextRun({ text: s, ...opts });

const para = (runs, opts = {}) =>
  new Paragraph({ spacing: { after: 80 }, children: runs, ...opts });

const heading2 = (s) =>
  new Paragraph({ heading: HeadingLevel.HEADING_2, children: [text(s)] });

// Two-line role header: "Title — Org    Location | Dates"
const roleHeader = (left, right) => new Paragraph({
  spacing: { before: 80, after: 20 },
  tabStops: [{ type: TabStopType.RIGHT, position: 9026 }], // A4 content width
  children: [
    text(left, { bold: true }),
    new TextRun({ text: "\t" + right, italics: true, color: "555555" })
  ]
});

// ---------------------------------------------------------------------------
// CV CONTENT
// ---------------------------------------------------------------------------
const cvChildren = [
  // Name + contact block
  new Paragraph({
    spacing: { after: 40 },
    children: [new TextRun({ text: "Yarno Ritzen", bold: true, size: 44, font: FONT })]
  }),
  new Paragraph({
    spacing: { after: 40 },
    children: [new TextRun({
      text: "Investigative Journalist · OSINT & Visual Investigations",
      italics: true, color: "555555", size: 24
    })]
  }),
  new Paragraph({
    spacing: { after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "888888", space: 4 } },
    children: [
      text("info@yarnoritzen.com · yarnoritzen.com · +974 7764 1518 · Currently Doha, Qatar · Dutch national (EU)"),
    ]
  }),

  // Summary
  heading2("Profile"),
  para([
    text(
      "Award-winning investigative journalist with eleven years at Al Jazeera — six inside the Investigative " +
      "Unit. IRE-winning, BAFTA-nominated work combining satellite imagery analysis, geolocation and " +
      "chronolocation, ship and aircraft tracking, and confidential datasets to produce accountability " +
      "journalism across Asia, Africa, Europe and the Middle East. Solo on self-conceived investigations " +
      "and collaborator on team projects, delivering across text, long-form video and interactive formats."
    )
  ]),

  // Selected investigations
  heading2("Selected Investigations"),

  new Paragraph({
    spacing: { before: 60, after: 40 },
    children: [text("Africa’s Ghost Reporters — Al Jazeera Investigations (solo byline), March 2025", { bold: true })]
  }),
  para([text(
    "Exposed a Russia-linked influence campaign using 15+ fictitious journalists and 200+ paid-for " +
    "articles seeded across Francophone Africa. Identified the deceased Central African teacher whose " +
    "photo was stolen for the lead persona, surfaced Cyrillic strings and a Russian phone number inside " +
    "Word-document metadata, and reverse-traced the number to a former Internet Research Agency operator " +
    "with Wagner Group ties. Published as long-form text and a 25-minute documentary."
  )]),

  new Paragraph({
    spacing: { before: 60, after: 40 },
    children: [text("Somalia E-Visa Security Exposure — Al Jazeera Investigations (solo byline), December 2025", { bold: true })]
  }),
  para([text(
    "Probed Somalia’s new electronic-visa portal and found a security flaw that left passport details of " +
    "thousands of applicants downloadable to anyone who knew where to look. Verified the exposed data and " +
    "responsibly disclosed before publication."
  )]),

  new Paragraph({
    spacing: { before: 60, after: 40 },
    children: [text("The Island of Secrets — IRE Award (Video, Division 1), 2021", { bold: true })]
  }),
  para([text(
    "Self-conceived visual investigation revealing India’s covert military build-out on the Mauritian " +
    "atoll of Agaléga. Combined commercial satellite imagery across multi-year time series, vessel-tracking " +
    "data and rare on-island sourcing to reconstruct the project and its strategic intent. Published as " +
    "long-form video and written feature."
  )]),

  new Paragraph({
    spacing: { before: 60, after: 40 },
    children: [text("Facebook Pages of Hate — Lovie Awards (Gold, News & Politics; Bronze, Best Use of Stories), 2020", { bold: true })]
  }),
  para([text(
    "Identified and documented 120+ neo-Nazi and far-right music pages on Facebook with 800,000+ combined " +
    "likes, built as a structured inventory of pages and networks across the platform."
  )]),

  new Paragraph({
    spacing: { before: 60, after: 40 },
    children: [text("Al Jazeera Investigative Unit — collaborative contributions", { bold: true })]
  }),
  bullet([text("All the Prime Minister’s Men (Amnesty Media Award, 2022) — OSINT on the financial and corporate trails of a sitting head of government; my solo follow-up surfaced UK spy-training trips by a paramilitary unit later sanctioned for human-rights abuses, and the named army chief was sanctioned by the US Treasury in 2024.")]),
  bullet([text("The Gold Mafia (2023) — multi-part series exposing Zimbabwean state-linked gold smuggling, money laundering and sanctions evasion; triggered government inquiries.")]),
  bullet([text("The Men Who Sell Football (RTS Award; BAFTA nomination, 2022) — entity tracing across intermediaries and front companies.")]),
  bullet([text("The Cyprus Papers (BAFTA nomination; Webby Awards, 2021) — analysis of leaked records to identify high-risk individuals granted EU passports.")]),
  bullet([text("Diplomats for Sale & Anatomy of a Bribe (NY TV & Film Awards, 2020) — undercover and OSINT components on diplomatic-passport schemes and bribery networks.")]),

  // Experience
  heading2("Experience"),

  roleHeader("Producer — Al Jazeera Investigative Unit", "Doha, Qatar · Dec 2019 – Present"),
  bullet([text("Conceive, report and write OSINT-led investigations end-to-end — solo bylines and team contributions — using satellite imagery analysis, geolocation and chronolocation of photos and video, vessel and aircraft tracking, and structured analysis of large, unstructured datasets.")]),
  bullet([text("Cross-reference leaked and acquired confidential datasets — building entity/link networks across people, companies, properties and movements to surface hidden relationships.")]),
  bullet([text("Partner with investigative reporters, correspondents, video producers and graphics colleagues to deliver exclusives across text, long-form video and digital formats; also write breaking-news and impact follow-ups between major projects.")]),
  bullet([text("Cultivate and protect high-value human sources; operate the unit’s secure intake (SecureDrop) and encrypted communications; coordinate digital-security posture with IT.")]),
  bullet([text("Own the unit’s written output for Aljazeera.com and Ajiunit.com — from breaking-news reactions to long-form features and documentary scripts.")]),
  bullet([text("Build bespoke editorial tools — scrapers, monitors and structured data pipelines — using AI-assisted coding workflows (Claude Code, Gemini CLI) to scale repeatable OSINT tasks and surface signal from noisy public-web sources.")]),

  roleHeader("Producer — Al Jazeera Digital News Desk", "Doha, Qatar · Jul 2017 – Sep 2019"),
  bullet([text("Reported and wrote breaking news, features, explainers and background pieces in a fast-paced, global newsroom.")]),
  bullet([text("Identified original story angles and reworked agency copy to fit Al Jazeera’s editorial voice.")]),

  roleHeader("Producer — Al Jazeera Interactive Department", "Doha, Qatar · Aug 2014 – Jun 2017"),
  bullet([text("Built data-driven infographics and interactive web productions embedded in long-form journalism; explored emerging visual storytelling — 360-degree video, VR, gamified explainers — with multiple Online Media and Webby recognitions.")]),

  // Skills
  heading2("OSINT Toolbox"),
  bullet([new TextRun({ text: "Visual investigations: ", bold: true }), text("satellite imagery (commercial providers; change detection across time series), geolocation and chronolocation of photos and video, image and video verification, cartographic visualisation for investigative stories.")]),
  bullet([new TextRun({ text: "Movement tracking: ", bold: true }), text("maritime (AIS, port records) and aviation (ADS-B) tracking; cross-referencing with corporate and shipping records.")]),
  bullet([new TextRun({ text: "Data investigations: ", bold: true }), text("link analysis and entity resolution across large, unstructured and confidential datasets; cross-jurisdictional asset and corporate tracing.")]),
  bullet([new TextRun({ text: "Source protection & digital security: ", bold: true }), text("SecureDrop, end-to-end encryption, OPSEC for sources and reporters.")]),
  bullet([new TextRun({ text: "Custom tooling & AI: ", bold: true }), text("build editorial scrapers, monitors and data pipelines using AI-assisted coding (Claude Code, Gemini CLI); production deployment with Git and Bash, plus GIS and cartographic workflows for geospatial analysis.")]),

  // Education
  heading2("Education"),
  para([
    new TextRun({ text: "B.A. Journalism", bold: true }),
    text(" — Utrecht University of Applied Sciences, Netherlands.")
  ]),

  // Languages
  heading2("Languages"),
  para([
    new TextRun({ text: "Dutch", bold: true }), text(" (fluent) · "),
    new TextRun({ text: "English", bold: true }), text(" (fluent) · "),
    new TextRun({ text: "German", bold: true }), text(" (reading proficiency) · "),
    new TextRun({ text: "French", bold: true }), text(" (reading proficiency)")
  ]),

  // References
  heading2("References"),
  para([text("Available on request — strong references from former managers at Al Jazeera and Amnesty International UK.")]),
];

const cvDoc = new Document({
  creator: "Yarno Ritzen",
  title: "Yarno Ritzen — CV",
  styles: baseStyles,
  numbering: baseNumbering,
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 } // 0.75"
      }
    },
    children: cvChildren
  }]
});

Packer.toBuffer(cvDoc).then(buf => {
  fs.writeFileSync("Yarno_Ritzen_CV_NYT_OSINT.docx", buf);
  console.log("CV written.");
});

// ---------------------------------------------------------------------------
// COVER LETTER / MEMO
// ---------------------------------------------------------------------------
const today = new Date().toLocaleDateString("en-GB", { day: "numeric", month: "long", year: "numeric" });

const clChildren = [
  new Paragraph({
    spacing: { after: 0 },
    children: [new TextRun({ text: "Yarno Ritzen", bold: true, size: 32, font: FONT })]
  }),
  new Paragraph({
    spacing: { after: 200 },
    border: { bottom: { style: BorderStyle.SINGLE, size: 6, color: "888888", space: 4 } },
    children: [new TextRun({
      text: "info@yarnoritzen.com · yarnoritzen.com · +974 7764 1518 · Doha, Qatar (Dutch national, open to relocating to any European bureau)",
      color: "555555", size: 20
    })]
  }),

  para([text(today)]),
  para([text("International Investigations Editor")]),
  para([text("The New York Times")]),

  para([text("Dear Editor,")]),

  para([
    text("I am applying for the Open Source Intelligence Reporter role on the International Investigations team. " +
      "The job description reads like a list of the things I have spent the last six years doing inside Al Jazeera’s " +
      "Investigative Unit — satellite imagery analysis, geolocation, vessel and aircraft tracking, large confidential " +
      "datasets, all stitched together with traditional reporting. I would like to bring that toolkit to the Times.")
  ]),

  para([
    text("Two recent pieces of mine show the range. "),
    new TextRun({ text: "Africa’s Ghost Reporters", italics: true }),
    text(" (March 2025) traced a Russia-linked influence campaign that planted hundreds of paid-for articles " +
      "across Francophone Africa under the bylines of more than 15 fictitious journalists. I identified the dead " +
      "Central African teacher whose photo had been stolen to build the lead persona, pulled Cyrillic strings and " +
      "a Russian phone number out of Word-document metadata, and reverse-traced the number to a former Internet " +
      "Research Agency operator with Wagner ties. "),
    new TextRun({ text: "The Island of Secrets", italics: true }),
    text(" (IRE Award, 2021) reconstructed India’s covert military build-out on the tiny Mauritian atoll of Agaléga " +
      "from commercial satellite imagery, shipping data and on-island sourcing — a story a major government had " +
      "wanted to keep buried. I have applied similar techniques inside the I-Unit on "),
    new TextRun({ text: "All the Prime Minister’s Men", italics: true }),
    text(", "),
    new TextRun({ text: "The Cyprus Papers", italics: true }),
    text(", "),
    new TextRun({ text: "The Men Who Sell Football", italics: true }),
    text(" and "),
    new TextRun({ text: "Diplomats for Sale", italics: true }),
    text(".")
  ]),

  para([text("Below are three quick sketches of the kind of story I would chase from day one. They are angles, not pitches — meant to give you a sense of what I gravitate toward and how I would approach it.")]),

  heading2("Three sketches"),

  new Paragraph({
    spacing: { before: 100, after: 40 },
    children: [text("1. The Russian shadow fleet, mapped end-to-end", { bold: true })]
  }),
  para([text(
    "Iran and Russia keep oil flowing through tankers that go dark, switch flags and meet in international waters. " +
    "I would build a continuously updated dataset of AIS gaps, paired with satellite tasking around known ship-to-ship transfer zones " +
    "(the Laconian Gulf, the Strait of Hormuz, the South China Sea), and connect the dots to the EU and Gulf ports quietly hosting " +
    "the support infrastructure — bunkering services, P&I cover, beneficial owners hidden behind one-ship companies in Marshall Islands " +
    "or Seychelles. This is the Agaléga methodology scaled up — and the Ghost Reporters work taught me how to follow Russian networks across the messier digital surface that always accompanies them."
  )]),

  new Paragraph({
    spacing: { before: 100, after: 40 },
    children: [text("2. Gaza, after the cameras leave", { bold: true })]
  }),
  para([text(
    "Once active fighting recedes, the satellite record becomes the only honest witness to what was destroyed, what was rebuilt, " +
    "and what was never rebuilt. I would systematically compare pre-war, wartime and post-war imagery — schools, hospitals, water " +
    "infrastructure, press buildings — and pair that with chronolocated open-source footage to test the official accounts of " +
    "specific strikes. Quiet, methodical, accountability-first reporting that does not depend on access."
  )]),

  new Paragraph({
    spacing: { before: 100, after: 40 },
    children: [text("3. China’s next Agaléga", { bold: true })]
  }),
  para([text(
    "India is not the only state quietly turning small islands into forward bases. China’s footprint in Djibouti, the Solomons and " +
    "across the Indian Ocean has been touched on but never fully reconstructed in a way Western readers can see. I would apply the " +
    "Agaléga method — dual-use civilian projects that are obviously not civilian when you overlay the satellite, shipping and " +
    "personnel-movement data — to one or two locations where the public record is thinnest."
  )]),

  heading2("What I would bring"),
  bullet([text("All five minimum qualifications — OSINT, geolocation, chronolocation, satellite imagery, strong communication and a collaborative spirit — with award-recognised work behind each.")]),
  bullet([text("Maritime and aviation traffic analysis as a routine working method, not an occasional flourish.")]),
  bullet([text("Comfort with large, messy, leaked datasets, and with the source-protection discipline that comes with handling them.")]),
  bullet([text("Visual-investigation instincts honed in a unit that ships in text, long-form video and interactive formats.")]),
  bullet([text("Custom tooling. I build editorial scrapers and monitors using AI-assisted coding workflows (Claude Code, Gemini CLI), which lets a one-person investigation run at the scale of a small engineering team — useful for the kind of always-on tracking the shadow-fleet sketch above would need.")]),
  bullet([text("EU citizenship and a willingness to relocate to whichever European bureau makes most sense for the team.")]),

  para([text(
    "I would be genuinely glad to talk further, and to surprise you with what I would chase first. Thank you for considering my application."
  )]),

  para([text("Sincerely,")]),
  para([text("Yarno Ritzen")]),
];

const clDoc = new Document({
  creator: "Yarno Ritzen",
  title: "Yarno Ritzen — Cover Letter / Memo",
  styles: baseStyles,
  numbering: baseNumbering,
  sections: [{
    properties: {
      page: {
        size: { width: 11906, height: 16838 }, // A4
        margin: { top: 1080, right: 1080, bottom: 1080, left: 1080 }
      }
    },
    children: clChildren
  }]
});

Packer.toBuffer(clDoc).then(buf => {
  fs.writeFileSync("Yarno_Ritzen_CoverLetter_NYT_OSINT.docx", buf);
  console.log("Cover letter written.");
});
