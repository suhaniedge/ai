import { Reveal } from "./Reveal";
import { LiteVideo } from "./LiteVideo";
import { SHORT_IDS } from "../lib/data";
import { track } from "../lib/track";

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
            </div>
        </section>
    );
}
