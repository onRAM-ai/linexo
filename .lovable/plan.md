

## Remove Standalone Testimonials Section

Delete the "What Our Clients Say" testimonials section (lines 497-529 in `src/pages/Index.tsx`) since the cycling testimonials are already displayed in the "Locally Owned & Operated" tile above.

### Change

**`src/pages/Index.tsx`**: Remove the entire testimonials section block -- the `section` element with heading, 3-column grid of testimonial cards, and background decorations. This is roughly lines 497-529.

The `testimonials` data array at the top of the file stays, as it is still used by the cycling testimonial in the About tile.

