import { Reveal } from "./Reveal";
import { GoldButton } from "./GoldButton";
import { SuhaAI } from "./SuhaAI";

export function FinalSuha() {
    return (
        <section data-testid="final-suha-section" className="grain relative overflow-hidden bg-[#150826] py-16 sm:py-24">
            <div aria-hidden className="pointer-events-none absolute inset-0">
                <div className="absolute left-1/2 top-1/2 h-[460px] w-[760px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#a855f7]/18 blur-[130px]" />
            </div>
            <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6">
                <Reveal>
                    <div className="mx-auto w-52 sm:w-72 lg:w-80">
                        <SuhaAI expression="celebrate" label="Suha AI celebrating" />
                    </div>
                </Reveal>
                <Reveal delay={0.08}>
                    <p className="mt-8 text-xs font-bold uppercase tracking-[0.28em] text-[#c084fc]">🤖 Suha AI:</p>
                    <h2 className="mx-auto mt-3 max-w-2xl font-display text-2xl font-extrabold leading-tight tracking-tight text-white sm:text-3xl lg:text-4xl">
                        “YOU DON'T NEED TO KNOW <span className="text-[#a855f7]">EVERYTHING ABOUT AI.”</span>
                    </h2>
                    <div className="mx-auto mt-6 max-w-xl space-y-1.5 text-base text-[#e9dffc]/70 sm:text-lg">
                        <p>You don't need every tool.</p>
                        <p>You don't need all the answers.</p>
                        <p>You don't need to know exactly where you'll end up.</p>
                    </div>
                    <p className="mt-6 font-display text-xl font-extrabold tracking-wide text-[#f4c95d] sm:text-2xl">
                        YOU JUST NEED TO KNOW YOUR NEXT STEP.
                    </p>
                </Reveal>
                <Reveal delay={0.15}>
                    <GoldButton event="final_cta" testId="final-suha-cta-button" className="mt-9 w-full max-w-xl text-base sm:w-auto sm:text-lg">
                        🚀 JOIN THE LIVE AI FREELANCING WEBINAR — ₹9 <span className="cta-arrow">→</span>
                    </GoldButton>
                    <p className="mt-4 text-xs font-medium text-[#e9dffc]/60 sm:text-sm">
                        Beginner-Friendly • Practical • Live Guidance
                    </p>
                    <p className="mt-1.5 text-xs text-[#e9dffc]/50">No coding required • Start from the basics • Learn by doing</p>
                </Reveal>
            </div>
        </section>
    );
}
