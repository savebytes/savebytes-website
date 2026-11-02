# SaveBytes Design System

**Version:** 1.0 (31 October 2026)
**Owner:** SaveBytes
**Use:** Source of truth for the SaveBytes brand and the design system behind savebytes.in, SaveBytes Health and every future SaveBytes product.

---

## 0. How to use this file (for Claude Design)

Build a complete, reusable design system from this document. Treat every value here as decided unless it is marked *open*. Do not invent new brand colours, fonts or logo shapes. When something is missing, choose the simplest option that fits the principles in section 1 and note the assumption.

Build in this order:

1. Foundations: colour, type, spacing, radius, elevation, motion, iconography.
2. Logo system: mark, lockups, app icon, favicon, animated logo.
3. Core components (section 9), with every state.
4. Website patterns (section 10).
5. Product extensions for SaveBytes Health (section 11).

The first thing built with this system is the marketing website, savebytes.in. The same tokens and components must later power the SaveBytes Health web app (React + Mantine 7 via `@medplum/react`). Name tokens so they can be exported as CSS custom properties, a Tailwind v4 theme and a Mantine theme without renaming.

---

## 1. Brand in one page

### The story

The name started as a GitHub repository in the founder's first year of engineering college. As an engineer you learn early that good software uses less: less memory, fewer steps, less waiting. *SaveBytes* stuck as the name for that habit, and it became the name of the company.

So the brand is about **efficiency as a form of respect**: for the hardware, for the person using the software, and in healthcare, for the doctor's time and the patient's.

### What SaveBytes is

- A **technology company** that builds configurable software platforms. Healthcare is the first vertical, not the only one.
- **SaveBytes Health** is the first product family: an EHR and clinic management system for Indian clinics and small hospitals, built on Medplum and FHIR.
- **SaveBytes Platform** is the shared, configurable core underneath, which also supports white-label deployments.

### Personality

| We are | We are not |
| --- | --- |
| Precise | Cold |
| Calm | Boring |
| Engineered | Over-designed |
| Direct | Salesy |
| Quietly confident | Loud or hyped |

The feeling: a well-made tool. Think of a good mechanical pencil, not a billboard.

### Design principles

1. **Waste nothing.** Every element earns its place. If removing something changes nothing, remove it.
2. **Clarity beats decoration.** Hierarchy, spacing and type do the work, not gradients, glows or illustrations.
3. **Colour means something.** Most of the screen is white and grey. Blue means "act here". Status colours mean status, never decoration.
4. **Numbers are sacred.** Values, doses and IDs use the mono face, carry units, and line up.
5. **Calm motion.** Animation explains a change and then gets out of the way.
6. **One system, many brands.** Customers can reskin the product. They can never make it less safe or less usable.

---

## 2. Name and wordmark

- Always **SaveBytes**: one word, capital S, capital B.
- Never: Savebytes, Save Bytes, SAVEBYTES, Save-Bytes, SB (in customer-facing text).
- Product names: **SaveBytes Health**, **SaveBytes Platform**. Future products follow the same pattern: *SaveBytes + one plain word*.
- Legal entity: *pending registration*. Do not print a legal name anywhere until it is confirmed. Footer placeholder: `© 2026 SaveBytes`.
- Domain: `savebytes.in`.
- Wordmark typeface: **IBM Plex Sans SemiBold (600)**, tracking −2 %, set in `navy-900` (or white on dark). In final logo files the wordmark is converted to outlines.

---

## 3. Logo: the Split byte

### Concept

A soft square block (one byte) cut by a single flowing curve into **two identical halves**. The **S is the cut itself**: the space that was saved. The halves are 180° rotations of each other, like the two nibbles (4 bits each) that make a byte.

Why it works:
- It carries the story without explaining it.
- It is a solid, simple silhouette that holds up at 16 px.
- It animates naturally: land, cut, breathe, settle.
- The two halves give each product a natural colour slot.

### Exact geometry (48 × 48 grid)

- Block: 48 × 48 square, corner radius **16** (one third of the side).
- Cut: a cubic Bézier from `(34, −8)` to `(14, 56)` with control points `(34, 24)` and `(14, 24)`. It is point-symmetric around the centre `(24, 24)`, enters the top edge at x ≈ 34 and leaves the bottom edge at x ≈ 14.
- Cut width: **5 units** (≈ 10.4 % of the block). On the favicon (≤ 32 px) widen it to **6.5** so it stays visible.
- Both halves use the same colour in the parent logo.

Reference SVG (brand blue). When inlining several logos on one page, give each `clipPath` and `mask` a unique id.

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 48 48" width="48" height="48" role="img" aria-label="SaveBytes">
  <defs>
    <clipPath id="sb-c"><rect width="48" height="48" rx="16"/></clipPath>
    <mask id="sb-m" maskUnits="userSpaceOnUse" x="-8" y="-8" width="64" height="64">
      <rect x="-8" y="-8" width="64" height="64" fill="#fff"/>
      <path d="M34 -8C34 24 14 24 14 56" fill="none" stroke="#000" stroke-width="5"/>
    </mask>
  </defs>
  <g clip-path="url(#sb-c)" mask="url(#sb-m)">
    <path d="M-8 -8H34C34 24 14 24 14 56H-8Z" fill="#2F5BFF"/>  <!-- left half -->
    <path d="M56 -8H34C34 24 14 24 14 56H56Z" fill="#2F5BFF"/>  <!-- right half -->
  </g>
