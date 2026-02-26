# Lom Thai: Persuasion Architecture & CRO Rebuild — ROADMAP

## Context

The store sells a product. It needs to sell a **transformation**. Every section currently talks about the product — none talk about the customer's pain. There's no agitation, no identity framing, no benefit-of-benefit layering, no loss aversion, no enemy positioning. The homepage has only 3 sections and the product page lists features without connecting to emotional outcomes.

**Target:** 5%+ conversion rate through pain-agitation-solution psychology across every page.

**Decisions:** USD only | Aspirational copy (user refines later) | Lowered social proof (1,200+ reviews, 4.8★, 10,000+ sold)

---

## PHASE 1: Pain-Led Homepage Hero ✅ DONE
**Goal:** Replace empty homepage top with a pain-identifying hero that stops the scroll
**File to create:** `sections/lom-hero-authority.liquid`
**File to modify:** `templates/index.json` (add section reference)

**Detailed spec:**
- Full-width section with background image slot (Shopify schema image picker)
- **Headline (h1):** "Headaches. Brain Fog. Congestion. You Shouldn't Have to Push Through the Day Like This."
- **Subhead (p):** "One inhale of this century-old Thai herbal stick and the fog lifts in seconds — no pills, no caffeine crash, no chemicals."
- **Primary CTA button:** "Get Instant Relief — Free US Shipping" → links to product page
- **Secondary CTA link:** "See How It Works ↓" → smooth scroll anchor
- **Trust strip (4 items below hero):** "10,000+ Sold" | "4.8★ from 1,200+ Reviews" | "100% Natural" | "30-Day Guarantee"
- Responsive: stacked on mobile, full-width CTA button
- Use existing `.lom-fade-in` animation, `--lom-cream` background, Playfair Display headings
- **Psychology:** Pain identification first → instant solution second → zero risk third

**CSS additions to** `assets/lom-natural.css`: Hero layout, trust strip grid (4-col desktop, 2x2 mobile)

---

## PHASE 2: Pain Agitation Section ✅ DONE
**Goal:** Twist the knife — make the customer's current solutions feel unacceptable
**File to create:** `sections/lom-pain-agitate.liquid`
**File to modify:** `templates/index.json` (add after hero)

**Detailed spec:**
- **Eyebrow:** "Sound familiar?"
- **Headline (h2):** "You've Tried Everything. Nothing Sticks."
- **3-column pain cards:**
  - **Card 1 — Energy drinks & coffee:** Icon: ☕ | "The jolt lasts 20 minutes. Then the crash hits harder than the fatigue. Your heart races. Your hands shake. And you're *still* exhausted."
  - **Card 2 — Pharmacy sprays & pills:** Icon: 💊 | "Chemicals you can't pronounce. Side effects longer than the relief. And that foggy, medicated feeling that makes you wonder if the cure is worse."
  - **Card 3 — Just pushing through:** Icon: 😤 | "White-knuckling through headaches. Blinking hard to stay awake during your shift. Telling yourself 'I'll feel better tomorrow.' You won't."
- **Transition line (centered, italic):** "What if relief didn't come with a tradeoff?"
- Responsive: 3-col desktop → stacked cards on mobile
- Use `--lom-cream-dark` background for contrast from hero
- **Psychology:** Agitation → dissatisfaction with status quo → openness to alternative

**CSS:** Pain card styling (border-left accent with `--lom-terracotta`), responsive grid

---

## PHASE 3: Solution Reveal + Identity Showcase ✅ DONE
**Goal:** Introduce the product as an identity shift, not just a tool — with benefit-of-benefit layering
**File to modify:** `sections/lom-showcase.liquid`

