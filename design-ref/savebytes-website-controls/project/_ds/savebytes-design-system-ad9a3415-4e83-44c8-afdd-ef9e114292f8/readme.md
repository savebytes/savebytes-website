# SaveBytes Design System

SaveBytes is a technology company from Navi Mumbai that builds fast, focused, configurable software. The brand idea is **efficiency as a form of respect**: for the hardware, for the person using the software, and in healthcare, for the doctor's time and the patient's. The name began as the founder's first-year engineering GitHub repo.

## Products
- **savebytes.in** — the V1 marketing site (Home, Health, About, Contact, Privacy). Four jobs: say who we are, explain Health honestly, find the first clinics, earn trust.
- **SaveBytes Health** — EHR + clinic management for Indian clinics with 2–5 doctors, built on Medplum + FHIR (React + Mantine 7 via `@medplum/react`). In development.
- **SaveBytes Platform** — the shared configurable core (tenants, roles, forms, branding, audit), also used for white-label deployments.

## Sources
- `SaveBytes Design/SAVEBYTES_DESIGN_SYSTEM.md` (v1.0, 31 Oct 2026) — copied to `source/SAVEBYTES_DESIGN_SYSTEM.md`. **Source of truth** for every value here.
- `SaveBytes Design/SAVEBYTES_WEBSITE_BRIEF.md` — site map, copy, voice rules. Read in full; the file could not be copied into the project (read error), so key content is summarised below and in `ui_kits/website/`.
- `SaveBytes Design/savebytes-logos/` — 12 master logo SVGs, copied to `assets/logos/`.
- No codebase, Figma or slide deck was provided. There is no production UI yet, so UI kits follow the spec rather than existing screens.

---

## Content fundamentals
**Voice:** a careful engineer explaining something to a doctor friend. Plain words, short sentences, concrete examples. Precise, calm, direct, quietly confident — never salesy or hyped.
- **We** for the company, **you** for the reader. **I** only in the founder story.
- **Sentence case** for every heading and button. All caps only in the mono overline (`02 / WHAT WE BUILD`).
- **Indian English**: organise, colour, programme, paediatrics. INR for money. Dates `12 Mar 2026`, times `10:30 am`, ages `34 y`, `8 m`, `12 d`.
- **No exclamation marks. No emoji.**
- **Specific beats impressive.** "Prescription PDF ready before the patient stands up", not "lightning-fast prescriptions".
- **Use the doctor's words:** OPD, token, register, Rx, follow-up, vitals, walk-in.
- **Be honest about stage:** "In development", "on our roadmap", "we'll say more when it's real". Placeholders stay visible in `[brackets]`.
- Vary rhythm. Let some sentences be short. Like this. Avoid lists of three everywhere and "not X, but Y".
- **Banned words:** revolutionise, seamless, empower, leverage, cutting-edge, next-generation, robust, holistic, synergy, game-changer, unlock, elevate, world-class, state-of-the-art, one-stop solution, "AI-powered" as a headline.
- **Never claim** customer counts, testimonials, customer logos, ABDM/ABHA/HIPAA/ISO/DPDP badges, unmeasured speed/uptime numbers, or a legal entity name (footer: `© 2026 SaveBytes`).
- Name: always **SaveBytes** (never Savebytes, Save Bytes, SAVEBYTES, SB). Products: *SaveBytes + one plain word*.

Examples: "Software that wastes nothing." · "Most clinic software is built to be sold, not to be used." · "Boring where it should be. Careful everywhere." · "Dates are deliberately missing. We'll add them when we're sure of them." · "Thanks, we've got it."