</svg>
```

### Lockups

| Lockup | Construction | Use |
| --- | --- | --- |
| Horizontal (primary) | Mark 48 + gap 14 + wordmark at 40 px, cap height centred on the mark | Website header, documents, sign-in |
| Stacked | Mark 72 centred over the wordmark at 36 px, gap 18 | Splash screens, social avatars, square spaces |
| Mark only | The symbol alone | App header when the name is visible elsewhere, loaders, favicon |
| SaveBytes Health | Right half in `teal-600`; "Health" in IBM Plex Sans Medium, `teal-700`, 11 px after the wordmark at 40 px scale | Health product, marketing for Health |
| SaveBytes Platform | Right half in `navy-900`; "Platform" in Medium, `navy-700` | Platform pages, partner material |

### Colourways

Only these: (1) blue mark + navy wordmark on white, (2) all navy, (3) all white on navy, brand blue or photography. Product lockups recolour only the right half.

### App icon and favicon

- **App icon:** white mark on a `navy-900` tile. 108 × 108 canvas (Android adaptive), tile corner radius 24, mark 60 × 60 centred (inside the safe zone). Export 1024 px for iOS and Play Store.
- **Favicon:** `navy-900` tile 32 × 32, radius 7, white mark 20 × 20 centred, cut width 6.5. Provide SVG + 16/32/48 PNG + `apple-touch-icon` 180 px.

### Rules

- Clear space: one quarter of the mark's height on every side.
- Minimum size: mark 16 px; horizontal lockup 96 px wide.
- Never rotate, skew, outline, add shadows or gradients, put the mark in a circle, change the corner radius, change the curve, or retype the wordmark in another font.
- Customer (white-label) deployments show the customer's logo. A small "Powered by SaveBytes" with the navy mark may appear in the footer.

### Logo files already produced

`savebytes-logo-horizontal.svg`, `savebytes-logo-horizontal-navy.svg`, `savebytes-logo-horizontal-white.svg`, `savebytes-logo-stacked.svg`, `savebytes-mark.svg`, `savebytes-mark-navy.svg`, `savebytes-mark-white.svg`, `savebytes-health-logo.svg`, `savebytes-health-mark.svg`, `savebytes-platform-logo.svg`, `savebytes-app-icon.svg`, `savebytes-favicon.svg`. Use these as the master artwork.

---

## 4. Logo motion

The animated logo is the brand's signature moment. Use it for the website hero intro, the product splash screen, video intros and loading states.

### Storyboard (1.6 s, plays once)

| Time | What happens | Easing |
| --- | --- | --- |
| 0–320 ms | The solid block lands: scale 0.5 → 1, rotate −90° → 0°, opacity 0 → 1 | `cubic-bezier(0.2, 0.8, 0.2, 1)` |
| 320–900 ms | The cut draws through the block from top to bottom (stroke-dashoffset on the mask path) | `cubic-bezier(0.6, 0, 0.2, 1)` |
| 900–1200 ms | The two halves breathe apart 2.5 units (left half moves left-down, right half right-up) | `cubic-bezier(0.3, 0.7, 0.3, 1)` |
| 1200–1600 ms | Halves settle back; wordmark fades and slides in 8 px from the left | ease-out |

Variants:
- **Loader:** the cut redraws every 1.4 s on the static block. Never use a spinner when the mark can do the job.
- **Hover (header logo):** halves breathe apart 1.5 units over 200 ms.
- **Reduced motion:** show the final state immediately, fade in over 200 ms.

### Reference implementation

```html
<svg viewBox="0 0 48 48" width="96" height="96" role="img" aria-label="SaveBytes" class="sb-anim">
  <defs>
    <clipPath id="sba-c"><rect width="48" height="48" rx="16"/></clipPath>
    <mask id="sba-m" maskUnits="userSpaceOnUse" x="-8" y="-8" width="64" height="64">
      <rect x="-8" y="-8" width="64" height="64" fill="#fff"/>
      <path class="sb-cut" pathLength="1" d="M34 -8C34 24 14 24 14 56" fill="none" stroke="#000" stroke-width="5"/>
    </mask>
  </defs>
  <g class="sb-block">
    <g clip-path="url(#sba-c)" mask="url(#sba-m)">
      <path class="sb-l" d="M-8 -8H34C34 24 14 24 14 56H-8Z" fill="var(--color-brand)"/>
      <path class="sb-r" d="M56 -8H34C34 24 14 24 14 56H56Z" fill="var(--color-brand)"/>
    </g>
  </g>
</svg>

