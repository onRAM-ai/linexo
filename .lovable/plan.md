

## Convert to Single-Page Website

Transform LinExo from a multi-page site into a single-page website with smooth scroll navigation to each section.

---

### 1. Update Navbar to use anchor links

Replace route-based navigation with smooth-scroll anchor links pointing to section IDs on the homepage.

**Navigation items:**
- Home -> scrolls to top
- Services -> scrolls to `#services`
- About -> scrolls to `#about`
- Contact -> scrolls to `#contact` (the inline CTA form)
- "Get In Touch" button -> scrolls to `#contact`

Each link will use `onClick` with `document.getElementById().scrollIntoView({ behavior: 'smooth' })` instead of `<Link to="...">`. Remove `react-router-dom` imports from Navbar.

### 2. Add section IDs to Index.tsx

Add `id` attributes to the relevant sections:
- `id="services"` on the Services section
- `id="about"` on the About Snippet section
- `id="contact"` on the CTA / Inline Contact Form section

### 3. Update hero button actions

Change the hero's "Get In Touch" and "Our Services" buttons from `navigate("/contact")` / `navigate("/services")` to smooth-scroll to `#contact` / `#services`.

### 4. Update "Learn More About Us" button

In the About snippet section, the "Learn More About Us" button currently links to `/about`. Change it to scroll to the top or remove it since there's no separate About page anymore.

### 5. Update Footer links

Replace the Quick Links in the footer from route links to anchor scroll links matching the new section IDs (Services, About, Contact). Remove the `react-router-dom` Link usage and use `<a href="#services">` or smooth-scroll `onClick` handlers.

### 6. Simplify routing in App.tsx

Remove the About, Services, and Contact route imports and route entries. Keep only the `/` and `*` (NotFound) routes. Remove `AnimatePresence` wrapper since there's only one page.

### 7. Delete unused page files

Remove the following files:
- `src/pages/About.tsx`
- `src/pages/Services.tsx`
- `src/pages/Contact.tsx`

### 8. Clean up Index.tsx imports

Remove `useNavigate` and `Link` imports from `react-router-dom` since navigation is now scroll-based.

---

### Technical Details

**Files modified:**
- `src/components/Navbar.tsx` -- Replace `Link` with scroll-based anchor navigation
- `src/components/Footer.tsx` -- Replace `Link` with anchor/scroll navigation
- `src/pages/Index.tsx` -- Add section `id` attributes, replace `navigate()` calls with scroll functions, remove `Link`/`useNavigate` imports
- `src/App.tsx` -- Remove unused route imports and route entries
- `src/components/HeroSection.tsx` -- Update action handling to support scroll (already uses `onClick`)

**Files deleted:**
- `src/pages/About.tsx`
- `src/pages/Services.tsx`
- `src/pages/Contact.tsx`

**No new dependencies needed.**

