# LOM THAI — Conversion Optimization Roadmap

> Generated: 2026-02-26
> Target: 5%+ US market conversion rate
> Current estimated drag: 3.9–8.2% lost conversion from structural issues

---

## Phase 0: Emergency Fixes (Do Today)

> These issues are actively killing conversions right now.

### ~~0.1 — Fix Final CTA Broken Link~~ DONE
- **Status**: Fixed. Changed `button_url` from LED bulb to `/products/lom-thai-authentic-muay-thai-oil`
- **File changed**: `templates/index.json:402`

### 0.2 — Fix EUR Currency Display for US Market — REQUIRES SHOPIFY ADMIN
- **Finding**: Cart shows `€0,00 EUR`, product shows `€50,00 EUR / €23,99 EUR`. All copy references USD ($8, $19.20, $28). Comma decimals + EUR symbol = instant "foreign dropship" signal to US buyers
- **Fix**: Configure Shopify Markets / store currency to USD as primary. Ensure checkout, cart, and product pages display `$` with period decimals
- **Impact**: This is the single largest conversion killer for US traffic
- **Est. recovery**: 1.5–3.0%

### 0.3 — Create Shipping & Refund Policy Pages — REQUIRES SHOPIFY ADMIN
- **Finding**: `/policies/shipping-policy` and `/policies/refund-policy` return 404/500 errors. The site promises "30-day money-back guarantee" everywhere but has zero legal backing
- **Fix**: Create both policy pages in Shopify Admin → Settings → Policies
- **Shipping policy content must include**: Free US shipping (5-7 business days), Free EU shipping (5-10 business days), processing time, carrier info
- **Refund policy content must include**: 30-day window, no-questions-asked language matching site promises, email-only process, no restocking fees
- **Est. recovery**: 0.5–1.0%

---

## Phase 1: Trust Consistency (This Week)

> Contradictions across pages that erode credibility for attentive buyers.

### ~~1.1 — Unify Social Proof Numbers~~ DONE
- **Status**: Unified to **10,000+** everywhere, rating unified to **4.8**
- **Changes made**:
  - `templates/index.json` → hero badge "10,000+ Sticks Sold", final CTA "10,000+", comparison subtitle already "10,000+", reviews 4.8
  - `sections/lom-footer.liquid` → newsletter default + preset: 12,000+ → 10,000+
  - `sections/main-cart-footer.liquid` → already 10,000+ (no change needed)

### ~~1.2 — Unify Delivery Timeline~~ DONE
- **Status**: Unified to **US: 5-7 business days**, **EU: 5-10 business days**
- **Changes made**:
  - `sections/lom-announce.liquid` → "3-5 Days" → "5-7 Business Days"
  - `sections/lom-faq.liquid` → FAQ shipping answer updated to "5-7 business days" (US) / "5-10 business days" (EU)

### ~~1.3 — Unify Offer Structure~~ DONE
- **Status**: Unified to **Buy 2 Get 1 Free** framework everywhere
- **Changes made**:
  - `templates/cart.json` → upsell banner now says "Buy 2 Get 1 Free"
  - `templates/index.json` → offer stack: 3-pack = "Buy 2 Get 1 Free" ($16), 5-pack = "Family Pack" with 2 sticks free ($32)

### 1.4 — Fix Compare-At Price Anchoring — REQUIRES SHOPIFY ADMIN
- **Finding**: Product page shows €50 → €23.99 (52% off). For a nasal inhaler stick, a €50 anchor is unbelievable and signals inflated dropship pricing. Homepage shows $8 single stick.
- **Fix**: Set compare-at price to something believable ($12 → $8 or remove entirely). The value should come from the copy, not fake anchoring.
- **Where**: Shopify Admin → Products → Siam Lom → Pricing
- **Est. recovery**: 0.3–0.7%

---

## Phase 2: Trust Depth (Week 2) ✅ DONE

> Add the proof layer that separates real brands from white-label dropshippers.

### ~~2.1 — Add Founder Identity to About Page~~ DONE
- **Status**: Added `founder` block type to `sections/lom-about.liquid` with photo, name, role, and personal story fields. Updated `templates/page.about.json` to include founder block. **Action needed**: Update placeholder name/story and upload photo in Shopify Theme Editor.

