# Interview prep — NYT Open Source Intelligence Reporter

Scan this before each round. Use the *say this* lines as starting points, not scripts.

---

## 1. The 30-second cold open

When they say *"tell me about yourself"*:

> "I'm an investigative journalist at Al Jazeera's Investigative Unit. I run OSINT-led visual investigations — satellite imagery, vessel and aircraft tracking, document metadata, link analysis across leaked datasets — and I publish in long-form text and documentary video. My best-known piece is *Island of Secrets* on India's covert base on Agaléga, which won an IRE Award. My most recent solo work — *Africa's Ghost Reporters* — traced a Russia-linked influence campaign across Francophone Africa through reverse image search, Cyrillic metadata and phone-number tracing. I'm Dutch, currently based in Doha, and ready to relocate to whichever European bureau makes sense for the team."

Why this works: opens with role + toolkit, anchors to one award piece and one recent piece, closes with logistics. Under 45 seconds.

---

## 2. Story anchors — have these ready

For each story, know: **how it started**, **the single hardest verification step**, **the moment you knew it was real**, **what it changed**.

### Africa's Ghost Reporters (Mar 2025) — solo

- **How it started:** noticed odd patterns in pro-Russian articles popping up in multiple West African outlets under unfamiliar bylines.
- **The reverse-image find:** profile photo of "Gregoire Cyrille Dongobada" was a flipped image of Jean-Claude Sendeoli, a Central African teacher who died in September 2020 — pulled from a 2017 photo on Sendeoli's Facebook. Funeral footage gave certainty.
- **The metadata pivot:** Cyrillic strings inside Word documents passed via WhatsApp; one document had a 10-digit number starting with country code 7 (Russia). Reverse-phone lookup → Seth Boampong Wiredu, a Ghanaian who had moved to Russia in 2008, naturalised in 2019, and worked at the Internet Research Agency. Already CNN-named for the 2020 US election interference. Appeared in a Wagner-funded Russian film.
- **Total scope:** 15+ fictitious writers, 200+ paid-for articles, 9+ African countries.
- **What it changed:** documented Russian information operations on the African continent at a methodological depth the academic literature hadn't published.

### The Island of Secrets (2021) — IRE Award

- **How it started:** noticed unusual shipping movements toward a Mauritian atoll. Pulled satellite imagery to verify what was being built.
- **The verification:** multi-year satellite time series showing runway extension, port construction, helicopter pads. On-island footage and sourcing to confirm Indian military presence rather than declared civilian works.
- **The why it matters:** India's strategic positioning in the Indian Ocean. A government had specifically wanted this story buried.

### Somalia E-Visa Security Exposure (Dec 2025) — solo

- **How it started:** routine probing of a newly launched government e-visa portal.
- **The find:** structural weakness in the portal that left passport details of thousands of applicants downloadable to anyone who knew where to look.
- **Verification + disclosure:** confirmed the scope of exposed data, responsibly disclosed before publication.
- **The lesson:** "I look at the structural seams of government digital infrastructure the same way I look at satellite imagery — for the things that aren't supposed to be visible."

### Bangladesh RAB: Training & Surveillance (Dec 2022) — co-byline

- **How it started:** documents and intelligence obtained on RAB members' international travel post US Magnitsky sanctions in 2021.
- **The hardest part:** verifying the documents, mapping the 25+ trips to Europe since 2017, and getting government responses from UK, Netherlands and Poland.
- **The scope:** intelligence training (Poland, ESA), mass-surveillance equipment training (UK, IMSI catcher), police dogs (Netherlands, Police Dogs Centre).
- **Co-byline with** Zulkarnain Saer Khan and Kevin Hirten. **Note:** Zulkarnain's brother was later beaten with iron rods in Bangladesh in retaliation — be ready for this if asked about source protection consequences.

### SecureDrop project lead (independent of any single story)

- **What you did:** pitched the idea internally at Al Jazeera, worked with the Freedom of the Press Foundation, established a secure intake channel for the entire network.
- **Why it matters:** signals editorial-leadership initiative beyond reporter scope, and demonstrates that source protection is something you've operationalised, not just used.