**Detailed spec — rewrite all copy:**
- **Headline:** "This Is What Nurses, Athletes & Truck Drivers Carry Instead"
- **Subhead:** "Lom Thai isn't a product. It's a decision to stop poisoning your body for relief."
- **3 benefit-of-benefit blocks (replace current feature list):**
  1. Feature: "Opens airways instantly" → Benefit: "Clears congestion" → **Life impact:** "So you can breathe fully, think clearly, and actually be present — at work, at the gym, with your kids"
  2. Feature: "Menthol + camphor blend" → Benefit: "Relieves headaches on contact" → **Life impact:** "No more canceling plans, leaving work early, or lying in a dark room waiting for pills to kick in"
  3. Feature: "Pocket-sized, TSA-friendly" → Benefit: "Relief anywhere" → **Life impact:** "You're never trapped without an option again — flights, meetings, long drives, 3am shifts"
- **Identity callout (bold, centered):** "People who carry Lom Thai don't wait for relief. They *choose* it."
- **CTA:** "Try It Risk-Free →"
- Keep existing product image right / text left layout
- **Psychology:** Identity formation → autonomy → control over suffering

---

## PHASE 4: How It Works — Effort Reduction Rewrite ✅ DONE
**Goal:** Make the solution feel effortlessly simple vs complex alternatives
**File to modify:** `sections/lom-steps.liquid`

**Detailed spec — rewrite step copy:**
- **Section heading:** "How It Works" (keep) | **Subhead:** "Simple. Natural. Instant."
- **Step 1:** Title: "Uncap It" | Body: "Takes one second. Fits in your pocket, purse, or gym bag."
- **Step 2:** Title: "Inhale or Roll On" | Body: "One deep breath through the inhaler for energy & congestion. Roll the balm on temples for headaches & tension."
- **Step 3:** Title: "Feel It Hit" | Body: "Not in 20 minutes. Not after 3 doses. *Seconds.* The fog lifts. The pressure fades. You're back."
- **Transition (below steps):** "That's it. No water needed. No waiting. No side effects. No crash."
- **Psychology:** Simplicity bias → instant gratification → contrast with complex alternatives

---

## PHASE 5: Transformation Reviews Rewrite ✅ DONE
**Goal:** Turn feature-validation reviews into before/after transformation stories
**File to modify:** `sections/lom-reviews.liquid`

**Detailed spec:**
- **Headline:** "They Were Skeptical Too. Then They Tried It."
- **Stats bar (lowered numbers):** "4.8 average from 1,200+ verified reviews | 97% would recommend"
- **Rewrite 3+ reviews as transformation stories:**
  - "I was popping 4 Advil a day for my migraines. Now I just reach for this stick. My liver thanks me." — Sarah M., Nurse, Texas ✓ Verified
  - "I drive 11 hours a day. Energy drinks were destroying my stomach. This thing keeps me sharp without the crash." — Marco V., Truck Driver, Ohio ✓ Verified
  - "I bought it as a joke for my husband. He now panics if he can't find it before leaving the house." — Anna P., Portland ✓ Verified
- Lower all hardcoded numbers: 2,847→1,200+ reviews, 4.9→4.8 stars, 98%→97%
- **Psychology:** Transformation narrative → relatability → FOMO on relief others found

---

## PHASE 6: Enemy-Framed Comparison Table ✅ DONE
**Goal:** Reposition competitors as villains, not just inferior options — add Amazon column
**File to modify:** `sections/lom-comparison.liquid`

**Detailed spec:**
- **Headline:** "Stop Settling for Relief That Hurts You"
- **Subtitle:** "See why 10,000+ people switched"
- **Rewrite competitor descriptions (not just ✓/✗ but emotional copy):**
  - Energy Drinks column header: "Caffeine + sugar + taurine. Your heart pays the price."
  - Pharmacy Sprays: "Oxymetazoline addiction is real. Google 'rebound congestion.'"
  - Coffee: "Anxiety, acid reflux, stained teeth, and you're still tired by 2pm."
  - **NEW 4th column — Amazon generics:** "Mass-produced. Unknown ingredients. No heritage. No guarantee."