<style>
  .sb-block { transform-box: fill-box; transform-origin: center;
              animation: sb-land 320ms cubic-bezier(.2,.8,.2,1) both; }
  .sb-cut   { stroke-dasharray: 1; stroke-dashoffset: 1;
              animation: sb-cut 580ms cubic-bezier(.6,0,.2,1) 320ms forwards; }
  .sb-l     { animation: sb-l 700ms cubic-bezier(.3,.7,.3,1) 900ms both; }
  .sb-r     { animation: sb-r 700ms cubic-bezier(.3,.7,.3,1) 900ms both; }
  @keyframes sb-land { from { transform: scale(.5) rotate(-90deg); opacity: 0 } to { transform: none; opacity: 1 } }
  @keyframes sb-cut  { to { stroke-dashoffset: 0 } }
  @keyframes sb-l    { 40% { transform: translate(-2.5px, 1px) } 100% { transform: none } }
  @keyframes sb-r    { 40% { transform: translate(2.5px, -1px) } 100% { transform: none } }
  @media (prefers-reduced-motion: reduce) {
    .sb-block, .sb-l, .sb-r { animation: none }
    .sb-cut { animation: none; stroke-dashoffset: 0 }
  }
</style>
```

---

## 5. Colour

### 5.1 Scales

Every scale has 10 steps (index 0–9) so it maps directly onto Mantine's colour tuples. Step 6 is the "main" shade.

**Blue: brand and action**

| Token | Hex | Use |
| --- | --- | --- |
| `blue-50` (0) | `#EEF2FF` | Selected rows, active nav background, info backgrounds |
| `blue-100` (1) | `#DCE4FF` | Hover on tinted surfaces |
| `blue-200` (2) | `#B9C8FF` | Focus halos, chart fills |
| `blue-300` (3) | `#93AAFF` | Decorative only |
| `blue-400` (4) | `#6E8CFF` | Decorative; brand blue on dark backgrounds |
| `blue-500` (5) | `#4E72FF` | Large display accents |
| **`blue-600`** (6) | **`#2F5BFF`** | **SaveBytes Blue.** Primary buttons, links on dark, the mark |
| `blue-700` (7) | `#2448E0` | Hover; inline links on white |
| `blue-800` (8) | `#1B37B8` | Pressed |
| `blue-900` (9) | `#142A8C` | Text on `blue-50` |

**Navy: text and neutrals (cool greys tinted with navy)**

| Token | Hex | Use |
| --- | --- | --- |
| `navy-50` (0) | `#F5F7FA` | App canvas, alternating website sections |
| `navy-100` (1) | `#EEF1F5` | Table headers, wells, code blocks |
| `navy-200` (2) | `#E3E7EE` | Borders, dividers |
| `navy-300` (3) | `#C5CCD8` | Strong dividers, disabled borders |
| `navy-400` (4) | `#8A94A6` | Input and control borders (3:1 on white) |
| `navy-500` (5) | `#6B7588` | Secondary icons |
| `navy-600` (6) | `#5A6478` | Muted text, labels, metadata |
| `navy-700` (7) | `#3D4A5C` | Secondary text |
| `navy-800` (8) | `#1F2D44` | Hover on dark fills; dark section cards |
| **`navy-900`** (9) | **`#0B1B33`** | **SaveBytes Navy.** Body text, headings, dark sections, app icon tile |

**Teal: SaveBytes Health accent only**

| Token | Hex | Use |
| --- | --- | --- |
| `teal-50` | `#E6F6F4` | Health tinted backgrounds |
| `teal-600` | `#0E9F8E` | Health mark half, Health accents. As text only at 24 px+ (3.3:1) |
| `teal-700` | `#0B7D70` | Health accent text at any size (5.0:1) |

Future products get their own single accent (for example violet or amber), used the same way teal is used for Health. Blue and navy always stay.

### 5.2 Semantic tokens

| Token | Value | Meaning |
| --- | --- | --- |
| `surface` | `#FFFFFF` | Page and card background |
| `surface-subtle` | `navy-50` | App canvas, alternate website sections |
| `surface-sunken` | `navy-100` | Wells, table headers, code |
| `surface-inverse` | `navy-900` | Dark sections, footer |
| `line` | `navy-200` | Card borders, dividers |
| `line-strong` | `navy-300` | Heavier separators |
| `border-control` | `navy-400` | Inputs, checkboxes, selects |
| `text` | `navy-900` | Primary text |
| `text-secondary` | `navy-700` | Secondary text |
| `text-muted` | `navy-600` | Labels, metadata, placeholders |
| `text-inverse` | `#FFFFFF` | Text on dark and brand fills |
| `brand` | `blue-600` | Primary action, selection, the mark |
| `brand-hover` | `blue-700` | Hover |
| `brand-pressed` | `blue-800` | Pressed |
| `brand-soft` | `blue-50` | Tinted selection background |
| `on-brand` | `#FFFFFF` | Text on brand |
| `link` | `blue-700` | Inline links on white |
| `focus-ring` | `blue-600` | 2 px outline, 2 px offset |
| `health` / `health-text` / `health-soft` | `teal-600` / `teal-700` / `teal-50` | Health product accent |

### 5.3 Status colours (fixed, never white-labelled)