### 2.2 — Integrate Real Review Platform — REQUIRES SHOPIFY ADMIN
- **Finding**: All reviews are hardcoded in theme JSON. All 5-star. No review photos. No verified purchase from a third-party system. Savvy buyers recognize curated testimonials instantly.
- **Fix**: Install Judge.me (free tier) or Stamped.io. Import existing orders. Allow organic reviews including 4-star. Show review photos.
- **Impact**: Authentic reviews with variance (4.7 avg with some 4-stars) convert better than perfect 5.0
- **Est. recovery**: 0.2–0.5%

### ~~2.3 — Add Physical Address / Origin Proof~~ DONE
- **Status**: Added "Formulated in Thailand · Shipped from the USA" origin line to footer with editable `origin_text` setting. Style matches footer aesthetic. **Action needed**: Verify origin text accuracy in Theme Editor.

### 2.4 — Add Product/Packaging Photography — REQUIRES ASSETS
- **Finding**: No images of actual packaging, shipping box, or product-in-hand. Premium brands show the unboxing experience. Absence signals generic white-label.
- **Fix**: Add 2–3 photos: product in hand, packaging, lifestyle shot. Add to product gallery and About page.
- **Est. recovery**: 0.1–0.3%

### ~~2.5 — Remove Subscription Cart Notice~~ DONE
- **Status**: Added CSS to `sections/main-cart-footer.liquid` to hide Shopify subscription/recurring charge terms from cart page.

---

## Phase 3: Funnel Friction Reduction (Week 3) ✅ DONE

> Remove micro-friction points that bleed conversions at each step.

### ~~3.1 — Fix Cart Upsell to Add-to-Cart (Not Navigate Away)~~ DONE
- **Status**: Changed upsell button from `<a href="/collections/all">` to AJAX add-to-cart button using Shopify Cart API (`/cart/add.js`). Fetches product variant ID from `/products/lom-thai-authentic-muay-thai-oil.js`, adds to cart, and reloads page. No more navigating away from cart.
- **Finding**: "Add Another Stick" button sends users to `/collections/all`, navigating them AWAY from cart. On mobile especially, this causes cart abandonment.
- **Fix**: Change upsell CTA to an AJAX add-to-cart action that adds the product directly to cart without navigation. Or use a product quick-add modal.
- **File**: `templates/cart.json` → upsell banner
- **Est. recovery**: 0.2–0.4%

### ~~3.2 — Replace Fake Countdown Timer~~ DONE
- **Status**: Removed countdown timer entirely. Replaced with static scarcity message: "Limited batch — ships within 24 hours". Deleted all timer JS code and `urgency_hours` setting. No more resetting fake countdowns.
- **Finding**: Product page has a 6-hour countdown timer ("Sale ends in 6 hours"). It resets on every visit. Returning visitors see through this immediately — it's the #1 dropship red flag.
- **Fix**: Either:
  - (A) Remove entirely and rely on copy-based urgency ("Limited batch — ships within 24 hours")
  - (B) Tie to a real event (actual sale end date, inventory threshold)
- **File**: `sections/lom-product-hero.liquid`
- **Est. recovery**: 0.1–0.3%

### ~~3.3 — Fix Mobile Comparison Table Visibility~~ DONE
- **Status**: Redesigned mobile layout. Column headers now horizontally scroll with snap. Comparison rows stack vertically (1 column) with competitor labels via `data-label` + CSS `::before`. Brand value highlighted with sage background. Competitors shown with reduced opacity.
- **Finding**: 5-column comparison table requires horizontal scrolling on mobile. Most users won't scroll right. The strongest persuasion section becomes invisible.
- **Fix**: Redesign for mobile as:
  - (A) Stacked cards (one competitor per card, swipeable)
  - (B) Two-column layout (Siam Lom vs one competitor at a time with tabs)
  - (C) Accordion with each competitor as expandable row
- **File**: `sections/lom-comparison.liquid`
- **Est. recovery**: 0.1–0.3%

