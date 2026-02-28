# LOM THAI — Pre-Launch Audit Roadmap

> Generated: 2026-02-27 from $500M Pre-Launch Store Audit
> Store Score: 78/100 | Estimated CVR: 3.2-4.0% | Target: 5.5-7.0%
> Estimated revenue lift after all phases: +$14K/mo at 1,000 daily visitors

---

## How to Execute

Each phase has numbered tasks with **ready-to-paste prompts**. Copy the prompt into Claude Code and it will implement the fix. Execute phases in order — they're ranked by revenue impact.

---

## Phase 1: Critical Revenue Leaks ✅ COMPLETE

> Every day these remain unfixed costs you sales. Do these first.

### Task 1.1 — Convert Homepage Offer Stack to Real Add-to-Cart ✅

**What's wrong:** The 3 offer cards on the homepage ("Try It" $8, "Buy 2 Get 1 Free" $16, "Family Pack" $32) use `<a href="/collections/all">` links. They navigate visitors AWAY from the purchase instead of adding to cart. This is the highest-intent section on the entire page — people scrolled through 8 sections to get here — and you're sending them to browse.

**Prompt:**
```
Read sections/lom-offer-stack.liquid and templates/index.json. The offer card CTAs are <a> links to /collections/all instead of add-to-cart buttons. Fix this:

1. Replace the <a> tag in each offer card with a <button> element that uses JavaScript to add items to cart via Shopify's /cart/add.js AJAX API
2. The product handle is "lom-thai-authentic-muay-thai-oil" — fetch the variant ID from /products/lom-thai-authentic-muay-thai-oil.js on page load and cache it
3. Each offer card needs a data-quantity attribute: "Try It" = 1, "Buy 2 Get 1 Free" = 3, "Family Pack" = 5
4. On click: disable button, show "Adding..." text, POST to /cart/add.js with the variant ID and quantity, then try to open the cart drawer (document.querySelector('cart-drawer')?.open()) or fall back to window.location = '/cart'
5. On error: re-enable button, restore original text
6. Keep all existing CSS classes on the buttons (.lom-cta-btn, .lom-offer-card__cta, etc.)
7. Keep the URL schema setting as a fallback for when JS fails — wrap the button in a <noscript><a href="..."></a></noscript> pattern
```

---

### Task 1.2 — Add Product Image to Homepage Hero ✅

**What's wrong:** The homepage hero has a background image + text but NO picture of the actual product. Visitors don't know what they're buying. Fails the 1.5-second test completely.

**Prompt:**
```
Read sections/lom-hero-authority.liquid. Add a product image to the hero section:

1. Add a new image_picker setting called "product_image" in the schema with label "Product image (floating)"
2. On desktop: convert the hero content area into a 2-column grid — text/CTAs on the left (55%), product image on the right (45%)
3. The product image should float with a subtle drop-shadow: filter: drop-shadow(0 20px 40px rgba(0,0,0,0.3))
4. On mobile (max-width: 768px): show the product image centered between the subhead and CTA buttons, max-width 260px, margin 24px auto
5. Use loading="eager" and fetchpriority="high" since it's above the fold
6. Keep the background image as-is — the product image overlays it
7. Keep the trust strip below everything
8. Use BEM naming: lom-hero-authority__product-image for the wrapper, img inside it
9. Add all responsive CSS as a <style> block within the section file
```

---

### Task 1.3 — Fix Duplicate Competitor Copy on Product Page Comparison Table ✅

**What's wrong:** In templates/product.lom-thai.json, the comparison section has 3 competitors (Energy Drinks, Pharmacy Sprays, Coffee) but ALL THREE have the same enemy_copy: "Caffeine + sugar + taurine. Your heart pays the price." Pharmacy sprays don't contain caffeine. This is an obvious copy-paste error that kills credibility.

**Prompt:**
```
In templates/product.lom-thai.json, find the comparison section and update the competitor block settings:

- comp1 (Energy Drinks) → keep enemy_copy as: "Caffeine + sugar + taurine. Your heart pays the price."
- comp2 (Pharmacy Sprays) → change enemy_copy to: "Oxymetazoline addiction is real. Google 'rebound congestion.'"
- comp3 (Coffee) → change enemy_copy to: "Anxiety, acid reflux, stained teeth, and you're still tired by 2pm."

Only edit the settings values in the JSON. Do not change any section liquid code.
```

