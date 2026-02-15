
## Remove Background Watermark Text

Remove all the large faded background text (e.g., "LINEN", "PROCESS", "VALUES", "SECTORS") from every section across all pages.

### Changes

**src/pages/Index.tsx** -- Remove 4 watermark `<span>` elements:
- Line 152: `<span className="watermark-text ...">LINEN</span>`
- Line 224: `<span className="watermark-text ...">PROCESS</span>`
- Line 264: `<span className="watermark-text ...">VALUES</span>`
- Line 301: `<span className="watermark-text ...">SECTORS</span>`

**src/pages/Services.tsx** -- Remove 2 watermark `<span>` elements:
- Line 38: `<span className="watermark-text ...">SERVICES</span>`
- Line 86: `<span className="watermark-text ...">FAQ</span>`

**src/pages/About.tsx** -- Remove 3 watermark `<span>` elements:
- Line 25: `<span className="watermark-text ...">ABOUT</span>`
- Line 64: `<span className="watermark-text ...">CAPACITY</span>`
- Line 110: `<span className="watermark-text ...">VALUES</span>`

Total: 9 lines deleted across 3 files. No other changes needed.
