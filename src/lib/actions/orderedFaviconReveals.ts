/** Gate decorative reveals in reading order without blocking link navigation. */
export function orderedFaviconReveals(container: HTMLElement) {
    const revealed = new Set<HTMLAnchorElement>();

    function guard(event: Event) {
        const { link } = (event as CustomEvent<{ link: HTMLAnchorElement }>).detail;
        const next = Array.from(container.querySelectorAll<HTMLAnchorElement>('[data-favicon-link]'))
            .find(candidate => !revealed.has(candidate));
        if (link !== next) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        revealed.add(link);
    }

    // Capture before the paragraph starts measuring/animating the reveal.
    container.addEventListener('faviconreveal', guard, true);
    return {
        destroy() {
            container.removeEventListener('faviconreveal', guard, true);
            revealed.clear();
        },
    };
}
