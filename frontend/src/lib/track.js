const CHECKOUT_EVENTS = new Set(["hero_cta", "value_stack_cta", "final_cta", "registration_click"]);

export function track(event, data = {}) {
    try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event, ...data });
        if (window.posthog) window.posthog.capture(event, data);
        if (typeof window.fbq === "function") {
            if (event === "PageView") {
                window.fbq("track", "PageView");
            } else {
                if (CHECKOUT_EVENTS.has(event)) {
                    window.fbq("track", "InitiateCheckout", { value: 9.0, currency: "INR", num_items: 1 });
                }
                if (event === "suha_complete") window.fbq("track", "Lead");
                window.fbq("trackCustom", event, data);
            }
        }
    } catch (e) {
        /* analytics must never break UX */
    }
}