---

### Task 1.4 — Shorten Product Page H1 ✅

**What's wrong:** The H1 on the product page is 23 words: "Traditional Herbal Support for Headaches, Fatigue & Congestion — Without Chemicals, Caffeine, or Crashes." That's a paragraph posing as a headline. Cognitive overload → slower comprehension → lower conversion.

**Prompt:**
```
In templates/product.lom-thai.json, update the "main" section settings:
- Change "headline_override" to: "Natural Relief in Seconds"
- Change "subtitle" to: "The century-old Thai herbal stick for headaches, fatigue & congestion — no chemicals, no caffeine, no crash. Trusted by 10,000+ nurses, athletes & professionals."

In templates/product.json, update the "product_hero" section settings:
- Change "subtitle" to: "The century-old Thai herbal stick for headaches, fatigue & congestion — no chemicals, no caffeine, no crash."
```

---

### Task 1.5 — Unify Review Counts Across All Pages ✅

**What's wrong:** Homepage says "1,200+ Reviews." Default product.json says "2,847 Reviews." Inconsistency = fabrication signal = trust collapse.

**Prompt:**
```
In templates/product.json, find the product_hero section and change the review_count setting from "2,847" to "1,200+".

Then verify templates/product.lom-thai.json already shows "1,200+" and templates/index.json reviews section shows "1,200+". Report back what you find — do not change anything that already shows "1,200+".
```

---

## Phase 2: AOV Optimization ✅ COMPLETE

> Increase how much each customer spends without changing traffic volume.

### Task 2.1 — Pre-Select the Middle Bundle (3-Pack) ✅

**What's wrong:** The cheapest option (1-pack, $8) is pre-selected on the product page. The middle option (Relief Pack, 3-pack) should be the default — it anchors higher, and most people buy whatever is pre-selected.

**Prompt:**
```
Read sections/lom-product-hero.liquid. In the bundle selector area:

1. Move the "is-active" class from the first bundle button (data-quantity="1") to the second bundle button (data-quantity="3", the "Relief Pack")
2. Change the hidden input #lom-bundle-qty default value from value="1" to value="3"
3. Update the ATC button to show the 3-pack price on initial load. Currently it shows product.price | money — change it to show price_3 | money (which is already calculated as product.price * 3 * 80 / 100)
4. In the initial ATC button text, make it: {{ section.settings.atc_text | default: 'Add to Cart' }} — {{ price_3 | money }}
```

---

### Task 2.2 — Add Per-Stick Pricing to Bundles ✅

**What's wrong:** Bundles show total price ($16, $28) but no per-unit cost. "$5.33/stick" makes savings visceral and obvious.

**Prompt:**
```
In sections/lom-product-hero.liquid, add per-stick pricing to the 3-pack and 5-pack bundle options.

1. After each bundle's price <div>, add a small per-unit line:
   - For the 3-pack: <span class="lom-product-hero__bundle-unit">{{ price_3 | divided_by: 3 | money }}/stick</span>
   - For the 5-pack: <span class="lom-product-hero__bundle-unit">{{ price_5 | divided_by: 5 | money }}/stick</span>
   - Don't add one for the 1-pack (it IS the base price)

2. Style .lom-product-hero__bundle-unit in the section or in assets/lom-natural.css:
   font-size: 12px;
   color: var(--lt-emerald-dark);
   font-weight: 600;
   display: block;
   margin-top: 2px;
```

---

### Task 2.3 — Add Free Shipping Progress Bar to Cart Drawer ✅

**What's wrong:** No visual reinforcement of free shipping value in the cart. A progress bar reinforces the deal and can nudge single-stick buyers toward bundles.

**Prompt:**
```
Read snippets/cart-drawer.liquid (or find where the cart drawer content renders — check the Dawn theme cart drawer). Add a free shipping progress bar at the top of the cart drawer, before the line items.

1. Set threshold to 1600 (cents) = $16
2. Calculate progress: assign progress = cart.total_price | times: 100 | divided_by: 1600
3. If cart.total_price < 1600: show "You're {{ 1600 | minus: cart.total_price | money }} away from FREE shipping!" with a partially-filled bar
4. If cart.total_price >= 1600: show "You qualify for FREE shipping!" with a full green bar + checkmark icon
5. Style the bar:
   - Container: padding 16px 20px, background var(--lt-ivory-dark), border-bottom 1px solid var(--lt-border)
   - Bar track: height 6px, background var(--lt-sand), border-radius 3px
   - Bar fill: background var(--lt-emerald), border-radius 3px, width based on percentage (cap at 100%)
   - Text: font-family var(--lt-sans), font-size 13px, color var(--lt-charcoal), margin-bottom 8px
6. Use BEM naming: lom-shipping-bar, lom-shipping-bar__text, lom-shipping-bar__track, lom-shipping-bar__fill
```

