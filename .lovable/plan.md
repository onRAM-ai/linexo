

## Update Fonts to Match Logo

The logo uses a clean, geometric sans-serif typeface. The closest Google Font match is **Poppins** -- a modern geometric sans-serif with the same rounded, friendly feel seen in the logo. This replaces both the serif heading font (Playfair Display) and the body font (DM Sans) for a cohesive brand feel.

---

### Changes

**1. `index.html`** -- Swap the Google Fonts import
- Remove Playfair Display and DM Sans
- Add Poppins (weights 400, 500, 600, 700, 800)
- Update the inline body font-family

**2. `tailwind.config.ts`** -- Update font families
- Change `fontFamily.serif` to Poppins (headings will now use the same geometric font)
- Change `fontFamily.sans` to Poppins
- Alternatively, simplify to a single font family since headings and body will share the same typeface

**3. `src/index.css`** -- Update heading font rule
- Change the `h1, h2, h3` font-family from Playfair Display to Poppins
- Update `.watermark-text` font-family to Poppins

### Result

All text across the site (headings, body, nav, footer, watermarks) will use Poppins, matching the clean geometric style of the logo. The brand will feel unified -- the same typeface in the logo, navigation, headings, and body copy.
