import { ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { ROADMAP } from "../lib/data";

export function Roadmap() {
    return (
        <section id="roadmap" data-testid="roadmap-section" className="bg-[#faf9f6] py-16 text-[#1a1523] sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7c3aed]">How It Works</p>
                    <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                        YOUR AI FREELANCING <span className="text-[#7c3aed]">ROADMAP</span>
                    </h2>
                </Reveal>

                {/* desktop flowing timeline */}
                <div className="relative mt-16 hidden lg:block">
                    <svg className="absolute inset-x-0 top-10 h-24 w-full" viewBox="0 0 1000 100" preserveAspectRatio="none" aria-hidden>
                        <path d="M0 50 C 150 0, 250 100, 400 50 S 650 0, 800 50 S 950 90, 1000 50" fill="none" stroke="url(#roadGrad)" strokeWidth="2.5" strokeDasharray="7 7" />
                        <defs>
                            <linearGradient id="roadGrad" x1="0" y1="0" x2="1" y2="0">
                                <stop offset="0%" stopColor="#a855f7" />
                                <stop offset="100%" stopColor="#f4c95d" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <div className="relative grid grid-cols-5 gap-6">
                        {ROADMAP.map((r, i) => (
                            <Reveal key={r.n} delay={i * 0.1} className={i % 2 === 1 ? "pt-20" : ""}>
                                <article data-testid={`roadmap-step-${r.n}`} className="card-light rounded-[22px] p-5 text-center">
                                    <div className="mx-auto -mt-10 flex h-14 w-14 items-center justify-center rounded-full border-4 border-[#faf9f6] bg-gradient-to-br from-[#7c3aed] to-[#38104d] font-display text-sm font-extrabold text-white shadow-lg shadow-[#7c3aed]/30">
                                        {r.n}
                                    </div>
                                    <h3 className="mt-3 font-display text-lg font-extrabold tracking-widest">{r.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[#6e6b7b]">{r.body}</p>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>

                {/* mobile vertical timeline */}
                <div className="relative mt-10 lg:hidden">
                    <div aria-hidden className="absolute bottom-4 left-[27px] top-4 w-0.5 bg-gradient-to-b from-[#a855f7] to-[#f4c95d]" />
                    <div className="space-y-6">
                        {ROADMAP.map((r, i) => (
                            <Reveal key={r.n} delay={i * 0.06}>
                                <article data-testid={`roadmap-step-${r.n}-mobile`} className="relative flex gap-4 pl-0">
                                    <div className="z-10 flex h-14 w-14 shrink-0 items-center justify-center rounded-full border-4 border-[#faf9f6] bg-gradient-to-br from-[#7c3aed] to-[#38104d] font-display text-sm font-extrabold text-white shadow-lg shadow-[#7c3aed]/30">
                                        {r.n}
                                    </div>
                                    <div className="card-light flex-1 rounded-2xl p-4">
                                        <h3 className="font-display text-base font-extrabold tracking-widest">{r.title}</h3>
                                        <p className="mt-1 text-sm leading-relaxed text-[#6e6b7b]">{r.body}</p>
                                    </div>
                                </article>
                            </Reveal>
                        ))}
                    </div>
                </div>

                <Reveal delay={0.2} className="mx-auto mt-14 max-w-2xl text-center">
                    <div className="rounded-[26px] bg-gradient-to-br from-[#1a0b2e] to-[#38104d] p-8 text-white shadow-[0_30px_60px_-30px_rgba(26,11,46,0.6)]">
                        <ArrowDown className="mx-auto mb-3 h-5 w-5 text-[#f4c95d]" />
                        <p className="font-display text-xl font-extrabold leading-snug sm:text-2xl">
                            YOU DON'T NEED TO KNOW EVERYTHING.
                            <span className="mt-1 block text-[#f4c95d]">YOU NEED TO KNOW WHAT TO DO NEXT.</span>
                        </p>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
