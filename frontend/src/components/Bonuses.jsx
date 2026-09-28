import { Gift } from "lucide-react";
import { Reveal } from "./Reveal";
import { BONUSES } from "../lib/data";

export function Bonuses() {
    return (
        <section id="bonuses" data-testid="bonuses-section" className="grain relative overflow-hidden bg-[#1a0b2e] py-16 sm:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute -right-24 top-0 h-96 w-96 rounded-full bg-[#a855f7]/15 blur-[110px]" />
                <div className="absolute -left-24 bottom-0 h-96 w-96 rounded-full bg-[#f4c95d]/8 blur-[110px]" />
            </div>
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#f4c95d]">Bonuses</p>
                    <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        AND YOU WON'T LEAVE EMPTY-HANDED.
                        <span className="mt-1 block text-[#c084fc]">YOUR FREE AI FREELANCING STARTER PACK</span>
                    </h2>
                </Reveal>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {BONUSES.map((b, i) => (
                        <Reveal key={b.n} delay={i * 0.06} className={i === 3 ? "lg:col-start-1 lg:col-end-2 lg:translate-x-1/2" : i === 4 ? "lg:col-start-2 lg:col-end-3 lg:translate-x-1/2" : ""}>
                            <article
                                data-testid={`bonus-card-${i + 1}`}
                                className="group relative h-full rounded-[24px] border border-[#a855f7]/25 bg-gradient-to-b from-[#38104d]/70 to-[#150826] p-6 shadow-[0_24px_50px_-24px_rgba(0,0,0,0.7)] transition duration-300 hover:-translate-y-2 hover:border-[#f4c95d]/50 hover:shadow-[0_34px_70px_-26px_rgba(168,85,247,0.5)]"
                                style={{ transformStyle: "preserve-3d" }}
                            >
                                <div className="flex items-center justify-between">
                                    <span className="rounded-full bg-[#f4c95d]/15 px-3 py-1 text-[11px] font-extrabold uppercase tracking-widest text-[#f4c95d]">
                                        {b.n}
                                    </span>
                                    <Gift className="h-6 w-6 text-[#a855f7] transition group-hover:scale-110 group-hover:text-[#f4c95d]" />
                                </div>
                                <h3 className="mt-4 font-display text-lg font-extrabold tracking-tight text-white">{b.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-[#e9dffc]/70">{b.body}</p>
                                {b.extraLabel && <p className="mt-2 text-sm font-semibold text-[#e9dffc]/85">{b.extraLabel}</p>}
                                {b.extra && <p className="mt-1 text-sm font-medium text-[#c084fc]">{b.extra}</p>}
                                {b.quote && (
                                    <div className="mt-3 space-y-1.5">
                                        {b.quote.map((q, qi) => (
                                            <p key={q} className={`text-sm ${qi === 0 ? "text-[#e9dffc]/60" : "font-semibold text-[#f4c95d]"}`}>
                                                {b.quote.length > 1 && qi === 1 ? "to: " : ""}
                                                {q}
                                            </p>
                                        ))}
                                    </div>
                                )}
                                <div className="mt-5 border-t border-[#a855f7]/20 pt-4">
                                    <p className="text-xs text-[#e9dffc]/50">
                                        Suggested Positioning Value: <span className="font-semibold text-[#e9dffc]/70">₹[VALUE]</span>
                                    </p>
                                </div>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
