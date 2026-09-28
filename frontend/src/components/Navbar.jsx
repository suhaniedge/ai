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
        <header
            data-testid="site-navbar"
            className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
                scrolled ? "border-b border-[#a855f7]/15 bg-[#0d0518]/85 backdrop-blur-xl" : "bg-transparent"
            }`}
        >
            <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6" aria-label="Main">
                <a href="#top" data-testid="nav-logo" className="flex items-center gap-2.5">
                    <img src={LOGO_URL} alt="SuhaniEdge logo" className="h-9 w-9 rounded-full ring-1 ring-[#a855f7]/40" />
                    <span className="font-display text-lg font-extrabold tracking-tight text-white">
                        Suhani<span className="text-[#c084fc]">Edge</span>
                    </span>
                </a>

                <div className="hidden items-center gap-7 lg:flex">
                    {LINKS.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-link-${l.label.toLowerCase().replace(/[^a-z]+/g, "-")}`}
                            className="text-sm font-medium text-[#e9dffc]/80 transition hover:text-white"
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
            </nav>

            {open && (
                <div data-testid="nav-mobile-menu" className="border-t border-[#a855f7]/15 bg-[#0d0518]/95 px-6 py-5 backdrop-blur-xl lg:hidden">
                    <div className="flex flex-col gap-4">
                        {LINKS.map((l) => (
                            <a
                                key={l.href}
                                href={l.href}
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