---

## Phase 3: Checkout Friction Reduction ✅ COMPLETE

> Remove barriers between "I want this" and "Purchase complete."

### Task 3.1 — Add Express Checkout (Shop Pay / Apple Pay / Google Pay) ✅

**What's wrong:** The product form only has a standard submit button. No dynamic checkout button. Express checkout (Shop Pay, Apple Pay) can lift conversion 10-15% by letting buyers skip the cart.

**Prompt:**
```
In sections/lom-product-hero.liquid, find the {% form 'product' %} block. After the existing ATC <button type="submit">, add:

1. A separator: <div class="lom-product-hero__express-sep"><span>or checkout faster with</span></div>
2. Shopify's dynamic checkout: {{ form | payment_button }}

Style it in the section or lom-natural.css:
- .lom-product-hero__express-sep: text-align center, font-size 12px, color var(--lt-warm-gray), margin 14px 0 10px, display flex, align-items center, gap 12px. Add ::before and ::after pseudo-elements as 1px lines (flex: 1, height: 1px, background: var(--lt-border))
- .shopify-payment-button .shopify-payment-button__button: border-radius 10px, min-height 52px
- .shopify-payment-button .shopify-payment-button__button--unbranded: background var(--lt-charcoal), color var(--lt-ivory)
```

---

### Task 3.2 — Route Homepage CTAs to Product Page ✅

**What's wrong:** The hero CTA, showcase CTA, and sticky CTA all link to `/collections/all` instead of the product page. For a single-product store this adds an unnecessary browsing step.

**Prompt:**
```
In templates/index.json, update these section settings:

1. hero_authority → change primary_cta_url from "/collections/all" to "/products/lom-thai-authentic-muay-thai-oil"
2. showcase → change button_url from "/collections/all" to "/products/lom-thai-authentic-muay-thai-oil"
3. sticky_cta → change cta_url from "/collections/all" to "/products/lom-thai-authentic-muay-thai-oil"

Do NOT change the secondary_cta (the "See How It Works ↓" anchor link) — that stays as #how-it-works.
```

---

### Task 3.3 — Fix Stale "Sale ends in" Urgency Text ✅ (done in Phase 1)

**What's wrong:** The lom-thai product template still shows "Sale ends in" as the urgency text, but the fake countdown timer was already removed. So it reads "Sale ends in" with nothing after it. Looks broken.

**Prompt:**
```
In templates/product.lom-thai.json, find the "main" section settings and update:
- Change "urgency_text" from "Sale ends in" to "Limited batch — ships within 24 hours"
- Change "urgency_subtext" from "Order now to lock in this price + free shipping" to "Free shipping on every US & EU order"
```

---

## Phase 4: Trust & Authority Building ✅ COMPLETE

> Add the proof layer that makes visitors feel safe buying from you.

### Task 4.1 — Create Authority/Trust Logo Strip Section ✅

**What's wrong:** No "As Featured In," "Trusted By," or authority badges anywhere. This is one of the most powerful conversion tools and it's completely absent.

