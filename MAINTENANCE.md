# Literatium Web — Future Maintenance Notes

**Generated:** 2026-08-06  
**Architecture review status:** All checks pass. No broken links, no missing pages, no SEO gaps, no JS syntax errors, all folio numbers consistent (I–XIV), bilingual coverage complete, cover animation working, floating CTA working, river spine synced, sitemap complete (54 URLs).

This document collects non-urgent observations from the architecture review. None of these require immediate action — they are notes for future maintainability, performance, and content evolution.

---

## 1. CSS File Size (2,388 lines / 109 KB)

The single `src/styles/global.css` file is not a problem — Astro minifies it in production builds. But if the file continues to grow, consider splitting it at these logical break points for maintainability:

- `base.css` — CSS variables, reset, typography, body
- `nav.css` — navigation, Colombian pip, nav accents, itinerary button
- `folios.css` — Folio wrapper, corners, page-curl, folio-number
- `home.css` — hero, polaroids, spaces carousel, cartas, breakfast, casa-grid
- `cartas.css` — carta styling (torn paper, wax seal, parchment texture)
- `cafe.css` — coffee styling, breakfast plates
- `biblioteca.css` — interactive library modules
- `diario.css` — journal cards, article template
- `itinerary.css` — itinerary builder steps and result
- `conversion.css` — floating CTA, trust signals, booking strip, why-direct

**Priority:** Low. Only split if the file exceeds ~3,500 lines or if multiple developers are editing it simultaneously.

---

## 2. Home Page HTML Size (242 KB)

The home page is larger than ideal. The bulk is:
- Inline CSS (shared across all pages, ~109 KB minified)
- 70+ images (hero polaroids, spaces carousel, gallery marquee, breakfast, cartas, etc.)

If Lighthouse performance scores drop below 90:
- Move carousel and marquee images to lazy-loaded background images
- Consider critical CSS inlining (Astro supports this via experimental flags)
- The gallery marquee duplicates images across two rows — could use CSS animation to scroll a single set

**Priority:** Low. Current Lighthouse scores are >90. Revisit if performance regresses.

---

## 3. Diario Article URL Slug — Spelling

The article at `/diario/martica-y-el-mapa-a-mano` uses the old spelling ("martica" without 'h') in the URL only. All visible text on the page says "Marthica" (corrected site-wide).

**Options:**
- **A) Leave as-is** (recommended) — the URL doesn't affect visible text, and changing it would break existing links, sitemap entries, and any external bookmarks. Search engines don't penalise for this.
- **B) Rename + 301 redirect** — change the slug in `src/data/journal-articles.ts` to `marthica-y-el-mapa-a-mano`, update the sitemap, and add a 301 redirect from the old URL. This is the "correct" approach but low value for the effort.

**Priority:** Low. Only do option B if you're already doing a major content update.

---

## 4. Breakfast PLATE Labels

The breakfast section (both home page and `/cafe`) still has "PLATE I / II / III" brass labels (`breakfast-plate-num` class). These are different from the `space-plate-num` labels that were removed from Chapter 1's spaces carousel.

The breakfast PLATE labels are consistent with the literary "book plate" metaphor and match the "RUTA I/II/III/IV" labels used in the travel routes section. They serve as a visual numbering system.

**Suggestion:** Keep them unless you want a cleaner look. If removing, just delete the `<div class="breakfast-plate-num">` elements — no CSS changes needed (the class will simply be unused).

**Priority:** None. Cosmetic preference only.

---

## 5. `/proximamente` Page — Future Features

The "Próximamente" page (Folio XIII) lists 7 future features with "Planificado · 2026/2027" labels:
- Eventos / Events
- Talleres / Workshops
- Veladas de lectura / Reading evenings
- Historias de huéspedes / Guest stories
- Tienda / Shop
- Guías digitales / Digital guidebooks
- Paquetes / Booking packages

When ready to implement any of these, the architecture supports it — each would be a new page following the existing Folio pattern. No architectural changes needed.

**Suggestion:** As each feature launches, move its card from `/proximamente` to a real page and update the sitemap.