| Token | Text / icon | Soft background | Meaning |
| --- | --- | --- | --- |
| `success` | `#0F7552` | `#E7F6EF` | Completed, normal, saved |
| `warning` | `#B45309` | `#FEF3E2` | Abnormal (high/low), pending, needs attention |
| `danger` | `#C8102E` | `#FDECEE` | Errors, destructive actions, allergies, critical results |
| `info` | `#2448E0` | `#EEF2FF` | Neutral information |

Every status also shows an icon and a word. Colour alone never carries meaning.

### 5.4 Usage ratios

- Website: roughly 80 % white and `navy-50`, 15 % navy (text, one or two dark sections, footer), 5 % blue (buttons, links, the mark, small highlights).
- Product: even less blue. Most colour on a clinical screen should come from status, not brand.

### 5.5 Contrast (WCAG 2.2 AA, verified)

- `text`, `text-secondary`, `text-muted` pass 4.5:1 on `surface`, `surface-subtle` and `surface-sunken`.
- `brand` on white is 5.2:1, so white text on brand buttons passes.
- Each status colour passes 4.5:1 on white and on its own soft background.
- `border-control` and `focus-ring` pass 3:1 on white.
- On `navy-900`, use white or `navy-200` for text, and `blue-400` (not `blue-600`) for links and accents.

---

## 6. Typography

### Family

**IBM Plex**, free and open source (Google Fonts):
- **IBM Plex Sans:** everything readable (UI, website, headings). Weights 400, 500, 600.
- **IBM Plex Mono:** numbers that get compared or copied (IDs, doses, vitals, prices, code, timestamps in tables). Weights 400, 500.
- **IBM Plex Sans Devanagari:** reserved for Hindi and Marathi (prescriptions, patient messages) later.

Why Plex: it looks engineered without feeling cold, it has true tabular figures, it separates 0/O and 1/l/I clearly, and its Devanagari companion matches it exactly.

```html
<link rel="preconnect" href="https://fonts.googleapis.com">
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500;600&display=swap" rel="stylesheet">
```

(In Next.js use `next/font/google` with `IBM_Plex_Sans` and `IBM_Plex_Mono` instead.)

### Type scale

| Style | Size / line height | Weight | Tracking | Use |
| --- | --- | --- | --- | --- |
| `display-xl` | 64 / 68 (mobile 40 / 44) | 600 | −2 % | Website hero only |
| `display` | 44 / 52 (mobile 32 / 38) | 600 | −1.5 % | Website section titles |
| `h1` | 32 / 40 | 600 | −1 % | Page titles |
| `h2` | 24 / 32 | 600 | −0.5 % | Section titles, card titles on website |
| `h3` | 18 / 26 | 600 | 0 | Card titles in product, sub-sections |
| `h4` | 15 / 22 | 600 | 0 | Small headings inside cards |
| `body-lg` | 18 / 28 | 400 | 0 | Website lead paragraphs |
| `body` | 16 / 26 | 400 | 0 | Website body text |
| `body-sm` | 14 / 20 | 400 | 0 | Product default text, dense UI |
| `label` | 13 / 18 | 500 | 0 | Form labels, buttons (small), tabs |
| `caption` | 12 / 16 | 400 | 0 | Metadata, helper text. Minimum size anywhere |
| `overline` | 12 / 16 | 500 | +8 %, uppercase | Section eyebrows, in Plex Mono |
| `data-lg` | 24 / 32 Mono | 500 | 0 | Big numbers: vitals, website stat blocks |
| `data` | 14 / 20 Mono | 400 | 0 | IDs, doses, values in tables |
| `code` | 13 / 20 Mono | 400 | 0 | Code snippets |

Rules:
- Headings use sentence case. Never all caps except `overline`.
- Max line length 68 characters for body text.
- No italics for emphasis in product UI; use weight 500.
- The `overline` in Plex Mono is a quiet signature of the brand (it echoes code comments). Use it above website section titles, for example `01 / WHAT WE BUILD`.

---

## 7. Space, layout, shape, elevation

### Spacing (4 px base)

`space-1` 4 · `space-2` 8 · `space-3` 12 · `space-4` 16 · `space-5` 20 · `space-6` 24 · `space-8` 32 · `space-10` 40 · `space-12` 48 · `space-16` 64 · `space-20` 80 · `space-24` 96 · `space-32` 128

- Website section padding: `space-24` (96) desktop, `space-16` (64) mobile.
- Card padding: `space-6` website, `space-4` product (dense).
- Gap between cards: `space-6`.

### Grid and breakpoints

| Breakpoint | Min width | Columns | Gutter | Side margin |
| --- | --- | --- | --- | --- |
| `sm` | 0 | 4 | 16 | 20 |
| `md` | 640 | 8 | 20 | 32 |
| `lg` | 1024 | 12 | 24 | 48 |
| `xl` | 1280 | 12 | 24 | auto, content max 1200 |

Website content max width: **1200 px**. Reading width for long text: **680 px**.

### Radius

