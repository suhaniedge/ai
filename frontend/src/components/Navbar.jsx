import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import { LOGO_URL, PAYMENT_LINK } from "../lib/data";
import { track } from "../lib/track";

const LINKS = [
    { label: "What You'll Learn", href: "#learn" },
    { label: "Bonuses", href: "#bonuses" },
    { label: "How It Works", href: "#roadmap" },
    { label: "FAQ", href: "#faq" },
];

export function Navbar() {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 24);
        onScroll();
        window.addEventListener("scroll", onScroll, { passive: true });
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <header data-testid="site-navbar" className="fixed inset-x-0 top-0 z-50">
            <nav
                aria-label="Main"
                className={`relative border-b border-[#a855f7]/30 bg-gradient-to-r from-[#1a0b2e] via-[#2a1245] to-[#1a0b2e] backdrop-blur-xl transition-shadow duration-300 ${
                    scrolled ? "shadow-[0_14px_44px_-14px_rgba(168,85,247,0.55)]" : "shadow-[0_10px_34px_-16px_rgba(0,0,0,0.8)]"
                }`}
            >
                <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6">
                    <a href="/#top" data-testid="nav-logo" className="flex items-center gap-2.5">
                        <img
                            src={LOGO_URL}
                            alt="SuhaniEdge logo"
                            className="h-11 w-11 shrink-0 rounded-xl object-cover ring-2 ring-[#a855f7]/50 shadow-[0_0_18px_-4px_rgba(168,85,247,0.8)]"
                        />
                        <span className="font-display text-lg font-extrabold tracking-tight text-white">
                            Suhani<span className="text-[#c084fc]">Edge</span>
                        </span>
                    </a>

                    <div className="hidden items-center gap-7 lg:flex">
                        {LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={`/${l.href}`}
                                data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                                className="text-sm font-medium text-[#e9dffc]/85 transition hover:text-white"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href={PAYMENT_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="nav-cta-button"
                            onClick={() => track("registration_click", { location: "navbar" })}
                            className="gold-btn inline-flex min-h-[44px] items-center rounded-full px-5 py-2 font-display text-xs font-extrabold uppercase tracking-wide"
                        >
                            Join Live — ₹9
                        </a>
                    </div>

                    <button
                        type="button"
                        data-testid="nav-menu-toggle"
                        aria-label={open ? "Close menu" : "Open menu"}
                        aria-expanded={open}
                        onClick={() => setOpen(!open)}
                        className="flex h-11 w-11 items-center justify-center rounded-full text-white lg:hidden"
                    >
                        {open ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                {/* purple→gold striking light line separating header from hero */}
                <div aria-hidden className="absolute inset-x-0 bottom-0 h-[2px] bg-gradient-to-r from-transparent via-[#f4c95d]/80 to-transparent" />
            </nav>

            {open && (
                <div data-testid="nav-mobile-menu" className="border-b border-[#a855f7]/25 bg-[#1a0b2e]/97 px-6 py-5 backdrop-blur-xl lg:hidden">
                    <div className="flex flex-col gap-4">
                        {LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={`/${l.href}`}
                                onClick={() => setOpen(false)}
                                className="min-h-[44px] text-base font-medium text-[#e9dffc]/90"
                            >
                                {l.label}
                            </a>
                        ))}
                        <a
                            href={PAYMENT_LINK}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="nav-mobile-cta"
                            onClick={() => track("registration_click", { location: "navbar_mobile" })}
                            className="gold-btn mt-2 inline-flex min-h-[48px] items-center justify-center rounded-full px-5 py-3 font-display text-sm font-extrabold uppercase"
                        >
                            Join Live — ₹9
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
}
