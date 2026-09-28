export function track(event, data = {}) {
    try {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event, ...data });
        if (window.posthog) window.posthog.capture(event, data);
    } catch (e) {
        /* analytics must never break UX */
    }
}
