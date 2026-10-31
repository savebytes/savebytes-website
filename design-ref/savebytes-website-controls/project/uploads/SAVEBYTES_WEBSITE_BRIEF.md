# savebytes.in: Website Brief

**Version:** 1.0 (31 October 2026)
**Read with:** `SAVEBYTES_DESIGN_SYSTEM.md` (all visual decisions live there; this file covers what the site says and shows).
**Goal for V1:** a small, honest, beautifully made website that explains who SaveBytes is, what we are building, and lets clinics and partners get in touch.

---

## 0. How to use this file (for Claude Design)

Build the website for savebytes.in using the SaveBytes design system that already exists. Use the page structure in section 4 and the draft copy in section 5. The copy is written to be used as-is; tighten it if a layout needs it, but keep the voice (section 6) and never add claims that are not in this file. Where you see `[brackets]`, leave a visible placeholder for the founder to fill.

---

## 1. What the website has to do

SaveBytes is early. The EHR product is being built now, so the website is not a sales machine yet. It has four jobs, in this order:

1. **Say clearly who we are.** A technology company from Navi Mumbai, building configurable software, starting with healthcare.
2. **Explain SaveBytes Health honestly.** What it will do for a small clinic, what is being built first, and when.
3. **Find the first clinics.** Owner-doctors in Navi Mumbai and Mumbai who want to try it early and shape it.
4. **Earn trust.** Show the people, the thinking and the engineering standards behind it, because a doctor is being asked to trust us with patient records.

What it does **not** need yet: pricing, customer logos, testimonials, a blog, a careers page, or a page per specialty. Add those when they are real.

---

## 2. Who visits, and what they need to see

| Visitor | What they are thinking | What the site must show them |
| --- | --- | --- |
| **Owner-doctor of a small clinic** (2–5 doctors, Navi Mumbai / Mumbai). The primary audience. | "Will this slow my OPD down? Is my data safe? Is this another app I'll pay for and stop using?" | A fast, simple product. Plain answers about data. A real person they can call. A way to try it early without risk. |
| **Clinic manager / receptionist** | "Will this make my mornings easier or harder?" | The queue, check-in and prescription handover, shown as real screens. |
| **Future partners, hospitals, investors, hires** | "Is this a serious company or a side project?" | A clear vision beyond one app, the platform thinking, the founder story, engineering principles, a visible roadmap. |
| **Developers and the tech-curious** | "How is it built?" | Medplum, FHIR, open standards, security posture, written plainly. |

---

## 3. Research: what shapes the message

### 3.1 Why Indian doctors avoid EMRs

Indian healthcare platforms and research on EMR adoption keep finding the same reasons doctors stay on paper:

- **The software is complicated.** Interfaces packed with features, little training, slow to learn.
- **It costs too much** for a small clinic to justify without a clear return.
- **Fear about data security**: breaches, hacking, who can see patient records.
- **Systems don't talk to each other.** Different vendors, different standards.
- **Habit.** Paper is fast and familiar; electronic systems feel slow.
- **Infrastructure.** Patchy internet and older computers, even in cities at times.

*Sources: eka.care's review of why Indian doctors aren't using EMRs; BMC Health Services Research (2025) on perceived benefits and barriers of EMRs among doctors in an Indian private facility.*

**What this means for the website:** every one of these objections gets a direct, specific answer somewhere on the site. The single biggest message is speed and simplicity, because that is the objection that kills adoption first. And the SaveBytes story (software that wastes nothing) is the most natural answer to "it's complicated and slow".

### 3.2 What competitors do, and the gap

