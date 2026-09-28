import { PAYMENT_LINK } from "../lib/data";
import { track } from "../lib/track";

export function GoldButton({ children, event = "registration_click", className = "", testId = "gold-cta", ...rest }) {
    return (
        <a
            href={PAYMENT_LINK}
            target="_blank"
            rel="noopener noreferrer"
            data-testid={testId}
            onClick={() => track(event)}
            className={`gold-btn inline-flex min-h-[52px] items-center justify-center gap-2 rounded-full px-7 py-3.5 text-center font-display text-sm font-extrabold uppercase tracking-wide sm:text-base ${className}`}
            {...rest}
        >
            {children}
        </a>
    );
}
