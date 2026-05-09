# Jarrah Honey Website Implementation Plan

> **For agentic workers:** REQUIRED SUB-SKILL: Use superpowers:subagent-driven-development (recommended) or superpowers:executing-plans to implement this plan task-by-task. Steps use checkbox (`- [ ]`) syntax for tracking.

**Goal:** Build a 4-page static HTML/CSS website promoting Jarrah honey to premium gift buyers, linking out to an external store.

**Architecture:** Pure HTML/CSS, no JavaScript, no build tools. One shared `styles.css` using CSS custom properties drives all visual consistency across the four pages. Each page is a standalone HTML file that includes the same nav and footer markup.

**Tech Stack:** HTML5, CSS3 (custom properties, flexbox, media queries), Google Fonts (Playfair Display + Montserrat)

---

## File Map

| File | Role |
|---|---|
| `styles.css` | All styles — variables, reset, shared components, page-specific sections, responsive |
| `index.html` | Homepage — hero, stat bar, teaser panels |
| `story.html` | Our Story — alternating content sections, story CTA |
| `honey.html` | The Honey — TA panel, comparison table, shop CTA |
| `shop.html` | Shop — product showcase, gift quote, Buy Now link |
| `.gitignore` | Exclude `.superpowers/` brainstorm files from git |

---

## Task 1: Project foundation — styles.css

**Files:**
- Create: `styles.css`

- [ ] **Step 1: Create styles.css with CSS variables and reset**

```css
@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Montserrat:wght@400;600;700&display=swap');

/* ── Variables ── */
:root {
  --color-deep-green: #2a4a2a;
  --color-mid-green:  #3a6b3a;
  --color-ivory:      #f5f0e8;
  --color-ivory-dark: #f0ebe0;
  --color-gold:       #b8960a;
  --color-gold-light: #d4b96a;
  --color-gold-aged:  #a89060;
  --color-body:       #5a4a30;
  --color-body-light: #6a5a40;
  --color-cream-text: #f5f0e8;
  --font-serif: 'Playfair Display', Georgia, serif;
  --font-sans:  'Montserrat', sans-serif;
}

/* ── Reset ── */
*, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }
body { font-family: var(--font-sans); background: var(--color-ivory); color: var(--color-body); }
a { text-decoration: none; color: inherit; }
img { max-width: 100%; display: block; }
ul { list-style: none; }
```

- [ ] **Step 2: Add nav and footer styles**

Append to `styles.css`:

```css
/* ── Navigation ── */
.site-nav {
  background: var(--color-deep-green);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 18px 48px;
}
.nav-logo {
  font-family: var(--font-serif);
  font-size: 20px;
  letter-spacing: 5px;
  color: var(--color-cream-text);
  font-weight: 700;
}
.nav-links { display: flex; gap: 32px; }
.nav-link {
  font-size: 11px;
  letter-spacing: 3px;
  color: var(--color-gold-light);
  text-transform: uppercase;
  transition: color 0.2s;
}
.nav-link:hover,
.nav-link.active {
  border-bottom: 1px solid var(--color-gold-light);
  padding-bottom: 2px;
}

/* ── Footer ── */
.site-footer {
  background: var(--color-deep-green);
  padding: 24px 48px;
}
.footer-inner {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.footer-logo {
  font-family: var(--font-serif);
  font-size: 16px;
  letter-spacing: 4px;
  color: var(--color-gold-light);
  font-weight: 700;
}
.footer-copy {
  font-size: 11px;
  letter-spacing: 1px;
  color: var(--color-gold-aged);
}
```

- [ ] **Step 3: Add shared components — divider, buttons, page-hero, stat-bar**

Append to `styles.css`:

```css
/* ── Section Divider ── */
.section-divider {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 0 48px;
  background: var(--color-ivory);
}
.section-divider::before,
.section-divider::after {
  content: '';
  flex: 1;
  height: 1px;
}
.section-divider::before { background: linear-gradient(90deg, transparent, var(--color-gold)); }
.section-divider::after  { background: linear-gradient(90deg, var(--color-gold), transparent); }
.section-divider-gem {
  color: var(--color-gold);
  font-size: 10px;
  padding: 12px 0;
}

/* ── Buttons ── */
.btn-primary {
  display: inline-block;
  background: var(--color-deep-green);
  color: var(--color-cream-text);
  padding: 14px 32px;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  font-weight: 700;
  cursor: pointer;
  transition: background 0.2s;
}
.btn-primary:hover { background: var(--color-mid-green); }
.btn-primary--gold { background: var(--color-gold); color: var(--color-ivory); }
.btn-primary--gold:hover { background: var(--color-gold-aged); }
.btn-secondary {
  display: inline-block;
  border: 1px solid var(--color-gold-light);
  color: var(--color-gold-light);
  padding: 13px 32px;
  font-size: 11px;
  letter-spacing: 3px;
  text-transform: uppercase;
  cursor: pointer;
  transition: all 0.2s;
}
.btn-secondary:hover { background: var(--color-gold-light); color: var(--color-deep-green); }
.btn-text {
  display: inline-block;
  color: var(--color-gold);
  font-size: 11px;
  letter-spacing: 2px;
  text-transform: uppercase;
  border-bottom: 1px solid var(--color-gold);
  padding-bottom: 2px;
}

/* ── Page Hero (inner pages) ── */
.page-hero {
  background: var(--color-deep-green);
  text-align: center;
  padding: 56px 48px;
}
.page-hero__eyebrow {
  color: var(--color-gold-light);
  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  margin-bottom: 14px;
}
.page-hero__title {
  font-family: var(--font-serif);
  font-size: 36px;
  font-weight: 700;
  color: var(--color-cream-text);
}

/* ── Stat Bar ── */
.stat-bar {
  display: flex;
  background: var(--color-ivory);
  padding: 0 48px;
}
.stat-item {
  flex: 1;
  text-align: center;
  padding: 28px 16px;
  border-right: 1px solid rgba(184, 150, 10, 0.2);
}
.stat-item:last-child { border-right: none; }
.stat-value {
  font-family: var(--font-serif);
  font-size: 28px;
  font-weight: 700;
  color: var(--color-gold);
  margin-bottom: 6px;
}
.stat-label {
  font-size: 9px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-body-light);
}
```

- [ ] **Step 4: Add homepage-specific styles — hero section and teaser grid**

Append to `styles.css`:

```css
/* ── Hero Section (index.html) ── */
.hero-section {
  background: linear-gradient(135deg, var(--color-deep-green) 0%, var(--color-mid-green) 50%, var(--color-deep-green) 100%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 64px;
  padding: 80px 48px;
  min-height: 60vh;
}
.hero-image { width: 200px; flex-shrink: 0; }
.hero-image img { width: 100%; filter: drop-shadow(0 8px 32px rgba(0,0,0,0.4)); }
.hero-copy { max-width: 440px; }
.hero-eyebrow {
  font-size: 10px;
  letter-spacing: 4px;
  text-transform: uppercase;
  color: var(--color-gold-light);
  margin-bottom: 16px;
}
.hero-title {
  font-family: var(--font-serif);
  font-size: 42px;
  font-weight: 700;
  color: var(--color-cream-text);
  line-height: 1.2;
  margin-bottom: 16px;
}
.hero-tagline {
  font-size: 14px;
  line-height: 1.8;
  color: #c8d4b0;
  margin-bottom: 28px;
}
.hero-ctas { display: flex; gap: 12px; flex-wrap: wrap; }

/* ── Teaser Grid (index.html) ── */
.teaser-grid {
  display: flex;
  padding: 40px 48px 56px;
  background: var(--color-ivory);
  gap: 12px;
}
.teaser-card {
  flex: 1;
  border: 1px solid rgba(184, 150, 10, 0.25);
  display: flex;
  flex-direction: column;
}
.teaser-card__banner {
  background: var(--color-deep-green);
  height: 80px;
  display: flex;
  align-items: center;
  justify-content: center;
}
.teaser-card__banner-label {
  color: var(--color-gold-light);
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
}
.teaser-card__body {
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  flex: 1;
}
.teaser-card__title {
  font-family: var(--font-serif);
  font-size: 16px;
  font-weight: 700;
  color: var(--color-deep-green);
}
.teaser-card__desc {
  font-size: 12px;
  line-height: 1.7;
  color: var(--color-body-light);
  flex: 1;
}
```