| Token | Value | Use |
| --- | --- | --- |
| `radius-xs` | 4 | Badges, checkboxes, tags |
| `radius-sm` | 6 | Buttons, inputs, tabs |
| `radius-md` | 10 | Cards, panels, popovers |
| `radius-lg` | 16 | Dialogs, large website feature panels, product screenshots |
| `radius-full` | 9999 | Avatars, dots, toggles, pill tags |

`radius-lg` repeats the logo's own corner ratio (16 on 48). Large surfaces should feel like they belong to the mark.

### Elevation

Borders do most of the work; shadows are rare and navy-tinted.

| Token | Value | Use |
| --- | --- | --- |
| `shadow-sm` | `0 1px 2px rgba(11,27,51,.06)` | Resting cards (with a border) |
| `shadow-md` | `0 4px 12px rgba(11,27,51,.08), 0 1px 2px rgba(11,27,51,.06)` | Menus, popovers, sticky header after scroll |
| `shadow-lg` | `0 16px 40px rgba(11,27,51,.14), 0 2px 6px rgba(11,27,51,.06)` | Dialogs, floating product screenshots on the website |

### Control sizes

`control-sm` 32 · `control-md` 40 (default) · `control-lg` 48 (website CTAs, touch screens). Icons: 16 in text, 20 in buttons and nav.

---

## 8. Motion, iconography, imagery

### Motion tokens

| Token | Value | Use |
| --- | --- | --- |
| `duration-fast` | 120 ms | Hover, press, colour changes |
| `duration-base` | 200 ms | Menus, tabs, tooltips, accordions |
| `duration-slow` | 320 ms | Dialogs, drawers, page sections entering |
| `duration-logo` | 1600 ms | Logo intro (section 4) |
| `ease-out` | `cubic-bezier(0.2, 0.8, 0.2, 1)` | Default for things entering |
| `ease-in-out` | `cubic-bezier(0.6, 0, 0.2, 1)` | Things that move from A to B |

Website scroll reveals: content fades in and rises 12 px, once, staggered 60 ms between siblings. No parallax on text, no bouncing, no infinite decorative loops (except the logo loader). Everything respects `prefers-reduced-motion`.

### Iconography

- **Lucide** icon set (MIT), stroke width **1.75**, round caps and joins, sizes 16 and 20.
- Icons inherit `currentColor`. Icon-only buttons always have an `aria-label`.
- No emoji. No medical crosses, stethoscopes, heartbeat lines, DNA helices or pills as decoration.

### Imagery and graphic language

- **Real product UI is the hero image.** Show actual (or faithfully designed) screens with fictional data, framed in a `radius-lg` panel with `shadow-lg`. No device mockups with fake reflections.
- **No stock photos** of smiling doctors, handshakes or people pointing at screens.
- **Graphic motif: the cut.** The S-curve from the logo can be used large and cropped, as a thin `line` stroke or a `blue-50` field, to divide sections or frame content. Use it at most once per page section, never as wallpaper.
- **Grid motif:** a faint dot grid (1 px dots, `navy-200`, 24 px pitch) behind technical sections (Platform, architecture). It nods to graph paper and engineering.
- Diagrams (for example data flow or modules) are drawn with the same tokens: `line` strokes, `radius-md` boxes, Plex labels.

---

## 9. Core components

Build each with all states: **default, hover, focus-visible, active/pressed, disabled, loading (where relevant), error (where relevant)**. Focus is always a 2 px `focus-ring` outline with 2 px offset.

| Component | Variants and notes |
| --- | --- |
| **Button** | `primary` (brand fill, white text), `secondary` (white, `border-control`, navy text), `ghost` (no border, navy text, `navy-50` hover), `danger` (danger fill), `link`. Sizes sm/md/lg. Optional leading icon. Loading state: the logo's cut-loader at 16 px or a simple spinner, with the label kept. One primary button per view. |
| **Link** | `link` colour, underline on hover, 1 px offset 3 px. On dark: `blue-400`. |
| **Text input** | Label above (`label` style), 40 px height, `border-control`, `radius-sm`. Helper text below. Error: `danger` border, error icon + message. Mono variant for IDs and numbers. |
| **Textarea, Select, Combobox (search)** | Same anatomy as input. Search has a leading icon and a clear button. |
| **Checkbox, Radio, Switch** | 16 px boxes, `radius-xs` on checkbox. Checked uses `brand`. Switch track `navy-300` off, `brand` on. |
| **Badge / Tag** | Tones: neutral, brand, success, warning, danger, health. Soft by default, solid variant for emphasis. Optional dot or icon. 12 px text, `radius-xs`. |
| **Alert / Callout** | info, success, warning, danger. Icon + title + text + optional action. Soft background, no left-border stripe. |
| **Card** | White, `line` border, `radius-md`, optional header (title, subtitle, actions). Website feature cards use `radius-lg` and `space-6` padding. |
| **Tabs** | Underline style: active tab `text` colour with a 2 px `brand` bar. Optional count. |
| **Table** | Header row `surface-sunken`, `label` style. Rows 44 px (36 dense). Numbers right-aligned in mono. Row hover `navy-50`, selected `brand-soft`. |
| **Navigation bar (website)** | Logo left, links centre or right, primary CTA right. Transparent on top of the hero, white with `line` border and `shadow-md` after scroll. Mobile: full-screen sheet menu. |
| **Side navigation (product)** | `navy-900` or white variant; active item `brand-soft` background + `brand` text. |
| **Dialog, Drawer** | `radius-lg`, `shadow-lg`, overlay `rgba(11,27,51,.48)`. |
| **Tooltip, Popover, Menu** | `navy-900` tooltip with white text; menus white with `shadow-md`. |
| **Toast** | Bottom-right, status icon + text + optional undo, auto-hides after 5 s (never for errors). |
| **Empty, loading, error states** | Short sentence, one action. Loading uses skeletons in `navy-100`, not spinners, for content areas. |
| **Avatar** | Initials on `blue-50` with `blue-900` text, `radius-full`. |
| **Pagination, Breadcrumbs, Stepper, File upload, Date and time picker** | Same tokens; dates displayed as `12 Mar 2026`, times as `10:30 am`. |
| **Code block** | `surface-sunken`, Plex Mono 13, `radius-md`, copy button. |

