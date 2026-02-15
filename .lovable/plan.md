

# Premium "$100K Website" Overhaul

The current site has a solid foundation but looks like a template. Here's a comprehensive plan to elevate it to agency-tier quality across all pages.

---

## What Changes

### 1. Navbar -- Premium Scroll Effects
- Background transitions from transparent to frosted glass on scroll
- Logo scales down slightly on scroll
- Add a thin scroll-progress indicator bar at the top (primary color)
- Smooth height transition from tall (on hero) to compact (on scroll)

### 2. Hero Section -- Cinematic Overhaul
- **Fix broken hero images** (they're not rendering on the right side)
- Add a subtle parallax effect on the image collage
- Implement a text reveal animation (words slide up one by one instead of fading in together)
- Add a gradient overlay on images for depth
- Floating badge element (e.g., "Trusted by 50+ clients") with glassmorphism
- Smooth scroll-down indicator (animated chevron)

### 3. Smooth Scroll & Page Feel
- Add `scroll-behavior: smooth` globally
- Implement scroll-triggered section reveals with staggered timing
- Add a "back to top" button that appears after scrolling

### 4. Services Section -- Card Redesign
- Add subtle gradient borders on hover (not just scale)
- Icon containers get a glow effect on hover
- Add a "Learn more" link on each card that navigates to the Services page

### 5. Stats Band -- Upgrade
- Add a subtle background pattern or texture
- Numbers get a slight glow/shadow for emphasis
- Add separator lines between stats on desktop

### 6. How It Works -- Connected Timeline
- Replace the simple dots with a more premium connected line with animated fill on scroll
- Step cards get a lift shadow on hover
- Add subtle dotted connector lines between steps on mobile

### 7. Sectors Section -- Full-Bleed Cards
- Make sector cards taller with more dramatic hover (lift + shadow + subtle color shift)
- Add a decorative line/accent on the card edge

### 8. Client Logos -- From Text to Visual
- Replace plain text logos with styled pill badges that look more professional
- Add a subtle shine/shimmer animation on the marquee items
- Double-row marquee moving in opposite directions for visual richness

### 9. Testimonials Section (NEW)
- Add a new testimonials section between sectors and the about snippet
- Rotating quotes with company name, role, and a star rating
- Glassmorphism card with quote marks

### 10. Footer -- Premium Polish
- Add a newsletter signup input (visual only for now)
- Refine spacing and add subtle hover animations on links
- Add an "Aboriginal land acknowledgment" line (common for WA businesses)

### 11. Contact Page -- Upgrade
- Add animated form field focus effects
- Success state with a checkmark animation instead of just a toast
- Add a "response time" badge ("We typically respond within 2 hours")

### 12. Global Polish
- Add a custom selection color (primary brand blue)
- Refine the color palette slightly -- make accent green a touch more sophisticated
- Add smooth image loading with fade-in on load
- Improve button hover states with subtle translate + shadow
- Add focus-visible styles for accessibility

### 13. About Page -- Visual Storytelling
- Add a large hero image or gradient illustration
- Timeline-style story section with alternating layout
- Add team/founder placeholder section

---

## Technical Details

### Files Modified
- `src/components/Navbar.tsx` -- scroll-aware state, progress bar, transparent-to-solid transition
- `src/components/HeroSection.tsx` -- fix images, text reveal animation, scroll indicator, floating badge
- `src/components/Footer.tsx` -- newsletter input, acknowledgment, hover animations
- `src/components/Layout.tsx` -- add BackToTop component
- `src/pages/Index.tsx` -- refactor into sub-components, add testimonials section, upgrade all sections
- `src/pages/About.tsx` -- hero image, timeline layout
- `src/pages/Services.tsx` -- card hover upgrades
- `src/pages/Contact.tsx` -- form focus effects, response time badge
- `src/index.css` -- selection color, smooth scroll, new animations (shimmer, glow), focus-visible styles
- `tailwind.config.ts` -- add custom animations (shimmer, glow-pulse)
- New file: `src/components/BackToTop.tsx` -- scroll-to-top floating button
- New file: `src/components/ScrollProgress.tsx` -- thin progress bar at top of page
- New file: `src/components/TestimonialCarousel.tsx` -- rotating testimonials

### New Components
- **ScrollProgress** -- thin colored bar fixed to top of viewport, width based on scroll position
- **BackToTop** -- floating button (bottom-right), appears after 400px scroll, smooth scrolls to top
- **TestimonialCarousel** -- auto-rotating cards with quotes, names, roles, star ratings

### Key Patterns Preserved
- All existing framer-motion animation patterns maintained
- Existing color system (HSL CSS variables) extended, not replaced
- Layout component wrapper pattern kept
- BrandName component reused everywhere
- Responsive breakpoints consistent with current `container` setup

