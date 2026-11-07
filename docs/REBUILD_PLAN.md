# SaveBytes website: rebuild plan

Status: draft for your review. Nothing has been built or deleted yet.

## 1. What you asked for

- One company site for **SaveBytes**. SaveBytes Health is its first product, not its headline.
- Minimal and calm: few colours, few pictures, short words. Say only what a visitor needs: we are building software for health records, and if you are interested, get in touch.
- **Remove** the Platform, Security and Roadmap pages, the dark theme and its toggle, the cut motif, the clinic-morning animation and the old design system. Start from scratch.
- **Keep** the logo exactly as it is, the About wording, the Contact wording (in a new layout), and the footer's wording with the full-width "SaveBytes" name.
- A **standard product page** that any future product can use, filled with different content.
- **Reveal little.** Version 1 is complete; ABDM, laboratory, pharmacy and a patient app are coming. No dates, no conditions, no internal plans.
- Light theme only.

Your answers this round:

| Question | Answer |
|---|---|
| Typeface | A new one, chosen in the design round. IBM Plex stays in the product only. |
| Colour | White and near-black, with SaveBytes blue only on the logo and the one action. |
| Product picture | One quiet, rebuilt product screen on the Health page. Nothing else is pictured. |
| Headline | I draft options (section 4). |

## 2. What the best sites do (research)

I read Apple (home and a product page), Anthropic, Stripe and Linear.

1. **One action, repeated quietly.** Apple has no button in its nav. Anthropic has one ("Try Claude").
2. **Short headlines.** First screens use 2 to 10 words and one short line under them. No marketing paragraph comes first.
3. **The product is the picture.** Apple shows the object on a plain ground. Linear and Stripe show real interface. There is no decoration.
4. **On a company home page, each product is one tile:** its name, one line, and "Learn more".
5. **Product pages are chapters that repeat one unit:** a headline, one picture or none, and a short paragraph. Detail goes further down or into footnotes.
6. **Colour comes from the product, not the page.** The page itself is black, white and grey.

UX rules the build follows: one clear action per page; text at 17 to 19px with lines of 60 to 75 characters; at least 4.5:1 contrast; 44px touch targets; visible focus; keyboard reachable; nothing that moves without a reason; content visible without script; fast on a mid-range Android phone.

## 3. Site map

| Page | URL | Purpose |
|---|---|---|
| Home | `/` | Who SaveBytes is, our products, how to get in touch |
| SaveBytes Health | `/health` | The product page, built from the standard product template |
| About | `/about` | Your story (current wording) |
| Contact | `/contact` | Form, email and WhatsApp (current wording, new layout) |
| Privacy | `/privacy` | Unchanged wording |

**Header:** the logo, then Health, About and Contact. Contact is the one action. More products appear in the nav automatically when they are added.

**Footer:** current wording and the full-width SaveBytes name. Links: Products (Health), Company (About, Contact), Legal (Privacy). The page-weight line stays.

## 4. Content

### Home

Headline options (pick one, or keep the current line):

1. "Software that gets out of the way."
2. "Quiet software for busy places."
3. "Fewer steps. Clearer records."
4. Keep: "Software that wastes nothing."

- **Line under the headline:** "SaveBytes builds focused software from Navi Mumbai, starting with patient records for clinics."
- **Action:** "Get in touch".
- **Products:** one tile per product. SaveBytes Health: "Patient records for clinics, in one place." with "Learn more". The tile has no picture, or at most the product mark.
- **A short company note:** two sentences from the About page and a link to it. There is no founder photo on Home.
- **Footer.**

### SaveBytes Health (the standard product page)

Every product page uses these blocks, in this order. A product leaves out any block it has nothing for.

1. **Name, line and status.** "SaveBytes Health". "Patient records for clinics, in one place." "Version 1 is ready." Action: "Get in touch".
2. **The one picture.** A single, quiet, rebuilt screen with fictional data. It is the only image on the page.
3. **What it does now.** Four short lines: register patients; book and run the day's queue; record vitals and the consultation; sign and print the prescription.
4. **Coming soon.** ABDM, laboratory, pharmacy, and a patient app. No dates.
5. **Your data.** Three short lines: each clinic's records are kept separate; staff see only what their role allows; every change is recorded and records can be exported.
6. **Close.** "Run a clinic and want to try it? Get in touch."

