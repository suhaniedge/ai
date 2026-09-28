import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Laptop, Settings, Palette, TrendingUp, HelpCircle, Brain, Compass, Package, Rocket, ArrowDown, Volume2, VolumeX } from "lucide-react";
import { SuhaAI } from "./SuhaAI";
import { Reveal } from "./Reveal";
import { QUIZ, FLOW_STEPS, SUHA_TIPS } from "../lib/data";
import { track } from "../lib/track";

const ICONS = { Laptop, Settings, Palette, TrendingUp, HelpCircle, Brain, Compass, Package, Rocket };

export function SuhaExperience() {
    const [step, setStep] = useState(0);
    const [answers, setAnswers] = useState({});
    const [poke, setPoke] = useState(false);
    const [voicePlaying, setVoicePlaying] = useState(false);
    const voiceStarted = useRef(false);
    const audioRef = useRef(null);
    const done = step >= QUIZ.length;

    const toggleVoice = () => {
        if (!audioRef.current) {
            audioRef.current = new Audio(`${process.env.REACT_APP_BACKEND_URL}/api/suha-voice`);
            audioRef.current.preload = "auto";
            audioRef.current.onended = () => setVoicePlaying(false);
            audioRef.current.onerror = () => setVoicePlaying(false);
        }
        if (voicePlaying) {
            audioRef.current.pause();
            setVoicePlaying(false);
        } else {
            voiceStarted.current = true;
            audioRef.current.play().catch(() => setVoicePlaying(false));
            setVoicePlaying(true);
            track("suha_voice_play");
        }
    };

    const theme = done ? "dark" : QUIZ[step].theme;
    const light = theme === "light";
    const expression = poke ? "celebrate" : done ? "celebrate" : answers[step] !== undefined ? "happy" : step === 0 ? "curious" : "thinking";

    const select = (qi, key) => {
        setAnswers((a) => ({ ...a, [qi]: key }));
        track(QUIZ[qi].id, { answer: key });
    };

    const advance = () => {
        if (step === QUIZ.length - 1) track("suha_complete");
        setStep((s) => s + 1);
    };

    const handlePoke = () => {
        setPoke(true);
        track("suha_poke");
        if (!voiceStarted.current) toggleVoice();
        setTimeout(() => setPoke(false), 1300);
    };

    const bubbleText = done
        ? "“NOW I UNDERSTAND THE GAP.”"
        : poke
          ? "Hehe! Pick your answer below 👇"
          : answers[step] !== undefined
            ? SUHA_TIPS[Math.min(step + 1, SUHA_TIPS.length - 1)]
            : SUHA_TIPS[step];

    const bubblePill = (
        <AnimatePresence mode="wait">
            <motion.span
                key={bubbleText}
                initial={{ opacity: 0, y: 6, scale: 0.94 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, scale: 0.94 }}
                transition={{ duration: 0.22 }}
                data-testid="suha-bubble"
                className={`inline-block max-w-full rounded-2xl rounded-bl-sm px-3.5 py-2 text-left text-[11px] font-semibold shadow-lg sm:text-xs ${
                    light ? "bg-[#1a0b2e] text-white" : "bg-white text-[#1a0b2e]"
                }`}
            >
                {bubbleText}
            </motion.span>
        </AnimatePresence>
    );

    const suhaBlock = (size, { floatBubble = false, pokeId = "suha-poke" } = {}) => (
        <button
            type="button"
            onClick={handlePoke}
            data-testid={pokeId}
            aria-label="Interact with Suha AI"
            className={`relative shrink-0 cursor-pointer transition-transform hover:scale-105 active:scale-95 ${size}`}
        >
            {!done && answers[Math.min(step, QUIZ.length - 1)] === undefined && (
                <span aria-hidden className="absolute inset-0 -m-1 animate-ping rounded-full border-2 border-[#f4c95d]/40 [animation-duration:2.4s]" />
            )}
            <SuhaAI expression={expression} label={`Suha AI, ${expression} expression`} />
            {floatBubble && <span className="absolute -top-3 left-1/2 z-10 w-52 -translate-x-1/2 -translate-y-full">{bubblePill}</span>}
        </button>
    );

    return (
        <section id="suha" data-testid="suha-experience-section" className="grain relative overflow-hidden bg-[#0d0518] py-14 sm:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/4 top-0 h-96 w-96 rounded-full bg-[#7c3aed]/15 blur-[120px]" />
                <div className="absolute bottom-0 right-1/4 h-96 w-96 rounded-full bg-[#ec4899]/10 blur-[120px]" />
            </div>

            <div className="relative mx-auto max-w-6xl px-4 sm:px-6">
                <Reveal className="mx-auto max-w-3xl text-center">
                    <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c084fc]">Interactive — Tap Suha AI too!</p>
                    <h2 className="mt-3 font-display text-2xl font-extrabold tracking-tight text-white sm:text-3xl lg:text-4xl">
                        LET <span className="text-[#a855f7]">SUHA AI</span> FIND YOUR STARTING POINT
                    </h2>
                    <button
                        type="button"
                        data-testid="suha-voice-button"
                        onClick={toggleVoice}
                        aria-pressed={voicePlaying}
                        className={`mx-auto mt-4 flex min-h-[44px] items-center gap-2 rounded-full border px-5 py-2.5 text-xs font-bold uppercase tracking-widest transition ${
                            voicePlaying
                                ? "border-[#f4c95d]/60 bg-[#f4c95d]/10 text-[#f4c95d]"
                                : "border-[#a855f7]/40 bg-[#38104d]/40 text-[#e9dffc] hover:border-[#f4c95d]/50 hover:text-[#f4c95d]"
                        }`}
                    >
                        {voicePlaying ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                        {voicePlaying ? "Suha is speaking… tap to stop" : "Hear Suha AI"}
                    </button>
                </Reveal>

                <div className="mt-8 grid items-start gap-8 sm:mt-12 lg:grid-cols-[minmax(0,2fr)_minmax(0,3fr)] lg:gap-10">
                    {/* desktop sticky suha */}
                    <div className="hidden lg:sticky lg:top-28 lg:block">
                        <div className="mx-auto mt-16 w-64">{suhaBlock("w-64", { floatBubble: true, pokeId: "suha-poke-desktop" })}</div>
                        <p className="mt-16 text-center text-sm text-[#e9dffc]/60">
                            {done ? "Your path is ready →" : `Question ${step + 1} of ${QUIZ.length}`}
                        </p>
                    </div>

                    {/* questions */}
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
                                    className={`rounded-[26px] p-5 sm:p-8 ${
                                        light
                                            ? "bg-[#f5f0ff] text-[#1a1523] shadow-[0_30px_70px_-30px_rgba(124,58,237,0.5)]"
                                            : "glass-dark text-white"
                                    }`}
                                >
                                    {/* one-frame header: suha + question together (mobile), bubble flows below */}
                                    <div className="flex items-center gap-3.5">
                                        <div className="lg:hidden">{suhaBlock("w-16 sm:w-20", { pokeId: "suha-poke-mobile" })}</div>
                                        <div className="min-w-0 flex-1">
                                            <p className={`text-xs font-bold uppercase tracking-[0.24em] ${light ? "text-[#7c3aed]" : "text-[#a855f7]"}`}>
                                                {QUIZ[step].label}
                                                <span className={`ml-2 font-medium normal-case tracking-normal ${light ? "text-[#6e6b7b]" : "text-[#e9dffc]/50"}`}>
                                                    {step + 1}/{QUIZ.length}
                                                </span>
                                            </p>
                                            <h3 className={`mt-1.5 font-display text-lg font-extrabold leading-snug sm:text-2xl ${light ? "text-[#1a1523]" : "text-white"}`}>
                                                🤖 {QUIZ[step].question}
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="mt-3 lg:hidden">{bubblePill}</div>

                                    <div className="mt-5 space-y-3" role="group" aria-label={QUIZ[step].question}>
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
                                                    className={`option-3d ${light ? "option-3d-light" : "option-3d-dark"} ${
                                                        selected ? "option-selected scale-[1.01]" : ""
                                                    } flex min-h-[52px] w-full items-center gap-3 rounded-2xl px-4 py-3 text-left sm:px-5 sm:py-4`}
                                                >
                                                    {Icon ? (
                                                        <Icon
                                                            className={`h-5 w-5 shrink-0 ${
                                                                selected ? "text-[#f4c95d]" : light ? "text-[#7c3aed]" : "text-[#c084fc]"
                                                            }`}
                                                        />
                                                    ) : (
                                                        <span
                                                            className={`flex h-7 w-7 shrink-0 items-center justify-center rounded-full font-display text-xs font-extrabold ${
                                                                selected
                                                                    ? "bg-[#a855f7] text-white"
                                                                    : light
                                                                      ? "bg-[#7c3aed]/12 text-[#7c3aed]"
                                                                      : "bg-[#a855f7]/15 text-[#c084fc]"
                                                            }`}
                                                        >
                                                            {o.key}
                                                        </span>
                                                    )}
                                                    <span
                                                        className={`flex-1 text-sm font-medium sm:text-base ${
                                                            selected ? (light ? "text-[#38104d]" : "text-white") : light ? "text-[#1a1523]/85" : "text-[#e9dffc]/85"
                                                        }`}
                                                    >
                                                        {o.text}
                                                    </span>
                                                    {selected && (
                                                        <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#a855f7] shadow-lg">
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
                                        className={`mt-6 inline-flex min-h-[52px] w-full items-center justify-center gap-2 rounded-full px-7 py-3 font-display text-sm font-extrabold uppercase tracking-wide transition sm:w-auto ${
                                            answers[step] !== undefined
                                                ? "gold-btn"
                                                : light
                                                  ? "cursor-not-allowed border border-[#7c3aed]/25 text-[#6e6b7b]/50"
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
                                    {/* mobile suha celebration in-frame */}
                                    <div className="mb-2 flex justify-center lg:hidden">{suhaBlock("w-28", { pokeId: "suha-poke-reveal" })}</div>
                                    <div className="glass-dark mx-auto mt-4 max-w-sm rounded-2xl rounded-tl-sm p-4 text-center lg:hidden">
                                        <p className="text-xs font-bold uppercase tracking-widest text-[#c084fc]">🤖 Suha AI:</p>
                                        <p className="mt-1.5 font-display text-lg font-extrabold text-[#f4c95d]">“NOW I UNDERSTAND THE GAP.”</p>
                                    </div>
                                    <p className="mt-2 text-xs font-bold uppercase tracking-[0.24em] text-[#c084fc]">Your path forward</p>
                                    <div className="mt-5 flex flex-col items-stretch">
                                        {FLOW_STEPS.map((s, i) => (
                                            <motion.div
                                                key={s}
                                                initial={{ opacity: 0, y: 14 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                transition={{ delay: 0.25 + i * 0.18 }}
                                                className="flex flex-col items-center"
                                            >
                                                <div className="option-3d option-3d-dark flex w-full items-center justify-center gap-3 rounded-2xl px-5 py-3.5">
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

                {/* desktop response bubble under sticky suha */}
                {done && (
                    <motion.div
                        initial={{ opacity: 0, y: 12 }}
                        animate={{ opacity: 1, y: 0 }}
                        data-testid="suha-response-bubble"
                        className="glass-dark mx-auto mt-8 hidden max-w-sm rounded-2xl p-4 text-center lg:block"
                    >
                        <p className="text-xs font-bold uppercase tracking-widest text-[#c084fc]">🤖 Suha AI:</p>
                        <p className="mt-1.5 font-display text-lg font-extrabold text-[#f4c95d]">“NOW I UNDERSTAND THE GAP.”</p>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
