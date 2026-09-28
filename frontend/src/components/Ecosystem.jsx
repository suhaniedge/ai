import { Sparkles } from "lucide-react";
import { Reveal } from "./Reveal";
import { ECOSYSTEM } from "../lib/data";

const POS = [
    { x: 14, y: 16 },
    { x: 80, y: 13 },
    { x: 5, y: 47 },
    { x: 87, y: 45 },
    { x: 15, y: 79 },
    { x: 68, y: 83 },
    { x: 40, y: 6 },
    { x: 43, y: 90 },
];

export function Ecosystem() {
    return (
        <section
            data-testid="ecosystem-section"
            className="relative overflow-hidden py-16 sm:py-24"
            style={{ background: "linear-gradient(135deg, #1a0b2e 0%, #2a1245 50%, #150826 100%)" }}
        >
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[420px] w-[420px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a855f7]/15 blur-[100px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <h2 className="font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        AI CAN BE USED IN MANY WAYS.
                        <span className="mt-1 block text-[#c084fc]">YOU DON'T HAVE TO CHOOSE EVERYTHING TODAY.</span>
                    </h2>
                    <p className="mt-4 text-sm text-[#e9dffc]/60 sm:text-base">
                        These are examples of possible directions, not separate products.
                    </p>
                </Reveal>

                {/* desktop radial */}
                <div className="relative mx-auto mt-10 hidden h-[480px] max-w-4xl md:block" aria-hidden={false}>
                    <svg className="absolute inset-0 h-full w-full" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden>
                        {POS.map((p, i) => (
                            <line key={i} x1="50" y1="50" x2={p.x} y2={p.y} stroke="rgba(168,85,247,0.25)" strokeWidth="0.25" vectorEffect="non-scaling-stroke" strokeDasharray="4 4" />
                        ))}
                    </svg>
                    <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2">
                        <div data-testid="ecosystem-core" className="glow-pulse flex h-28 w-28 items-center justify-center rounded-full border border-[#a855f7]/50 bg-gradient-to-br from-[#7c3aed] to-[#38104d] shadow-[0_0_60px_-8px_rgba(168,85,247,0.7)]">
                            <span className="font-display text-2xl font-extrabold text-white">AI</span>
                        </div>
                    </div>
                    {ECOSYSTEM.map((c, i) => (
                        <div
                            key={c}
                            className="chip-float glass-dark absolute -translate-x-1/2 -translate-y-1/2 whitespace-nowrap rounded-full px-4 py-2.5 text-xs font-semibold text-[#f3effe] lg:text-sm"
                            style={{ left: `${POS[i].x}%`, top: `${POS[i].y}%`, animationDelay: `${i * 0.55}s` }}
                        >
                            {c}
                        </div>
                    ))}
                </div>

                {/* mobile grid */}
                <div className="mt-10 flex flex-wrap justify-center gap-2.5 md:hidden">
                    <div className="glow-pulse mb-2 flex h-20 w-20 items-center justify-center rounded-full border border-[#a855f7]/50 bg-gradient-to-br from-[#7c3aed] to-[#38104d] shadow-[0_0_40px_-6px_rgba(168,85,247,0.7)]">
                        <span className="font-display text-xl font-extrabold text-white">AI</span>
                    </div>
                    <div className="flex w-full flex-wrap justify-center gap-2.5">
                        {ECOSYSTEM.map((c) => (
                            <span key={c} className="glass-dark inline-flex items-center gap-1.5 rounded-full px-4 py-2.5 text-xs font-semibold text-[#f3effe]">
                                <Sparkles className="h-3 w-3 text-[#f4c95d]" />
                                {c}
                            </span>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
