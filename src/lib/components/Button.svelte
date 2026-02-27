<script>
    /**
     * @typedef {Object} Props
     * @property {string} [buttonText]
     * @property {any} url
     * @property {'default' | 'grey' | 'yellow' | 'blue' | 'orange' | 'green'} [variant]
     * @property {import('svelte').Snippet} [children]
     */

    /** @type {Props} */
    let {
        buttonText = 'View Project',
        url,
        variant = 'default',
        children
    } = $props();

    const variants = {
        default: {
            gradient: 'linear-gradient(#3a3a3a 0%, #1a1a1a 100%)',
            shadow: '0 0 0 1px #2a2a2a',
            text: '#ffffff'
        },
        grey: {
            gradient: 'linear-gradient(#fff 0%, #eee 100%)',
            shadow: '0 0 0 1px #eee',
            text: '#000000'
        },
        yellow: {
            gradient: 'linear-gradient(#ffdd73 0%, #ffbe25 100%)',
            shadow: '0 0 0 1px #fac83e',
            text: '#000000'
        },
        blue: {
            gradient: 'linear-gradient(#2f4f7c 0%, #163971 100%)',
            shadow: '0 0 0 1px #3079dd',
            text: '#fff'
        },
        orange: {
            gradient: 'linear-gradient(#fa711d 0%, #f54a00 100%)',
            shadow: '0 0 0 1px #f76e38',
            text: '#fff'
        },
        green: {
            gradient: 'linear-gradient(#86efac 0%, #22c55e 100%)',
            shadow: '0 0 0 1px #4ade80',
            text: '#fff'
        }
    };

    let style = $derived(variants[variant] || variants.default);
</script>

<a href={url} target="_blank" class="no-underline">
    <button
        class="relative border-none rounded-lg justify-center items-center gap-1.5 h-8 px-4 py-1.5 no-underline font-normal transition-[filter] duration-200 inline-flex hover:cursor-pointer hover:brightness-105 active:scale-[0.98]"
        style="background: {style.gradient}; color: {style.text}; box-shadow: inset 0 0 1px 1px #ffffff24, 0 0 0 1px #00000014, 0 2px 2px #0000000a, {style.shadow};"
    >
        {@render children?.()}
        {buttonText}
    </button>
</a>
