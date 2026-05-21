# STRATEGY MEMO: Open Source Investigations & Accountability
**To:** International Investigations Editor, The New York Times
**From:** Yarno Ritzen
**Date:** 19 May 2026

## I. THE LENS: OSINT AS AN ACCOUNTABILITY ENGINE

I approach Open Source Intelligence (OSINT) not as a technical support function, but as a primary engine for high-impact accountability journalism. My work is focused on finding the "digital smoking gun"—the specific data point (a Cyrillic string in document metadata, a pattern of AIS gaps, or a multi-year satellite change-series) that forces an official response when traditional reporting reaches a dead end. 

Inside Al Jazeera’s Investigative Unit, I have spent six years building a routine working method that stitches together maritime and aviation traffic analysis, digital forensics, and custom-built data monitors. My goal at the Times would be to apply this toolkit to the world's most opaque stories, reacting to breaking news in real-time while maintaining the methodical pace of long-term enterprise investigations.

## II. THE TOOLBOX: SCALING THE SEARCH

A major differentiator I bring is the ability to build **custom editorial tooling**. Using AI-assisted coding (Claude, Gemini), I develop bespoke scrapers and data monitors to "listen" to the world. This allows a single reporter to monitor hundreds of entities—ships, aircraft, corporate registries, or social media networks—at the scale of a small engineering team, without ever compromising sensitive source data via public models.

## III. INVESTIGATIVE SKETCHES: FOUR ANGLES

Below are sketches of the kind of stories I gravitate toward and the specific technical methodologies I would use to chase them.

### 1. Russia's alternative funding for the war in Ukraine
Although oil is the major income generator for the Russian war machine, there is another way Russia is paying for its incursion in Ukraine: diamonds. Russia is the largest diamond producer in the world, and its diamonds aren't flagged as conflict diamonds under the Kimberley Process, which only punishes rebel groups, not states. State-controlled **Alrosa** has continued to produce at near-pre-war volumes while sanctions regimes proliferated around it.
*   **The Approach:** It’s a math problem. When Russian rough vanished from Antwerp ledgers after the ban, it didn’t stop being mined; it just moved. I would hunt for the displaced volume. By comparing public Alrosa production figures against the global market's legitimate capacity, we can identify the exact size of the ghost supply. The story is in finding out which trading houses in the UAE and India are absorbing it.
*   **The "How":** Trade data is messy and delayed. I would write scripts to clean and merge quarterly trade dumps from Indian and UAE customs, looking for sudden volume spikes tied to specific consignees. Because the companies importing the rough are often recently incorporated fronts, I’d build targeted scrapers to pull ownership records from the Dubai DMCC and Indian corporate registries. Once we identify the companies moving the volume, we move to the physical evidence: using satellite imagery to track the physical expansion of the specific polishing houses in Surat linked to those networks.

### 2. For Sale: The Fleet — Tracking Naval Assets via Ad-Tech
The US and France have deployed their most powerful carrier strike groups—including the *USS Gerald R. Ford* and the *Charles de Gaulle*—to the Mediterranean and the Gulf. While these ships operate under strict military OPSEC, the thousands of sailors on board carry smartphones that feed precise location data into the global ad-tech ecosystem.
*   **The Approach:** I would treat the commercial surveillance market as a secondary, unclassified "AIS" for the military. The contradiction is the story: the Navy issues warnings about location services, yet the data pipeline—running through weather apps, games, and prayer apps—is entirely outside their control. By purchasing "bounding-box" datasets for specific port calls (like the Ford’s emergency stops in the Red Sea), we can identify device clusters that move together, effectively tracking the fleet's movements in a war zone via any buyer with a credit card and a Datarade account.
*   **The "How":** I would purchase historical location data from brokers like Veraset or Foursquare covering known naval port areas during confirmed visit windows. After cleaning the data to isolate unique device IDs that arrived and departed with the ship, I would use Python to map these clusters as they transit through the Arabian and Red Seas. To turn this into a visual forensic piece, I would overlay these "digital footprints" with commercial AIS data and Sentinel-2 satellite imagery to prove the location data’s accuracy, visually demonstrating how a head of state's visit to a carrier leaves a traceable, commercial trail that any adversary could exploit.

### 3. The Bhutan Annexation: Proving the Dual-Use Pivot
Recent reporting has mapped 22 new Chinese villages built inside Bhutanese territory. The government claims these are "moderately prosperous" civilian settlements, but their location in the Beyul and Menchuma valleys—overlooking India’s strategic Siliguri Corridor—suggests a different reality. 
*   **The Approach:** The next accountability story is proving their dual-use nature. I would move beyond basic satellite imagery to hunt for the military footprint inside these "civilian" towns. By isolating specific architectural signatures (PLA-standard barracks) and invisible signals (radio frequency emissions), we can prove these are not villages, but permanent forward military outposts disguised as rural development.
*   **The "How":** I would use a multi-layered forensic approach. First, I’d analyze high-res Maxar imagery to identify standardized PLA barracks and hardened storage facilities, cross-referencing their footprints with known military builds in Tibet. Second, I would use RF (Radio Frequency) data from providers like HawkEye 360 to map signal emissions from these coordinates, identifying military-grade communications arrays that shouldn't exist in a civilian village. Finally, I’d use Synthetic Aperture Radar (SAR) to monitor for loitering military vehicles or hidden equipment caches. The visual deliverable is a forensic breakdown of a single "village," unmasking it as a military node in China’s border-expansion strategy.

### 4. The Recycled Weapons Loop: Tracing Donor Hardware into Insurgent Hands
Western governments have been told for over a decade via UN Panel reports that the weapons they ship to peacekeeping missions in Somalia, Mali, DRC, and the CAR routinely end up in the hands of the armed groups those missions are mandated to fight. Yet, the shipments continue. The gap between what donors know and what they will admit is the accountability story.
*   **The Approach:** I would treat fifteen years of fragmentary UN findings as a single dataset to trace specific weapons from their donor of origin, through documented diversion incidents, directly to human rights abuses. The goal is to visually close the loop between a Western export license and a documented atrocity.
*   **The "How":** I would build custom scrapers to harvest every serial number, weapon type, and seizure location from UN Panel reports, cross-referencing them against US DSCA transfers, EU export disclosures, and FOI'd end-use certificates. Crucially, to provide visual proof, I would scrape and systematically review combat footage and propaganda from regional Telegram, X, and TikTok channels. Using image forensics, I would identify these specific weapon types in the hands of insurgents, chronolocating the footage to known attacks to visually prove the lethal endpoint of "stabilization" hardware.

## IV. COLLABORATIVE VALUE

I thrive in the "team story discussion." I see my role as a bridge between the raw digital evidence and the narrative desk. Whether it is working with the **Graphics team** to translate complex AIS patterns into an interactive map, or partnering with **Video producers** to build a 3D reconstruction of a strike zone, I understand how to make invisible data visible and compelling for a global audience. 

I’m ready to start hunting.