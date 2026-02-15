
# LinExo: Premium Website Upgrade Plan

## Current Assessment

The site has solid bones -- good color scheme, section variety, and page structure. But it currently feels like a template rather than a $10,000 custom build. Here's what separates it from premium:

**What's missing:**
- Hero images aren't showing (right column is empty/invisible)
- No scroll-triggered animations beyond basic fade-ups
- Navbar lacks polish (no scroll-aware background change, no smooth mobile drawer)
- No testimonials or social proof with real weight
- Contact form doesn't actually send anything
- No micro-interactions or hover states that feel "crafted"
- No loading/page-entry experience
- Mobile experience isn't specifically optimized
- No accessibility considerations (skip-to-content, focus states, ARIA)
- Placeholder client logos (just text names, no visual weight)

---

## The Plan (8 Steps)

### 1. Fix the Hero -- Make It Actually Show Images + Add Video Option

The hero's right-column images are invisible at certain viewports. We'll fix the image collage, add proper aspect ratios, and add a subtle parallax effect on scroll. Also add a gradient overlay and a "scroll down" indicator.

**Files:** `src/components/HeroSection.tsx`, `src/index.css`

### 2. Navbar -- Scroll-Aware + Animated Mobile Menu

- Navbar background becomes solid/opaque on scroll (currently always translucent)
- Mobile menu slides in with framer-motion instead of instant show/hide
- Add active link underline animation
- Use the LinExo logo image (`src/assets/linexo-logo.png`) instead of just text

**Files:** `src/components/Navbar.tsx`

### 3. Add a Testimonials Section with Carousel

Premium sites have social proof. Add a testimonials carousel between the "Sectors" and "About Snippet" sections on the homepage using the already-installed `embla-carousel-react`.

- Large quote marks, client name, role, company
- Auto-play with pause on hover
- Dot indicators

**Files:** New `src/components/TestimonialsCarousel.tsx`, update `src/pages/Index.tsx`

### 4. Refactor Index.tsx Into Components

Break the 335-line Index.tsx into focused components for maintainability:

- `src/components/home/ServicesSection.tsx`
- `src/components/home/StatBand.tsx`
- `src/components/home/ProcessSection.tsx`
- `src/components/home/ValuesSection.tsx`
- `src/components/home/SectorsSection.tsx`
- `src/components/home/ClientLogos.tsx`
- `src/components/home/AboutSnippet.tsx`
- `src/components/home/CTABanner.tsx`

**Files:** 8 new component files, simplified `src/pages/Index.tsx`

### 5. Micro-Interactions + Polish

- Smooth scroll behavior globally
- Button hover states with subtle scale + shadow lift
- Card hover states with border-color transitions
- Staggered reveal animations tuned per section
- "Back to top" floating button
- Cursor-following gradient on hero (subtle)
- Add smooth page transitions between routes (already partially done with AnimatePresence)

**Files:** `src/index.css`, `src/components/ui/button.tsx`, new `src/components/BackToTop.tsx`, `src/components/Layout.tsx`

### 6. Contact Page -- Google Maps Embed + Better Layout

- Replace the "Interactive map coming soon" placeholder with an actual Google Maps embed (iframe) showing Kalgoorlie-Boulder
- Better visual hierarchy on the form
- Add form validation with react-hook-form + zod (already installed)
- Success state animation after submission

**Files:** `src/pages/Contact.tsx`

### 7. Footer Upgrade

- Add a newsletter signup row (email input + button, visual only for now)
- Add an ABN / business registration line for legitimacy
- Improve spacing and visual hierarchy
- Make social links open in new tabs

**Files:** `src/components/Footer.tsx`

### 8. Accessibility + Performance

- Add `scroll-behavior: smooth` to html
- Proper `alt` text on all images
- Focus-visible ring styles on interactive elements
- Skip-to-content link
- Lazy load images below the fold
- Preload hero images
- Add proper semantic HTML (sections with aria-labels)

**Files:** `src/index.css`, `index.html`, `src/components/Layout.tsx`, various components

---

## Technical Details

### Dependencies
No new dependencies needed -- everything uses the already-installed stack:
- `framer-motion` for animations
- `embla-carousel-react` for testimonials carousel
- `react-hook-form` + `zod` for form validation
- `lucide-react` for icons

### New Files Created
- `src/components/home/ServicesSection.tsx`
- `src/components/home/StatBand.tsx`
- `src/components/home/ProcessSection.tsx`
- `src/components/home/ValuesSection.tsx`
- `src/components/home/SectorsSection.tsx`
- `src/components/home/ClientLogos.tsx`
- `src/components/home/AboutSnippet.tsx`
- `src/components/home/CTABanner.tsx`
- `src/components/TestimonialsCarousel.tsx`
- `src/components/BackToTop.tsx`

### Files Modified
- `src/pages/Index.tsx` (simplified to import sub-components)
- `src/components/Navbar.tsx` (scroll-aware + animated mobile + logo image)
- `src/components/Footer.tsx` (newsletter row + polish)
- `src/components/HeroSection.tsx` (fix images + parallax + scroll indicator)
- `src/pages/Contact.tsx` (map embed + form validation)
- `src/components/Layout.tsx` (skip-to-content + back-to-top)
- `src/index.css` (smooth scroll, focus states, new utility classes)
- `index.html` (preload hero images)

### Execution Order
Steps 1-3 first (biggest visual impact), then 4 (refactor while code is fresh), then 5-8 (polish layer).
