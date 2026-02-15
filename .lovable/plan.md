

# LinExo: $100K Premium Upgrade

## Overview

This plan covers the remaining upgrades from the original roadmap plus new premium touches. The focus: refactor for maintainability, add real interactivity, polish every detail, and bring accessibility up to professional standards.

---

## Phase 1: Refactor Index.tsx into Modular Components

Break the 335-line Index.tsx into focused, reusable components. This is foundational -- every subsequent change becomes easier.

**New files:**
- `src/components/home/ServicesSection.tsx` -- services grid (dark section)
- `src/components/home/StatBand.tsx` -- animated counter band
- `src/components/home/ProcessSection.tsx` -- "How It Works" steps
- `src/components/home/ValuesSection.tsx` -- "Why LinExo" timeline
- `src/components/home/SectorsSection.tsx` -- sector color-block cards
- `src/components/home/ClientLogos.tsx` -- marquee logos
- `src/components/home/AboutSnippet.tsx` -- two-column about preview
- `src/components/home/CTABanner.tsx` -- final call-to-action

**Result:** Index.tsx drops to ~40 lines of clean imports and layout.

---

## Phase 2: Contact Page -- Google Maps + Form Validation

- Replace "Interactive map coming soon" placeholder with a real Google Maps iframe embed centered on Kalgoorlie-Boulder
- Add `react-hook-form` + `zod` validation with proper error messages on each field
- Add animated success state (checkmark animation + "We'll be in touch" message) instead of just a toast
- Better visual hierarchy with section headings and dividers

**Files:** `src/pages/Contact.tsx`

---

## Phase 3: Footer Upgrade

- Add a newsletter signup row above the main footer grid (email input + "Subscribe" button, visual only)
- Add ABN / business registration line for legitimacy
- Social links open in new tabs (`target="_blank" rel="noopener noreferrer"`)
- Improve spacing and add subtle divider between newsletter and footer content

**Files:** `src/components/Footer.tsx`

---

## Phase 4: Back to Top Button + Micro-Interactions

- New `src/components/BackToTop.tsx` -- floating button that appears after scrolling 400px, smooth-scrolls to top with a fade/slide animation
- Add to Layout.tsx
- Polish button hover states globally: subtle scale (1.02) + shadow lift on all primary buttons via CSS
- Add `scroll-behavior: smooth` to html element

**Files:** New `src/components/BackToTop.tsx`, `src/components/Layout.tsx`, `src/index.css`

---

## Phase 5: Accessibility + Performance

- Add skip-to-content link in Layout.tsx (visually hidden, visible on focus)
- Add `id="main-content"` to main element
- Preload hero images in `index.html` with `<link rel="preload">`
- Add `aria-label` attributes to key sections
- Ensure all social/external links have `rel="noopener noreferrer"`
- Add focus-visible ring styles for keyboard navigation

**Files:** `index.html`, `src/components/Layout.tsx`, `src/index.css`

---

## Phase 6: About + Services Page Polish

**About page:**
- Add a horizontal timeline showing company milestones (Founded, Facility Built, First Client, etc.)
- Better visual spacing and section transitions

**Services page:**
- Add a "Get a Quote" CTA button at the bottom of the services list
- Improve the alternating card layout with connecting lines between items

**Files:** `src/pages/About.tsx`, `src/pages/Services.tsx`

---

## Technical Details

**No new dependencies** -- uses existing `react-hook-form`, `zod`, `framer-motion`, `embla-carousel-react`, `lucide-react`.

**Execution order:**
1. Phase 1 (refactor) -- makes everything else cleaner
2. Phases 2-3 (contact + footer) -- biggest visual impact on secondary pages
3. Phases 4-5 (polish + accessibility) -- professional finishing layer
4. Phase 6 (inner pages) -- final refinement

**New files (10):**
- `src/components/home/ServicesSection.tsx`
- `src/components/home/StatBand.tsx`
- `src/components/home/ProcessSection.tsx`
- `src/components/home/ValuesSection.tsx`
- `src/components/home/SectorsSection.tsx`
- `src/components/home/ClientLogos.tsx`
- `src/components/home/AboutSnippet.tsx`
- `src/components/home/CTABanner.tsx`
- `src/components/BackToTop.tsx`

**Modified files (8):**
- `src/pages/Index.tsx` (simplified)
- `src/pages/Contact.tsx` (maps + validation)
- `src/pages/About.tsx` (timeline)
- `src/pages/Services.tsx` (CTA + polish)
- `src/components/Footer.tsx` (newsletter + ABN)
- `src/components/Layout.tsx` (skip-to-content + back-to-top)
- `src/index.css` (smooth scroll + focus styles)
- `index.html` (preload images)

