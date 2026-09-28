import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";
import { Reveal } from "./Reveal";
import { FAQS } from "../lib/data";
import { track } from "../lib/track";

export function FAQ() {
    return (
        <section id="faq" data-testid="faq-section" className="bg-[#faf9f6] py-16 text-[#1a1523] sm:py-24">
            <div className="mx-auto max-w-3xl px-4 sm:px-6">
                <Reveal className="text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7c3aed]">Questions</p>
                    <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight sm:text-3xl lg:text-4xl">
                        FREQUENTLY ASKED <span className="text-[#7c3aed]">QUESTIONS</span>
                    </h2>
                </Reveal>

                <Reveal delay={0.08}>
                    <Accordion type="single" collapsible className="mt-10 space-y-3">
                        {FAQS.map((f, i) => (
                            <AccordionItem
                                key={f.q}
                                value={`faq-${i}`}
                                data-testid={`faq-item-${i + 1}`}
                                className="card-light rounded-2xl border px-5 data-[state=open]:border-[#a855f7]/50"
                            >
                                <AccordionTrigger
                                    data-testid={`faq-trigger-${i + 1}`}
                                    onClick={() => track("faq_open", { question: f.q })}
                                    className="min-h-[56px] py-4 text-left font-display text-sm font-bold tracking-wide hover:no-underline sm:text-base"
                                >
                                    {f.q}
                                </AccordionTrigger>
                                <AccordionContent className="pb-5 text-sm leading-relaxed text-[#6e6b7b]">{f.a}</AccordionContent>
                            </AccordionItem>
                        ))}
                    </Accordion>
                </Reveal>
            </div>
        </section>
    );
}
