# savebytes.in — website UI kit

Click-through recreation of the V1 marketing site defined in `source/SAVEBYTES_WEBSITE_BRIEF.md` (copy used as written; `[brackets]` are founder placeholders and stay visible).

- `index.html` — app shell: `SiteHeader` (transparent → white + shadow-md on scroll, mobile sheet under 760px), page switcher, `Footer`. Current page persists in localStorage.
- `Sections.jsx` — Overline, SectionHeader, Section (white / subtle / inverse / soft, optional dot grid), Reveal (fade + rise 12px once, 60ms stagger), ScreenPanel (product screenshot frame: radius-lg, shadow-lg), QueuePanel, Principles (`// 01` code-comment style), Timeline (split-byte nodes), CtaBand, Footer.
- `Home.jsx` — hero with animated Split byte intro then OPD-queue panel, scroll-drawn cut thread (desktop), 01–05 sections, dark band diagram, founder quote, CTA.
- `Health.jsx` — Health hero with consult panel, interactive five-step visit flow, FAQ grid, specialties, honest roadmap.
- `About.jsx` — story column, expanded principles, how we build, team placeholders.
- `Contact.jsx` — early-access form with validation and in-place success state.

Not built: `/privacy` (brief requires legal review first — the footer link routes to Contact).
