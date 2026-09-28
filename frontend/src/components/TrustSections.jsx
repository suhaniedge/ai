import { X, Check, Sparkles, MoveRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { OBJECTION_NOT_NEED, WHO_ITS_FOR, REALITY_NOT } from "../lib/data";

export function Objection() {
    return (
        <section data-testid="objection-section" className="bg-[#fffdf9] py-16 text-[#1a1523] sm:py-24">
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
                <Reveal>
                    <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                        “BUT I'M A COMPLETE <span className="text-[#7c3aed]">BEGINNER…”</span>
                    </h2>
                    <p className="mt-4 text-lg font-semibold">That's okay.</p>
                </Reveal>
                <Reveal delay={0.08}>
                    <p className="mt-8 text-sm font-bold uppercase tracking-[0.2em] text-[#6e6b7b]">You don't need:</p>
                    <ul className="mx-auto mt-4 max-w-md space-y-2.5 text-left">
                        {OBJECTION_NOT_NEED.map((t, i) => (
                            <li key={t} data-testid={`objection-item-${i + 1}`} className="flex items-center gap-3 rounded-2xl border border-[#e2d9f3] bg-white px-4 py-3">
                                <X className="h-4 w-4 shrink-0 text-[#f87171]" strokeWidth={3} />
                                <span className="text-sm font-medium text-[#6e6b7b]">{t}</span>
                            </li>
                        ))}
                    </ul>
                </Reveal>
                <Reveal delay={0.15}>
                    <div className="mx-auto mt-8 inline-flex items-center gap-3 rounded-full bg-gradient-to-r from-[#7c3aed] to-[#38104d] px-7 py-4 shadow-lg shadow-[#7c3aed]/30">
                        <Sparkles className="h-5 w-5 text-[#f4c95d]" />
                        <p className="font-display text-sm font-extrabold tracking-wide text-white sm:text-base">
                            YOU NEED: CURIOSITY + WILLINGNESS TO LEARN.
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export function Audience() {
    return (
        <section data-testid="audience-section" className="grain relative bg-[#1a0b2e] py-16 sm:py-24">
            <div className="relative mx-auto max-w-3xl px-4 sm:px-6">
                <Reveal className="text-center">
                    <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        IS THIS <span className="text-[#a855f7]">FOR YOU?</span>
                    </h2>
                </Reveal>
                <ul className="mt-10 space-y-3">
                    {WHO_ITS_FOR.map((t, i) => (
                        <Reveal key={t} delay={i * 0.05}>
                            <li data-testid={`audience-item-${i + 1}`} className="glass-dark flex min-h-[52px] items-center gap-3 rounded-2xl px-5 py-3.5">
                                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20">
                                    <Check className="h-3.5 w-3.5 text-[#4ade80]" strokeWidth={3} />
                                </span>
                                <span className="text-sm font-medium text-[#f3effe] sm:text-base">{t}</span>
                            </li>
                        </Reveal>
                    ))}
                </ul>
            </div>
        </section>
    );
}

export function RealityCheck() {
    return (
        <section data-testid="reality-check-section" className="bg-[#f5f0ff] py-16 text-[#1a1523] sm:py-24">
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
                <Reveal>
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7c3aed]">A Quick Reality Check</p>
                    <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
                        THIS IS <span className="text-[#ec4899]">NOT</span> FOR SOMEONE LOOKING FOR:
                    </h2>
                </Reveal>
                <ul className="mx-auto mt-8 grid max-w-lg gap-2.5 text-left">
                    {REALITY_NOT.map((t, i) => (
                        <Reveal key={t} delay={i * 0.04}>
                            <li data-testid={`reality-not-${i + 1}`} className="flex items-center gap-3 rounded-2xl border border-[#e2d9f3] bg-white px-4 py-3">
                                <X className="h-4 w-4 shrink-0 text-[#f87171]" strokeWidth={3} />
                                <span className="text-sm font-medium text-[#6e6b7b]">{t}</span>
                            </li>
                        </Reveal>
                    ))}
                </ul>
                <Reveal delay={0.15}>
                    <p className="mt-10 text-sm font-bold uppercase tracking-[0.2em] text-[#6e6b7b]">It's for people willing to:</p>
                    <div className="mt-4 flex flex-wrap items-center justify-center gap-2 font-display text-sm font-extrabold tracking-widest sm:text-base">
                        {["LEARN.", "BUILD.", "PRACTICE.", "TAKE ACTION."].map((s, i) => (
                            <span key={s} className="flex items-center gap-2">
                                <span className="rounded-full bg-[#1a0b2e] px-4 py-2 text-[#f4c95d]">{s}</span>
                                {i < 3 && <MoveRight className="hidden h-4 w-4 text-[#a855f7] sm:block" />}
                            </span>
                        ))}
                    </div>
                </Reveal>
            </div>
        </section>
    );
}

export function WhyMatters() {
    return (
        <section data-testid="why-matters-section" className="bg-[#fffdf9] py-16 text-[#1a1523] sm:py-24">
            <div className="mx-auto max-w-3xl px-4 text-center sm:px-6">
                <Reveal>
                    <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                        AI IS CHANGING <span className="text-[#7c3aed]">HOW WORK GETS DONE.</span>
                    </h2>
                    <p className="mx-auto mt-6 max-w-xl text-base leading-relaxed text-[#6e6b7b] sm:text-lg">
                        The important skill isn't simply knowing how to open an AI tool. It's understanding how to use AI to create something
                        useful, solve a problem or improve a workflow.
                    </p>
                    <p className="mt-6 text-sm font-bold uppercase tracking-[0.2em] text-[#6e6b7b]">That's why we're focusing on:</p>
                    <p className="mt-3 font-display text-xl font-extrabold tracking-widest text-[#1a1523] sm:text-2xl">
                        LEARN <span className="text-[#a855f7]">→</span> BUILD <span className="text-[#a855f7]">→</span> APPLY
                    </p>
                </Reveal>
            </div>
        </section>
    );
}