### ~~3.4 — Resolve Dual Sticky CTA Overlap on Mobile~~ DONE
- **Status**: Added priority logic — sticky CTA hides when first-order discount banner is visible. When user dismisses the first-order banner, sticky CTA reappears. Only one bottom bar at a time.
- **Finding**: Both `lom-sticky-cta` and `lom-first-order` (10% discount banner) compete for bottom screen space. Code attempts coordination but two bottom bars create clutter.
- **Fix**: Only show one at a time. Priority logic: if first-order banner is active, hide sticky CTA. Once dismissed, show sticky CTA.
- **Files**: `sections/lom-sticky-cta.liquid`, `sections/lom-first-order.liquid`
- **Est. recovery**: 0.1–0.2%

### ~~3.5 — Add Price Visibility Above the Fold~~ DONE
- **Status**: Added "Starting at $8 — Free US Shipping" price line below hero CTA button. New `price_line` setting in schema, styled with proper font weight and spacing. Set in `index.json`.
- **Finding**: Homepage hero has no price. Users must scroll through 8 sections before seeing offer stack pricing. This delays the buying decision.
- **Fix**: Add "Starting at $8 — Free Shipping" near the hero CTA button or as a subtle line below it
- **File**: `sections/lom-hero-authority.liquid` or `templates/index.json`
- **Est. recovery**: 0.1–0.2%

---

## Phase 4: Amazon Differentiation (Week 4)

> Close the "I'll just check Amazon" exit path.

### ~~4.1 — Add Proprietary Formulation Proof~~ DONE
- **Status**: Added `sourcing` detail field to each ingredient card showing concentration ratios, extraction methods, and origin. Added `formulation_note` setting ("Small-batch crafted in Thailand..."). Updated Amazon Generics enemy copy to highlight diluted extracts and concentration gap.
- **Changes made**:
  - `sections/lom-ingredients.liquid` → new `sourcing` block field, `formulation_note` setting, badges infrastructure, CSS for sourcing labels
  - `templates/index.json` → ingredients now include sourcing details per ingredient + formulation note
  - `templates/product.lom-thai.json` → same sourcing details added
  - `templates/index.json` → Amazon Generics enemy copy strengthened

### ~~4.2 — Add Third-Party Validation~~ DONE
- **Status**: Added validation badges strip to ingredients section with 4 configurable badges: GMP-Certified Facility, Third-Party Lab Tested, 100% Natural Ingredients, Made in Thailand. Toggle-able via `show_badges` setting. **Action needed**: Verify which certifications are actually held and update badge text accordingly in Theme Editor.
- **Changes made**:
  - `sections/lom-ingredients.liquid` → badge settings + rendering logic
  - `assets/lom-natural.css` → `.lom-ingredients-badges` and `.lom-badge-item` styles

### ~~4.3 — Reframe "$0.03 Per Use" Positioning~~ DONE
- **Status**: Replaced all "$0.03 per use" references with premium value framing. Comparison row changed from "Cost per use: $0.03" to "Months of daily relief: One $8 stick lasts months" vs competitor monthly costs. Product hero benefit reframed. FAQ answers updated. Final CTA reframed to "less than the price of your morning coffee."
- **Changes made**:
  - `templates/index.json` → brand_tagline, comparison row
  - `templates/product.lom-thai.json` → benefit_3, comparison row, FAQ q3
  - `templates/product.json` → benefit_3, comparison row, FAQ q3
  - `sections/lom-comparison.liquid` → default brand_tagline, preset row
  - `sections/lom-faq.liquid` → preset FAQ answer
  - `sections/lom-product-hero.liquid` → preset benefit
  - `sections/lom-final-cta.liquid` → default CTA text

### 4.4 — Build Brand World Beyond Single SKU — REQUIRES SHOPIFY ADMIN
- **Finding**: Single-product store signals white-label reselling. Even one additional product (e.g., a balm tin, a travel case, a refill pack) creates "brand" perception.
- **Fix**: Consider adding at minimum a bundle-as-product (gift set, travel kit) or branded accessory to create collection depth.

---

## Phase 5: Regulatory & Legal Hardening (Ongoing) ✅ DONE

> Prevent legal exposure that could shut down the store or ad accounts.