Products live in one data file (`src/products/`). A new product is a new entry there and gets its tile, nav link, page and sitemap entry with no new page code.

### About, Contact, Privacy

The wording stays. About keeps the small round portrait and the story. Contact is laid out again: form on one side, email and WhatsApp on the other, with no card or shadow.

## 5. How Impeccable runs this

The prompt the build follows:

> Run `/impeccable` on `D:\Ankit\savebytes\savebytes-website` as a redesign. This is a new visual world: the old site is evidence of the subject and an anti-reference, never a source. Surface mode: **Persuade** for Home and the product page, **Read** for About and Privacy, and Contact as a small **Operate** task.
>
> **Truth to keep:** the SaveBytes logo, unchanged and never animated; the copy in REBUILD_PLAN.md section 4; the About, Contact and Privacy wording; the footer wording with the full-width name; working contact form validation and the honeypot.
>
> **Commitments:** light only; one ground, near-black ink and SaveBytes blue used only on the logo and the single action per page; a new typeface (IBM Plex excluded); no more than one picture on any page; reveal no dates, conditions or internal plans.
>
> **Refuse:** gradients, glass, shadows at rest, small labels above headings, numbered labels, icon cards, rows of identical cards, decorative shapes, motion without a job, more than five type sizes.
>
> **Bar:** the restraint and finish of Apple's product pages and Anthropic's home page. A visitor knows within five seconds what SaveBytes is and how to get in touch.

Steps, in order:

1. **`init`:** write `PRODUCT.md` from this plan and your answers (users, purpose, positioning, evidence on hand, and what must not be invented). I ask at most one short round of questions if anything is missing.
2. **`shape`** for Home and the product template: confirm the reading order, the one action and what each page must make the visitor believe. This is planning only.
3. **New-work direction round:** Impeccable's `concept-seed` deals visual directions under the commitments above (type, spacing, how the one picture and the product tile look). You pick one on its decision page. This machine has no image generator, so the build is **code-led**: the chosen direction is written as a contract (thesis, first viewport, typeface, palette) and the finish review checks the build against it.
4. **Read `craft-floor.md`** before writing any UI, then build from scratch: new tokens, a header, footer, product template, Home, About, Contact and Privacy. The old components, styles, design-system bundle and unused pages are deleted. The logo component is copied out unchanged.
5. **`typeset` and `layout` passes:** at most five type sizes, one spacing rhythm, more space above a heading than below it.
6. **`distill` and `quieter` passes:** remove anything that does not help the visitor read or act.
7. **`clarify`:** short, plain labels and error messages in the contact form.
8. **`adapt`:** 390, 768, 1280 and 1440 widths, and 44px touch targets.
9. **`animate`, sparingly:** a gentle fade-in of each section on scroll and button feedback. Nothing else moves. Reduced motion turns it off.
10. **`audit` and `harden`:** accessibility, contrast, keyboard use, focus, no-script reading, form error, empty and success states, and performance.
11. **`impeccable detect`** on the changed files, then the **finish reviewer** (a fresh subagent) checks the screenshots against the direction contract. One fix round, then a verdict.
12. **`polish`:** the final pass.
13. **Documenter:** writes `DESIGN.md` and `.impeccable/design.json` from the built site, so every later page and product follows the same rules.

## 6. Checks before I report back

- Production build, lint and typecheck pass.
- Playwright tests are rewritten for the new pages and pass on desktop and mobile: every page renders, no sideways scroll, the form validates, links are real, and a product added to the data file gets its page.
- Screenshots at 390, 768 and 1440 of every page, looked at and attached.
- No page carries more than one picture or more than one accent colour.

## 7. What gets deleted

- Pages: Platform, Security and Roadmap, and their content files.
- The dark theme, the theme toggle and the script that sets it.
- The cut motif, the clinic-morning animation, every product screen except the one for Health, the old CSS (`site.css` and the token files), and the design-system bundle (`src/components/ds`, after the logo is copied out).
- Tests for removed pages.

The work stays on the branch `redesign/taste`, or on a new branch if you prefer. Nothing is committed until you say so.

## 8. Still needed from you

1. Which headline (section 4).
2. A go to start.
