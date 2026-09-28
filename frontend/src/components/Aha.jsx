import { ArrowDown } from "lucide-react";
import { Reveal } from "./Reveal";

const STAGES = ["AI TOOLS", "AI SKILLS", "PROJECTS", "SERVICES", "CLIENT OUTREACH"];

export function Aha() {
    return (
        <section data-testid="aha-section" className="relative overflow-hidden bg-[#faf9f6] py-16 text-[#1a1523] sm:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-gradient-to-r from-[#7c3aed] via-[#ec4899] to-[#f4c95d]" />
            <div className="mx-auto max-w-4xl px-4 text-center sm:px-6">
                <Reveal>
                    <h2 className="font-display text-2xl font-extrabold leading-tight tracking-tight sm:text-3xl lg:text-4xl">
                        KNOWING AI TOOLS IS NOT THE SAME AS
                        <span className="mt-1 block text-[#7c3aed]">KNOWING HOW TO FREELANCE WITH AI.</span>
                    </h2>
                </Reveal>

                <Reveal delay={0.1} className="mx-auto mt-8 max-w-xl space-y-1.5 text-base text-[#6e6b7b] sm:text-lg">
                    <p>You can know ChatGPT.</p>
                    <p>You can know Claude.</p>
                    <p>You can know Gemini.</p>
                    <p>You can experiment with automation.</p>
                    <p>You can create amazing things with AI.</p>
                </Reveal>

                <Reveal delay={0.15}>
                    <p className="mx-auto mt-8 max-w-xl font-display text-xl font-bold italic text-[#1a1523] sm:text-2xl">
                        And still wonder:
                        <span className="mt-2 block text-[#ec4899]">“What do I actually do with these skills?”</span>
                    </p>
                    <p className="mt-5 font-display text-lg font-extrabold uppercase tracking-widest text-[#7c3aed]">That's the missing link.</p>
                </Reveal>

                {/* scroll progression */}
                <div className="mx-auto mt-12 flex max-w-md flex-col items-center">
                    {STAGES.map((s, i) => (
                        <Reveal key={s} delay={i * 0.08} className="flex w-full flex-col items-center">
                            <div
                                data-testid={`aha-stage-${i + 1}`}
                                className="w-full rounded-2xl border border-[#e2d9f3] bg-white px-5 py-4 shadow-[0_10px_30px_-18px_rgba(26,11,46,0.3)]"
                                style={{ transform: `scale(${1 - i * 0.015})` }}
                            >
                                <span className="font-display text-sm font-extrabold tracking-widest text-[#38104d] sm:text-base">
                                    <span className="mr-2 text-[#a855f7]">{String(i + 1).padStart(2, "0")}</span>
                                    {s}
                                </span>
                            </div>
                            {i < STAGES.length - 1 && <ArrowDown className="my-2 h-5 w-5 text-[#a855f7]" />}
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