- **Lom Thai column:** "5 natural ingredients. Century-old Thai formula. Works in seconds. $0.03 per use. 30-day guarantee."
- Keep ✓/✗ grid below the emotional headers
- **CTA:** "Try Lom Thai Risk-Free →"
- **Psychology:** Enemy framing → fear of current choice → moral superiority of natural

---

## PHASE 7: Ingredients Transparency Enhancement ✅ DONE
**Goal:** Add trust-building transparency line to existing ingredients section
**File to modify:** `sections/lom-ingredients.liquid`

**Detailed spec:**
- Keep existing 5-ingredient card grid
- **Add closing line below grid:** "No fillers. No synthetic fragrance. No ingredients you need a chemistry degree to pronounce. Just five plants that have worked for over a century."
- **Psychology:** Transparency → trust → contrast with opaque competitors

---

## PHASE 8: Risk Reversal — Guarantee Rewrite ✅ DONE
**Goal:** Flip loss aversion — make NOT buying feel riskier than buying
**File to modify:** `sections/lom-guarantee.liquid`

**Detailed spec:**
- **Headline:** "Try It for 30 Days. If It Doesn't Change How You Handle Your Worst Days, We'll Refund Every Penny."
- **Body:** "No forms. No fine print. No 'restocking fees.' Just email us and we send your money back. We can afford to do this because 97% of people never ask."
- **Loss aversion subtext (italic, below):** "The only risk is spending another month reaching for chemicals."
- Keep existing badge visual (30 | Day Guarantee)
- **Psychology:** Loss aversion inversion → risk feels like NOT buying → confidence signal

---

## PHASE 9: Homepage Offer Stack ✅ DONE
**Goal:** Add decoy-priced bundle cards to homepage with psychological framing
**File to create:** `sections/lom-offer-stack.liquid`
**File to modify:** `templates/index.json`

**Detailed spec:**
- **Headline:** "Choose How You Want to Feel"
- **3 pricing cards (side-by-side):**
  - **Try It** (1x, $8): "See what the hype is about" — plain card, no badge, no highlight
  - **Relief Pack** (3x, $19.20): "One for home. One for work. One for the gym." — **"Most Popular"** badge, visually larger/highlighted card, `--lom-sage` border
  - **Never Run Out** (5x, $28): "Best price. Stock up for the year." — "Best Value" badge
  - Each card: strikethrough original price, savings %, Add to Cart button
- **Below cards:** "Every order ships free to the US. Every order is backed by our 30-day guarantee."
- Responsive: 3-col desktop → stacked on mobile with "Most Popular" card first on mobile
- **Psychology:** Decoy effect (1x makes 3x feel smart, 5x makes 3x feel reasonable) → identity labeling

**CSS:** Offer card grid, highlighted card styling, badge positioning

---

## PHASE 10: Final CTA — Identity Close ✅ DONE
**Goal:** Close homepage with identity belonging, not manufactured urgency
**File to modify:** `sections/lom-final-cta.liquid`

**Detailed spec:**
- **Headline:** "You Deserve Relief That Doesn't Come With a Tradeoff"
- **Body:** "10,000+ people stopped reaching for chemicals and started carrying Lom Thai. The headaches still come. The long shifts don't stop. But now they have something that actually works — instantly, naturally, and for $0.03 a use."
- **CTA button:** "Join Them — Try Lom Thai Risk-Free"
- **Psychology:** Identity belonging → tribe → future self visualization

---

## PHASE 11: Wire Up Homepage Template ✅ DONE
**Goal:** Connect all 10 sections in correct persuasion funnel order in index.json
**File to modify:** `templates/index.json`

**Section order:**
1. `lom-hero-authority` (pain-led hero)
2. `lom-pain-agitate` (pain agitation)
3. `lom-showcase` (solution + identity)
4. `lom-steps` (how it works)
5. `lom-reviews` (transformation reviews)
6. `lom-comparison` (enemy-framed comparison)
7. `lom-ingredients` (transparency)
8. `lom-guarantee` (risk reversal)
9. `lom-offer-stack` (decoy offer)
10. `lom-final-cta` (identity close)

