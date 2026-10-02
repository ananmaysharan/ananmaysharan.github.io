import { tick } from 'svelte';

const motion = { duration: 360, easing: 'cubic-bezier(0.23, 1, 0.32, 1)' };

/** Keep semantic links and hover cards in native flow; animate whole words, not letters. */
export function animatedParagraph(paragraph: HTMLParagraphElement) {
    const words: { element: HTMLSpanElement }[] = [];
    const originals: { node: Text; text: string; additions: Node[] }[] = [];
    const animations = new Set<Animation>();
    let destroyed = false;
    let ready = false;
    const mobile = matchMedia('(max-width: 39.999rem)');
    let geometry: { element: HTMLElement; left: number; line: number; width: number }[] = [];

    function cancelAnimations() {
        for (const animation of animations) animation.cancel();
        animations.clear();
    }

    function animate(element: HTMLElement, frames: Keyframe[]) {
        const animation = element.animate(frames, motion);
        animations.add(animation);
        animation.onfinish = () => animations.delete(animation);
    }

    // Measure final native line breaks, then visually reclaim unrevealed icon space.
    void document.fonts.ready.then(() => {
        if (destroyed) return;
        const walker = document.createTreeWalker(paragraph, NodeFilter.SHOW_TEXT);
        const nodes: Text[] = [];
        while (walker.nextNode()) {
            const node = walker.currentNode as Text;
            if (node.parentElement?.closest('[aria-hidden="true"], .hover-card')) continue;
            nodes.push(node);
        }
        for (const node of nodes) {
            const text = node.data;
            if (!text.trim()) continue;
            // Text decorations propagate through inline text, but stop at inline-blocks.
            // Carry the original decoration onto the independently animated words.
            let decoration: CSSStyleDeclaration | undefined;
            for (let ancestor = node.parentElement; ancestor; ancestor = ancestor.parentElement) {
                const computed = getComputedStyle(ancestor);
                if (computed.textDecorationLine !== 'none') {
                    decoration = computed;
                    break;
                }
                if (ancestor === paragraph) break;
            }
            const additions: Node[] = [];
            const fragment = document.createDocumentFragment();
            for (const part of text.match(/\s+|\S+/g) ?? []) {
                if (/^\s+$/.test(part)) {
                    const space = document.createTextNode(part);
                    additions.push(space);
                    fragment.append(space);
                } else {
                    const word = document.createElement('span');
                    word.dataset.animatedWord = '';
                    word.textContent = part;
                    word.style.display = 'inline-block';
                    word.style.whiteSpace = 'nowrap';
                    if (decoration) {
                        word.style.textDecoration = decoration.textDecoration;
                        word.style.textUnderlineOffset = decoration.textUnderlineOffset;
                    }
                    additions.push(word);
                    fragment.append(word);
                    words.push({ element: word });
                }
            }
            node.before(fragment);
            node.data = '';
            originals.push({ node, text, additions });
        }
        paragraph.dataset.stableReveals = 'ready';
        ready = true;
        measure();
        position(false);
    });

    function measure() {
        cancelAnimations();
        const elements = [
            ...words.map(word => word.element),
            ...paragraph.querySelectorAll<HTMLElement>('[data-favicon-slot]'),
        ];
        for (const element of elements) element.style.transform = '';
        const top = paragraph.getBoundingClientRect().top;
        const lineHeight = parseFloat(getComputedStyle(paragraph).lineHeight);
        geometry = elements.map(element => {
            const rect = element.getBoundingClientRect();
            return { element, left: rect.left, width: rect.width,
                line: Math.floor((rect.top + rect.height / 2 - top) / lineHeight) };
        });
    }

    function position(withMotion: boolean) {
        const hiddenSlots = mobile.matches ? [] : geometry.filter(({ element }) =>
            element.hasAttribute('data-favicon-slot') && !element.closest('.revealed'));
        const before = geometry.map(({ element }) => getComputedStyle(element).transform);
        cancelAnimations();
        geometry.forEach(({ element, left, line }, index) => {
            const reclaimed = hiddenSlots.reduce((sum, slot) =>
                slot.line === line && slot.left + slot.width <= left + 0.5 ? sum + slot.width : sum, 0);
            const transform = `translateX(${-reclaimed}px)`;
            element.style.transform = transform;
            if (withMotion) animate(element, [{ transform: before[index] }, { transform }]);
        });
    }

    async function reveal(event: Event) {
        if (!ready) return;
        const { keyboard } = (event as CustomEvent<{ keyboard: boolean }>).detail;
        await tick();
        if (destroyed) return;
        position(!keyboard && !matchMedia('(prefers-reduced-motion: reduce)').matches);
    }

    paragraph.addEventListener('faviconreveal', reveal);
    function updateLayout() {
        if (ready) { measure(); position(false); }
    }
    mobile.addEventListener('change', updateLayout);
    // Cancel stale destinations on resize; normal text flow handles the new width.
    let width = paragraph.clientWidth;
    const observer = new ResizeObserver(() => {
        if (paragraph.clientWidth === width) return;
        width = paragraph.clientWidth;
        if (ready) { measure(); position(false); }
    });
    observer.observe(paragraph);

    return {
        destroy() {
            destroyed = true;
            observer.disconnect();
            paragraph.removeEventListener('faviconreveal', reveal);
            mobile.removeEventListener('change', updateLayout);
            cancelAnimations();
            delete paragraph.dataset.stableReveals;
            for (const { element } of geometry) element.style.transform = '';
            for (const { node, text, additions } of originals) {
                node.data = text;
                for (const addition of additions) addition.parentNode?.removeChild(addition);
            }
        },
    };
}
