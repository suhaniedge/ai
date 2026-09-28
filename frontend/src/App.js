import "@/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { MotionConfig } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { Benefits } from "@/components/Benefits";
import { Learning } from "@/components/Learning";
import { Ecosystem } from "@/components/Ecosystem";
import { SuhaExperience } from "@/components/SuhaExperience";
import { Aha } from "@/components/Aha";
import { Roadmap } from "@/components/Roadmap";
import { Transformation } from "@/components/Transformation";
import { Bonuses } from "@/components/Bonuses";
import { ValueStack } from "@/components/ValueStack";
import { Proof } from "@/components/Proof";
import { Mentor } from "@/components/Mentor";
import { Objection, Audience, RealityCheck, WhyMatters } from "@/components/TrustSections";
import { FinalOffer } from "@/components/FinalOffer";
import { FinalSuha } from "@/components/FinalSuha";
import { FAQ } from "@/components/FAQ";
import { Footer } from "@/components/Footer";
import { ProgressBar, StickyCTA, ExitIntent } from "@/components/Overlays";
import { PolicyPage, ScrollToTop } from "@/components/Policies";

function LandingPage() {
    return (
        <div className="min-h-screen bg-[#0d0518] font-[Outfit]">
            <ProgressBar />
            <Navbar />
            <main>
                <Hero />
                <Benefits />
                <Learning />
                <Ecosystem />
                <SuhaExperience />
                <Aha />
                <Roadmap />
                <Transformation />
                <Bonuses />
                <ValueStack />
                <Proof />
                <Mentor />
                <Objection />
                <Audience />
                <RealityCheck />
                <WhyMatters />
                <FinalOffer />
                <FinalSuha />
                <FAQ />
            </main>
            <Footer />
            <StickyCTA />
            <ExitIntent />
            <div aria-hidden className="h-16 md:hidden" />
        </div>
    );
}

function App() {
    return (
        <MotionConfig reducedMotion="user">
            <BrowserRouter>
                <ScrollToTop />
                <Routes>
                    <Route path="/" element={<LandingPage />} />
                    <Route path="/ai-freelancing-webinar" element={<LandingPage />} />
                    <Route path="/privacy-policy" element={<PolicyPage policyKey="privacy" />} />
                    <Route path="/terms-and-conditions" element={<PolicyPage policyKey="terms" />} />
                    <Route path="/refund-policy" element={<PolicyPage policyKey="refund" />} />
                </Routes>
            </BrowserRouter>
        </MotionConfig>
    );
}

export default App;