Remove any sections currently in index.json that aren't in this list.

---

## PHASE 12: Product Page — Pain-First Headline & Benefit Accordions ✅ DONE
**Goal:** Rewrite product hero copy with pain psychology and benefit-of-benefit layering
**File to modify:** `sections/lom-product-hero.liquid`

**Detailed spec:**
- **Headline override:** "Instant Relief From Headaches, Fatigue & Congestion — Without Chemicals, Caffeine, or Crashes"
- **Subtitle:** "The century-old Thai herbal stick that 10,000+ nurses, athletes & professionals carry daily"
- **Description accordion rewrite:** "When a headache hits at 2pm and you can't leave work — one roll on your temples and the pressure dissolves in seconds. No water. No waiting 30 minutes for a pill. Just relief."
- **FAQ accordion rewrite as objection killers:**
  - "Will this actually work for MY headaches?" → story-based answer
  - "Is this just a Vicks knockoff?" → heritage differentiation
  - "What if I don't like it?" → "Email us. Full refund. No forms."
- **Shipping accordion:** "Ships within 24 hours. Arrives in 3-5 business days (US). Free on every order."
- **Bundle name changes:** "1x"→"Try It", "3x"→"Relief Pack", "5x"→"Never Run Out"
- **Lower social proof:** 2,847→1,200+ reviews | "Sarah and 438"→"Sarah and 89 people this week"
- **Add warranty accordion:** "1-Year Quality Guarantee — If it dries out within 12 months, we replace it free."
- **Loss aversion line (bottom):** "Still thinking? Every day without this is another day reaching for chemicals that don't actually solve the problem."

---

## PHASE 13: Product Page — Timer Fix ✅ DONE
**Goal:** Replace fake-feeling countdown with authentic scarcity
**File to modify:** `sections/lom-product-hero.liquid` (JavaScript section)

**Detailed spec:**
- Current: 6-hour timer that resets indefinitely via localStorage
- **New behavior:** Timer counts down once. On expiry → hide timer entirely → show static message: "Limited stock — ships within 24 hours"
- Remove timer reset logic from localStorage handler
- **Psychology:** Authentic scarcity > manufactured urgency. Savvy users spot fake timers.

---

## PHASE 14: Announcement Bar + FAQ Rewrite ✅ DONE
**Goal:** Add shipping specificity to announcement bar, rewrite FAQs as objection killers
**Files to modify:** `sections/lom-announce.liquid`, `sections/lom-faq.liquid`

**Announcement bar:**
- **New copy:** "Free US Shipping (3-5 Days) | 30-Day Money-Back Guarantee | 10,000+ Sticks Sold"

**FAQ rewrites:**
- "Is this actually safe?" → "5 ingredients. All plant-based. Used by millions in Thailand for over a century. No side effects reported."
- "How is this different from Vicks?" → "Vicks is petroleum-based with synthetic menthol. Lom Thai uses pure plant extracts in a century-old formula. Different universe."
- "What if it doesn't work for me?" → "Email us. Full refund. No forms, no shipping it back, no 'restocking fee.' 97% of people keep it."
- "Do you ship internationally?" → "Free US shipping (3-5 days). Free EU shipping (5-10 days). Ships within 24 hours."

---

## PHASE 15: Cart Page — Anxiety Reduction ✅ DONE
**Goal:** Turn cart into a reassurance layer instead of a transactional dead zone
**File to modify:** `templates/cart.json` + related cart section

**Detailed spec:**
- Replace plain text upsell with styled card: "You're 1 stick away from 20% off your entire order. Add another?"
- Trust row: "🔒 Secure checkout | 📦 Ships in 24hrs | ↩️ 30-day guarantee"
- Micro-copy near checkout button: "Join 10,000+ people who chose natural relief"
- **Psychology:** Cart = highest anxiety. Every element reduces doubt.