---

## 3. Expected questions — talking points

### *"Walk us through your toolkit"*

- Satellite imagery (Planet, Maxar archives) for change detection across time series.
- Geolocation / chronolocation of photos and video.
- AIS for ships, ADS-B for aircraft, cross-referenced with corporate and shipping registries.
- Link analysis across leaked datasets (Cyprus Papers, PM's Men, Gold Mafia).
- Reverse image search, metadata forensics (Word, PDF, EXIF), phone-number attribution.
- Custom Python scrapers and monitors — built with AI-assisted workflows (Claude Code, Gemini CLI), version-controlled with Git, deployed and run on a self-hosted homelab behind Cloudflare zero-trust.
- Source protection: SecureDrop, end-to-end encryption, OPSEC discipline that extends to my own tooling.

### *"How do you collaborate?"*

- Solo on self-conceived pieces. Inside a 5–10 person team on AJI's longer investigations.
- Comfortable handing off threads to bureau reporters and absorbing returns.
- Run the unit's written output for the AJ websites — both breaking-news reactions and long features. Used to working at multiple speeds in parallel.

### *"How do you handle a story that doesn't break the way you expected?"*

- Concrete example: be ready to describe a near-miss or a story that needed re-scoping. (Pick one. Don't fake.)
- Frame: "The thing I trust about OSINT is that the evidence either holds or it doesn't. If it doesn't, I'd rather drop the angle than soften the standard."

### *"What's your relationship with AI in journalism?"*

- AI-assisted coding for tools, not for reporting or writing.
- Skeptical of LLM-generated content for verification — happy to discuss the operational risks of model hallucination in investigative contexts.
- The Ghost Reporters investigation included a quote from a disinformation researcher noting how surprising it was that the operators used a dead person's identity rather than AI-generated faces. That's the relevant nuance.

### *"What kind of stories are you drawn to?"*

- Three sketches from the memo: Russian shadow-fleet tanker network; Gaza satellite-record reporting; China's next Agaléga-style forward base.
- Add a fourth on the day if you have one fresh. Editors notice when a candidate has one they didn't put in the memo.

---

## 4. The hard questions

### *"Why leave Al Jazeera after eleven years?"*

- Honest answer first: trajectory and reach. AJI gave you the foundation; NYT International Investigations is where the toolkit can apply at greater scale to stories Western readers most need accountability on.
- Avoid: anything critical of AJ. Lead with what NYT offers, not what AJ doesn't.
- Frame: *"AJ built me as an OSINT journalist. The Times is the only place this skill set lands with the audience and the editorial weight to match what's now possible technically."*

### *"How would you handle editorial-standards differences between AJ and NYT, particularly on Israel/Gaza coverage?"*

- This will come up. Don't pretend it won't.
- Frame: *"My method is the same regardless of outlet — satellite imagery, geolocation, document forensics either confirm a fact or they don't. I'd defer to NYT's standards on framing, attribution and language, and I'd expect every claim to clear NYT's verification bar before publication. That's been my discipline at AJ as well — the difference is in editorial choices about which stories to chase, not in how to verify them."*
- Have one specific example ready of a story where you applied strict verification standards even when the political angle was contested.

### *"You're a 'Producer'. Are you a reporter or a producer?"*

- Frame: *"My title is Producer because that's the standard contract grade for non-on-camera lead investigators at AJI. The substantive role is reporter: I conceive stories, do the reporting, write them, and own the bylines. Ghost Reporters and Somalia are sole-byline pieces; the RAB pieces are co-bylined."*
- Anchor to specific solo bylines.

### *"Where were you between 2022 and 2025? Light award activity in that window."*

- Honest framing: Gold Mafia (2023), the RAB UK/EU follow-ups, the 2024 US Treasury sanctions impact story on the named PM's Men subject. Plus 2025 Israel-supply-chain reporting (Maersk, KLP, F-35) that doesn't appear on the CV.
- Frame: *"That's the period I spent on team-led investigations and impact-tracking pieces — Gold Mafia was a four-part series, the RAB follow-ups landed in late 2022, and I was the lead on tracking the Treasury sanctions when they hit in 2024. The 2025 work picks back up to solo bylines."*

### *"Why aren't you active on X for OSINT?"*

- Frame: *"I read it daily, I just don't post much. For OSINT work the consumer-side signal matters more than the broadcast side, and I try to keep my own digital surface small for source-protection reasons."*
- Don't apologise for it. It's a defensible posture for an OSINT journalist.

### *"You don't have GIS experience. The role lists it."*

- Frame: *"Correct — no QGIS or ArcGIS, that's a real gap. I do cartographic visualisation for visual investigations, but not formal GIS workflows. I'd pick it up quickly; I learn tools fast when a story needs them. The toolkit I do have — satellite imagery, geolocation, link analysis — covers the spatial intuition GIS formalises."*
- Don't oversell. Acknowledge cleanly and move on.

### *"Tell us about a time a source was put at risk."*

- The Zulkarnain Saer Khan brother attack (March 2023) is the obvious anchor — be careful and accurate. Don't claim more involvement in source-protection logistics than you had. Frame: *"The closest I've seen is what happened to Zulkarnain Saer Khan's brother after the PM's Men investigation in Bangladesh. It's part of why I pitched and built SecureDrop at AJ — to give sources a verified safe channel rather than relying on whatever they happened to know to use."*

---

## 5. Questions to ask them

A small selection — pick 2-3 based on round.

### Editor round
- *"How does the OSINT team sit relative to the bureau reporters? When does the OSINT team lead a story versus support one?"*
- *"What proportion of your work is reactive to transcendent breaking news vs. self-conceived enterprise? Where do you wish the balance was?"*
- *"What's the verification chain look like for a contested visual investigation — who else reviews satellite imagery, geolocation, etc., before it ships?"*
- *"What's a story you wish you'd had OSINT capacity for in the last year that you couldn't pursue?"*

### Logistics / hiring manager round
- *"Which bureau fits this role best from your perspective? Is the location decision driven by the candidate or the team?"*
- *"What's the integration period like for a senior reporter joining International Investigations? Who do I work most closely with in the first six months?"*
- *"What's NYT's policy on AI-assisted tooling for journalists right now? I'd like to understand the line you draw."*

### Recruiter round
- *"What's the typical hiring timeline from here? Any second-round formats I should prepare for?"*
- *"What's the bureau-allocation conversation look like? Is that something I'd discuss directly with the international editor?"*

---

## 6. Logistics quick reference

| Item | Value |
|---|---|
| Citizenship | Dutch (EU) — auto-eligible in EU bureaus; UK requires separate verification |
| Languages | Dutch (fluent) · English (fluent) · German (reading) · French (reading) |
| Bureau fit | **Preferred: Brussels** — native Dutch + reading French aligns natively with the bilingual capital; EU/NATO/EEAS sourcing depth. **UK ruled out** — no work-authorization (post-Brexit; no settled status). Open: Berlin, Paris, Madrid, Rome, Warsaw |
| Comp ballpark | London £85-110k · Continental EU €75-100k · likely upper half of band given specialist OSINT skill set |
| Current notice period | (confirm with AJ HR before stating) |
| Earliest start | (confirm) |

---

## 7. Day-of practical

- Have *Ghost Reporters* AJ article + 25-min documentary open in a tab.
- Have *Island of Secrets* AJ piece + video open in a tab.
- Have your AJ author page open: aljazeera.com/author/yarno_ritzen_201492282519994200
- Have yarnoritzen.com live and ready.
- Have the live scraper ready to share if asked about production work: wakkum.github.io/the-take-scraper/
- One pitch on the day that isn't in the cover-letter memo. The editor will notice.

---

## 8. The thing to remember in the room

You are not selling the CV. The CV got you the meeting. In the room, sell **judgment** — how you decide what to chase, what to drop, what to verify twice. Editors hire people they trust to make calls. Demonstrate the calls.