**Prompt:**
```
Create a new file sections/lom-trust-strip.liquid. This section shows a horizontal row of trust/authority badges below the homepage hero.

1. Schema settings:
   - eyebrow (text): default "Trusted By 10,000+ People"
   - background_color (select): "light" or "dark", default "light"

2. Schema blocks (type "badge"):
   - icon (image_picker): optional logo
   - text (text): fallback text, default "10,000+ Sold"

3. HTML structure:
   <section class="lom-trust-strip">
     <div class="lom-container">
       <p class="lom-trust-strip__eyebrow">{{ eyebrow }}</p>
       <div class="lom-trust-strip__row">
         {% for block in section.blocks %}
           <div class="lom-trust-strip__item">
             {% if block.settings.icon %}
               <img src="{{ block.settings.icon | image_url: width: 120 }}" ...>
             {% else %}
               <span>{{ block.settings.text }}</span>
             {% endif %}
           </div>
         {% endfor %}
       </div>
     </div>
   </section>

4. Styles (inline <style> in the section):
   - Background: var(--lt-ivory-dark) for light, var(--lt-brown-black) for dark
   - Padding: 28px 0
   - Eyebrow: 10px uppercase, letter-spacing 3px, color var(--lt-warm-gray), text-align center, margin-bottom 16px
   - Row: display flex, justify-content center, gap 48px, flex-wrap wrap, align-items center
   - Item text: font-size 12px, uppercase, letter-spacing 2px, color var(--lt-warm-gray), font-weight 600
   - Item images: height 24px, width auto, opacity 0.4, grayscale(100%), transition 0.3s
   - Item images:hover: opacity 0.8, grayscale(0)
   - Mobile: gap 24px 32px

5. Preset with 4 badges: "10,000+ Sticks Sold", "Trusted by Nurses & Athletes", "100% Natural", "Made in Thailand"

6. After creating the section, add it to templates/index.json:
   - Add a "trust_strip" entry in the sections object using type "lom-trust-strip" with those 4 badge blocks
   - Insert "trust_strip" into the order array at position 1 (between "hero_authority" and "pain_agitate")
```

---

### Task 4.2 — Strengthen Showcase Heading with Specific Number ✅

**What's wrong:** "This Is What Nurses, Athletes & Truck Drivers Carry Instead" is good but lacks the specificity that triggers social proof.

**Prompt:**
```
In templates/index.json, change the showcase section heading from:
"This Is What Nurses, Athletes & Truck Drivers Carry Instead"
to:
"This Is What 10,000+ Nurses, Athletes & Truck Drivers Carry Instead"
```

---

### Task 4.3 — Improve Product Page ATC Button Copy ✅

**What's wrong:** "Try Siam Lom Now" is product-name-first. Benefit-first CTAs convert better.

**Prompt:**
```
In templates/product.lom-thai.json, change the main section's atc_text from "Try Siam Lom Now" to "Get Instant Relief".

In templates/product.json, change the product_hero section's atc_text from "Add to Cart" to "Get Instant Relief".

The price is appended automatically by the JS, so the button will read "Get Instant Relief — $8.00".
```

---

## Phase 5: Performance & Email Capture ✅ COMPLETE

> Speed improvements and remarketing infrastructure.

### Task 5.1 — Self-Host Google Fonts for Speed

**What's wrong:** Fonts load from fonts.googleapis.com adding 2 DNS lookups and a render-blocking request. Self-hosting eliminates ~200-400ms of load time.

**Prompt:**
```
In layout/theme.liquid, remove the 3 Google Fonts lines (around lines 19-21):
- <link rel="preconnect" href="https://fonts.googleapis.com">
- <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
- <link href="https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,300;0,400;0,500;0,600;0,700;1,300;1,400;1,500&family=DM+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700&display=swap" rel="stylesheet">

Replace them with a comment:
<!-- Fonts: Cormorant Garamond & DM Sans loaded via self-hosted @font-face in lom-natural.css -->

Then at the TOP of assets/lom-natural.css (before the first comment block), add @font-face declarations. Since we can't download the actual .woff2 files here, add the declarations referencing filenames like:
  {{ 'CormorantGaramond-Regular.woff2' | asset_url }}
  {{ 'CormorantGaramond-Italic.woff2' | asset_url }}
  {{ 'CormorantGaramond-Medium.woff2' | asset_url }}
  {{ 'CormorantGaramond-SemiBold.woff2' | asset_url }}
  {{ 'CormorantGaramond-Bold.woff2' | asset_url }}
  {{ 'DMSans-Regular.woff2' | asset_url }}
  {{ 'DMSans-Medium.woff2' | asset_url }}
  {{ 'DMSans-SemiBold.woff2' | asset_url }}
  {{ 'DMSans-Bold.woff2' | asset_url }}

IMPORTANT: The actual font files must be uploaded to Shopify assets manually. This step prepares the CSS — we'll upload the files separately.

Actually — since lom-natural.css is a plain CSS file (not .liquid), it can't use Liquid tags. So instead, add the @font-face declarations using relative URLs:
  src: url('CormorantGaramond-Regular.woff2') format('woff2');
Shopify will serve these from the same /assets/ path.
```