---

## PHASE 16: About Page — Origin Story ✅ DONE
**Goal:** Replace empty about page with trust-building brand narrative
**File to create:** `sections/lom-about.liquid`
**File to modify:** `templates/page.about.json`

**Detailed spec:**
- **Headline:** "We Didn't Invent This. Thai Herbalists Did — Over 100 Years Ago."
- **Narrative (3 blocks):**
  1. "In Thailand, these herbal sticks aren't alternative medicine. They're *the* medicine. Every taxi driver, every street vendor, every grandmother carries one."
  2. "We brought this formula to the West because we were tired of watching people choose between chemicals that don't work and coffee that makes them jittery."
  3. "Every Lom Thai stick contains the same 5 ingredients Thai healers have used for a century. Nothing added. Nothing synthetic. Nothing to pronounce."
- **Closing:** "We're not a wellness startup. We're a bridge between ancient Thai relief and modern Western lives."
- Include image slots (Shopify schema) for lifestyle/sourcing imagery
- **Psychology:** Origin story → authenticity → moral authority → trust

---

## PHASE 17: Contact Page ✅ DONE
**Goal:** Replace empty contact page with accessible, trust-building contact form
**File to create:** `sections/lom-contact-form.liquid`
**File to modify:** `templates/page.contact.json`

**Detailed spec:**
- Contact form (name, email, message) using Shopify form tags
- **Promise:** "Real humans respond within 24 hours"
- FAQ link: "Most questions answered here →"
- Email display + social links
- **Psychology:** Accessibility = legitimacy. Hard-to-reach brands feel like scams.

---

## PHASE 18: First-Time Buyer Incentive ✅ DONE
**Goal:** Add reciprocity trigger for new visitors
**File to create:** `sections/lom-first-order.liquid` (slide-up banner, not popup)

**Detailed spec:**
- Slide-up from bottom of screen (not modal popup — popups feel desperate)
- Trigger: 15 seconds on site OR 50% scroll on homepage
- **Copy:** "First time? Use code FIRSTTRY for 10% off your first order"
- Dismiss button, don't show again (localStorage flag)
- Subtle, branded styling (sage background, white text)
- **Psychology:** Reciprocity → gift creates obligation to consider

---

## PHASE 19: Mobile CRO Pass ✅ DONE
**Goal:** Ensure all new/modified sections are conversion-optimized for mobile
**Files to modify:** `assets/lom-natural.css` + all new sections

**Detailed spec:**
- Homepage sticky bottom CTA bar (like product page has) with "Shop Now" button
- All CTA buttons: full-width on mobile, minimum 48px height
- Hero text: max 2 lines on mobile, readable font size
- Pain agitation cards: stacked vertically with adequate spacing
- Offer stack: "Most Popular" card shown first on mobile
- Touch targets: all interactive elements ≥ 44px
- FAQ accordions: adequate tap areas with visual feedback

---

## Existing Patterns to Reuse
- Section schema pattern from `lom-guarantee.liquid`
- Card grid from `lom-ingredients.liquid` (responsive 3-col → 1-col)
- Accordion from `lom-faq.liquid`
- Trust badge pattern from `lom-product-hero.liquid`
- `.lom-fade-in` animation from `lom-natural.css`
- CSS variables: `--lom-sage`, `--lom-terracotta`, `--lom-gold`, `--lom-cream`, `--lom-cream-dark`
- Font stack: Playfair Display (headings) + Inter (body)

## Verification (after each phase)
- Check Liquid syntax: no unclosed tags, valid schema JSON
- Mobile test at 375px width
- Verify CTAs link to correct pages
- Confirm section appears in Shopify theme editor
- Visual consistency with existing brand aesthetic
