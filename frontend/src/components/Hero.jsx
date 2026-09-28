import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { GraduationCap, FolderKanban, Users, TrendingUp, Crown, Check, ShieldCheck, Zap, Sparkles, Play, MoveRight } from "lucide-react";
import { GoldButton } from "./GoldButton";
import { LiteVideo } from "./LiteVideo";
import { SuhaAI } from "./SuhaAI";
import { HERO_VIDEO_ID, LOGO_URL } from "../lib/data";
import { track } from "../lib/track";

const FEATURES = [
    { icon: GraduationCap, label: "AI Skills" },
    { icon: FolderKanban, label: "Real Projects" },
    { icon: Users, label: "Client Acquisition" },
    { icon: TrendingUp, label: "Freelancing Growth" },
];

const INCLUDED = [
    "Live webinar access",
    "AI Freelance Builder GPTs",
    "AI Tools & Workflow Guide",
    "AI Project Idea Library + Starter Kit",
];

export function Hero() {
    const [playing, setPlaying] = useState(false);
    const reduce = useReducedMotion();

    const fade = (delay) =>
        reduce
            ? {}
            : { initial: { opacity: 0, y: 24 }, animate: { opacity: 1, y: 0 }, transition: { duration: 0.5, delay, ease: [0.22, 1, 0.36, 1] } };

    return (
        <section id="top" data-testid="hero-section" className="grain relative overflow-hidden bg-[#150826] pb-14 pt-24 sm:pt-28">
            {/* ambient glows */}
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -top-40 left-1/2 h-[480px] w-[820px] -translate-x-1/2 rounded-full bg-[#7c3aed]/25 blur-[130px]" />
                <div className="absolute -left-32 top-1/3 h-96 w-96 rounded-full bg-[#a855f7]/15 blur-[110px]" />
                <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-[#ec4899]/10 blur-[110px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                {/* brand pill */}
                <motion.div {...fade(0)} className="flex justify-center">
                    <div data-testid="hero-brand-pill" className="glass-dark inline-flex items-center gap-2 rounded-full px-4 py-2">
                        <img src={LOGO_URL} alt="" className="h-6 w-6 rounded-full" />
                        <span className="font-display text-xs font-bold uppercase tracking-[0.18em] text-[#e9dffc]">SuhaniEdge</span>
                        <span className="hidden h-4 w-px bg-[#a855f7]/40 sm:block" />
                        <span className="hidden text-xs font-semibold uppercase tracking-[0.18em] text-[#f4c95d] sm:block">AI Freelance Launchpad</span>
                    </div>
                </motion.div>

                {/* eyebrow */}
                <motion.p {...fade(0.05)} data-testid="hero-eyebrow" className="mt-6 text-center text-xs font-bold uppercase tracking-[0.28em] text-[#c084fc] sm:text-sm">
                    Live AI Freelancing Webinar
                </motion.p>

                {/* headline */}
                <motion.h1 {...fade(0.1)} className="mt-4 text-center font-display text-[1.7rem] font-extrabold leading-[1.08] tracking-tight text-white sm:text-5xl lg:text-6xl">
                    <span className="block">LEARN AI FREELANCING.</span>
                    <span className="block">BUILD A FUTURE-READY CAREER.</span>
                    <span className="block text-[#ec4899] drop-shadow-[0_0_24px_rgba(236,72,153,0.35)]">NO TECHNICAL KNOWLEDGE REQUIRED.</span>
                </motion.h1>

                {/* subtitle */}
                <motion.div {...fade(0.16)} className="mx-auto mt-5 max-w-2xl text-center">
                    <p className="text-sm leading-relaxed text-[#e9dffc]/70 sm:text-base">
                        AI is changing the way people work. But learning AI tools is only the beginning.
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-[#e9dffc]/70 sm:text-base">
                        The real question is: <span className="font-semibold text-white">What can I actually DO with AI?</span>
                    </p>
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2 text-xs font-medium text-[#c084fc] sm:text-sm">
                        {["What should you learn?", "What can you build?", "What could you offer?", "How does AI freelancing actually work?"].map((q) => (
                            <span key={q} className="rounded-full border border-[#a855f7]/25 bg-[#38104d]/30 px-3 py-1.5">
                                {q}
                            </span>
                        ))}
                    </div>
                    <p className="mt-4 text-sm leading-relaxed text-[#e9dffc]/80 sm:text-base">
                        This live, beginner-friendly webinar will help you understand the path from learning AI to exploring it as a freelance skill.
                    </p>
                </motion.div>

                {/* CTAs */}
                <motion.div {...fade(0.22)} className="mt-7 flex flex-col items-center gap-3">
                    <GoldButton event="hero_cta" testId="hero-gold-cta-button" className="w-full max-w-md text-base sm:w-auto sm:px-10 sm:text-lg">
                        🚀 JOIN THE LIVE WEBINAR — ₹9
                    </GoldButton>
                    <p data-testid="hero-trust-line" className="text-xs font-medium text-[#e9dffc]/60 sm:text-sm">
                        Beginner-Friendly • Practical • Live Guidance
                    </p>
                    <a
                        href="#roadmap"
                        data-testid="hero-roadmap-link"
                        className="group inline-flex min-h-[44px] items-center gap-2 text-sm font-semibold text-[#c084fc] transition hover:text-white"
                    >
                        YES, SHOW ME THE AI FREELANCING ROADMAP
                        <MoveRight className="h-4 w-4 transition group-hover:translate-x-1" />
                    </a>
                    <p className="text-xs text-[#e9dffc]/50">No coding required • Start from the basics • Learn by doing</p>
                </motion.div>

                {/* two-column: video + pricing */}
                <div className="mt-12 grid items-stretch gap-8 lg:grid-cols-[1.35fr_1fr] lg:gap-10">
                    {/* LEFT — video */}
                    <motion.div {...fade(0.28)} className="relative">
                        <div className="video-frame relative p-2 sm:p-3">
                            <LiteVideo
                                videoId={HERO_VIDEO_ID}
                                title="AI Freelancing — SuhaniEdge webinar intro"
                                playing={playing}
                                onPlay={() => setPlaying(true)}
                                testId="hero-video-play-button"
                                rounded="rounded-[20px]"
                            />
                            {/* overlay features card */}
                            <div data-testid="hero-features-card" className="glass-dark absolute -left-1 top-6 hidden w-44 rounded-2xl p-4 sm:block lg:-left-6">
                                {FEATURES.map((f) => (
                                    <div key={f.label} className="flex items-center gap-2.5 py-1.5">
                                        <f.icon className="h-4 w-4 shrink-0 text-[#f4c95d]" />
                                        <span className="text-xs font-semibold text-white">{f.label}</span>
                                    </div>
                                ))}
                            </div>
                            {/* floating suha */}
                            <div className="absolute -right-3 -top-10 w-20 sm:-right-6 sm:w-24 lg:-right-10 lg:w-28">
                                <SuhaAI expression="idle" label="Suha AI waving" />
                            </div>
                        </div>
                        <button
                            type="button"
                            data-testid="hero-watch-pill"
                            onClick={() => {
                                setPlaying(true);
                                track("hero_video_watch");
                            }}
                            className="glass-dark mx-auto mt-5 flex min-h-[48px] items-center gap-2.5 rounded-full px-6 py-3 text-sm font-semibold text-white transition hover:border-[#f4c95d]/50 hover:text-[#f4c95d]"
                        >
                            <span className="flex h-7 w-7 items-center justify-center rounded-full bg-[#f4c95d] text-[#2a1a05]">
                                <Play className="ml-0.5 h-3.5 w-3.5 fill-current" />
                            </span>
                            Watch how AI freelancing works
                        </button>
                    </motion.div>

                    {/* RIGHT — pricing card */}
                    <motion.div {...fade(0.34)} className="relative">
                        <div
                            data-testid="hero-pricing-card"
                            className="relative h-full rounded-[26px] border-2 border-[#f4c95d]/70 bg-gradient-to-b from-[#2a1245] to-[#150826] p-6 shadow-[0_0_60px_-14px_rgba(244,201,93,0.45)] sm:p-7"
                        >
                            <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#f4c95d] px-4 py-1.5 shadow-lg">
                                <Crown className="h-4 w-4 text-[#2a1a05]" />
                                <span className="font-display text-xs font-extrabold uppercase tracking-widest text-[#2a1a05]">Live Webinar Access</span>
                            </div>

                            <div className="mt-4 text-center">
                                <p className="text-sm font-medium text-[#e9dffc]/50 line-through decoration-[#ec4899]/70 decoration-2">₹[VALUE]</p>
                                <p data-testid="hero-price" className="font-display text-6xl font-extrabold tracking-tight text-[#f4c95d] drop-shadow-[0_0_24px_rgba(244,201,93,0.4)]">
                                    ₹9
                                </p>
                            </div>

                            <ul className="mt-6 space-y-3.5">
                                {INCLUDED.map((item) => (
                                    <li key={item} className="flex items-start gap-3">
                                        <span className="mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20">
                                            <Check className="h-3.5 w-3.5 text-[#4ade80]" strokeWidth={3} />
                                        </span>
                                        <span className="text-sm font-medium text-[#f3effe]">{item}</span>
                                    </li>
                                ))}
                            </ul>

                            <GoldButton event="hero_cta" testId="hero-card-cta-button" className="mt-7 w-full">
                                🚀 JOIN THE LIVE WEBINAR — ₹9 <span className="cta-arrow">→</span>
                            </GoldButton>

                            <div className="mt-5 flex items-center justify-center gap-4 text-[11px] font-medium text-[#e9dffc]/60">
                                <span className="flex items-center gap-1.5">
                                    <ShieldCheck className="h-3.5 w-3.5 text-[#f4c95d]" /> Secure checkout
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Zap className="h-3.5 w-3.5 text-[#f4c95d]" /> Instant registration
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Sparkles className="h-3.5 w-3.5 text-[#f4c95d]" /> Beginner-friendly
                                </span>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* bottom engagement bar */}
                <motion.div
                    {...fade(0.4)}
                    data-testid="hero-engagement-bar"
                    className="glass-dark mt-12 flex flex-col items-center gap-4 rounded-full px-6 py-4 text-center lg:flex-row lg:justify-between lg:text-left"
                >
                    <p className="text-sm font-semibold text-white">Where are you with AI right now?</p>
                    <div className="flex flex-wrap items-center justify-center gap-2.5">
                        <span className="rounded-full border border-[#a855f7]/30 px-4 py-2 text-xs font-medium text-[#e9dffc]/70">Just exploring tools</span>
                        <span className="flex items-center gap-2 rounded-full border border-[#f4c95d]/60 bg-[#f4c95d]/10 px-4 py-2 text-xs font-semibold text-[#f4c95d]">
                            <Check className="h-3.5 w-3.5" strokeWidth={3} /> I want a clear path
                        </span>
                        <MoveRight className="hidden h-4 w-4 text-[#a855f7] lg:block" />
                    </div>
                    <p className="text-sm font-bold text-white">
                        That's exactly <span className="text-[#f4c95d]">why this webinar exists.</span>
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
