

## Improvements Inspired by RugHub

Two new sections added to the homepage to reduce friction and build trust.

---

### 1. Inline Contact / Quote Form

Replace the current CTA banner (lines 430-484 in `src/pages/Index.tsx`) with a more useful CTA that includes an embedded contact form alongside the call-to-action text.

**Layout**: Two-column grid inside the existing blue gradient CTA section:
- **Left column (40%)**: Heading ("Ready to Streamline Your Linen Supply?"), subtitle, and contact details (phone, email, location) -- similar to current CTA but left-aligned
- **Right column (60%)**: A compact glass-styled contact form with Name, Company, Email, Phone, Service dropdown, and Message fields plus a submit button

**Styling**: The form card will use a frosted glass effect (`bg-white/10 backdrop-blur-lg border border-white/20`) sitting inside the existing blue gradient background. Form inputs will use `bg-white/15` with white placeholder text for contrast.

**Behavior**: Reuses the same toast-based submission handler from the existing Contact page. The dedicated /contact page remains unchanged.

---

### 2. Testimonials Section

Add a new testimonials section between the "About Snippet" and the CTA banner.

**Layout**: A centered section heading ("What Our Clients Say") followed by a 3-column grid of testimonial cards.

**Card design**: Each card is a glass-styled card (`glass-strong`) containing:
- A quote icon at top
- The testimonial text in italics
- A divider line
- Client name, role, and company

**Content**: 3 placeholder testimonials from fictional accommodation, hospitality, and mining clients in the Goldfields region.

**Animation**: Cards use the existing `scaleIn` stagger animation on scroll.

---

### Technical Details

**Files modified:**
- `src/pages/Index.tsx` -- Add testimonials data array, testimonials section JSX, and replace CTA banner with the form-embedded version

**No new files or dependencies needed.** The form reuses existing UI components (Input, Textarea, Select, Label, Button) and the toast hook already imported.

