import { Instagram, Youtube, Linkedin, Mail, Globe } from "lucide-react";
import { LOGO_URL, SOCIALS } from "../lib/data";

const PinterestIcon = (props) => (
    <svg viewBox="0 0 24 24" fill="currentColor" {...props}>
        <path d="M12 2C6.48 2 2 6.48 2 12c0 4.08 2.46 7.58 5.99 9.13-.08-.78-.16-1.97.03-2.82l1.15-4.88s-.29-.59-.29-1.46c0-1.36.79-2.38 1.78-2.38.84 0 1.24.63 1.24 1.38 0 .84-.54 2.1-.81 3.27-.23.98.49 1.77 1.45 1.77 1.74 0 3.08-1.84 3.08-4.49 0-2.35-1.69-3.99-4.1-3.99-2.79 0-4.44 2.1-4.44 4.26 0 .84.32 1.75.73 2.24.08.1.09.18.07.28l-.27 1.1c-.04.18-.14.22-.33.13-1.23-.57-2-2.37-2-3.82 0-3.11 2.26-5.96 6.51-5.96 3.42 0 6.08 2.44 6.08 5.7 0 3.4-2.14 6.13-5.11 6.13-1 0-1.94-.52-2.26-1.13l-.61 2.34c-.22.85-.82 1.92-1.22 2.57.92.28 1.89.44 2.9.44 5.52 0 10-4.48 10-10S17.52 2 12 2z" />
    </svg>
);

const LINKS = [
    { icon: Instagram, href: SOCIALS.instagram, label: "SuhaniEdge on Instagram", id: "instagram" },
    { icon: Youtube, href: SOCIALS.youtube, label: "SuhaniEdge on YouTube", id: "youtube" },
    { icon: Linkedin, href: SOCIALS.linkedin, label: "Suhani Singh on LinkedIn", id: "linkedin" },
    { icon: PinterestIcon, href: SOCIALS.pinterest, label: "SuhaniEdge on Pinterest", id: "pinterest" },
];

export function Footer() {
    return (
        <footer data-testid="site-footer" className="border-t border-[#a855f7]/15 bg-[#0d0518] pb-28 pt-12 md:pb-12">
            <div className="mx-auto max-w-7xl px-4 sm:px-6">
                <div className="flex flex-col items-center gap-8 md:flex-row md:justify-between">
                    <div className="flex items-center gap-3">
                        <img src={LOGO_URL} alt="SuhaniEdge logo" className="h-10 w-10 rounded-full ring-1 ring-[#a855f7]/40" />
                        <div>
                            <p className="font-display text-lg font-extrabold text-white">
                                Suhani<span className="text-[#c084fc]">Edge</span>
                            </p>
                            <p className="text-xs text-[#e9dffc]/50">AI Freelance Launchpad</p>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        {LINKS.map((s) => (
                            <a
                                key={s.id}
                                href={s.href}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={s.label}
                                data-testid={`footer-social-${s.id}`}
                                className="glass-dark flex h-11 w-11 items-center justify-center rounded-full text-[#e9dffc]/80 transition hover:border-[#f4c95d]/50 hover:text-[#f4c95d]"
                            >
                                <s.icon className="h-5 w-5" />
                            </a>
                        ))}
                    </div>

                    <div className="flex flex-col items-center gap-2 text-sm text-[#e9dffc]/70 md:items-end">
                        <a href={`mailto:${SOCIALS.email}`} data-testid="footer-email" className="flex items-center gap-2 transition hover:text-[#f4c95d]">
                            <Mail className="h-4 w-4" /> {SOCIALS.email}
                        </a>
                        <a
                            href={SOCIALS.website}
                            target="_blank"
                            rel="noopener noreferrer"
                            data-testid="footer-website"
                            className="flex items-center gap-2 transition hover:text-[#f4c95d]"
                        >
                            <Globe className="h-4 w-4" /> suhaniedge.com
                        </a>
                    </div>
                </div>

                <div className="mt-10 border-t border-[#a855f7]/10 pt-6 text-center">
                    <p className="mx-auto max-w-2xl text-xs leading-relaxed text-[#e9dffc]/40">
                        This is an educational webinar. Results depend on your skills, effort, execution, market and other factors.
                    </p>
                    <p className="mt-3 text-xs text-[#e9dffc]/40">© 2026 SuhaniEdge. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}