---

## 10. Website patterns (savebytes.in)

Build these as reusable sections. The website brief (separate file) says what goes in each.

| Pattern | Spec |
| --- | --- |
| **Header** | 72 px tall, max width 1200, horizontal logo at 28 px mark height. Links: Products, Platform, About, Contact. CTA: secondary "Contact" or primary "Join early access". |
| **Hero** | Left: `overline` in mono, `display-xl` headline (max 2 lines), `body-lg` lead (max 2 sentences), two buttons. Right or below: the animated logo at large size or a product screenshot panel. Generous whitespace: at least `space-24` above and below. |
| **Section header** | Mono overline (`02 / HOW WE WORK`), `display` title, optional `body-lg` intro, left-aligned (centred only for short closing sections). |
| **Feature grid** | 3 columns desktop, 1 mobile. Each card: 20 px Lucide icon in a 40 px `blue-50` square with `radius-sm`, `h3` title, 2–3 line `body` description. |
| **Product showcase** | Large screenshot panel (`radius-lg`, `shadow-lg`, `line` border) beside a short list of 3–4 points. Alternate left and right. |
| **Principles / values** | Numbered list in mono (`01`, `02`, `03`) with short bold statements and one supporting line each. |
| **Story block** | Narrow 680 px column, `body-lg`, optional pull quote in `h2` size with the cut motif beside it. |
| **Dark band** | `surface-inverse` background, white text, `blue-400` accents, dot-grid motif. Used once per page at most. |
| **Timeline / roadmap** | Vertical line in `line`, nodes as small split-byte marks: filled for done, outlined for next. Labels in mono. |
| **CTA band** | `brand-soft` or `surface-inverse` background, one sentence, one primary button. |
| **Contact / early access form** | Name, clinic or company, email or phone, role (select), message. Clear privacy line below. Success state in place, no redirect. |
| **Footer** | `surface-inverse`. Logo (white), short line about SaveBytes, columns (Products, Company, Legal), contact email, © line. "Made in Navi Mumbai" is a nice human touch. |

Responsive: every section must work at 360 px wide with no horizontal scroll. Touch targets are at least 44 px.

---

## 11. Product extensions: SaveBytes Health

Used later in the web app; define them now so the website can show realistic product screens.

### Stack fit

The Health app uses React + `@medplum/react`, which is built on **Mantine 7**. The design tokens map straight into a Mantine theme in `packages/ui`, and the tenant's `brand` scale is swapped at load time (branding resolved by hostname).

```ts
import { createTheme } from '@mantine/core';

export const saveBytesTheme = createTheme({
  primaryColor: 'brand',
  primaryShade: 6,
  colors: {
    brand: ['#EEF2FF','#DCE4FF','#B9C8FF','#93AAFF','#6E8CFF','#4E72FF','#2F5BFF','#2448E0','#1B37B8','#142A8C'],
    gray:  ['#F5F7FA','#EEF1F5','#E3E7EE','#C5CCD8','#8A94A6','#6B7588','#5A6478','#3D4A5C','#1F2D44','#0B1B33'],
  },
  black: '#0B1B33',
  fontFamily: '"IBM Plex Sans", system-ui, sans-serif',
  fontFamilyMonospace: '"IBM Plex Mono", ui-monospace, monospace',
  headings: { fontFamily: '"IBM Plex Sans", system-ui, sans-serif', fontWeight: '600' },
  fontSizes: { xs: '12px', sm: '13px', md: '14px', lg: '16px', xl: '18px' },
  spacing: { xs: '8px', sm: '12px', md: '16px', lg: '24px', xl: '32px' },
  radius: { xs: '4px', sm: '6px', md: '10px', lg: '16px', xl: '16px' },
  defaultRadius: 'sm',
});
```

### Clinical components

