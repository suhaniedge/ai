import { MoveRight } from "lucide-react";
import { Reveal } from "./Reveal";
import { LOGO_URL } from "../lib/data";

export function Mentor() {
    return (
        <section data-testid="mentor-section" className="bg-[#f5f0ff] py-16 text-[#1a1523] sm:py-24">
            <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div className="grid items-center gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                    <Reveal>
                        <div className="relative mx-auto max-w-sm">
                            <div className="rounded-[28px] bg-gradient-to-br from-[#1a0b2e] via-[#38104d] to-[#150826] p-10 text-center shadow-[0_34px_70px_-30px_rgba(26,11,46,0.55)]">
                                <img src={LOGO_URL} alt="SuhaniEdge brand mark" className="mx-auto h-24 w-24 rounded-full ring-2 ring-[#a855f7]/50" />
                                <p className="mt-6 font-display text-6xl font-extrabold text-[#f4c95d]">SS</p>
                                <p className="mt-2 font-display text-sm font-bold uppercase tracking-[0.2em] text-[#e9dffc]/80">Suhani Singh</p>
                                <p className="mt-3 text-xs text-[#e9dffc]/50">[ Mentor portrait ]</p>
                            </div>
                            <div aria-hidden className="absolute -right-4 -top-4 h-24 w-24 rounded-full border-2 border-dashed border-[#a855f7]/40" />
                        </div>
                    </Reveal>

                    <Reveal delay={0.1}>
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7c3aed]">Meet Your Mentor</p>
                        <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                            LEARN WITH GUIDANCE — <span className="text-[#7c3aed]">NOT ALONE.</span>
                        </h2>
                        <h3 className="mt-6 font-display text-xl font-extrabold sm:text-2xl">SUHANI SINGH</h3>
                        <p className="mt-1 text-sm font-semibold text-[#a855f7]">
                            AI Educator • Mentor • Digital Marketing &amp; AI Practitioner
                        </p>
                        <p className="mt-5 text-base leading-relaxed text-[#6e6b7b]">
                            Learn through a practical, beginner-friendly approach focused on:
                        </p>
                        <div className="mt-4 flex flex-wrap items-center gap-2 font-display text-sm font-extrabold tracking-widest">
                            {["UNDERSTAND", "BUILD", "APPLY"].map((s, i) => (
                                <span key={s} className="flex items-center gap-2">
                                    <span className="rounded-full bg-[#1a0b2e] px-4 py-2 text-white">{s}</span>
                                    {i < 2 && <MoveRight className="h-4 w-4 text-[#a855f7]" />}
                                </span>
                            ))}
                        </div>
                    </Reveal>
                </div>
            </div>
        </section>
    );
}
