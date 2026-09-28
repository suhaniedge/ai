# PRD — SuhaniEdge: AI Freelance Launchpad Landing Page

## Original Problem Statement
Build a production-ready, conversion-focused landing page for SuhaniEdge's "AI FREELANCE LAUNCHPAD" — a live, beginner-friendly AI freelancing webinar at ₹9 (front-end offer). Single conversion: webinar registration via Razorpay link (https://rzp.io/rzp/webinarregistration9). Locked copy, no fake scarcity/countdowns/testimonials, premium purple + gold (#F4C95D) identity, alternating dark/light section rhythm, mobile-first, animated "Suha AI" character with a 3-question interactive experience, SEO + accessibility + analytics-ready. Supplied assets: brand logo, hero YouTube video (mxqDVpum6eI), 6 YouTube Shorts for proof, social handles (Instagram, YouTube, LinkedIn, Pinterest), hello@suhaniedge.com. The 30-Day Challenge is NOT sold on this page.

## Architecture
- Frontend-only React SPA (CRA + craco + Tailwind + Framer Motion). Backend untouched (stock FastAPI status endpoints; no app data needed — registration happens on Razorpay).
- Routes: `/` and `/ai-freelancing-webinar` render the same landing page.
- Components under `/app/frontend/src/components/`: Navbar, Hero, Benefits, Learning, Ecosystem, SuhaExperience, SuhaAI (animated SVG character), Aha, Roadmap, Transformation, Bonuses, ValueStack, Proof, Mentor, TrustSections (Objection/Audience/RealityCheck/WhyMatters), FinalOffer, FinalSuha, FAQ, Footer, Overlays (ProgressBar, StickyCTA, ExitIntent), GoldButton, LiteVideo, Reveal.
- Locked copy centralized in `/app/frontend/src/lib/data.js`; analytics helper `/app/frontend/src/lib/track.js` (dataLayer + posthog events).
- SEO/OG/Twitter/FAQ schema in `/app/frontend/public/index.html`.

## User Personas
- Students/early professionals in India curious about AI but without direction.
- Aspiring freelancers who know tools (ChatGPT etc.) but not how to package/offer skills.
- Complete beginners (no coding, no degree) needing a low-risk first step (₹9).

## Core Requirements (static)
1. Hero: brand pill, 3-line headline (white/white/magenta), ₹9 gold CTA, video + gold pricing card, engagement bar.
2. Benefits (6), Learning (7), AI ecosystem cloud, Suha AI 3-question interactive flow with LEARN→BUILD→PACKAGE→PRESENT→START reveal.
3. Aha moment scroll progression, 5-step roadmap (curved desktop / vertical mobile), transformation split, 5 bonus cards, value stack (₹[VALUE] placeholders kept — no invented values).
4. Social proof: 6 vertical Shorts embeds + clearly labeled testimonial/project placeholders (nothing fabricated).
5. Mentor (Suhani Singh), beginner objection, who-it's-for, reality check, why-it-matters, final offer, final Suha AI, FAQ accordion.
6. CTA system: hero, value stack, final offer, final Suha, sticky mobile "JOIN LIVE — ₹9". All CTAs → Razorpay link.
7. Purple→gold scroll progress bar, exit-intent modal (no fake scarcity), prefers-reduced-motion respected, data-testid on all interactive elements.

## Implemented (2026-09-28)
- All 19 sections above with locked copy verbatim and alternating section rhythm.
- Animated SVG Suha AI (idle float/blink/breathe, curious, thinking, happy, celebrate) with expression changes driven by quiz state.
- Lite YouTube embeds (thumbnail → click-to-play) for hero video + 6 Shorts.
- Analytics events: hero_cta, suha_q1/2/3, suha_complete, value_stack_cta, final_cta, registration_click, faq_open, testimonial_interaction, exit_intent_shown, hero_video_watch.
- Verified: page loads at 375/768/1366px with no horizontal overflow; quiz completes to reveal; FAQ opens; sticky CTA appears on mobile scroll; backend /api/ healthy.

## Known Gaps / Notes
- ₹[VALUE] / ₹[TOTAL] placeholders intentionally kept (owner to supply real positioning values).
- Testimonial + student-project blocks are labeled placeholders pending genuine content.
- Mentor portrait is a branded placeholder (no real photo supplied).
- Short #5 (FaWB9N5IBCo) has no YouTube thumbnail image; shows dark poster until played.

## Prioritized Backlog
- P0: Replace ₹[VALUE]/₹[TOTAL] placeholders with real values when supplied; add genuine testimonials/photos.
- P1: Mentor portrait photo; custom Suha AI illustration/3D render replacing SVG.
- P2: Real registration deadline/scarcity only if genuinely supplied; WhatsApp float button if a real number is provided.

## Next Tasks
1. Swap in real bonus value figures across hero pricing card, bonus cards, value stack.
2. Add real testimonial quotes/names + student project screenshots.
3. Provide mentor photo for the mentor section.