Established Indian players (Healthray, eka.care, Practo's clinic software and others) market broad suites: dozens of modules, every specialty, every hospital department, AI features, compliance badges and demo forms.

**The gap SaveBytes can own:** be the one that is visibly *focused*. Do fewer things, do them faster, and be honest about it. Where others say "everything for every hospital", SaveBytes says "the clinic day, done properly, with nothing you don't need".

### 3.3 What good early-stage company sites do

- Lead with the problem the visitor already feels, in their words.
- Say plainly what stage the product is at. Honesty about "early" builds more trust than pretending to be big.
- One clear action (here: "Join early access" / "Talk to us").
- Show the founder. At this stage people are buying into the team as much as the product.
- Show the product, even if it is in development. Real screens beat illustrations.

### 3.4 How to not sound like AI wrote it

Copy that reads as AI-generated has recognisable habits. Avoid them:

- **Vague claims** ("high-quality", "powerful", "seamless", "cutting-edge"). Replace with a specific detail.
- **Generic openings** ("In today's fast-paced world…"). Open with a pain the reader recognises.
- **Feature-led wording** ("AI-powered FHIR-compliant platform"). Use the words a doctor would use ("your prescription is ready before the patient stands up").
- **Over-polished patterns**: lists of three everywhere, "not X, but Y" constructions, stock words, every sentence the same length. Vary rhythm. Let some sentences be short. Like this.

Banned words on this site: *revolutionise, seamless, empower, leverage, cutting-edge, next-generation, robust, holistic, synergy, game-changer, unlock, elevate, world-class, state-of-the-art, one-stop solution, AI-powered* (as a headline).

---

## 4. Site map (V1)

| Page | URL | Purpose |
| --- | --- | --- |
| Home | `/` | Who we are, what we build, why it matters, get in touch |
| SaveBytes Health | `/health` | The product for clinics: what it does, what's first, early access |
| About | `/about` | The story, the principles, how we build, the roadmap |
| Contact / Early access | `/contact` | Form + direct contact details |
| Privacy | `/privacy` | How the website handles data (contact form, analytics) |

Navigation: **Health · Platform** (anchor on Home for now) **· About · Contact**, with a primary button **Join early access**.

---

## 5. Pages and draft copy

### 5.1 Home `/`

**Section 1: Hero**
- Overline (mono): `SAVEBYTES · NAVI MUMBAI`
- Headline: **Software that wastes nothing.**
- Lead: We build fast, focused software for the places where time matters most. We're starting with clinics: an EHR that keeps up with a busy OPD instead of slowing it down.
- Buttons: `Join early access` (primary) · `See what we're building` (secondary, scrolls to Health)
- Visual: the animated Split byte logo, large, playing once on load (1.6 s). After it settles, a product screenshot panel of the OPD queue slides up beside it on desktop.

Alternative headlines to test:
- *Less clicking. More seeing patients.* (for a Health-first variant)
- *Every byte, every click, every minute: accounted for.*

**Section 2: The problem** (overline `01 / WHY WE EXIST`)
- Title: **Most clinic software is built to be sold, not to be used.**
- Body: It comes with forty modules, a week of training and a screen full of buttons. So the doctor goes back to the paper pad, the receptionist keeps a register on the side, and the software becomes one more bill every month.
- Body: We think good software should feel like a good assistant: there when you need it, invisible when you don't. That means doing fewer things, and doing them properly.

**Section 3: What we build** (overline `02 / WHAT WE BUILD`)
- Title: **A platform first. Products on top.**
- Intro: SaveBytes is a technology company. We build one strong, configurable core and shape it into products for specific jobs. Healthcare is where we're starting.
- Two cards:
  - **SaveBytes Health**: Clinic and EHR software for Indian clinics and small hospitals. Appointments, queue, vitals, notes, prescriptions, on one fast screen. *Status: in development.* Link: `Learn more →`
  - **SaveBytes Platform**: The configurable core underneath: tenants, roles, forms, branding and audit, built on open healthcare standards. It lets each clinic, or a partner, run the same product shaped to them, without a custom fork of the code. *Status: in development.*

**Section 4: How we work** (overline `03 / HOW WE WORK`). Present as numbered principles in mono, like code comments.
- `01` **Waste nothing.** If a click, a field or a screen doesn't help the doctor, it goes.
- `02` **Your data stays yours.** Each clinic gets its own isolated data space. You can export everything, any time.
- `03` **Open standards, no lock-in.** Records are stored as FHIR, the international standard for health data, so they can move with you.
- `04` **Built to be trusted.** Every clinical action is logged. Permissions are enforced on the server, not hidden in the interface.
- `05` **Doctors decide.** Anything a machine drafts is marked as a draft until a clinician confirms it.

**Section 5: Dark band: the engineering** (overline `04 / UNDER THE HOOD`)
- Title: **Boring where it should be. Careful everywhere.**
- Body: SaveBytes Health is built on Medplum, an open-source healthcare platform, and stores clinical records as FHIR resources. That gives us a proven foundation for the hard, unglamorous parts (data model, access control, audit) so our time goes into the part you actually touch.
- Small mono list: `FHIR R4` · `Medplum` · `TypeScript` · `Per-clinic isolation` · `Audit trail` · `Export anytime`
- Visual: dot-grid motif and a simple diagram: *Your clinic → SaveBytes Health → isolated FHIR data space*, drawn with design-system lines and boxes.

**Section 6: Founder note** (overline `05 / THE NAME`)
- Pull quote: *"I named my first GitHub repo SaveBytes because good software should use less: less memory, less time, less of your patience. It turned into a company."*
- Attribution: `[Founder name], Founder` with a small real photo (not stock). Link: `Read the story →` to `/about`.

**Section 7: CTA band**
- Title: **Running a clinic in Navi Mumbai or Mumbai?**
- Body: We're looking for a few clinics to use SaveBytes Health first and tell us what's wrong with it. You'll get it early, free during the pilot, and a direct line to the people building it.
- Button: `Join early access`

**Footer**
- White logo, one line: *SaveBytes builds fast, focused software. Made in Navi Mumbai.*
- Columns: Products (Health, Platform) · Company (About, Contact) · Legal (Privacy)
- `[hello@savebytes.in]` · `© 2026 SaveBytes`
- Small mono line (see creative idea 6.6): `This page weighs [xx] KB.`

---

### 5.2 SaveBytes Health `/health`

**Hero**
- Overline: `SAVEBYTES HEALTH · IN DEVELOPMENT`
- Headline: **The clinic day, done properly.**
- Lead: An EHR built for Indian clinics with two to five doctors. Book, check in, take vitals, consult, prescribe, sign, without the screen getting in the way.
- Buttons: `Join early access` · `See the visit flow`
- Visual: Health lockup (teal half) and a large screenshot of the consult screen: patient banner, vitals strip, prescription.

**Section: A visit, start to finish** (the signature interactive section)
- Title: **One patient. Five steps. No paper register on the side.**
- A horizontal stepper that plays as you scroll (or click), each step with a small, real-looking UI card:
  1. **Book or walk in.** The receptionist finds the patient by name, mobile or clinic number, or registers them in under a minute.
  2. **Check in.** A token number is assigned and the queue updates on every screen in the clinic, live.
  3. **Vitals.** The nurse records BP, pulse, temperature, SpO₂ and weight. BMI is calculated for you.
  4. **Consult.** The doctor sees vitals, allergies and past visits next to the note. Diagnosis by name or ICD-10 code. Medicines from your clinic's own list, with dose, 1-0-1 frequency, timing and duration.
  5. **Sign and hand over.** The visit is locked when signed. A prescription PDF with your clinic's logo is ready immediately and can be sent to the patient's phone.
- Use the real visit states as small badges under each step: Booked → Checked in → Vitals taken → In consult → Signed.

**Section: Answers to the questions doctors actually ask** (address the research objections head-on, as an FAQ-style grid)
- **"Will it slow me down?"** It's built around a single consult screen. Your favourite medicines and "repeat last prescription" are one click. We measure speed the way you would: seconds per patient.
- **"Who can see my patients' data?"** Only the people you give access to, by role. Each clinic's records live in their own isolated space, and every view and change is logged.
- **"What if I want to leave?"** Your records are stored in FHIR, an open international format. You can export all of it.
- **"Is it another expensive system?"** Pricing will be simple and built for small clinics. During the pilot it's free. `[Update when pricing is decided]`
- **"My staff aren't very technical."** If they can use WhatsApp, they can use this. We'll set it up with you, in person, in Navi Mumbai and Mumbai.
- **"What about ABDM and ABHA?"** It's on our roadmap. We'll say more when it's actually connected, not before.

**Section: Built for your specialty** (short)
- Title: **One chart, shaped to how you practise.**
- Body: Specialties are add-ons with their own forms, vitals and favourite diagnoses (for example growth charts for paediatrics), all on the same patient chart. We'll build them one at a time, starting with what our first clinics need.

**Section: What's being built now** (honest roadmap, from the build tracker)
- Vertical timeline with split-byte nodes:
  - **Foundation**: infrastructure, security, isolated data per clinic. `Now`
  - **Platform core**: clinics, staff, roles, permissions, branding. `Next`
  - **Patient records**: registration, consent, allergies, problems, documents. `Next`
  - **OPD**: appointments, live queue, vitals, consult, prescriptions, PDFs. `Then`
  - **Later**: billing, pharmacy, lab, patient app, ABDM. `Planned`
- Note under it: *Dates are deliberately missing. We'll add them when we're sure of them.*
- `[Update these labels from the Dashboard tab of the build tracker before launch, and again as each phase completes.]`

**CTA**: Same early-access band as Home, worded for doctors.

---

### 5.3 About `/about`

**Hero**
- Overline: `ABOUT`
- Headline: **It started as a repository name.**

**Story** (narrow column, first person, in the founder's own voice; edit freely to sound like you)
> In my first year of engineering college I was naming a GitHub repository and went through a long list of bad ideas. *SaveBytes* stuck. As an engineer you learn quickly that good software is software that uses less: less memory, fewer steps, less waiting. I've tried to write code that way ever since.
>
> Years later the name was still with me: on my GitHub, on my portfolio at savebytes.in, in how I think about building things. So when I decided to start a company, it already had a name.
>
> We're starting with healthcare because it's where wasted time hurts the most. A doctor in a busy clinic sees dozens of patients a day, and most software makes that harder. We want to build the opposite. `[Add a line about what you saw in clinics that made you start, a specific moment if you have one]`

**Principles**: the same five numbered principles as Home, expanded with one extra sentence each.

**How we build** (for the technical reader)
- Short paragraphs: open standards (FHIR), proven foundation (Medplum), one codebase configured per clinic rather than forked, server-side permissions, audit on every clinical action, export and deletion designed in from day one.

**The team**
- `[Founder name]`: `[role, one line on background]`. Real photo.
- `[Co-founder / director name if applicable]`
- Line: *We're small on purpose. If you write to us, a founder reads it.*

---

### 5.4 Contact / Early access `/contact`

- Headline: **Talk to us.**
- Lead: Whether you run a clinic, want to partner, or just want to see what we're building, write to us. We reply within one working day.
- Form fields: Name · Clinic or company · Role (Doctor / Clinic owner / Clinic manager / Partner / Other) · Phone or email · City · Message (optional)
- Button: `Send`
- Below the form: *We use these details only to reply to you. No newsletters unless you ask.*
- Direct contact: `[hello@savebytes.in]` · `[+91 phone / WhatsApp]` · Navi Mumbai, Maharashtra
- Success state (in place): **Thanks, we've got it.** We'll be in touch within a working day.

---

### 5.5 Privacy `/privacy`

Short, plain-language page covering: what the contact form collects, why, where it is stored, how long, the analytics tool used (cookie-free if possible), and how to ask for deletion. `[Have this reviewed before launch.]`

---

## 6. Voice and writing rules

- **Talk like a careful engineer explaining something to a doctor friend.** Plain words, short sentences, concrete examples.
- **Specific beats impressive.** "Prescription PDF ready before the patient stands up" beats "lightning-fast prescriptions".
- **Use the doctor's words.** OPD, token, register, Rx, follow-up, vitals, walk-in.
- **Be honest about the stage.** "In development", "on our roadmap", "we'll say more when it's real".
- **Sentence case** for every heading and button.
- **"We"** for the company, **"you"** for the reader. The founder story is the only place for "I".
- **Indian English spellings** (organise, colour, programme), INR for any money, dates as `12 Mar 2026`.
- **No exclamation marks.** No emoji.

---

## 7. Creative direction: what makes it memorable

Pick the first three for V1. The rest are good later additions.

1. **The logo opens the site.** On first load the Split byte plays its 1.6 s intro (block lands, the cut slices through, the halves breathe, the wordmark slides in). It plays once per session. With reduced motion, it simply appears.
2. **The cut runs through the page.** The S-curve from the logo appears as a single thin line that draws itself down the side of the Home page as you scroll, linking the numbered sections. It is the brand's thread, literally. Keep it subtle (`line` colour, 1.5 px) and hide it on mobile.
3. **The visit flow on /health.** Five small, real-looking UI cards (queue row, vitals strip, prescription lines, signed badge) that animate in sequence. This shows the product without needing a finished app.
4. **Principles as code comments.** The numbered principles in Plex Mono, styled like `// 01 Waste nothing.`, a quiet nod to where the name came from.
5. **An honest build log.** The roadmap shows real progress from the internal tracker (phases and a percentage) and is updated as phases complete. Few early-stage companies are this transparent; it builds trust.
6. **The page knows its own weight.** A small mono line in the footer, computed at build time: `This page weighs 142 KB.` It's the SaveBytes story in one line, and it keeps the team honest about performance. Only show a real, measured number.
7. **Hover on the header logo.** The two halves part by a hair. Small, satisfying, never distracting.

What to avoid: stock photos, animated gradient backgrounds, floating 3D shapes, counters with invented numbers, chat widgets, cookie walls, auto-playing video with sound.

---

## 8. What we must not say (yet)

- No customer counts, clinic counts, testimonials or logos until they are real and permitted.
- No "ABDM certified/approved", "ABHA integrated", "HIPAA/ISO/DPDP compliant" or similar badges until they are true and documented.
- No "AI-powered" headline. AI features, when they come, are mentioned as assistance that clinicians review.
- No legal company name or registration number until incorporation is complete.
- No speed or uptime numbers that haven't been measured.

---

## 9. SEO, metadata and sharing

| Page | Title tag | Meta description |
| --- | --- | --- |
| Home | SaveBytes · Software that wastes nothing | SaveBytes builds fast, focused software from Navi Mumbai, starting with an EHR for Indian clinics. |
| Health | SaveBytes Health · EHR for Indian clinics | Appointments, queue, vitals, consult and prescriptions on one fast screen. Built for clinics with 2–5 doctors. In development. |
| About | About SaveBytes | How a GitHub repository name became a software company, and how we build. |
| Contact | Contact SaveBytes | Run a clinic in Navi Mumbai or Mumbai? Join early access to SaveBytes Health. |

- Open Graph image (1200 × 630): navy background, white stacked logo, the headline in Plex Sans. One version for Home, one Health version with the teal half.
- Favicon set and `apple-touch-icon` from the logo files.
- `lang="en-IN"`, semantic headings (one `h1` per page), descriptive alt text on screenshots.
- Local SEO: Google Business Profile for SaveBytes (Navi Mumbai) once there is an address to show.

---

## 10. Build notes

- **Stack suggestion:** Next.js (App Router, static export) or Astro, Tailwind CSS v4 with the theme from the design system, `next/font` for IBM Plex. CSS animations for the logo; a light animation library only if the scroll effects need it.
- **Performance budget** (the brand depends on it): under 150 KB of JavaScript on Home, LCP under 2 s on a mid-range Android phone on 4G, no layout shift from the logo animation, all images as AVIF/WebP with sizes set.
- **Forms:** send to an email service (for example Resend or Formspree) with spam protection; no data stored on the website itself beyond that.
- **Analytics:** cookie-free and privacy-respecting (for example Plausible or Umami), so no cookie banner is needed.
- **Accessibility:** WCAG 2.2 AA, keyboard navigable, visible focus, reduced-motion support for every animation.
- **Hosting:** any static host with HTTPS; point `savebytes.in` and `www` at it.

---

## 11. Prompt to give Claude Design

> Using the SaveBytes design system, build the marketing website for savebytes.in following `SAVEBYTES_WEBSITE_BRIEF.md`. Pages: Home, SaveBytes Health, About, Contact, Privacy. Use the draft copy as written and keep `[placeholders]` visible. Include the animated Split byte logo intro on Home, the scroll-drawn S-curve line linking the Home sections, and the five-step visit flow on the Health page with realistic fictional Indian clinic data. Real product UI panels instead of illustrations or stock photos. Fully responsive from 360 px, WCAG 2.2 AA, reduced-motion friendly. Calm, precise, lots of whitespace, left-aligned. No gradients, glows, emoji or invented claims.

---

## Sources

- [Why aren't doctors using EMR in India? (eka.care)](https://eka.care/services/why-arent-doctors-using-emr-in-india)
- [Perceived benefits and barriers of medical doctors regarding EMR systems in an Indian private-sector healthcare facility (BMC Health Services Research, 2025)](https://bmchealthservres.biomedcentral.com/articles/10.1186/s12913-025-12877-5)
- [Four AI copy swaps (RLC Words, 2026)](https://rlcwords.co.uk/2026/08/28/four-ai-copy-swaps/)
- [How to build a pre-launch landing page that actually converts (Twine)](https://www.twine.net/blog/pre-launch-landing-page/)
- [Medplum React components](https://medplum.com/docs/react)
- [NHS Common User Interface: patient banner guidance](https://pacharanero.github.io/nhs-cui/patient-identification-and-information-entry-and-display/patben)
