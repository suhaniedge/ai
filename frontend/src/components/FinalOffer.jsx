import { Check, ShieldCheck, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { GoldButton } from "./GoldButton";

const INCLUDES = [
    "Live webinar access",
    "AI Freelance Builder GPTs",
    "AI Tools & Workflow Guide",
    "AI Project Idea Library",
    "AI Freelancing Starter Kit",
    "Freelancing Action Checklist",
];

export function FinalOffer() {
    return (
        <section data-testid="final-offer-section" className="grain relative overflow-hidden bg-[#0d0518] py-16 sm:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full bg-[#7c3aed]/20 blur-[130px]" />
                <div className="absolute bottom-0 left-1/2 h-72 w-[560px] -translate-x-1/2 rounded-full bg-[#f4c95d]/8 blur-[120px]" />
            </div>
            <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
                <Reveal className="text-center">
                    <h2 className="font-display text-3xl font-extrabold tracking-tight text-white sm:text-4xl lg:text-5xl">
                        READY TO TAKE YOUR <span className="text-[#f4c95d]">FIRST STEP?</span>
                    </h2>
                    <div className="mx-auto mt-7 max-w-md space-y-2 text-left">
                        {["What you'll learn", "What you'll receive", "How the journey works", "The practical direction you'll explore"].map((t) => (
                            <p key={t} className="flex items-center gap-2.5 text-sm text-[#e9dffc]/80">
                                <Check className="h-4 w-4 shrink-0 text-[#4ade80]" strokeWidth={3} />
                                {t}
                            </p>
                        ))}
                    </div>
                    <p className="mt-6 text-lg font-semibold text-white">Now experience it live.</p>
                </Reveal>

                <Reveal delay={0.1}>
                    <div className="mt-10 rounded-[28px] border-2 border-[#f4c95d]/50 bg-gradient-to-b from-[#2a1245] to-[#150826] p-6 shadow-[0_0_80px_-20px_rgba(244,201,93,0.5)] sm:p-10">
                        <p className="text-center text-xs font-bold uppercase tracking-[0.28em] text-[#c084fc]">Live AI Freelancing Webinar</p>
                        <h3 className="mt-3 text-center font-display text-lg font-extrabold text-white sm:text-xl">
                            YOUR ₹9 REGISTRATION INCLUDES:
                        </h3>
                        <ul className="mx-auto mt-6 max-w-md space-y-3">
                            {INCLUDES.map((t, i) => (
                                <li key={t} data-testid={`final-offer-include-${i + 1}`} className="flex items-center gap-3">
                                    <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20">
                                        <Check className="h-3.5 w-3.5 text-[#4ade80]" strokeWidth={3} />
                                    </span>
                                    <span className="text-sm font-medium text-[#f3effe]">{t}</span>
                                </li>
                            ))}
                        </ul>
                        <p data-testid="final-offer-price" className="mt-8 text-center font-display text-7xl font-extrabold text-[#f4c95d] drop-shadow-[0_0_30px_rgba(244,201,93,0.5)]">
                            ₹9
                        </p>
                        <GoldButton event="final_cta" testId="final-offer-cta-button" className="mt-7 w-full text-base sm:text-lg">
                            🚀 YES, SHOW ME THE AI FREELANCING ROADMAP <span className="cta-arrow">→</span>
                        </GoldButton>
                        <p className="mt-5 flex items-center justify-center gap-4 text-xs font-medium text-[#e9dffc]/60">
                            <span className="flex items-center gap-1.5">
                                <ShieldCheck className="h-3.5 w-3.5 text-[#f4c95d]" /> Secure checkout
                            </span>
                            <span className="flex items-center gap-1.5">
                                <Zap className="h-3.5 w-3.5 text-[#f4c95d]" /> Instant registration
                            </span>
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
