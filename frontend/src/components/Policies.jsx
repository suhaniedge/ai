import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";
import { SOCIALS, PAYMENT_LINK } from "../lib/data";

const BIZ = {
    name: "SuhaniEdge",
    site: "suhaniedge.com",
    email: SOCIALS.email,
    product: "AI Freelance Launchpad — Live AI Freelancing Webinar (₹9)",
    updated: "September 2026",
};

const P = {
    intro: `This page describes the official policies of ${BIZ.name} (${BIZ.site}) for the ${BIZ.product}. For any question, write to us at ${BIZ.email}.`,
};

export const POLICY_CONTENT = {
    privacy: {
        title: "Privacy Policy",
        path: "/privacy-policy",
        sections: [
            {
                h: "1. Who We Are",
                body: [
                    `${BIZ.name} (${BIZ.site}) is an education brand run by Suhani Singh, offering beginner-friendly live webinars and learning resources on AI freelancing. You can reach us at ${BIZ.email}.`,
                ],
            },
            {
                h: "2. Information We Collect",
                body: [
                    "When you register for the webinar, payment is processed by Razorpay, our payment partner. During checkout Razorpay may collect your name, email address, phone number and payment details. We receive your name and contact details (never your full card or UPI credentials) so we can send you webinar access and bonus materials.",
                    "We also collect anonymized usage analytics (pages viewed, buttons clicked) through privacy-conscious analytics tools to improve the page experience. We do not collect unnecessary personal data.",
                ],
            },
            {
                h: "3. How We Use Your Information",
                body: [
                    "To deliver your webinar access, joining link and bonuses.",
                    "To send important updates about the webinar you registered for.",
                    "To respond to your support requests at " + BIZ.email + ".",
                    "To understand aggregate page performance and improve our content.",
                ],
            },
            {
                h: "4. Cookies & Advertising",
                body: [
                    "We use cookies and similar technologies for analytics and, where applicable, advertising measurement (for example, the Meta Pixel) so we can understand how visitors find and use this page. You can control cookies through your browser settings. We do not sell your personal information to anyone.",
                ],
            },
            {
                h: "5. Data Sharing",
                body: [
                    "We share data only with the service providers needed to run the webinar: Razorpay (payments), our email/communication tools (access delivery) and analytics providers. Each provider processes data under its own privacy policy and applicable law.",
                ],
            },
            {
                h: "6. Data Retention & Your Rights",
                body: [
                    `We keep your registration details only as long as needed to deliver the webinar, bonuses and support. You may request access, correction or deletion of your personal data at any time by emailing ${BIZ.email}; we will respond within a reasonable timeframe.`,
                ],
            },
            {
                h: "7. Security",
                body: [
                    "Payments are handled entirely over Razorpay's PCI-DSS compliant infrastructure. We apply reasonable technical and organizational measures to protect the contact details we hold.",
                ],
            },
            {
                h: "8. Changes & Contact",
                body: [
                    `This policy may be updated from time to time; the latest version is always on this page (last updated: ${BIZ.updated}). Questions: ${BIZ.email}.`,
                ],
            },
        ],
    },
    terms: {
        title: "Terms & Conditions",
        path: "/terms-and-conditions",
        sections: [
            {
                h: "1. The Offer",
                body: [
                    `${BIZ.name} sells access to a live, beginner-friendly AI freelancing webinar (the "Webinar") for a one-time payment of ₹9, along with the digital bonus materials listed on the registration page. The separate 30-Day AI Freelancing Challenge is a different, optional program introduced during the Webinar and is not included in the ₹9 registration.`,
                ],
            },
            {
                h: "2. Educational Nature — No Earnings Claims",
                body: [
                    "The Webinar is educational content. We do not promise or guarantee any income, clients, jobs or business results. Any examples shown are illustrative. Your outcomes depend on your skills, effort, execution, market conditions and other factors outside our control.",
                ],
            },
            {
                h: "3. Registration & Access",
                body: [
                    "After successful payment via Razorpay you will receive confirmation and joining details at the contact information you provide. Please ensure your email and phone number are correct. Webinar schedules are communicated after registration; sessions run on a recurring basis.",
                ],
            },
            {
                h: "4. Acceptable Use",
                body: [
                    "Webinar access and bonus materials are for your personal, non-commercial learning use only. You may not record, redistribute, resell or publicly share the webinar content, links or materials.",
                ],
            },
            {
                h: "5. Intellectual Property",
                body: [
                    `All content, branding (including the ${BIZ.name} name and logo), slides, GPTs, guides and checklists remain the intellectual property of ${BIZ.name}. Registration grants a personal, non-transferable license to use them for learning.`,
                ],
            },
            {
                h: "6. Payments",
                body: [
                    "All prices are in Indian Rupees (INR) and processed securely by Razorpay. By purchasing you agree to Razorpay's terms of service in addition to these terms.",
                ],
            },
            {
                h: "7. Limitation of Liability",
                body: [
                    `To the maximum extent permitted by law, ${BIZ.name} is not liable for indirect or consequential damages arising from use of the Webinar or materials. Our total liability is limited to the amount you paid (₹9).`,
                ],
            },
            {
                h: "8. Governing Law & Contact",
                body: [
                    `These terms are governed by the laws of India. For any dispute or question, contact ${BIZ.email}. Last updated: ${BIZ.updated}.`,
                ],
            },
        ],
    },
    refund: {
        title: "Refund & Cancellation Policy",
        path: "/refund-policy",
        sections: [
            {
                h: "1. Registration Fee",
                body: [
                    `The ${BIZ.product} is a low-ticket digital live event. Because access details and bonus materials are delivered instantly upon registration, the ₹9 fee is generally non-refundable once access has been delivered.`,
                ],
            },
            {
                h: "2. When We Do Refund",
                body: [
                    "Duplicate payments (charged twice for one registration).",
                    "Payment succeeded but you never received confirmation or access details.",
                    "A technical failure on our side prevents you from joining the live session.",
                ],
            },
            {
                h: "3. How to Request",
                body: [
                    `Email ${BIZ.email} from your registered email address within 7 days of payment, including your registered phone number and the Razorpay payment ID (found in your payment receipt/SMS). Eligible refunds are processed to the original payment method via Razorpay, typically within 5–7 business days after approval.`,
                ],
            },
            {
                h: "4. Cancellations & Rescheduling",
                body: [
                    `If a scheduled session is cancelled or rescheduled by us, your registration automatically carries over to the next session at no extra cost. If you cannot attend your scheduled session, write to ${BIZ.email} and we will move you to an upcoming session.`,
                ],
            },
            {
                h: "5. Contact",
                body: [
                    `${BIZ.name} — ${BIZ.site} — ${BIZ.email}. Last updated: ${BIZ.updated}.`,
                ],
            },
        ],
    },
};

