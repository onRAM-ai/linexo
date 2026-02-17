

## Convert to a One-Page Website

Consolidate all pages into a single scrolling page with anchor-link navigation.

### Changes

**1. `src/components/Navbar.tsx` -- Anchor links instead of routes**

- Replace route-based nav links (`/about`, `/services`, `/contact`) with anchor links (`#services`, `#about`, `#contact`)
- Change `<Link to="...">` to `<a href="#...">` with smooth scroll behavior
- Update active-link highlighting to track the current scroll section instead of `location.pathname`
- "Get In Touch" button scrolls to the contact section

**2. `src/pages/Index.tsx` -- Merge content from About, Services, and Contact pages**

- Add `id` attributes to existing sections (e.g., `id="services"`, `id="about"`)
- Merge unique content from the other pages into the existing Index layout:
  - **About page content**: The "Our Story" narrative text and "Built for Surge Capacity" callout get folded into the existing "About Snippet" section (currently at line 370), expanding it with the story paragraphs
  - **Services page content**: The detailed 9-service list and FAQ accordion from `Services.tsx` replace/extend the existing 6-service card grid (line 155), adding the FAQ section below
  - **Contact page content**: The contact form, contact details, and business hours from `Contact.tsx` get added as a new "Contact" section before the CTA banner
- Update all `<Link to="/...">` references to `<a href="#...">` for smooth scrolling
- Remove `useNavigate()` calls, replace with scroll-to-anchor functions

**3. `src/components/Footer.tsx` -- Update links**

- Change Quick Links from `<Link to="/about">` to `<a href="#about">` etc.

**4. `src/components/HeroSection.tsx` -- Update action buttons**

- Support anchor hrefs (already uses `asChild` with `<a>` for href actions, so this works naturally)

**5. `src/App.tsx` -- Simplify routing**

- Remove separate routes for `/about`, `/services`, `/contact`
- Keep only the `/` route and the `*` catch-all
- Can remove `AnimatePresence` route animation since there's only one page

**6. Delete or leave unused pages**

- `About.tsx`, `Services.tsx`, `Contact.tsx` can be emptied or deleted as their content moves into Index

### Technical Details

- Smooth scrolling via `scroll-behavior: smooth` on `html` in CSS, plus `scroll-margin-top` on sections to offset the sticky navbar
- Add `scroll-margin-top: 4rem` (matching the 64px navbar height) to each section so anchors don't hide behind the header
- The Index page will have these sections in order: Hero, Services (with FAQ), How It Works, Why LinExo, Sectors, Client Logos, About, Contact, CTA, Footer

