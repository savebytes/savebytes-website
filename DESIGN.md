---
name: SaveBytes
description: Quiet software for busy places. The company site, built as hospital signage.
colors:
  savebytes-blue: "#2f5bff"
  savebytes-blue-press: "#2448e0"
  ground: "#ffffff"
  ink: "#111315"
  ink-secondary: "#4a5059"
  tone-step: "#f3f4f6"
  tone-step-hover: "#e8eaee"
  field-line: "#c9ced6"
  field-line-hover: "#9aa1ac"
  placeholder-ink: "#6b717a"
  danger: "#b4141f"
  footer-ground: "#111315"
  footer-ink: "#b9bfc8"
typography:
  display:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(2.5rem, 6.4vw, 6rem)"
    fontWeight: 650
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.625rem, 2.6vw, 2.25rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  directory-name:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.375rem, 1.9vw, 1.75rem)"
    fontWeight: 650
    lineHeight: 1.15
    letterSpacing: "-0.02em"
  lead:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "clamp(1.1875rem, 1.6vw, 1.375rem)"
    fontWeight: 400
    lineHeight: 1.5
  body:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "1.125rem"
    fontWeight: 400
    lineHeight: 1.6
  small:
    fontFamily: "Atkinson Hyperlegible Next, ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif"
    fontSize: "0.9375rem"
    fontWeight: 400
    lineHeight: 1.45
rounded:
  panel: "6px"
  pill: "999px"
spacing:
  directory-gap: "8px"
  gutter: "clamp(20px, 5vw, 64px)"
  section: "clamp(56px, 7vw, 104px)"
  frame-max: "1280px"
components:
  action:
    backgroundColor: "{colors.savebytes-blue}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    padding: "0 24px"
    height: "52px"
  action-hover:
    backgroundColor: "{colors.savebytes-blue-press}"
  action-small:
    backgroundColor: "{colors.savebytes-blue}"
    textColor: "{colors.ground}"
    rounded: "{rounded.pill}"
    padding: "0 20px"
    height: "44px"
  directory-row:
    backgroundColor: "{colors.tone-step}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "clamp(22px, 2.4vw, 32px)"
  directory-row-hover:
    backgroundColor: "{colors.tone-step-hover}"
  nav-link:
    textColor: "{colors.ink-secondary}"
    rounded: "{rounded.pill}"
    padding: "0 14px"
    height: "44px"
  nav-link-hover:
    backgroundColor: "{colors.tone-step}"
    textColor: "{colors.ink}"
  field:
    backgroundColor: "{colors.ground}"
    textColor: "{colors.ink}"
    rounded: "{rounded.panel}"
    padding: "12px 14px"
    height: "50px"
  footer:
    backgroundColor: "{colors.footer-ground}"
    textColor: "{colors.footer-ink}"
---

# Design System: SaveBytes

## Overview

**Creative North Star: "Hospital Signage"**

The site is a clear sign in a calm building: one statement, then a directory of where to go. Every page opens the same way (a large left-aligned statement, one plain line under it, at most one action) and then either points somewhere or says what it needs to in a two-column block. Nothing decorates; legibility, rhythm and the one blue action carry the whole system.

Density is low and the scale contrast is high: a display line up to 6rem against 1.125rem body, with generous section gaps. Light only, one ground, one ink and one grey tone step. The grey step has a single meaning: a panel you can go into. The site grows by registry entries (products, writing), never by new layouts.

The world rejects the split hero with a product shot, the row of feature cards, gradients, glass and resting shadows.

**Key Characteristics:**
- One white ground, near-black ink, one grey tone step for panels.
- SaveBytes blue only on the logo and the single action per screen.
- One typeface (Atkinson Hyperlegible Next), five type roles plus the directory-name size.
- Directory rows: bold name, one line, an arrow at the far edge; no outlines, no shadows.
- At most one picture per page, set on a tone-step mat.
- Dark footer that returns the "SaveBytes" name at full frame width.

## Colors

A near-monochrome signage palette: white, near-black and one cool grey step, with a single saturated blue held back for the logo and the action.

### Primary
- **SaveBytes Blue** (savebytes-blue): the logo mark and the one action per screen ("Get in touch", "Write to us", "Send"). Pressed and hovered actions deepen to **Press Blue** (savebytes-blue-press). As system state only, blue also draws the focus ring, the text selection and the input caret.

