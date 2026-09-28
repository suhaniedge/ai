import { Quote, ImageIcon } from "lucide-react";
import { Reveal } from "./Reveal";
import { LiteVideo } from "./LiteVideo";
import { SHORT_IDS } from "../lib/data";
import { track } from "../lib/track";

const PLACEHOLDERS = [1, 2, 3];

export function Proof() {
    return (
        <section data-testid="proof-section" className="bg-[#faf9f6] py-16 text-[#1a1523] sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7c3aed]">Social Proof</p>
                    <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                        REAL PEOPLE. REAL PROOF.
                        <span className="mt-1 block text-[#7c3aed]">SEE WHAT REAL LEARNERS HAVE DONE.</span>
                    </h2>
                </Reveal>

                {/* shorts carousel / grid */}
                <div className="mt-12 flex snap-x snap-mandatory gap-4 overflow-x-auto pb-4 sm:grid sm:grid-cols-3 sm:overflow-visible lg:grid-cols-6">
                    {SHORT_IDS.map((id, i) => (
                        <Reveal key={id} delay={i * 0.05} className="w-40 shrink-0 snap-center sm:w-auto">
                            <div data-testid={`short-video-${i + 1}`} className="overflow-hidden rounded-[20px] shadow-[0_18px_40px_-20px_rgba(26,11,46,0.4)]">
                                <LiteVideo
                                    videoId={id}
                                    title={`Learner short ${i + 1}`}
                                    aspect="aspect-[9/16]"
                                    rounded="rounded-[20px]"
                                    testId={`short-play-${i + 1}`}
                                    onPlay={() => track("testimonial_interaction", { video: id })}
                                />
                            </div>
                        </Reveal>
                    ))}
                </div>

                {/* testimonial placeholders */}
                <div className="mt-12 grid gap-5 md:grid-cols-3">
                    {PLACEHOLDERS.map((n) => (
                        <Reveal key={n} delay={n * 0.06}>
                            <figure data-testid={`testimonial-placeholder-${n}`} className="card-light h-full rounded-[22px] border-dashed p-6">
                                <Quote className="h-6 w-6 text-[#a855f7]" />
                                <p className="mt-3 text-xs font-bold uppercase tracking-[0.2em] text-[#a855f7]">[ REAL TESTIMONIAL #{n} ]</p>
                                <blockquote className="mt-2 text-sm italic leading-relaxed text-[#6e6b7b]">
                                    “[Insert genuine testimonial here.]”
                                </blockquote>
                                <figcaption className="mt-3 text-sm font-semibold text-[#1a1523]">— [Name]</figcaption>
                            </figure>
                        </Reveal>
                    ))}
                </div>

                {/* student project placeholder */}
                <Reveal delay={0.1}>
                    <div data-testid="student-project-placeholder" className="card-light mt-10 grid items-center gap-6 rounded-[26px] border-dashed p-6 sm:p-8 md:grid-cols-[280px_1fr]">
                        <div className="flex aspect-video items-center justify-center rounded-2xl border-2 border-dashed border-[#a855f7]/40 bg-[#f5f0ff]">
                            <div className="text-center">
                                <ImageIcon className="mx-auto h-8 w-8 text-[#a855f7]" />
                                <p className="mt-2 px-4 text-xs font-bold uppercase tracking-widest text-[#7c3aed]">
                                    [ REAL STUDENT PROJECT / SCREENSHOT ]
                                </p>
                            </div>
                        </div>
                        <div className="space-y-3 text-sm">
                            <p>
                                <span className="font-display font-bold text-[#1a1523]">What they built: </span>
                                <span className="text-[#6e6b7b]">[Actual project]</span>
                            </p>
                            <p>
                                <span className="font-display font-bold text-[#1a1523]">What they learned: </span>
                                <span className="text-[#6e6b7b]">[Actual information]</span>
                            </p>
                            <p>
                                <span className="font-display font-bold text-[#1a1523]">Their experience: </span>
                                <span className="text-[#6e6b7b]">[Actual statement]</span>
                            </p>
                        </div>
                    </div>
                </Reveal>
            </div>
        </section>
    );
}