---

### Task 5.2 — Enhance First-Order Discount Banner with Email Capture

**What's wrong:** No email capture mechanism. Every visitor who leaves without buying is lost forever unless you capture their email.

**Prompt:**
```
Read sections/lom-first-order.liquid to understand the current first-order discount banner implementation. Then enhance it:

1. If it's currently just a discount banner (showing a code without email capture), add an email input field:
   - Input: type="email", placeholder="Enter your email for 10% off"
   - Button: "Get My Discount"
   - On submit: use Shopify's customer form ({% form 'customer' %} with hidden tags) to subscribe the email, then reveal the discount code
   - Before email submission: show the email form
   - After email submission: show the discount code + "Use code WELCOME10 at checkout"

2. If the section doesn't exist, create it as a bottom-of-screen banner:
   - Fixed to bottom, slides up after 8 seconds or 50% scroll
   - Only shows once per session (sessionStorage check)
   - Dismissible with X button
   - Hides when product page sticky ATC is visible (coordinate with lom-sticky-cta)
   - Mobile: full-width, stacks vertically
   - Desktop: centered card, max-width 480px

3. Style to match Siam Lom:
   - Background: var(--lt-brown-black)
   - Text: var(--lt-ivory)
   - Accent: var(--lt-terracotta) on CTA button
   - Border-radius: 14px (desktop), 0 (mobile bottom sheet)
   - Box-shadow: 0 -4px 24px rgba(0,0,0,0.15)
```

---

## Phase 6: Shopify Admin Tasks (Manual — Cannot Be Coded)

> Do these in parallel with the code phases. Some are CRITICAL.

| # | Task | Where | Priority |
|---|------|-------|----------|
| 6.1 | Fix currency to USD for US market | Settings → Markets | CRITICAL |
| 6.2 | Create Shipping Policy page | Settings → Policies | HIGH |
| 6.3 | Create Refund Policy page | Settings → Policies | HIGH |
| 6.4 | Fix compare-at price (remove $50 anchor or set to $12) | Products → Siam Lom → Pricing | HIGH |
| 6.5 | Install Judge.me for real reviews | Apps → Judge.me | MEDIUM |
| 6.6 | Upload product-in-hand & packaging photos | Products → Siam Lom → Media | MEDIUM |
| 6.7 | Upload founder photo for About page | Theme Editor → About page → Founder block | MEDIUM |
| 6.8 | Upload product image for homepage hero | Theme Editor → Homepage → Hero → Product image | MEDIUM (after Task 1.2) |
| 6.9 | Upload self-hosted font .woff2 files to assets | Theme → Assets | LOW (after Task 5.1) |

---

## Execution Order

```
DAY 1 (Critical):
├── Phase 6.1: Fix currency in Shopify Admin (5 min)
├── Task 1.1: Fix offer stack add-to-cart
├── Task 1.3: Fix comparison table duplicate copy
├── Task 1.4: Shorten product page H1
├── Task 1.5: Unify review counts
└── Task 3.3: Fix "Sale ends in" urgency text

DAY 2 (High Impact):
├── Task 1.2: Add product image to hero
├── Phase 6.8: Upload hero product image in Theme Editor
├── Task 3.2: Route CTAs to product page
├── Task 2.1: Pre-select middle bundle
├── Task 2.2: Add per-stick pricing
└── Phase 6.2 + 6.3: Create policy pages

DAY 3 (AOV + Checkout):
├── Task 2.3: Free shipping progress bar in cart
├── Task 3.1: Add express checkout buttons
├── Task 4.3: Improve ATC button copy
└── Phase 6.4: Fix compare-at pricing

DAY 4 (Trust + Polish):
├── Task 4.1: Create trust/authority strip section
├── Task 4.2: Strengthen showcase heading
├── Phase 6.5: Install Judge.me
└── Phase 6.6 + 6.7: Upload photos

DAY 5 (Performance + Capture):
├── Task 5.1: Self-host fonts
├── Phase 6.9: Upload font files
└── Task 5.2: Email capture popup
```

**After Day 1-2:** Store is structurally ready for paid traffic at 4.5-5.5% CVR potential.
**After Day 3-5:** Store targets 5.5-7.0% CVR with full optimization.