### Neutral
- **Ground** (ground): the only page background. Also the inside of form fields.
- **Ink** (ink): headings, body text, arrows, the active nav link.
- **Secondary Ink** (ink-secondary): lead lines, directory lines, definitions, help text, resting nav links, icons in contact lines.
- **Tone Step** (tone-step): directory panels, writing-list panels, the contact-form panel, the picture mat, nav-link hover.
- **Tone Step Hover** (tone-step-hover): the hover state of a panel you can go into.
- **Field Line** (field-line) and **Field Line Hover** (field-line-hover): the 1px border of inputs, selects and textareas.
- **Placeholder Ink** (placeholder-ink): input placeholders only.
- **Danger** (danger): field error borders and error text.
- **Footer Ground** (footer-ground) with **Footer Ink** (footer-ink): the dark footer; links turn white on hover.

### Named Rules
**The One Blue Rule.** SaveBytes blue appears on the logo and on one action per screen. Nothing else is blue at rest: not links, not headings, not icons, not panels.

**The Light Only Rule.** There is no dark theme. The only dark surface is the footer.

## Typography

**Display Font:** Atkinson Hyperlegible Next (with ui-sans-serif, system-ui, -apple-system, Segoe UI, sans-serif)
**Body Font:** the same family; one family for everything.

Self-hosted as a single variable woff2 (public/fonts/AtkinsonHyperlegibleNext-latin.woff2, weight axis 200 to 800, font-display swap, Latin subset plus the rupee sign). Weights in use: 400 body, 500 resting nav and product name in the logo, 600 the action and the logo word, 650 every heading and the directory name, 700 the footer name.

**Character:** A legibility typeface built for low vision, which suits a site for clinics. Distinct letterforms read at a glance; tight negative tracking at large sizes gives it signage weight.

**The slashed zero.** The font draws its zero slashed by design and has no unslashed alternate: its GSUB carries only ccmp, frac, locl, pnum and tnum (no zero, ss or cv features). The slashed zero is accepted everywhere it appears (dates, token numbers, the footer year). Do not swap fonts or fake a plain zero to remove it.

### Hierarchy
- **Display** (650, clamp 2.5rem to 6rem, 1.02, -0.035em, max 15ch, balanced): the h1 that opens every page. One per page.
- **Headline** (650, clamp 1.625rem to 2.25rem, 1.15, -0.02em, balanced): section headings (h2) in blocks, closes and articles.
- **Directory name** (650, clamp 1.375rem to 1.75rem, 1.15, -0.02em): the destination name inside a directory row. A sized step between headline and lead, used only there.
- **Lead** (400, clamp 1.1875rem to 1.375rem, 1.5, secondary ink, max 44ch): the one plain line under a display heading; also the coming-soon list (at 650) and writing post titles (at 650).
- **Body** (400, 1.125rem, 1.6): prose, max 66ch in prose and 60ch in definitions.
- **Small** (400, 0.9375rem, secondary ink): directory lines, form labels (at 650), help text, footer text, dates.

### Named Rules
**The Heading Stands Alone Rule.** Nothing sits above a heading: no eyebrow, no kicker, no numbered label. A section starts with its heading.

## Layout

A single centred frame, max 1280px wide, with fluid gutters (clamp 20px to 64px). The header is sticky at 72px on the ground with no border or shadow.

Every page opens with the **lede**: a left-aligned column of display heading, lead line and, where the page has one, the action; padding clamp 56px to 136px above. On the home page at 1100px wide and 640px tall or more, the opening fills the first screen and the directory sits at its bottom edge.

The **directory** is an auto-fit grid of panels (minimum 340px each, 8px gaps): three across on desktop, one per row from 760px to 1099px and on phones.

Content pages use the **block**: a 4/8 grid with the headline on the left and content on the right, separated by section gaps (clamp 56px to 104px). Definition lists inside use their own 4/8 (or 3/9 when wide) term/definition grid. Blocks stack to one column below 900px; definition rows stack below 600px. Contact is a 5/7 split of intro and form, stacking below 900px; paired fields stack below 560px.

Breakpoints in use: 560px, 600px, 760px (header folds into a menu), 900px, 1100px.

## Elevation & Depth

Flat. There are no shadows anywhere at rest or on hover. Depth is one tonal step: a panel is the ground lifted to the tone step, and hover lifts it one more step. The sticky header sits on the plain ground without a rule or shadow. The only borders are the 1px field lines in forms.

### Named Rules
**The No Shadow Rule.** Surfaces are flat at rest and stay flat on hover. State changes by tone, never by shadow, blur or glass.

## Shapes

Gently rounded panels (6px) for directory rows, writing panels, the contact-form panel, the picture mat and fields. Fully round pills (999px) for the action, nav links, the menu button and social icon targets. Round (50%) for the founder portrait and the sent check mark. No outlines on panels, no gradients, no clipped or angled silhouettes.

The product picture inside the mat keeps the product's own look (12px radius, hairline borders, tabular numerals); it is a picture of the product, not part of the site's shape language.

## Components