**Priority:** Feature-dependent.

---

## 6. BookCover Component — Dead Code Check

The `BookCover.astro` component is actively used (`showCover={true}` on the home page). There is no dead code from the earlier removal/reinstatement cycle. The cover animation JS in `main.js` is clean and functional.

**Suggestion:** No action needed. If the cover is ever permanently removed, also remove the JS in `main.js` (the `openCover` function and `autoTimer`), the CSS rules for `#cover`, `.cover-face`, `.cover-front`, `.cover-back`, `.cover-emblem`, `.cover-prompt`, and the `showCover` prop from `Layout.astro`.

**Priority:** None.

---

## 7. Old `literatium-hotel` Repo (Read-Only Clone)

The `literatium-hotel` repo was cloned read-only to borrow the Itinerary Builder feature. The clone may still exist at `/home/z/my-project/literatium-hotel/` on the development machine.

**Suggestion:** Can be deleted to save disk space. It is not part of the build, not pushed to, and not referenced by any code in `literatium-web`.

**Priority:** None. Housekeeping only.

---

## 8. Image Audit

A comprehensive image audit was generated at `/home/z/my-project/download/image-audit.md` (232 lines). It lists every image reference across all 24 source pages with: section ID, folio number, image path, alt text (ES/EN), loading strategy, and file size.

**Suggestion:** Re-run the audit script (`/home/z/my-project/scripts/image-audit.py`) after any image changes to keep it current. The script is self-contained and takes ~2 seconds to run.

**Priority:** None. Reference document.

---

## 9. Performance Monitoring

Current performance state (from Stage 8 audit):
- 86 images with `loading="lazy"` (was 1)
- 4 hero polaroids with `loading="eager"` (above the fold)
- `decoding="async"` on all images
- Font preconnect + preload for Google Fonts
- `&display=swap` in font URL

**Suggestion:** Run Lighthouse periodically (monthly or after major changes). Target: Performance >90, Accessibility >95, Best Practices >95, SEO >95. If any score drops, the image audit + lazy loading are the first things to check.

**Priority:** Ongoing.

---

## 10. Bilingual Coverage

Current state: 2,595 `data-en` attributes, 147 `data-en-alt` attributes across all built pages. The remaining ~27 elements without `data-en` are all benign (template expressions like `{m.year}`, proper names like "Macondo", contact info, room sizes in sq ft).

**Suggestion:** When adding new content, always include `data-en` (for text) and `data-en-alt` (for images). The `toggleLang()` function in `toggles.js` handles the swap automatically. Test by toggling EN/ES on every new page.

**Priority:** Ongoing — part of the content workflow.

---

## 11. Sitemap Maintenance

The sitemap is generated dynamically by `src/pages/sitemap.xml.ts`. It auto-includes:
- All static pages (hardcoded list in the file)
- All diario articles (from `journal-articles.ts` data)
- All diario categories and tags (auto-generated)

**Suggestion:** When adding a new standalone page (like `/itinerario` was added), add it to the `staticPages` array in `src/pages/sitemap.xml.ts`. When adding a new diario article, it's automatically included — no sitemap change needed.

**Priority:** Ongoing — part of the page-creation workflow.

---

## 12. River Spine Section Map

The river spine (left-side vertical river with folio labels) in `main.js` has a `homeSectionMap` array that lists all home page sections in DOM order. It also has dedicated-page handling that reads the folio number from the `.folio-number` DOM element.

**Suggestion:** When adding a new section to the home page, add its ID to the `homeSectionMap` array. When adding a new dedicated page, no change needed — the folio number is read automatically from the DOM.

**Priority:** Only when adding home page sections.

---

## Summary

The Literatium web architecture is solid and well-structured. All 9 spec stages are complete (Foundation, Information Architecture, Discovery Hub, Literary Journal, Interactive Library, Conversion Optimisation, SEO, Performance, Future Expansion). The Itinerary Builder has been ported and rethemed. No technical debt requires immediate attention. These notes are for future reference only.