## Visual foundations
- **Colour:** mostly white and `navy-50`; navy for text and one dark band/footer; blue (`#2F5BFF`) means "act here". Website ≈ 80% white/navy-50, 15% navy, 5% blue. Product uses even less blue — colour on clinical screens comes from status. Status colours (success/warning/danger/info) are fixed, never white-labelled, and always paired with an icon and a word. Teal is the Health accent only (right half of the Health mark, accents). On navy use white/`navy-200` text and `blue-400` for links/accents.
- **Type:** IBM Plex Sans 400/500/600 for everything readable; IBM Plex Mono 400/500 for numbers that get compared or copied (IDs, doses, vitals, prices, timestamps) and the overline. Display tracking −2% to −1.5%. Body max 68 chars; reading column 680px. No italics for emphasis in product — use 500.
- **Spacing:** 4px base (`space-1`…`space-32`). Website sections 96px (64 mobile). Cards 24px (website) / 16px (product). Content max 1200px; 4/8/12-col grids.
- **Backgrounds:** flat white / `navy-50`; one `navy-900` dark band per page max. No gradients, glows, glassmorphism, blobs, neon. Two motifs only: **the cut** (the logo's S-curve, as a thin 1.5px `line` stroke or `blue-50` field, max once per section) and a **dot grid** (1px `navy-200` dots, 24px pitch) behind technical sections.
- **Imagery:** real product UI is the hero image, framed in a `radius-lg` panel with `shadow-lg` and a `line` border. No device mockups, no stock photos, no medical clichés. Founder photo must be real.
- **Corners:** 4 badges/checkboxes · 6 buttons/inputs · 10 cards/popovers · 16 dialogs/feature panels/screenshots (= the logo's 16/48 ratio) · full for avatars/toggles.
- **Cards:** white, 1px `navy-200` border, radius 10 (16 on website), no shadow or `shadow-sm` at rest. Never coloured left-border stripes.
- **Elevation:** borders do the work; shadows are navy-tinted and rare — `sm` resting cards, `md` menus/popovers/sticky header, `lg` dialogs and floating screenshots. Overlay `rgba(11,27,51,.48)`. No blur.
- **Motion:** calm and explanatory. 120ms hover/press, 200ms menus/tabs, 320ms dialogs/sections. `ease-out cubic-bezier(.2,.8,.2,1)` entering, `ease-in-out cubic-bezier(.6,0,.2,1)` A→B. Scroll reveals fade + rise 12px once, 60ms stagger. No parallax, bounces, or infinite loops except the logo loader. Always honour `prefers-reduced-motion`.
- **Hover:** primary darkens one step (600→700), pressed 800. Secondary/ghost go to `navy-50`, pressed `navy-100`. Links underline (1px, offset 3px). Table rows `navy-50`; selected `blue-50`. Press = colour change, never shrink.
- **Focus:** always a 2px `blue-600` outline with 2px offset.
- **Loading:** the Split byte cut-loader instead of spinners; skeletons in `navy-100` for content areas.
- **Layout:** left-aligned by default (centre only short closing sections). Website header 72px, transparent over hero then white + border + `shadow-md`. Product: fixed patient banner on single-patient screens; 1280×720 with no horizontal scroll; compact density (14px text, 36px rows, 32px controls).
- **Transparency:** only the dialog overlay and subtle `rgba` shadows.

## Iconography
- **Lucide** (MIT), stroke **1.75**, round caps/joins, sizes 16 (inline) and 20 (buttons/nav), `currentColor`. No icon set shipped with the source, so the `Icon` component loads Lucide SVGs from CDN (`lucide-static@0.460.0` on jsDelivr) and rewrites stroke width. This is the set the spec names, not a substitution.
- Icon-only buttons always carry `aria-label`.
- **No emoji. No unicode glyphs as icons.** No medical crosses, stethoscopes, heartbeat lines, DNA or pills as decoration.
- Feature-grid icons sit in a 40px `blue-50` square, radius 6.
- The brand mark itself is the loader and the timeline node.

## Logo
Master SVGs in `assets/logos/`: horizontal (blue/navy, all navy, white), stacked, mark (blue/navy/white), Health logo + mark (teal right half), Platform logo (navy right half), app icon (white on navy, 108 grid), favicon (32, cut 6.5). The `Logo` component rebuilds the mark from the spec's published 48-grid geometry so it can animate (intro 1.6s, loader, hover breathe); its wordmark is live IBM Plex Sans 600 −2% (the master files have outlined wordmarks — prefer them for static artwork). Rules: clear space ¼ of mark height, min 16px mark / 96px lockup, never rotate, skew, outline, shadow, circle or recolour beyond the three colourways.

---

## Index
- `styles.css` — entry point; `@import`s only.
- `tokens/` — `fonts.css` (IBM Plex @font-face, self-hosted in `fonts/`), `colors.css`, `typography.css`, `spacing.css` (space, radius, controls, layout), `effects.css` (shadow, motion, dot grid), `base.css` (element defaults, focus ring, keyframes).
- `guidelines/` — foundation specimen cards (Colors, Type, Spacing, Brand).
- `components/` — React primitives (below), one `@dsCard` per directory.
- `ui_kits/website/` — savebytes.in click-through (Home, Health, About, Contact).
- `ui_kits/health-app/` — SaveBytes Health web app (queue → vitals → consult → sign, white-label toggle).
- `assets/logos/` — master logo artwork.
- `source/` — original spec.
- `SKILL.md` — Agent Skill entry.

## Components
Inventory = spec section 9 (core) + section 11 (clinical).
- **core/** — Button, Link, Logo, Icon
- **forms/** — Field, TextInput, Textarea, Select, SearchInput (search + combobox), Checkbox, Radio, Switch, FileUpload, DatePicker (date + time)
- **feedback/** — Badge (badge/tag), Alert, Toast, Tooltip, Skeleton, EmptyState
- **display/** — Card, Table, Avatar, CodeBlock
- **navigation/** — Tabs, Breadcrumbs, Pagination, Stepper, SideNav, SiteHeader
- **overlays/** — Dialog, Drawer, Popover, Menu
- **clinical/** — PatientBanner, VitalsStrip, LabResultsTable, ResultFlag, PrescriptionTable, SignedRecord, OpdQueue, AiDraft, VisitStatusBadge

Website patterns (section 10: hero, section header, feature grid, product showcase, principles, story, dark band, timeline, CTA band, contact form, footer) live as UI-kit sections in `ui_kits/website/Sections.jsx` rather than as primitives.

### Intentional additions
- **Icon** — wrapper so every glyph uses Lucide at stroke 1.75.
- **Field** — shared label/helper/error anatomy for all form controls.
- **Skeleton** and **EmptyState** — the spec's "Empty, loading, error states" row, split into two primitives.
