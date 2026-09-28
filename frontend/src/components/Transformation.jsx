import { X, Check, ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";
import { TRANSFORMATION } from "../lib/data";

export function Transformation() {
    return (
        <section data-testid="transformation-section" className="bg-[#0d0518] py-16 sm:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid gap-8 lg:grid-cols-2 lg:gap-10">
                    {/* FROM */}
                    <Reveal>
                        <div className="h-full rounded-[26px] border border-[#a855f7]/15 bg-[#1a0b2e]/60 p-6 sm:p-8">
                            <h2 className="font-display text-xl font-extrabold tracking-wide text-[#e9dffc]/80 sm:text-2xl">
                                FROM <span className="text-[#f87171]">AI CONFUSION</span>
                            </h2>
                            <ul className="mt-6 space-y-3">
                                {TRANSFORMATION.from.map((t, i) => (
                                    <li
                                        key={t}
                                        data-testid={`transform-from-${i + 1}`}
                                        className="flex items-center gap-3 rounded-2xl border border-[#f87171]/15 bg-[#f87171]/5 px-4 py-3.5"
                                    >
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#f87171]/15">
                                            <X className="h-3.5 w-3.5 text-[#f87171]" strokeWidth={3} />
                                        </span>
                                        <span className="text-sm font-medium text-[#e9dffc]/75">{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>

                    {/* TO */}
                    <Reveal delay={0.12}>
                        <div className="relative h-full rounded-[26px] bg-[#fffdf9] p-6 text-[#1a1523] shadow-[0_30px_70px_-30px_rgba(168,85,247,0.45)] sm:p-8">
                            <div className="absolute -top-4 left-1/2 flex -translate-x-1/2 items-center gap-1.5 rounded-full bg-[#a855f7] px-4 py-1.5 lg:hidden">
                                <ArrowDown className="h-3.5 w-3.5 text-white" />
                            </div>
                            <h2 className="font-display text-xl font-extrabold tracking-wide sm:text-2xl">
                                TO <span className="text-[#7c3aed]">AI DIRECTION</span>
                            </h2>
                            <ul className="mt-6 space-y-3">
                                {TRANSFORMATION.to.map((t, i) => (
                                    <li
                                        key={t}
                                        data-testid={`transform-to-${i + 1}`}
                                        className="flex items-center gap-3 rounded-2xl border border-[#22c55e]/25 bg-[#22c55e]/5 px-4 py-3.5"
                                    >
                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#22c55e]/20">
                                            <Check className="h-3.5 w-3.5 text-[#16a34a]" strokeWidth={3} />
                                        </span>
                                        <span className="text-sm font-medium">{t}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
