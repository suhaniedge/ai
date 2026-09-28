import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Laptop, Settings, Palette, TrendingUp, HelpCircle, Brain, Compass, Package, Rocket, ArrowDown } from "lucide-react";
import { SuhaAI } from "./SuhaAI";
import { Reveal } from "./Reveal";
import { QUIZ, FLOW_STEPS } from "../lib/data";
import { track } from "../lib/track";

const ICONS = { Laptop, Settings, Palette, TrendingUp, HelpCircle, Brain, Compass, Package, Rocket };

export function SuhaExperience() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const done = step >= QUIZ.length;

    const expression = done ? "celebrate" : answers[step] !== undefined ? "happy" : step === 0 ? "curious" : "thinking";

    const select = (qi, key) => {
        setAnswers((a) => ({ ...a, [qi]: key }));
        track(QUIZ[qi].id, { answer: key });
    };

    const advance = () => {
        if (step === QUIZ.length - 1) track("suha_complete");
        setStep((s) => s + 1);
    };

    return (
        <section id="suha" data-testid="suha-experience-section" className="grain relative overflow-hidden bg-[#0d0518] py-16 sm:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/15 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#ec4899]/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c084fc]">Interactive</p>
                    <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        LET <span className="text-[#a855f7]">SUHA AI</span> FIND YOUR STARTING POINT
                    </h2>
                </Reveal>

                <div className="mt-12 grid items-start gap-10 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)]">
                    {/* Suha */}
                    <div className="lg:sticky lg:top-28">
                        <div className="mx-auto w-40 sm:w-52 lg:w-64">
                            <SuhaAI expression={expression} label={`Suha AI, ${expression} expression`} />
                        </div>
                        <AnimatePresence mode="wait">
                            {done ? (
                                <motion.div
                                    key="done"
                                    initial={{ opacity: 0, y: 12 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    data-testid="suha-response-bubble"
                                    className="glass-dark mx-auto mt-6 max-w-sm rounded-2xl rounded-tl-sm p-4 text-center"
                                >
                                    <p className="text-xs font-bold uppercase tracking-widest text-[#c084fc]">🤖 Suha AI:</p>
                                    <p className="mt-1.5 font-display text-lg font-extrabold text-[#f4c95d]">“NOW I UNDERSTAND THE GAP.”</p>
                                </motion.div>
                            ) : (
                                <motion.p
                                    key={step}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    className="mt-5 text-center text-sm text-[#e9dffc]/60"
                                >
                                    Question {step + 1} of {QUIZ.length}
                                </motion.p>
                            )}
                        </AnimatePresence>
                    </div>

                    {/* Questions */}
                    <div>
                        <AnimatePresence mode="wait">
                            {!done ? (
                                <motion.div
                                    key={step}
                                    initial={{ opacity: 0, x: 24 }}
                                    animate={{ opacity: 1, x: 0 }}
                                    exit={{ opacity: 0, x: -24 }}
                                    transition={{ duration: 0.3, ease: "easeOut" }}
                                    data-testid={`suha-question-${step + 1}`}
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#a855f7]">{QUIZ[step].label}</p>
                                    <h3 className="mt-2 font-display text-xl font-extrabold text-white sm:text-2xl">🤖 {QUIZ[step].question}</h3>

                                    <div className="mt-6 space-y-3" role="group" aria-label={QUIZ[step].question}>
                                        {QUIZ[step].options.map((o) => {
                                            const selected = answers[step] === o.key;
                                            const Icon = o.icon ? ICONS[o.icon] : null;
                                            return (
                                                <button
                                                    key={o.key}
                                                    type="button"
                                                    data-testid={`suha-q${step + 1}-option-${o.key.toLowerCase()}`}
                                                    aria-pressed={selected}
                                                    onClick={() => select(step, o.key)}
                                                    className={`flex min-h-[52px] w-full items-center gap-3 rounded-2xl border px-5 py-4 text-left transition-all duration-200 ${
                                                        selected
                                                            ? "scale-[1.015] border-[#a855f7] bg-[#7c3aed]/25 shadow-[0_0_30px_-8px_rgba(168,85,247,0.6)]"
                                                            : "border-[#a855f7]/20 bg-[#38104d]/25 hover:border-[#a855f7]/50 hover:bg-[#38104d]/45"
                                                    }`}
                                                >
                                                    {Icon ? (
                                                        <Icon className={`h-5 w-5 shrink-0 ${selected ? "text-[#f4c95d]" : "text-[#c084fc]"}`} />
                                                    ) : (
                                                        <span
                                                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-xs font-extrabold ${
                                                                selected ? "bg-[#a855f7] text-white" : "bg-[#a855f7]/15 text-[#c084fc]"
                                                            }`}
                                                        >
                                                            {o.key}
                                                        </span>
                                                    )}
                                                    <span className={`flex-1 text-sm font-medium sm:text-base ${selected ? "text-white" : "text-[#e9dffc]/85"}`}>
                                                        {o.text}
                                                    </span>
                                                    {selected && (
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a855f7]">
                                                            <Check className="h-3.5 w-3.5 text-white" strokeWidth={3.5} />
                                                        </span>
                                                    )}
                                                </button>
                                            );
                                        })}
                                    </div>

                                    <button
                                        type="button"
                                        data-testid={`suha-q${step + 1}-continue`}
                                        disabled={answers[step] === undefined}
                                        onClick={advance}
                                        className={`mt-6 inline-flex min-h-[52px] items-center gap-2 rounded-full px-7 py-3 font-display text-sm font-extrabold uppercase tracking-wide transition ${
                                            answers[step] !== undefined
                                                ? "gold-btn"
                                                : "cursor-not-allowed border border-[#a855f7]/25 text-[#e9dffc]/40"
                                        }`}
                                    >
                                        {QUIZ[step].cta}
                                    </button>
                                </motion.div>
                            ) : (
                                <motion.div
                                    key="reveal"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    transition={{ duration: 0.4 }}
                                    data-testid="suha-roadmap-reveal"
                                    className="glass-dark rounded-[26px] p-6 sm:p-8"
                                >
                                    <p className="text-xs font-bold uppercase tracking-[0.24em] text-[#c084fc]">Your path forward</p>
                                    <div className="mt-5 flex flex-col items-stretch gap-0">
                                        {FLOW_STEPS.map((s, i) => (
                                            <motion.div
                                                key={s}
                                                initial={{ opacity: 0, y: 14 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.25 + i * 0.18 }}
                                                className="flex flex-col items-center"
                                            >
                                                <div className="flex w-full items-center justify-center gap-3 rounded-2xl border border-[#a855f7]/30 bg-gradient-to-r from-[#38104d]/60 to-[#7c3aed]/25 px-5 py-3.5">
                                                    <span className="font-display text-xs font-extrabold text-[#f4c95d]">0{i + 1}</span>
                                                    <span className="font-display text-base font-extrabold tracking-widest text-white">{s}</span>
                                                </div>
                                                {i < FLOW_STEPS.length - 1 && <ArrowDown className="my-1 h-4 w-4 text-[#a855f7]" />}
                                            </motion.div>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
}
