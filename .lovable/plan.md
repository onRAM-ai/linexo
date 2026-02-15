

## Unified Section Colors and Wave Transitions

Establish a consistent **light / blue-tinted alternating** rhythm across all pages, with wave dividers connecting every section. Only two tones: **white** (`background`) and **soft blue** (`primary/5` to `primary/10`). The dark navy (`section-dark` / `foreground` bg) is reserved for the CTA banner and footer only.

### Current Problems

- The Services section on the homepage uses `section-dark` (dark navy) too early, breaking the light-blue rhythm
- Some sections lack wave dividers between them, creating abrupt color shifts
- The "How It Works" and "Sectors" sections are both plain white with no visual distinction
- About and Services pages have inconsistent section backgrounds (some plain white, some dark, no rhythm)

### Homepage Section Flow (New)

```text
Hero              -> gradient primary/5 to primary/12 (keep as-is)
  [wave divider]  -> already built into hero bottom
Services          -> bg-primary/5 (CHANGE from section-dark)
  [wave divider]  -> new
Stat Band         -> floats over gap (keep glass-strong)
How It Works      -> bg-background (white) -- stays
  [wave divider]  -> new
Why LinExo        -> bg-primary/5 (CHANGE from secondary/30)
  [wave divider]  -> new
Sectors           -> bg-background (white) -- stays
  [wave divider]  -> new
Client Logos      -> bg-primary/5 (CHANGE from secondary/30)
  [wave divider]  -> new
About Snippet     -> bg-background (white) -- stays
  [wave divider]  -> already built into CTA top
CTA Banner        -> bg-primary (blue) -- stays
  [wave divider]  -> already built into CTA bottom
Footer            -> bg-foreground (dark navy) -- stays
```

### Changes by File

**1. `src/pages/Index.tsx`**

- **Services section (line 155)**: Remove `section-dark` class. Change to `bg-primary/5`. Update text colors from `text-background` to `text-foreground` and `text-background/60` to `text-muted-foreground`. Update card backgrounds and icon styling for light-on-blue-tint instead of light-on-dark.
- **Why LinExo section (line 267)**: Change `bg-secondary/30` to `bg-primary/5` for consistency.
- **Client Logos section (line 347)**: Change `bg-secondary/30` to `bg-primary/5`. Update edge fade gradients to match.
- **Add SectionDivider components** between: Services->StatBand, HowItWorks->WhyLinExo, WhyLinExo->Sectors, Sectors->ClientLogos, ClientLogos->AboutSnippet. Each uses `from="fill-background"` or `from="fill-primary/5"` as appropriate.
- Remove the standalone SectionDivider between "How It Works" and "Why LinExo" (line 264) and the one between "Why LinExo" and "Sectors" (line 301) -- replace with corrected versions using proper fill colors.

**2. `src/pages/About.tsx`**

- **Story section (line 38)**: Keep white.
- **Capacity Callout (line 63)**: Change from `section-dark` to `bg-primary/5`. Update text colors accordingly.
- **Service Area (line 83)**: Keep white.
- **Values section (line 109)**: Change from `bg-primary` (solid blue) to `bg-primary/5`. Update card and text colors from white-on-blue to dark-on-light-blue.
- **Mission section (line 136)**: Keep white.
- Add wave SectionDividers between each section transition.

**3. `src/pages/Services.tsx`**

- **FAQ section (line 85)**: Change from `section-dark` to `bg-primary/5`. Update accordion text colors from `text-background/*` to `text-foreground/*`.
- Add wave SectionDividers between hero->services, services->FAQ.

**4. `src/pages/Contact.tsx`**

- Already mostly clean. No dark sections to fix.
- Add a wave divider between hero and form section for consistency.

**5. `src/index.css`**

- Update `.bg-mesh-green` and `.bg-mesh-blue` utility classes to use `primary/5` tones instead of `secondary/0.5` base.

### Summary

- All "alternating" sections become `bg-primary/5` (soft blue tint) instead of a mix of `secondary/30`, `section-dark`, and `bg-primary`
- Wave dividers placed at every section boundary
- Dark backgrounds reserved only for CTA and footer
- Result: a cohesive light-blue breathing rhythm across all pages with smooth wave transitions

