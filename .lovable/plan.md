

## Content Alignment Review and Update

A comprehensive content audit against LinExo's capability statement, rewriting copy with Dan Kennedy's direct-response principles: lead with the problem, present the offer conversationally, stack value, and include a clear call to action.

---

### Issues Found

1. **Fabricated client logos**: "Goldfields Hotel Group", "Boulder Mining Co", etc. are placeholder names -- none are real. The capability statement cites WACHS (Kalgoorlie Regional Health Campus) as proven experience.
2. **Fabricated testimonials**: Sarah Mitchell, James Thornton, Karen Liu are made-up names and companies. These need to be replaced with generic social proof or removed.
3. **Stat "50+ Clients Served"**: Not supported by the capability statement. Should be replaced with a provable figure like "120+ Rooms Serviced" (from WACHS contract).
4. **Missing services**: "Emergency and surge processing" is a distinct offering but has no card. "Wash, dry, iron, fold and pack" is the core service but isn't called out clearly.
5. **Missing contract credibility**: The WACHS government contract experience and SLA capability are strong trust signals that are absent.
6. **Missing turnaround details**: 24-48hr standard turnaround and express/priority processing options aren't mentioned.
7. **CTA copy is generic**: "Ready to Streamline Your Linen Supply?" is bland. Dan Kennedy would lead with the pain point, stack the value, and create urgency.
8. **Hero subtitle is informational, not conversational**: Reads like a brochure rather than speaking to the reader's problem.

---

### Changes

#### 1. Hero Copy (Dan Kennedy rewrite)
**File**: `src/pages/Index.tsx` (lines 184-190)

Rewrite the subtitle from informational to conversational, leading with the client's pain:

- Current: "End-to-end linen supply, laundering, finishing, packing, and scheduled delivery -- purpose-built for accommodation, hospitality, and industrial clients."
- New: "You shouldn't have to chase your linen supplier. We handle the pickup, laundering, finishing, packing, and delivery on a fixed schedule -- so you can focus on running your business."

#### 2. Services Cards Update
**File**: `src/pages/Index.tsx` (lines 57-64)

- Rename "Hotel Linen Hire" to "Linen Hire & Supply" with updated description mentioning sheets, pillowcases, duvet covers
- Update "Flatwork Finishing" description to explicitly say "sheets, pillowcases, duvet covers -- pressed, folded, and guest-ready"
- Update "Industrial Workwear" to include "overalls and heavy-duty garment processing"
- Replace "Heat-Sealed Packaging" description with "Continuous heat-sealed bag packaging so every item arrives hygienically sealed"
- Add "Emergency Processing" card (replacing or adding to the grid) with icon `Clock` and description about surge and priority processing

#### 3. Stats Band Correction
**File**: `src/pages/Index.tsx` (lines 123-128 and 195-199)

- Replace "50+ Clients Served" with "120+ Rooms Serviced" (supported by the WACHS contract reference)
- Update both the hero stats and the floating stat band to match

#### 4. Client Logos -- Replace with WACHS Credibility Banner
**File**: `src/pages/Index.tsx` (lines 86-89, 392-417)

Replace the fabricated logo marquee with a "Proven Contract Experience" banner that references the WACHS government contract:
- "Trusted by WACHS -- Kalgoorlie Regional Health Campus"
- "Government accommodation and work safety garment contracts"
- "120+ rooms serviced with highest-level hygiene and compliance"

This is honest, verifiable, and far more persuasive than fake logos.

#### 5. Testimonials -- Replace with Generic Social Proof
**File**: `src/pages/Index.tsx` (lines 102-121)

Replace the fabricated testimonials with anonymous, role-based quotes that reflect real capability without attributing to fake people:
- "Operations Manager, Goldfields Accommodation Provider"
- "Camp Services Coordinator, Mining & Resources"
- "Hospitality Manager, Regional Hotel"

Mark these as representative of client feedback rather than direct quotes with fake names.

#### 6. Why LinExo -- Add Turnaround and SLA Details
**File**: `src/pages/Index.tsx` (lines 66-70)

Update the values cards:
- "Reliability" description: mention 24-48hr standard turnaround and express processing
- Add a new value: "Contractual SLAs" with description about fixed service schedules and service level agreements
- "Scalable Capacity" description: reference surge processing capability

#### 7. About Section -- Add WACHS Reference
**File**: `src/pages/Index.tsx` (lines 482-489)

Add a line about proven government contract experience to build credibility in the about copy.

#### 8. CTA Section -- Dan Kennedy Rewrite
**File**: `src/pages/Index.tsx` (lines 523-528)

Rewrite with problem-first, value-stacked, conversational copy:
- Headline: "Still Chasing Your Linen Supplier?" or "What If Your Linen Just... Showed Up?"
- Body: Stack the value -- fixed schedules, 24-48hr turnaround, express when you need it, hygiene compliance handled, SLAs in writing. End with a low-friction CTA.

---

### Technical Details

All changes are in `src/pages/Index.tsx`. No new files, components, or dependencies. The changes are purely content updates to existing data arrays and JSX text nodes.

**Data arrays modified:**
- `services` (lines 57-64)
- `values` (lines 66-70)
- `clientLogos` / logos section (lines 86-89, 392-417)
- `testimonials` (lines 102-121)
- `statBandItems` (lines 123-128)

**JSX text updated:**
- Hero subtitle (line 190)
- Hero stats (lines 196-198)
- About section paragraph (lines 485-489)
- CTA heading and body (lines 523-528)