- [ ] **Step 5: Add story.html styles — content sections and story CTA**

Append to `styles.css`:

```css
/* ── Content Sections (story.html) ── */
.content-section {
  display: flex;
  align-items: stretch;
  margin: 48px 0;
}
.content-section__panel {
  width: 280px;
  flex-shrink: 0;
  background: var(--color-deep-green);
  display: flex;
  align-items: center;
  justify-content: center;
}
.content-section__panel-label {
  color: var(--color-gold-light);
  font-size: 9px;
  letter-spacing: 4px;
  text-transform: uppercase;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
}
.content-section__copy {
  flex: 1;
  padding: 48px 64px;
}
.content-section--alt { background: var(--color-ivory-dark); }
.content-section--reverse { flex-direction: row-reverse; }
.content-section__eyebrow {
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 12px;
}
.content-section__title {
  font-family: var(--font-serif);
  font-size: 26px;
  font-weight: 700;
  color: var(--color-deep-green);
  margin-bottom: 16px;
}
.content-section__body {
  font-size: 14px;
  line-height: 1.9;
  color: var(--color-body);
  max-width: 540px;
}

/* ── Story CTA ── */
.story-cta {
  text-align: center;
  padding: 40px 48px;
  border-top: 1px solid rgba(184, 150, 10, 0.2);
}
.story-cta__label {
  font-size: 13px;
  color: var(--color-body-light);
  letter-spacing: 1px;
  margin-bottom: 20px;
}
```

- [ ] **Step 6: Add honey.html styles — TA panel and comparison table**

Append to `styles.css`:

```css
/* ── TA Panel (honey.html) ── */
.ta-panel {
  background: var(--color-deep-green);
  display: flex;
  align-items: center;
  gap: 40px;
  padding: 40px 48px;
  margin: 48px 48px 0;
}
.ta-panel__stat { text-align: center; flex-shrink: 0; }
.ta-panel__value {
  font-family: var(--font-serif);
  font-size: 52px;
  font-weight: 700;
  color: var(--color-gold-light);
  line-height: 1;
  margin-bottom: 8px;
}
.ta-panel__label {
  font-size: 9px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-gold-aged);
}
.ta-panel__divider {
  width: 1px;
  height: 64px;
  background: rgba(212, 185, 106, 0.3);
  flex-shrink: 0;
}
.ta-panel__copy {
  font-size: 14px;
  line-height: 1.8;
  color: #c8d4b0;
}

/* ── Comparison Table (honey.html) ── */
.comparison-section { padding: 40px 48px 56px; }
.comparison-label {
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-gold);
  margin-bottom: 20px;
}
.comparison-table {
  width: 100%;
  border-collapse: collapse;
  border: 1px solid rgba(184, 150, 10, 0.2);
}
.comparison-table thead tr { background: var(--color-deep-green); }
.comparison-table th {
  padding: 14px 20px;
  font-size: 10px;
  letter-spacing: 2px;
  text-transform: uppercase;
  color: var(--color-gold-light);
  text-align: left;
  font-weight: 600;
}
.comparison-table td {
  padding: 14px 20px;
  font-size: 13px;
  color: var(--color-body);
  border-bottom: 1px solid rgba(184, 150, 10, 0.15);
}
.comparison-table tbody tr:nth-child(even) { background: var(--color-ivory-dark); }
.comparison-table td.highlight { color: var(--color-deep-green); font-weight: 700; }
.comparison-table td.muted { color: var(--color-gold-aged); }
.comparison-cta { text-align: center; padding-top: 32px; }
```

- [ ] **Step 7: Add shop.html styles — product showcase and gift quote**

Append to `styles.css`:

```css
/* ── Product Showcase (shop.html) ── */
.product-showcase {
  display: flex;
  gap: 64px;
  align-items: flex-start;
  padding: 56px 48px;
}
.product-showcase__image { flex-shrink: 0; width: 280px; }
.product-showcase__image img {
  width: 100%;
  filter: drop-shadow(0 8px 32px rgba(42, 74, 42, 0.2));
}
.product-showcase__details {
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.product-showcase__origin {
  font-size: 10px;
  letter-spacing: 3px;
  text-transform: uppercase;
  color: var(--color-gold);
}
.product-showcase__name {
  font-family: var(--font-serif);
  font-size: 34px;
  font-weight: 700;
  color: var(--color-deep-green);
  line-height: 1.2;
}
.product-features {
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.product-features li {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 14px;
  line-height: 1.6;
  color: var(--color-body);
}
.product-features li::before {
  content: '';
  width: 5px;
  height: 5px;
  background: var(--color-gold);
  border-radius: 50%;
  flex-shrink: 0;
}
.product-cta-group {
  display: flex;
  flex-direction: column;
  gap: 10px;
  align-items: flex-start;
}
.product-cta-note {
  font-size: 11px;
  color: var(--color-gold-aged);
  letter-spacing: 1px;
}

/* ── Gift Quote (shop.html) ── */
.gift-quote {
  background: var(--color-deep-green);
  text-align: center;
  padding: 36px 48px;
  margin: 0 48px 56px;
}
.gift-quote__text {
  font-family: var(--font-serif);
  font-style: italic;
  font-size: 20px;
  color: var(--color-gold-light);
  line-height: 1.6;
}
```

- [ ] **Step 8: Add mobile responsive styles**

Append to `styles.css`:

```css
/* ── Responsive ── */
@media (max-width: 768px) {
  .site-nav { padding: 16px 24px; }
  .nav-links { gap: 16px; }
  .nav-link { font-size: 10px; letter-spacing: 2px; }

  .hero-section {
    flex-direction: column;
    padding: 48px 24px;
    gap: 32px;
    text-align: center;
    min-height: auto;
  }
  .hero-image { width: 140px; margin: 0 auto; }
  .hero-title { font-size: 30px; }
  .hero-ctas { justify-content: center; }

  .section-divider { padding: 0 24px; }

  .stat-bar { flex-wrap: wrap; padding: 0 24px; }
  .stat-item {
    flex: 1 1 50%;
    border-right: none;
    border-bottom: 1px solid rgba(184, 150, 10, 0.2);
  }
  .stat-item:nth-child(odd) { border-right: 1px solid rgba(184, 150, 10, 0.2); }
  .stat-item:nth-last-child(-n+2) { border-bottom: none; }

  .teaser-grid { flex-direction: column; padding: 32px 24px; }

  .page-hero { padding: 40px 24px; }
  .page-hero__title { font-size: 26px; }

  .content-section { flex-direction: column !important; margin: 32px 0; }
  .content-section__panel { width: 100%; height: 56px; }
  .content-section__panel-label { writing-mode: horizontal-tb; transform: none; }
  .content-section__copy { padding: 28px 24px; }
  .content-section__title { font-size: 20px; }

  .story-cta { padding: 32px 24px; }

  .ta-panel {
    flex-direction: column;
    gap: 20px;
    padding: 28px 24px;
    margin: 32px 24px 0;
    text-align: center;
  }
  .ta-panel__divider { width: 60px; height: 1px; }

  .comparison-section { padding: 32px 24px 48px; }
  .comparison-table th,
  .comparison-table td { padding: 10px 12px; font-size: 12px; }

  .product-showcase { flex-direction: column; padding: 32px 24px; gap: 32px; }
  .product-showcase__image { width: 200px; margin: 0 auto; }
  .product-showcase__name { font-size: 26px; }

  .gift-quote { margin: 0 24px 40px; padding: 28px 24px; }
  .gift-quote__text { font-size: 16px; }

  .site-footer { padding: 20px 24px; }
  .footer-inner { flex-direction: column; gap: 8px; text-align: center; }
}
```

- [ ] **Step 9: Verify styles.css in browser**

