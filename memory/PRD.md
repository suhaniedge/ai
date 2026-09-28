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

## Iteration 2 (2026-09-28)
- Header: new 1:1 logo (no compression), always-visible gradient navbar with purple→gold strike line; shine-sweep light animation on all gold CTAs.
- Hero: brand pill removed; compact order = eyebrow → headline → 1-line subtitle → CTA → video/pricing; supporting copy + question chips moved below the video; pricing card shows "Bonuses worth ₹2,997 included" crossed vs ₹9.
- Suha AI: tappable (poke) with rotating speech-bubble tips; mobile one-frame layout (Suha + question + options + THAT'S ME in one viewport, no scroll); Q1/Q3 dark slides, Q2 light slide; 3D press-depth answer buttons; sticky mobile CTA auto-hides while the quiz is on screen so it never covers quiz buttons.
- Mentor: real Suhani Singh photo replaces placeholder tile.
- Proof: video-only — removed all text/image placeholder cards; 6 Shorts remain.
- Bonuses/value stack: real values ₹999/₹599/₹499/₹599/₹301 (total ₹2,997).
- Legal (Meta-ads ready): /privacy-policy, /terms-and-conditions, /refund-policy pages with SuhaniEdge/Razorpay/email details, linked in footer.
- Verified in preview: logo crisp, quiz completes end-to-end on 390px (reveal shows), sticky CTA hides during quiz and returns after, mentor image loads (200, 608KB), all 3 policy pages render, no console errors.

## Iteration 3 (2026-09-28)
- Bonus cards: "Suggested Positioning Value" replaced with "Worth ₹X" (struck) + green FREE pill.
- Suha Voice Intro: GET /api/suha-voice (OpenAI tts-1, shimmer voice, EMERGENT_LLM_KEY, disk-cached mp3 at /tmp/suha_voice.mp3). Frontend: "Hear Suha AI" speaker pill + auto-greeting on first Suha poke. Verified: endpoint 200 audio/mpeg (106KB), button toggles playing state.
- Greeting text: "Hi! I'm Suha AI. Answer three quick questions, and I'll map out your AI freelancing starting point. Let's go!"

## Iteration 4 (2026-09-28)
- Meta Pixel 1054533697572605 installed (base code + PageView in index.html). track.js forwards to fbq: InitiateCheckout {value: 9, currency: INR} on hero/value-stack/final/registration CTAs, Lead on quiz completion, trackCustom for all funnel events (suha_q1-3, faq_open, video plays, pokes), SPA PageView on route change. Verified in browser: fbq loaded, all events fire with correct params.

## Iteration 5 (2026-09-28)
- Voice greeting moved to static file /public/suha-voice.mp3 — works on Emergent preview AND static Cloudflare Pages (no backend dependency). Frontend now plays the local mp3.
- Static build packaged for Cloudflare Pages: /app/suhaniedge-cloudflare-build.zip (contains build/ output + _redirects for SPA routes + suha-voice.mp3). Verified mp3 serves as audio/mpeg from both preview and static build.

## Known Gaps / Notes
- Testimonial proof is video-only (6 Shorts) per owner request; no text testimonials on page.
- Webinar's own value line in the value stack shows "Live Access" (no invented price); bonuses carry the ₹2,997 total.

## Prioritized Backlog
- P0: None blocking — page is ad-ready (policies + no fake claims).
- P1: Meta Pixel / ad event wiring when the pixel ID is supplied (analytics hooks already in place).
- P2: Custom 3D Suha AI render; WhatsApp float button if a real number is provided.

## Next Tasks
1. Supply Meta Pixel ID to wire ad conversion events to the existing track() calls.
2. Optional: real values for the live webinar line in the value stack.
3. Optional: more Shorts links to expand the proof wall.
