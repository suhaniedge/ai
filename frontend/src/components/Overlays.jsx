import { useEffect, useState } from "react";
import { motion, AnimatePresence, useScroll, useSpring } from "framer-motion";
import { X } from "lucide-react";
import { PAYMENT_LINK } from "../lib/data";
import { track } from "../lib/track";

export function ProgressBar() {
    const { scrollYProgress } = useScroll();
    const scaleX = useSpring(scrollYProgress, { stiffness: 120, damping: 26, mass: 0.4 });
    return (
        <motion.div
            data-testid="scroll-progress-bar"
            aria-hidden
            className="fixed inset-x-0 top-0 z-[60] h-1 origin-left bg-gradient-to-r from-[#7c3aed] via-[#a855f7] to-[#f4c95d]"
            style={{ scaleX }}
        />
    );
}

export function StickyCTA() {
    const [visible, setVisible] = useState(false);
    const [quizInView, setQuizInView] = useState(false);

    useEffect(() => {
        const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.75);
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    useEffect(() => {
        const quiz = document.querySelector('[data-testid="suha-experience-section"]');
        if (!quiz) return;
        const obs = new IntersectionObserver(([entry]) => setQuizInView(entry.isIntersecting), { threshold: 0.15 });
        obs.observe(quiz);
        return () => obs.disconnect();
    }, []);

    return (
        <AnimatePresence>
            {visible && !quizInView && (
                <motion.div
                    initial={{ y: 90 }}
                    animate={{ y: 0 }}
                    exit={{ y: 90 }}
                    transition={{ duration: 0.3, ease: "easeOut" }}
                    data-testid="sticky-mobile-cta"
                    className="fixed inset-x-0 bottom-0 z-50 border-t border-[#a855f7]/25 bg-[#0d0518]/92 px-4 py-3 backdrop-blur-xl md:hidden"
                >
                    <a
                        href={PAYMENT_LINK}
                        target="_blank"
                        rel="noopener noreferrer"
                        data-testid="sticky-cta-button"
                        onClick={() => track("registration_click", { location: "sticky_mobile" })}
                        className="gold-btn flex min-h-[48px] w-full items-center justify-center rounded-full py-3 font-display text-sm font-extrabold uppercase tracking-wide"
                    >
                        Join Live — ₹9
                    </a>
                </motion.div>
            )}
        </AnimatePresence>
    );
}

export function ExitIntent() {
    const [open, setOpen] = useState(false);

    useEffect(() => {
        let shown = false;
        const onLeave = (e) => {
            if (shown || e.clientY > 8) return;
            shown = true;
            setOpen(true);
            track("exit_intent_shown");
        };
        document.addEventListener("mouseleave", onLeave);
        return () => document.removeEventListener("mouseleave", onLeave);
    }, []);

    return (
        <AnimatePresence>
            {open && (
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    data-testid="exit-intent-modal"
                    role="dialog"
                    aria-modal="true"
                    aria-label="Before you go"
                    className="fixed inset-0 z-[70] flex items-center justify-center bg-[#0d0518]/80 px-4 backdrop-blur-sm"
                    onClick={() => setOpen(false)}
                >
                    <motion.div
                        initial={{ scale: 0.92, y: 16 }}
                        animate={{ scale: 1, y: 0 }}
                        exit={{ scale: 0.92, y: 16 }}
                        transition={{ duration: 0.25 }}
                        className="relative w-full max-w-md rounded-[26px] border border-[#a855f7]/30 bg-gradient-to-b from-[#2a1245] to-[#150826] p-8 text-center shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            aria-label="Close"
                            data-testid="exit-intent-close"
                            onClick={() => setOpen(false)}
                            className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full text-[#e9dffc]/60 transition hover:text-white"
                        >
                            <X className="h-5 w-5" />
                        </button>
                        <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#c084fc]">Before you go...</p>
                        <p className="mt-4 font-display text-xl font-extrabold leading-snug text-white sm:text-2xl">
                            You can explore AI freelancing without knowing everything first.
                        </p>
                        <a
                            href={PAYMENT_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="exit-intent-cta"
                            onClick={() => track("registration_click", { location: "exit_intent" })}
                            className="gold-btn mt-7 inline-flex min-h-[52px] w-full items-center justify-center rounded-full px-6 py-3 font-display text-sm font-extrabold uppercase"
                        >
                            JOIN THE LIVE WEBINAR — ₹9
                        </a>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