Open any of the HTML files in a browser (they don't exist yet — just verify no syntax errors by creating a quick test in the browser console or moving to Task 2 and verifying there).

- [ ] **Step 10: Commit**

```bash
git add styles.css
git commit -m "feat: add shared stylesheet with all components and responsive styles"
```

---

## Task 2: index.html — Homepage

**Files:**
- Create: `index.html`

- [ ] **Step 1: Create index.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Jarrah Honey — Pure Western Australian Honey</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <nav class="site-nav">
    <a href="index.html" class="nav-logo">JARRAH</a>
    <ul class="nav-links">
      <li><a href="story.html" class="nav-link">OUR STORY</a></li>
      <li><a href="honey.html" class="nav-link">THE HONEY</a></li>
      <li><a href="shop.html" class="nav-link">SHOP</a></li>
    </ul>
  </nav>

  <section class="hero-section">
    <div class="hero-image">
      <img src="assets/jarrah-honey-jar.png" alt="Jarrah Raw Honey jar">
    </div>
    <div class="hero-copy">
      <p class="hero-eyebrow">Western Australia · Ancient Forests</p>
      <h1 class="hero-title">Nature's Rarest<br>Healing Honey</h1>
      <p class="hero-tagline">Harvested from jarrah trees that bloom just once every two years — raw, unfiltered, and tested for potency.</p>
      <div class="hero-ctas">
        <a href="shop.html" class="btn-primary btn-primary--gold">Shop Now</a>
        <a href="story.html" class="btn-secondary">Our Story</a>
      </div>
    </div>
  </section>

  <div class="section-divider"><span class="section-divider-gem">◆</span></div>

  <div class="stat-bar">
    <div class="stat-item">
      <div class="stat-value">TA 30+</div>
      <div class="stat-label">Total Activity Rating</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">2 YRS</div>
      <div class="stat-label">Flowering Cycle</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">100%</div>
      <div class="stat-label">Raw &amp; Unfiltered</div>
    </div>
    <div class="stat-item">
      <div class="stat-value">WA</div>
      <div class="stat-label">Western Australia Only</div>
    </div>
  </div>

  <div class="section-divider"><span class="section-divider-gem">◆</span></div>

  <div class="teaser-grid">
    <div class="teaser-card">
      <div class="teaser-card__banner">
        <span class="teaser-card__banner-label">Ancient Forests</span>
      </div>
      <div class="teaser-card__body">
        <h2 class="teaser-card__title">Our Story</h2>
        <p class="teaser-card__desc">From the ancient jarrah forests of southwest Western Australia to your table — a honey with thousands of years of history.</p>
        <a href="story.html" class="btn-text">Read More →</a>
      </div>
    </div>
    <div class="teaser-card">
      <div class="teaser-card__banner">
        <span class="teaser-card__banner-label">The Difference</span>
      </div>
      <div class="teaser-card__body">
        <h2 class="teaser-card__title">The Honey</h2>
        <p class="teaser-card__desc">Why Jarrah's Total Activity rating puts it in a class of its own — and how it compares to regular honey.</p>
        <a href="honey.html" class="btn-text">Discover More →</a>
      </div>
    </div>
    <div class="teaser-card">
      <div class="teaser-card__banner">
        <span class="teaser-card__banner-label">Shop</span>
      </div>
      <div class="teaser-card__body">
        <h2 class="teaser-card__title">Buy Jarrah Honey</h2>
        <p class="teaser-card__desc">Pure, raw, and independently tested. A gift unlike any other for someone who deserves something truly rare.</p>
        <a href="shop.html" class="btn-primary">Shop Now</a>
      </div>
    </div>
  </div>

  <footer class="site-footer">
    <div class="footer-inner">
      <span class="footer-logo">JARRAH</span>
      <span class="footer-copy">Pure Western Australian Honey &nbsp;·&nbsp; © 2026</span>
    </div>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Open index.html in browser and verify**

Open `index.html` directly in a browser (double-click the file or drag to browser). Check:
- Dark green nav bar with gold "JARRAH" wordmark left, gold nav links right
- Hero: green gradient background, jar image left, headline + tagline + two CTAs right
- Gold ornamental divider (◆ with fading lines)
- Four stat panels with gold values
- Second gold divider
- Three teaser cards with dark green banner, title, description, link/button
- Dark green footer with gold wordmark

- [ ] **Step 3: Commit**

```bash
git add index.html
git commit -m "feat: add homepage with hero, stat bar, and teaser panels"
```

---

## Task 3: story.html — Our Story

**Files:**
- Create: `story.html`

- [ ] **Step 1: Create story.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Our Story — Jarrah Honey</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <nav class="site-nav">
    <a href="index.html" class="nav-logo">JARRAH</a>
    <ul class="nav-links">
      <li><a href="story.html" class="nav-link active">OUR STORY</a></li>
      <li><a href="honey.html" class="nav-link">THE HONEY</a></li>
      <li><a href="shop.html" class="nav-link">SHOP</a></li>
    </ul>
  </nav>

  <div class="page-hero">
    <p class="page-hero__eyebrow">Since Time Immemorial</p>
    <h1 class="page-hero__title">The Story of Jarrah Honey</h1>
  </div>

  <div class="content-section">
    <div class="content-section__panel">
      <span class="content-section__panel-label">The Forest</span>
    </div>
    <div class="content-section__copy">
      <p class="content-section__eyebrow">The Jarrah Forest</p>
      <h2 class="content-section__title">An Ancient Landscape</h2>
      <p class="content-section__body">The jarrah tree (<em>Eucalyptus marginata</em>) is native to the southwest corner of Western Australia — one of the world's most biodiverse forest ecosystems, covering over 3 million hectares. These forests are among the oldest on earth, shaped over millions of years into a habitat unlike anywhere else on the planet. It is here, and only here, that genuine jarrah honey can be produced.</p>
    </div>
  </div>

  <div class="content-section content-section--reverse content-section--alt">
    <div class="content-section__panel">
      <span class="content-section__panel-label">The Bloom</span>
    </div>
    <div class="content-section__copy">
      <p class="content-section__eyebrow">The Biennial Bloom</p>
      <h2 class="content-section__title">Once Every Two Years</h2>
      <p class="content-section__body">Unlike most flowering trees, the jarrah blooms only once every two years — typically between October and January in the Southern Hemisphere spring and summer. This rare cycle gives bees a very limited window to collect nectar from the jarrah blossom. The result is a honey that is inherently scarce: demand regularly outpaces what the forests can provide, which is why authentic jarrah honey commands a premium and should never be confused with blended or generic varieties.</p>
    </div>
  </div>

  <div class="content-section">
    <div class="content-section__panel">
      <span class="content-section__panel-label">Heritage</span>
    </div>
    <div class="content-section__copy">
      <p class="content-section__eyebrow">Indigenous Heritage</p>
      <h2 class="content-section__title">Thousands of Years of Knowledge</h2>
      <p class="content-section__body">The Noongar people are the Traditional Custodians of the jarrah forests of southwest Western Australia. For thousands of years, they have held deep knowledge of this land — its plants, its animals, and its rhythms. The jarrah tree's timber, bark, and resin have long been part of Noongar culture and practice. Modern science is still catching up with what traditional knowledge has long understood: that the resources of the jarrah forest are something to be treated with great care and respect.</p>
    </div>
  </div>

  <div class="story-cta">
    <p class="story-cta__label">Discover what makes this honey extraordinary</p>
    <a href="honey.html" class="btn-primary">The Honey →</a>
  </div>

  <footer class="site-footer">
    <div class="footer-inner">
      <span class="footer-logo">JARRAH</span>
      <span class="footer-copy">Pure Western Australian Honey &nbsp;·&nbsp; © 2026</span>
    </div>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Open story.html in browser and verify**

Check:
- "OUR STORY" nav link has active underline
- Dark green page hero with eyebrow + title centred
- Three alternating content sections:
  - Section 1: dark green panel left, copy right (ivory bg)
  - Section 2: dark green panel right, copy left (ivory-dark/slightly cream bg)
  - Section 3: dark green panel left, copy right (ivory bg)
- Panel labels display vertically in gold
- Centred CTA bar at bottom with "The Honey →" button
- Same footer as homepage

- [ ] **Step 3: Commit**

```bash
git add story.html
git commit -m "feat: add Our Story page with alternating content sections"
```

---

## Task 4: honey.html — The Honey

**Files:**
- Create: `honey.html`

- [ ] **Step 1: Create honey.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>The Honey — Jarrah Honey</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <nav class="site-nav">
    <a href="index.html" class="nav-logo">JARRAH</a>
    <ul class="nav-links">
      <li><a href="story.html" class="nav-link">OUR STORY</a></li>
      <li><a href="honey.html" class="nav-link active">THE HONEY</a></li>
      <li><a href="shop.html" class="nav-link">SHOP</a></li>
    </ul>
  </nav>

  <div class="page-hero">
    <p class="page-hero__eyebrow">What Makes It Different</p>
    <h1 class="page-hero__title">Not All Honey Is Equal</h1>
  </div>

  <div class="ta-panel">
    <div class="ta-panel__stat">
      <div class="ta-panel__value">TA 30+</div>
      <div class="ta-panel__label">Total Activity</div>
    </div>
    <div class="ta-panel__divider"></div>
    <p class="ta-panel__copy">The Total Activity (TA) rating is an independent measure of a honey's antimicrobial potency — its ability to inhibit the growth of bacteria and other microorganisms. Jarrah honey consistently tests at TA 10+ to TA 30+, driven by its naturally high hydrogen peroxide (H₂O₂) activity. Most commercial supermarket honeys test below TA 5. The higher the TA rating, the greater the potency.</p>
  </div>

  <div class="comparison-section">
    <p class="comparison-label">Jarrah vs Regular Honey</p>
    <table class="comparison-table">
      <thead>
        <tr>
          <th>Property</th>
          <th>Jarrah Honey</th>
          <th>Regular Commercial Honey</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Antimicrobial Activity (TA)</td>
          <td class="highlight">TA 10+ to TA 30+</td>
          <td class="muted">Below TA 5</td>
        </tr>
        <tr>
          <td>Antimicrobial Mechanism</td>
          <td class="highlight">Natural H₂O₂ activity</td>
          <td class="muted">Minimal to none</td>
        </tr>
        <tr>
          <td>Glycaemic Index</td>
          <td class="highlight">Lower GI</td>
          <td class="muted">Higher GI</td>
        </tr>
        <tr>
          <td>Processing</td>
          <td class="highlight">Raw, unfiltered, unheated</td>
          <td class="muted">Typically pasteurised &amp; filtered</td>
        </tr>
        <tr>
          <td>Geographic Origin</td>
          <td class="highlight">Southwest WA only</td>
          <td class="muted">Varies / blended</td>
        </tr>
        <tr>
          <td>Availability</td>
          <td class="highlight">Rare — biennial bloom</td>
          <td class="muted">Year-round, mass produced</td>
        </tr>
      </tbody>
    </table>
    <div class="comparison-cta">
      <a href="shop.html" class="btn-primary btn-primary--gold">Shop Now →</a>
    </div>
  </div>

  <footer class="site-footer">
    <div class="footer-inner">
      <span class="footer-logo">JARRAH</span>
      <span class="footer-copy">Pure Western Australian Honey &nbsp;·&nbsp; © 2026</span>
    </div>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Open honey.html in browser and verify**

Check:
- "THE HONEY" nav link has active underline
- Dark green page hero
- Dark green TA panel: "TA 30+" large in Playfair Display gold, thin vertical gold divider, cream body copy explaining the TA system
- Comparison table: dark green header row with gold text, alternating ivory/ivory-dark rows, Jarrah column values in bold dark green, Regular column values in muted gold-aged tone
- Gold "Shop Now →" CTA centred below table

- [ ] **Step 3: Commit**

```bash
git add honey.html
git commit -m "feat: add The Honey page with TA panel and comparison table"
```

---

## Task 5: shop.html — Shop

**Files:**
- Create: `shop.html`

- [ ] **Step 1: Create shop.html**

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Shop — Jarrah Honey</title>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,700;1,400&family=Montserrat:wght@400;600;700&display=swap" rel="stylesheet">
  <link rel="stylesheet" href="styles.css">
</head>
<body>

  <nav class="site-nav">
    <a href="index.html" class="nav-logo">JARRAH</a>
    <ul class="nav-links">
      <li><a href="story.html" class="nav-link">OUR STORY</a></li>
      <li><a href="honey.html" class="nav-link">THE HONEY</a></li>
      <li><a href="shop.html" class="nav-link active">SHOP</a></li>
    </ul>
  </nav>

  <div class="page-hero">
    <p class="page-hero__eyebrow">A Gift Unlike Any Other</p>
    <h1 class="page-hero__title">Pure Jarrah Honey</h1>
  </div>

  <div class="product-showcase">
    <div class="product-showcase__image">
      <img src="assets/jarrah-honey-jar.png" alt="Jarrah Raw Honey — TA 30+">
    </div>
    <div class="product-showcase__details">
      <p class="product-showcase__origin">Western Australia</p>
      <h2 class="product-showcase__name">Jarrah Raw Honey</h2>
      <ul class="product-features">
        <li>Total Activity rated TA 30+ — independently lab tested</li>
        <li>Raw, unfiltered, and unheated to preserve natural potency</li>
        <li>Sourced exclusively from WA jarrah forests</li>
        <li>Harvested from trees that bloom only once every two years</li>
      </ul>
      <div class="product-cta-group">
        <a href="#" class="btn-primary btn-primary--gold">Buy Now →</a>
        <span class="product-cta-note">Opens in our online store</span>
      </div>
    </div>
  </div>

  <div class="gift-quote">
    <p class="gift-quote__text">"The perfect gift for someone who deserves something truly rare."</p>
  </div>

  <footer class="site-footer">
    <div class="footer-inner">
      <span class="footer-logo">JARRAH</span>
      <span class="footer-copy">Pure Western Australian Honey &nbsp;·&nbsp; © 2026</span>
    </div>
  </footer>

</body>
</html>
```

- [ ] **Step 2: Replace `href="#"` on the Buy Now button with the real store URL once available**

The `href="#"` on the Buy Now `<a>` tag is a placeholder. When the store URL is ready, replace:
```html
<a href="#" class="btn-primary btn-primary--gold">Buy Now →</a>
```
with:
```html
<a href="https://your-store-url.com" class="btn-primary btn-primary--gold" target="_blank" rel="noopener">Buy Now →</a>
```

- [ ] **Step 3: Open shop.html in browser and verify**

Check:
- "SHOP" nav link has active underline
- Dark green page hero: "A Gift Unlike Any Other" / "Pure Jarrah Honey"
- Two-column product showcase: jar image left with drop shadow, product details right
- Four gold-dot bullet points listing product facts
- Gold "Buy Now →" button with "Opens in our online store" note below
- Dark green gift quote panel with italic gold text
- Footer

- [ ] **Step 4: Commit**

```bash
git add shop.html
git commit -m "feat: add Shop page with product showcase and gift quote"
```

---

## Task 6: Housekeeping — .gitignore and cross-page link check

**Files:**
- Create: `.gitignore`

- [ ] **Step 1: Create .gitignore**

```
.superpowers/
```

- [ ] **Step 2: Verify all cross-page navigation links work**

Open each page and click every nav link and CTA:

| From | Link | Expected destination |
|---|---|---|
| index.html | OUR STORY nav | story.html |
| index.html | THE HONEY nav | honey.html |
| index.html | SHOP nav | shop.html |
| index.html | "Shop Now" hero CTA | shop.html |
| index.html | "Our Story" hero CTA | story.html |
| index.html | Teaser "Read More →" | story.html |
| index.html | Teaser "Discover More →" | honey.html |
| index.html | Teaser "Shop Now" | shop.html |
| story.html | JARRAH logo | index.html |
| story.html | "The Honey →" CTA | honey.html |
| honey.html | "Shop Now →" CTA | shop.html |
| shop.html | "Buy Now →" | # (placeholder — expected) |

- [ ] **Step 3: Verify responsive layout on mobile**

Open browser DevTools (F12), toggle device toolbar (Ctrl+Shift+M), set width to 375px. Check each page:
- Nav links remain readable
- Hero stacks vertically, jar image centred
- Stat bar wraps to 2×2 grid
- Teaser cards stack vertically
- Story sections stack (panel on top, copy below)
- TA panel stacks (stat above, copy below)
- Comparison table columns remain readable
- Product showcase stacks (image centred above details)
- Gift quote respects side margins

- [ ] **Step 4: Commit**

```bash
git add .gitignore
git commit -m "chore: add .gitignore to exclude brainstorm session files"
```

---

## Post-Implementation Checklist

- [ ] All 4 pages open without errors in browser
- [ ] All navigation links work correctly
- [ ] Jar image (`assets/jarrah-honey-jar.png`) displays on index.html and shop.html
- [ ] Fonts load correctly (Playfair Display for headings, Montserrat for body)
- [ ] Mobile layout verified at 375px viewport
- [ ] Buy Now `href="#"` placeholder noted for replacement when store URL is ready
- [ ] `.superpowers/` excluded from git via `.gitignore`