### Buttons
Calm and decisive: one solid blue pill per screen.
- **Shape:** pill (999px).
- **Primary (the action):** SaveBytes blue, white 600 text at 1.0625rem, 52px tall, 24px side padding. Small variant in the header: 44px tall, 20px padding, 1rem.
- **Hover / Active:** background deepens to press blue over 160ms; active scales to 0.98. Disabled while sending: 0.7 opacity, progress cursor.
- **Focus:** 2px blue outline, 3px offset.
- There is no secondary button. A second action on a screen is a plain link.

### Directory rows (signature)
The sign itself: one panel per destination.
- **Content:** directory name (bold), one secondary line under it, a 24px arrow at the far edge.
- **Background:** tone step; hover tone-step-hover over 200ms, and the arrow moves 4px right.
- **Corner:** 6px. **Padding:** clamp 22px to 32px. **Border / shadow:** none.
- **Order on home:** each product from the registry, Writing (once a post exists), About SaveBytes, Get in touch.

### Panels
**The Panel Means Go Rule.** A tone-step panel means "you can go here" (or, for the contact form, "you act here"). Directory rows and writing-list entries are panels because they are links. Non-interactive content (facts, rules, prose, lists) is never put in a panel; it sits on the ground in a block.

The picture mat is the one tone-step surface that is not a link: it holds the page's single picture and nothing else, with no arrow and no hover.

### Inputs / Fields
- **Style:** white fill, 1px field line, 6px radius, 50px minimum height, 12px 14px padding, 1.0625rem text. Labels above at small size, 650; "(optional)" in secondary ink at 400. Selects use a drawn chevron.
- **Hover:** border darkens to field-line-hover.
- **Focus:** 2px blue outline at 1px offset and a blue border.
- **Error:** danger border and a 600-weight danger message below. Empty fields are not flagged on blur, only on send.

### Navigation
- **Header:** logo left, product and page links as 44px pills in secondary ink at 500 (hover: ink on tone step; current page: ink at 650), then the small action. Below 760px the links and action fold into a menu button that opens a full-width sheet of large (1.5rem, 650) links.
- **Footer:** footer ground, white logo, the about line, email, social icon targets (44px, hover white at 10%), three link columns (Products, Company, Legal), the full-width "SaveBytes" name (700, -0.055em, sized to the frame), then the copyright and the page weight.

### Logo
The SaveBytes logo (split byte mark on its 48-unit grid and the wordmark) is used unchanged and never animated. Tones: brand (blue mark, ink word), health (blue and teal halves with "Health" after the name), white (on the footer).

### Page weight
The footer states the page's real weight ("This page weighs N KB."). It is computed at build time by scripts/page-weights.mjs, which sums each exported page's HTML and every script, stylesheet, font and image it references (text compressed with gzip, binaries at their size) into out/page-weights.json. The footer reads that file; it is never typed by hand.

### Product picture
The one picture on a product page, a component named in the product's registry entry and drawn in src/products/screens.jsx with fictional data. It sits on the tone-step mat (padding clamp 20px to 72px, max 920px inside).

### Growing the site
- **A new product** is one new entry in src/products/index.js plus a four-line page file at app/(marketing)/<slug>/page.jsx (copy app/(marketing)/health/page.jsx and change the slug). The entry gives it its home directory row, its header and footer nav link and its sitemap entry; the page renders the standard product template (lede with action, optional picture, what it does, coming soon, data, close). A product leaves out any block it has nothing for.
- **Writing** stays hidden until the first post is added to src/writing/index.js. With one post, the Writing directory row, nav link, /writing index (panels, newest first) and post pages appear, and the sitemap includes them.

### Motion
One authored moment: the opening settles in (opacity and 14px rise over 900ms, ease cubic-bezier(0.16, 1, 0.3, 1), staggered 80ms), followed by the directory rows and the picture. Only with no reduced-motion preference. Hovers use 160 to 240ms on the same ease.

## Do's and Don'ts

### Do:
- **Do** open every page with a left-aligned display heading and one lead line.
- **Do** keep SaveBytes blue to the logo and one action per screen.
- **Do** use a tone-step panel only for something the visitor can go into or act in.
- **Do** add a product or a post through its registry entry, never by building a new layout.
- **Do** keep 44px touch targets and the 2px blue focus ring.
- **Do** accept the slashed zero; the typeface has no other zero.

### Don't:
- **Don't** use gradients, glass, blur or shadows, at rest or on hover.
- **Don't** put a label, eyebrow or numbered label above a heading.
- **Don't** build icon cards or rows of feature cards.
- **Don't** put more than one picture on a page.
- **Don't** put non-interactive content in a panel.
- **Don't** alter, recolour or animate the logo.
- **Don't** add a dark theme.
