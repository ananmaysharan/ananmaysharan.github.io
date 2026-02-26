<script>
    export let buttonText = 'View Project';
    export let url;
    /** @type {'default' | 'yellow' | 'blue' | 'orange' | 'green'} */
    export let variant = 'default';

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

    $: style = variants[variant] || variants.default;
</script>

<a href={url} target="_blank">
    <button
        style="background: {style.gradient}; color: {style.text}; --shadow-color: {style.shadow};"
    >
        <slot />
        {buttonText}
    </button>
</a>

<style>
    button {
        position: relative;
        border: none;
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        gap: 6px;
        height: 32px;
        padding: 6px 16px;
        text-decoration: none;
        transition: filter .2s;
        display: inline-flex;
        box-shadow: inset 0 0 1px 1px #ffffff24, 0 0 0 1px #00000014, 0 2px 2px #0000000a, var(--shadow-color);
    }

    button:hover {
        cursor: pointer;
        filter: brightness(105%);
    }

    button:active {
        scale: 0.98;
    }

    a {
        text-decoration: none;
    }
</style>