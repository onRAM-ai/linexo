

## SEO Improvements (No Content Changes)

### Overview
Add missing SEO infrastructure to improve search engine discoverability, especially for local search (Kalgoorlie-Boulder area). No visible content changes.

---

### 1. Create `public/sitemap.xml`
A static sitemap for the single-page site pointing to the production URL.

```xml
<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <url>
    <loc>https://linexo.com.au/</loc>
    <lastmod>2026-02-24</lastmod>
    <priority>1.0</priority>
  </url>
</urlset>
```

---

### 2. Update `public/robots.txt`
Add the Sitemap directive at the bottom:

```
Sitemap: https://linexo.com.au/sitemap.xml
```

---

### 3. Update `index.html` -- Add missing meta tags

Add the following inside `<head>`:

- **Canonical URL**: `<link rel="canonical" href="https://linexo.com.au/" />`
- **og:url**: `<meta property="og:url" content="https://linexo.com.au/" />`
- **Geo tags** for local SEO:
  - `<meta name="geo.region" content="AU-WA" />`
  - `<meta name="geo.placename" content="Kalgoorlie-Boulder" />`
- **Update OG image URL** to use the production domain (e.g., `https://linexo.com.au/og-image.png`) -- you will need to place an OG image in `public/` at that path

---

### 4. Add JSON-LD Structured Data to `index.html`

Add a `LocalBusiness` schema script in the `<head>`. This helps Google show rich results (address, phone, service area) for local searches.

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "LinExo",
  "description": "Goldfields' premier commercial laundry and linen-hire specialist",
  "url": "https://linexo.com.au",
  "telephone": "0435 808 804",
  "email": "info@linexo.com.au",
  "address": {
    "@type": "PostalAddress",
    "addressLocality": "Kalgoorlie-Boulder",
    "addressRegion": "WA",
    "addressCountry": "AU"
  },
  "areaServed": [
    "Kalgoorlie-Boulder",
    "Coolgardie",
    "Kambalda",
    "Leonora",
    "Laverton"
  ],
  "serviceType": [
    "Commercial Laundry",
    "Linen Hire",
    "Industrial Workwear Processing"
  ]
}
```

---

### 5. OG Image Asset

You will need to provide or screenshot a branded OG image (1200x630px recommended) and place it at `public/og-image.png`. The current OG image points to a Lovable CDN URL that will stop working once you move to your own domain.

---

### Files Changed
- `public/sitemap.xml` (new)
- `public/robots.txt` (updated -- add Sitemap line)
- `index.html` (updated -- canonical, og:url, geo tags, JSON-LD, OG image path)

### Manual Step
- Create/export a branded OG image (1200x630px) and save it as `public/og-image.png`

