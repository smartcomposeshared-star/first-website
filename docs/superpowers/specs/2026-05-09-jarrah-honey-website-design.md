# Jarrah Honey — Static Website Design Spec
**Date:** 2026-05-09
**Status:** Approved

---

## Overview

A 4-page static promotional website for Jarrah honey, targeting premium gift buyers. The goal is to drive visitors to an external "Buy Now" link via an elegant, high-class experience that communicates the rarity and potency of the product using only real, verifiable facts.

---

## Target Audience

**Primary:** Premium gift buyers — people seeking luxury food gifts for special occasions. The site should feel like unwrapping something rare and considered, not a commodity.

---

## Site Structure

| File | Page | Purpose |
|---|---|---|
| `index.html` | Home | Full-viewport hero, stat bar, three teaser panels linking to other pages |
| `story.html` | Our Story | History of the jarrah tree and honey — origin, biennial bloom, indigenous heritage |
| `honey.html` | The Honey | What distinguishes Jarrah from regular honey — TA rating, H₂O₂ activity, comparison table |
| `shop.html` | Shop | Product showcase with key facts and a prominent "Buy Now" external link |

---

## Visual Identity

### Colour Palette

| Name | Hex | Usage |
|---|---|---|
| Deep Forest Green | `#2a4a2a` | Navigation bar, hero sections, footer, accent panels |
| Forest Mid | `#3a6b3a` | Hero gradients |
| Warm Ivory | `#f5f0e8` | Page background |
| Jarrah Gold | `#b8960a` / `#d4b96a` | Accent colour, dividers, stat numbers, labels |
| Warm Cream Text | `#f5f0e8` | Text on dark backgrounds |
| Forest Body Text | `#5a4a30` | Body copy on ivory background |
| Aged Gold | `#a89060` | Secondary labels, metadata |

### Typography

| Role | Font | Style |
|---|---|---|
| Display headings | Playfair Display | Bold, tracked |
| Italic subheadings | Playfair Display | Italic |
| Labels / nav | Montserrat | Uppercase, letter-spacing: 3–4px |
| Body copy | Montserrat | Regular, line-height: 1.7–1.8 |

Both fonts loaded from Google Fonts.

### Decorative Elements

- **Gold ornamental dividers:** `◆` centred between fading horizontal lines between sections
- **Gold top-border stat panels:** value in Playfair Display, label in Montserrat uppercase below
- **Bullet dots:** 4px gold circles for feature lists

### Button Styles

| Type | Style |
|---|---|
| Primary CTA | Solid `#2a4a2a` or `#b8960a` background, cream text, uppercase, letter-spacing |
| Secondary | Border `#b8960a`, gold text, transparent background |
| Text link | Gold underline, `→` arrow suffix |

---

## Navigation

- **Desktop:** Standard (non-sticky) top bar, dark green (`#2a4a2a`) background, JARRAH wordmark left (Playfair Display), page links right in gold uppercase Montserrat
- **Active page:** Gold link with bottom border underline to indicate current page
- Consistent across all four pages

---

## Page Designs

### index.html — Home

1. **Navigation bar** (dark green, gold links)
2. **Hero section** (dark green gradient background, jar image centred-left, headline + tagline + dual CTAs right)
   - Primary CTA: "SHOP NOW" → shop.html
   - Secondary CTA: "OUR STORY" → story.html
3. **Gold ornamental divider**
4. **Stat bar** — four panels side by side:
   - TA 30+ / Total Activity Rating
   - 2 YRS / Flowering Cycle
   - 100% / Raw & Unfiltered
   - WA / Western Australia Only
5. **Gold ornamental divider**
6. **Three teaser panels** (equal-width, border cards):
   - Our Story → story.html
   - The Honey → honey.html
   - Shop → shop.html (with solid CTA button)
7. **Footer** (dark green, JARRAH wordmark left, copyright right)

### story.html — Our Story

1. **Navigation bar**
2. **Page hero** (dark green, centred title + eyebrow label)
3. **Three alternating content sections** (dark green CSS colour block left/right as decorative panel, copy opposite — no additional photography required):
   - *The Jarrah Forest* — Eucalyptus marginata, native to southwest WA, 3M+ hectare ecosystem, one of earth's oldest
   - *The Biennial Bloom* — flowers October–January, once every two years, severely limits honey supply
   - *Indigenous Heritage* — Noongar people, Traditional Custodians, millennia of knowledge predating modern testing
4. **CTA bar** — "Discover what makes this honey extraordinary" → honey.html
5. **Footer**

### honey.html — The Honey

1. **Navigation bar**
2. **Page hero** (dark green, "Not All Honey Is Equal")
3. **TA Rating explainer panel** (dark green panel, TA 30+ stat prominent, explanation of Total Activity system)
4. **Section label** — "JARRAH vs REGULAR HONEY"
5. **Comparison table:**
   | Property | Jarrah | Regular Honey |
   |---|---|---|
   | Antimicrobial Activity | TA 10–30+ | < TA 5 |
   | H₂O₂ Activity (natural) | High | Low |
   | Glycaemic Index | Lower GI | Higher GI |
   | Raw & Unfiltered | Always | Rarely |
6. **CTA** — "SHOP NOW" → shop.html
7. **Footer**

> **Content note:** All facts are verifiable. H₂O₂-based activity (not MGO-based like Manuka), TA rating system from independent lab testing, biennial bloom timing, WA geographic exclusivity.

### shop.html — Shop

1. **Navigation bar**
2. **Page hero** (dark green, "A Gift Unlike Any Other")
3. **Product showcase** (two-column):
   - Left: `assets/jarrah-honey-jar.png` — large, prominent
   - Right: product name, four bullet-point facts, "BUY NOW →" button (links to external store URL — to be provided), "Opens in our online store" caption
4. **Gift quote panel** (dark green, italic Playfair Display):
   - *"The perfect gift for someone who deserves something truly rare."*
5. **Footer**

---

## Assets

| File | Usage |
|---|---|
| `assets/jarrah-honey-jar.png` | Hero sections, product showcase on shop.html |

No other images are required. The design uses CSS gradients and colour blocks in place of photography on inner sections (or placeholder `<div>` blocks that can be replaced with real images later).

---

## Content Rules

- All claims must be verifiable facts about Jarrah honey
- No invented statistics or health claims beyond what is scientifically documented
- Key facts to use:
  - Eucalyptus marginata (jarrah tree) native to southwest Western Australia
  - Covers 3M+ hectares of biodiverse forest
  - Biennial flowering: October–January, once every 2 years
  - TA (Total Activity) rating system measures antimicrobial potency via H₂O₂ activity
  - Jarrah honey TA range: typically TA 10+ to TA 30+
  - Most commercial honeys: below TA 5
  - Lower GI than most honey varieties
  - Raw, unfiltered, unheated
  - Noongar people are Traditional Custodians of the jarrah forests

---

## Technical Requirements

- Pure static HTML/CSS — no frameworks, no JavaScript build steps
- Google Fonts: Playfair Display, Montserrat (loaded via `<link>` in `<head>`)
- One CSS file shared across all pages: `styles.css`
- Mobile-responsive using CSS flexbox and media queries
- No external dependencies beyond Google Fonts
- "Buy Now" external URL: placeholder `href="#"` — owner to replace with actual store URL

---

## File Structure

```
first-website/
├── index.html
├── story.html
├── honey.html
├── shop.html
├── styles.css
└── assets/
    └── jarrah-honey-jar.png
```