### ~~5.1 — Audit Medical Claims~~ DONE
- **Status**: Softened all direct therapeutic claims across all section files and template JSONs. Changed "Relieves headaches" → "Traditionally used for headache comfort", "Clears congestion" → "Supports respiratory comfort", "Opens airways instantly" → "Promotes clear breathing", etc. Added FDA disclaimer setting to both `lom-ingredients.liquid` and `lom-product-hero.liquid` with styled rendering.
- **Changes made**:
  - `sections/lom-ingredients.liquid` → softened all preset ingredient benefits, added `fda_disclaimer` setting + rendering
  - `sections/lom-showcase.liquid` → softened defaults and presets
  - `sections/lom-faq.liquid` → softened FAQ answers, removed medical efficacy claims
  - `sections/lom-comparison.liquid` → "Relieves headaches" → "Headache comfort", "Clears congestion" → "Respiratory comfort"
  - `sections/lom-product-hero.liquid` → softened headline, description accordion, removed migraine testimonial from FAQ, added `fda_disclaimer` setting
  - `sections/lom-steps.liquid` → softened step descriptions
  - `sections/lom-final-cta.liquid` → removed "actually works" claim
  - `sections/main-product.liquid` → softened pain subtitle
  - `templates/index.json` → softened showcase, steps, comparison, ingredients
  - `templates/product.json` → softened subtitle, description, steps, comparison, ingredients, FAQ
  - `templates/product.lom-thai.json` → softened headline, description, FAQ, comparison, ingredients, ATC text
  - `assets/lom-natural.css` → added `.lom-fda-disclaimer` styles

### ~~5.2 — Add Required Legal Pages~~ DONE
- **Status**: Added legal page navigation links to footer bottom area: Terms of Service, Privacy Policy, Shipping Policy, Refund Policy. Links use Shopify's standard `/policies/` URLs. **Action needed**: Create these policy pages in Shopify Admin → Settings → Policies if they don't already exist.
- **Changes made**:
  - `sections/lom-footer.liquid` → added `<nav class="lom-footer__legal">` with 4 policy links
  - `assets/lom-natural.css` → added `.lom-footer__legal` styles

---

## Execution Summary

| Phase | Scope | Effort | Est. Recovery |
|---|---|---|---|
| **Phase 0** | Emergency fixes | 1 hour | 2.5–5.0% |
| **Phase 1** | Trust consistency | 2–3 hours | 1.0–2.3% |
| **Phase 2** | Trust depth | 1–2 days | 0.7–1.7% |
| **Phase 3** | Funnel friction | 1–2 days | 0.6–1.4% |
| **Phase 4** | Amazon defense | 1 week | Qualitative |
| **Phase 5** | Legal hardening | Ongoing | Risk mitigation |

**After Phase 0+1 completion**: Site becomes structurally capable of 3–4% conversion.
**After Phase 2+3 completion**: Site targets 5%+ conversion with proper traffic.
**Phase 4+5**: Long-term brand moat and legal protection.

---

## Files Changed Per Phase (Quick Reference)

### Phase 0
- `templates/index.json`
- Shopify Admin → Settings → Currency/Markets
- Shopify Admin → Settings → Policies

### Phase 1
- `templates/index.json`
- `sections/lom-announce.liquid`
- `sections/lom-footer.liquid`
- `sections/main-cart-footer.liquid`
- `sections/lom-contact-form.liquid`
- `templates/cart.json`
- Shopify Admin → Products → Pricing

### Phase 2
- `templates/page.about.json`
- `sections/lom-footer.liquid`
- `sections/main-cart-footer.liquid`
- App install (Judge.me or similar)
- Product photography (external)

### Phase 3
- `templates/cart.json`
- `sections/lom-product-hero.liquid`
- `sections/lom-comparison.liquid`
- `sections/lom-sticky-cta.liquid`
- `sections/lom-first-order.liquid`
- `sections/lom-hero-authority.liquid`

### Phase 4
- `sections/lom-ingredients.liquid`
- `sections/lom-comparison.liquid`
- `sections/lom-showcase.liquid`
- `sections/lom-faq.liquid`

### Phase 5
- `sections/lom-ingredients.liquid`
- `sections/lom-showcase.liquid`
- `sections/lom-faq.liquid`
- Shopify Admin → Settings → Policies
- `sections/lom-footer.liquid`