| Component | Data (FHIR) | Spec |
| --- | --- | --- |
| **Patient banner** | Patient, AllergyIntolerance | Full width, fixed at the top of any single-patient screen. Name (never truncated), age and gender, Born (DD MMM YYYY, "(est.)" if estimated), MRN (mono), Mobile (mono). Allergy strip below: "Known allergies" (danger-soft, alert icon, items with reactions), "No known allergies" (muted, check icon), "Allergies not recorded" (muted, dash icon). Visit status badge on the right. |
| **Vitals strip** | Observation (vital-signs) | Cells: label, big mono value, unit, then either time or a flag. BP, Pulse, Temp (°F), SpO₂, Weight, Height, BMI. |
| **Lab results table** | DiagnosticReport → Observation | Test, result (mono, right-aligned, with unit), flag, reference range. |
| **Result flags** | Observation.interpretation | Arrow icon + word + colour: High / Low in `warning`; Critical high / Critical low in `danger`. Normal shows nothing (or "Normal" muted). |
| **Prescription table** | MedicationRequest (grouped by visit) | #, Medicine (name, strength, form; generic below in muted), Dose, Frequency in Indian `1-0-1` notation (mono, with an on-screen legend "morning – afternoon – night"), When (before/after food), Duration, Instructions. Voided line: struck through, "Voided" danger badge and reason (status `entered-in-error`). |
| **Signed record** | Encounter, Composition | Lock icon + "Signed by Dr … · 12 Mar 2026, 11:42 am". Record becomes read-only. |
| **OPD queue** | Appointment, Encounter | Rows: token number (mono, large), name, age/sex · reason, time, status badge. The patient in consult is highlighted with `brand-soft`. |
| **AI draft block** | (AI gateway output) | `warning-soft` background, "Draft, review before saving" label, accept/edit actions. Never saved silently. |

### Visit states (from the OPD state machine)

| State | Label | Badge |
| --- | --- | --- |
| booked | Booked | neutral |
| arrived | Checked in | brand (soft) |
| vitals | Vitals taken | brand (soft) |
| in-consult | In consult | brand (solid) |
| signed | Signed | success |
| closed | Closed | neutral |
| noshow | No-show | warning |

### Clinical display rules

- Dates `12 Mar 2026`; times `10:30 am`; ages `34 y`, `8 m`, `12 d`.
- Every value has a unit. Never a bare number.
- Densities: comfortable (website demos, patient portal) and compact (doctor and reception screens: `body-sm`, 36 px rows, `control-sm`).
- Target screen: 1280 × 720 laptop with no horizontal scroll; reception also on 10" tablets.

---

## 12. White-label rules

**Tenants can change:** display name, logo, favicon, the `brand` colour scale (generated from one validated primary colour), prescription PDF header and footer, domain.

**Tenants cannot change:** status colours, navy text and neutrals, typography, spacing, radii, component behaviour, focus styles, validation, security and privacy affordances, accessibility.

**Validation:** a tenant primary colour must reach 4.5:1 against white (it carries white button text). The platform generates steps 0–9 from it; if it fails, suggest the nearest darker shade that passes.

---

## 13. Accessibility baseline

- WCAG 2.2 AA throughout.
- Visible focus on every interactive element.
- Full keyboard support; logical tab order matches visual order.
- All form inputs have visible labels (no placeholder-only labels).
- Status is never colour alone.
- Respect `prefers-reduced-motion`.
- Minimum text 12 px; minimum touch target 44 × 44.
- Images of the product carry descriptive alt text; decorative motifs are `aria-hidden`.

---

## 14. Ready-to-use token code

### CSS custom properties

