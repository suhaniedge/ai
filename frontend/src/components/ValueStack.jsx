import { ShieldCheck, Zap } from "lucide-react";
import { Reveal } from "./Reveal";
import { GoldButton } from "./GoldButton";
import { VALUE_STACK } from "../lib/data";

export function ValueStack() {
    return (
        <section data-testid="value-stack-section" className="relative overflow-hidden bg-[#150826] py-16 sm:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[380px] w-[680px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#7c3aed]/15 blur-[120px]" />
            </div>
            <div className="relative mx-auto max-w-2xl px-4 sm:px-6">
                <Reveal>
                    <div className="rounded-[28px] border border-[#a855f7]/25 bg-gradient-to-b from-[#2a1245]/80 to-[#0d0518] p-6 shadow-[0_40px_90px_-40px_rgba(168,85,247,0.5)] sm:p-10">
                        <h2 className="text-center font-display text-xl font-extrabold tracking-wide text-white sm:text-2xl">
                            EVERYTHING YOU GET <span className="text-[#c084fc]">TODAY</span>
                        </h2>

                        <ul className="mt-8 divide-y divide-[#a855f7]/15">
                            {VALUE_STACK.map((v, i) => (
                                <li key={v} data-testid={`value-item-${i + 1}`} className="flex items-center justify-between gap-4 py-3.5">
                                    <span className="text-sm font-semibold text-[#f3effe]">{v}</span>
                                    <span className="shrink-0 font-display text-sm font-bold text-[#e9dffc]/50">₹[VALUE]</span>
                                </li>
                            ))}
                        </ul>

                        <div className="mt-6 flex items-center justify-between border-t-2 border-dashed border-[#a855f7]/30 pt-5">
                            <span className="font-display text-sm font-extrabold uppercase tracking-widest text-[#c084fc]">Total Value</span>
                            <span className="font-display text-xl font-extrabold text-[#e9dffc]/60 line-through decoration-[#ec4899]/70">₹[TOTAL]</span>
                        </div>

                        <div className="mt-8 rounded-3xl border-2 border-[#f4c95d]/60 bg-[#f4c95d]/5 p-6 text-center shadow-[0_0_50px_-12px_rgba(244,201,93,0.4)]">
                            <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#e9dffc]/70">Your Investment Today</p>
                            <p data-testid="value-stack-price" className="mt-1 font-display text-7xl font-extrabold text-[#f4c95d] drop-shadow-[0_0_28px_rgba(244,201,93,0.45)]">
                                ₹9
                            </p>
                            <GoldButton event="value_stack_cta" testId="value-stack-cta-button" className="mt-6 w-full sm:w-auto">
                                🚀 RESERVE MY LIVE SEAT — ₹9 <span className="cta-arrow">→</span>
                            </GoldButton>
                            <p className="mt-4 flex items-center justify-center gap-4 text-xs font-medium text-[#e9dffc]/60">
                                <span className="flex items-center gap-1.5">
                                    <ShieldCheck className="h-3.5 w-3.5 text-[#f4c95d]" /> Secure checkout
                                </span>
                                <span className="flex items-center gap-1.5">
                                    <Zap className="h-3.5 w-3.5 text-[#f4c95d]" /> Instant registration
                                </span>
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
