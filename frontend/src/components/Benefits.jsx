import { Brain, Laptop, Package, Target, Handshake, Compass } from "lucide-react";
import { Reveal } from "./Reveal";
import { BENEFITS } from "../lib/data";

const ICONS = { Brain, Laptop, Package, Target, Handshake, Compass };

export function Benefits() {
    return (
        <section id="benefits" data-testid="benefits-section" className="bg-[#fffdf9] py-16 text-[#1a1523] sm:py-24">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7c3aed]">What You'll Get</p>
                    <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                        STOP COLLECTING AI INFORMATION.
                        <span className="mt-1 block text-[#7c3aed]">START UNDERSTANDING WHAT TO DO WITH IT.</span>
                    </h2>
                </Reveal>

                <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
                    {BENEFITS.map((b, i) => {
                        const Icon = ICONS[b.icon];
                        return (
                            <Reveal key={b.title} delay={i * 0.06}>
                                <article data-testid={`benefit-card-${i + 1}`} className="card-light h-full rounded-[22px] p-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-gradient-to-br from-[#7c3aed] to-[#38104d] text-white shadow-lg shadow-[#7c3aed]/25">
                                        <Icon className="h-5 w-5" />
                                    </div>
                                    <h3 className="mt-4 font-display text-lg font-bold tracking-tight">{b.title}</h3>
                                    <p className="mt-2 text-sm leading-relaxed text-[#6e6b7b]">{b.body}</p>
                                </article>
                            </Reveal>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
