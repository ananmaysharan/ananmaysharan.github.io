<script>
    export let buttonText = 'View Project';
    export let url;
</script>

<a href={url} target="_blank"><button>{buttonText}</button></a>

<style>
    button {
        position: relative;
        border: none;
        background: linear-gradient(#ffdd73 0%, #ffbe25 100%);
        border-radius: 8px;
        justify-content: center;
        align-items: center;
        height: 32px;
        padding: 6px 16px;
        text-decoration: none;
        transition: filter .2s;
        display: inline-flex;
        box-shadow: inset 0 0 1px 1px #ffffff24, 0 0 0 1px #00000014, 0 2px 2px #0000000a, 0 0 0 1px #fac83e;
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
        color: white;
    }
</style>