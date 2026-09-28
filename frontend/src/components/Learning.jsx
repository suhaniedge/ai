import { Reveal } from "./Reveal";
import { LEARNING } from "../lib/data";

export function Learning() {
    return (
        <section id="learn" data-testid="learning-section" className="bg-[#f5f0ff] py-16 text-[#1a1523] sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7c3aed]">What Will You Learn?</p>
                    <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                        YOUR AI FREELANCING <span className="text-[#7c3aed]">STARTING POINT</span>
                    </h2>
                </Reveal>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {LEARNING.map((l, i) => (
                        <Reveal key={l.n} delay={i * 0.05} className={i === 6 ? "sm:col-span-2 lg:col-span-3 lg:max-w-md lg:mx-auto lg:w-full" : ""}>
                            <article
                                data-testid={`learning-card-${l.n}`}
                                className="card-light group relative h-full overflow-hidden rounded-[22px] p-6"
                            >
                                <span className="absolute -right-3 -top-5 font-display text-[88px] font-extrabold leading-none text-[#7c3aed]/10 transition group-hover:text-[#7c3aed]/20">
                                    {l.n}
                                </span>
                                <span className="font-display text-sm font-extrabold tracking-widest text-[#a855f7]">{l.n}</span>
                                <h3 className="mt-2 font-display text-lg font-bold tracking-tight">{l.title}</h3>
                                <p className="mt-2 text-sm leading-relaxed text-[#6e6b7b]">{l.body}</p>
                            </article>
                        </Reveal>
                    ))}
                </div>
            </div>
        </section>
    );
}