```css
:root {
  /* Blue */
  --blue-50:#EEF2FF; --blue-100:#DCE4FF; --blue-200:#B9C8FF; --blue-300:#93AAFF; --blue-400:#6E8CFF;
  --blue-500:#4E72FF; --blue-600:#2F5BFF; --blue-700:#2448E0; --blue-800:#1B37B8; --blue-900:#142A8C;
  /* Navy */
  --navy-50:#F5F7FA; --navy-100:#EEF1F5; --navy-200:#E3E7EE; --navy-300:#C5CCD8; --navy-400:#8A94A6;
  --navy-500:#6B7588; --navy-600:#5A6478; --navy-700:#3D4A5C; --navy-800:#1F2D44; --navy-900:#0B1B33;
  /* Teal (Health) */
  --teal-50:#E6F6F4; --teal-600:#0E9F8E; --teal-700:#0B7D70;

  /* Semantic */
  --color-surface:#FFFFFF; --color-surface-subtle:var(--navy-50); --color-surface-sunken:var(--navy-100);
  --color-surface-inverse:var(--navy-900);
  --color-line:var(--navy-200); --color-line-strong:var(--navy-300); --color-border-control:var(--navy-400);
  --color-text:var(--navy-900); --color-text-secondary:var(--navy-700); --color-text-muted:var(--navy-600);
  --color-text-inverse:#FFFFFF;
  --color-brand:var(--blue-600); --color-brand-hover:var(--blue-700); --color-brand-pressed:var(--blue-800);
  --color-brand-soft:var(--blue-50); --color-on-brand:#FFFFFF; --color-link:var(--blue-700);
  --color-focus-ring:var(--blue-600);
  --color-health:var(--teal-600); --color-health-text:var(--teal-700); --color-health-soft:var(--teal-50);
  --color-success:#0F7552; --color-success-soft:#E7F6EF;
  --color-warning:#B45309; --color-warning-soft:#FEF3E2;
  --color-danger:#C8102E;  --color-danger-soft:#FDECEE;
  --color-info:var(--blue-700); --color-info-soft:var(--blue-50);

  /* Type */
  --font-sans:"IBM Plex Sans", system-ui, -apple-system, "Segoe UI", sans-serif;
  --font-mono:"IBM Plex Mono", ui-monospace, "SF Mono", Menlo, monospace;

  /* Space */
  --space-1:4px; --space-2:8px; --space-3:12px; --space-4:16px; --space-5:20px; --space-6:24px;
  --space-8:32px; --space-10:40px; --space-12:48px; --space-16:64px; --space-20:80px; --space-24:96px; --space-32:128px;

  /* Radius */
  --radius-xs:4px; --radius-sm:6px; --radius-md:10px; --radius-lg:16px; --radius-full:9999px;

  /* Shadow */
  --shadow-sm:0 1px 2px rgba(11,27,51,.06);
  --shadow-md:0 4px 12px rgba(11,27,51,.08), 0 1px 2px rgba(11,27,51,.06);
  --shadow-lg:0 16px 40px rgba(11,27,51,.14), 0 2px 6px rgba(11,27,51,.06);

  /* Motion */
  --duration-fast:120ms; --duration-base:200ms; --duration-slow:320ms; --duration-logo:1600ms;
  --ease-out:cubic-bezier(.2,.8,.2,1); --ease-in-out:cubic-bezier(.6,0,.2,1);

  /* Sizes */
  --control-sm:32px; --control-md:40px; --control-lg:48px;
  --content-max:1200px; --reading-max:680px;
}
```

### Tailwind CSS v4 theme

```css
@import "tailwindcss";

@theme {
  --color-blue-50:#EEF2FF; --color-blue-100:#DCE4FF; --color-blue-200:#B9C8FF; --color-blue-300:#93AAFF;
  --color-blue-400:#6E8CFF; --color-blue-500:#4E72FF; --color-blue-600:#2F5BFF; --color-blue-700:#2448E0;
  --color-blue-800:#1B37B8; --color-blue-900:#142A8C;
  --color-navy-50:#F5F7FA; --color-navy-100:#EEF1F5; --color-navy-200:#E3E7EE; --color-navy-300:#C5CCD8;
  --color-navy-400:#8A94A6; --color-navy-500:#6B7588; --color-navy-600:#5A6478; --color-navy-700:#3D4A5C;
  --color-navy-800:#1F2D44; --color-navy-900:#0B1B33;
  --color-teal-50:#E6F6F4; --color-teal-600:#0E9F8E; --color-teal-700:#0B7D70;
  --color-brand:#2F5BFF; --color-brand-soft:#EEF2FF;
  --color-success:#0F7552; --color-warning:#B45309; --color-danger:#C8102E;

  --font-sans:"IBM Plex Sans", system-ui, sans-serif;
  --font-mono:"IBM Plex Mono", ui-monospace, monospace;

  --radius-xs:4px; --radius-sm:6px; --radius-md:10px; --radius-lg:16px;

  --shadow-sm:0 1px 2px rgba(11,27,51,.06);
  --shadow-md:0 4px 12px rgba(11,27,51,.08), 0 1px 2px rgba(11,27,51,.06);
  --shadow-lg:0 16px 40px rgba(11,27,51,.14), 0 2px 6px rgba(11,27,51,.06);

  --ease-out:cubic-bezier(.2,.8,.2,1);
}
```

---

## 15. Do and don't

**Do**
- Leave space. If a section feels empty, it is probably right.
- Show real product screens with realistic Indian names and data (fictional).
- Use mono for numbers and the section overlines.
- Keep one primary action per view.
- Keep claims specific and true.

**Don't**
- Purple-blue gradients, glassmorphism, glowing orbs, neon, 3D blobs.
- Cards with coloured left borders.
- Emoji, medical clichés, stock photos.
- Centred text everywhere. Default to left-aligned.
- Fake numbers, fake testimonials, fake logos of customers, or compliance badges that have not been earned (for example ABDM, ISO, HIPAA).

---

## 16. Deliverables checklist (for Claude Design)

- [ ] Foundations page: colour scales, semantic tokens, status colours with contrast notes
- [ ] Type specimen with the full scale
- [ ] Spacing, radius, elevation, grid and breakpoint reference
- [ ] Logo sheet: all lockups, colourways, clear space, minimum size, misuse examples
- [ ] App icon and favicon
- [ ] Animated logo (hero intro, loader, hover, reduced motion)
- [ ] Core components with all states (section 9)
- [ ] Website section patterns (section 10)
- [ ] SaveBytes Health clinical components with fictional data (section 11)
- [ ] White-label example: the same screen in SaveBytes blue and in one example tenant colour
- [ ] Exportable tokens: CSS variables, Tailwind v4 theme, Mantine theme