export function ScrollToTop() {
    const { pathname } = useLocation();
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [pathname]);
    return null;
}

export function PolicyPage({ policyKey }) {
    const policy = POLICY_CONTENT[policyKey];
    return (
        <div className="min-h-screen bg-[#faf9f6] text-[#1a1523]">
            <Navbar />
            <main className="mx-auto max-w-3xl px-4 pb-20 pt-28 sm:px-6" data-testid={`policy-page-${policyKey}`}>
                <p className="text-xs font-bold uppercase tracking-[0.28em] text-[#7c3aed]">{BIZ.name} — Legal</p>
                <h1 className="mt-3 font-display text-3xl font-extrabold tracking-tight sm:text-4xl">{policy.title}</h1>
                <p className="mt-4 text-sm leading-relaxed text-[#6e6b7b]">{P.intro}</p>
                <div className="mt-8 space-y-6">
                    {policy.sections.map((s, i) => (
                        <section key={s.h} data-testid={`policy-section-${i + 1}`} className="card-light rounded-2xl p-6">
                            <h2 className="font-display text-base font-bold sm:text-lg">{s.h}</h2>
                            {s.body.map((para, j) =>
                                s.body.length > 1 && para.length < 90 && !para.includes(".") ? (
                                    <p key={j} className="mt-2 flex items-start gap-2 text-sm leading-relaxed text-[#6e6b7b]">
                                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#a855f7]" />
                                        {para}
                                    </p>
                                ) : (
                                    <p key={j} className="mt-2 text-sm leading-relaxed text-[#6e6b7b]">
                                        {para}
                                    </p>
                                ),
                            )}
                        </section>
                    ))}
                </div>
                <div className="mt-10 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#1a0b2e] p-6 text-white">
                    <p className="text-sm text-[#e9dffc]/80">
                        Questions? <span className="font-semibold text-white">{BIZ.email}</span>
                    </p>
                    <div className="flex gap-3">
                        <Link to="/" data-testid="policy-back-home" className="rounded-full border border-[#a855f7]/40 px-5 py-2.5 text-sm font-semibold text-[#e9dffc] transition hover:border-[#f4c95d] hover:text-[#f4c95d]">
                            ← Back to page
                        </Link>
                        <a
                            href={PAYMENT_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="policy-cta"
                            className="gold-btn inline-flex min-h-[44px] items-center rounded-full px-5 py-2.5 font-display text-xs font-extrabold uppercase"
                        >
                            Join Live — ₹9
                        </a>
                    </div>
                </div>
            </main>
            <Footer />
        </div>
    );
}
