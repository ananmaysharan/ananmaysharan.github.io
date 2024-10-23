<script>
    export let buttonText = "";
    export let url;
    export let color = "default";
    export let icon;
</script>

<a href={url} target="_blank"
    ><button class={color}> <div class='button-content'><svelte:component this={icon} class='icon'/>{buttonText}</div></button></a
>

<style>
    button {
        position: relative;
        padding: 1em;
        border-radius: 10em;
        border: 0px;
        color: white;
        text-shadow: 0px -1px #4f4f4f;
        font-size: 2rem;
        min-width: 10em;
    }

    .icon {
    /* Add a drop shadow to the icon */
    filter: drop-shadow(2px 2px 5px rgba(0, 0, 0, 0.5));
    width: 24px; /* Adjust the size as needed */
    height: 24px; /* Adjust the size as needed */
  }
  
    .button-content {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: center;
        gap: 0.2em;
    }

    .default {
        background: linear-gradient(180deg, #bfbfbf 0%, #7f8382 100%);
    }

    .default:before {
        background: linear-gradient(
            180deg,
            #ffffff 0%,
            #666666 40%,
            #4f4f4f 60%,
            #eee 100%
        );
        border: 1px solid #7f8382;
    }

    .twitter {
        background: linear-gradient(180deg, #b9dcf2 0%, #1da1f2 100%);
    }

    .twitter:before {
        background: linear-gradient(
            180deg,
            #ffffff 0%,
            #666666 40%,
            #4f4f4f 60%,
            #eee 100%
        );
        border: 1px solid #7f8382;
    }

    .instagram {
        background: radial-gradient(
                circle farthest-corner at 35% 90%,
                #fec564,
                transparent 50%
            ),
            radial-gradient(
                circle farthest-corner at 0 140%,
                #fec564,
                transparent 50%
            ),
            radial-gradient(
                ellipse farthest-corner at 0 -25%,
                #5258cf,
                transparent 50%
            ),
            radial-gradient(
                ellipse farthest-corner at 20% -50%,
                #5258cf,
                transparent 50%
            ),
            radial-gradient(
                ellipse farthest-corner at 100% 0,
                #893dc2,
                transparent 50%
            ),
            radial-gradient(
                ellipse farthest-corner at 60% -20%,
                #893dc2,
                transparent 50%
            ),
            radial-gradient(
                ellipse farthest-corner at 100% 100%,
                #d9317a,
                transparent
            ),
            linear-gradient(
                #6559ca,
                #bc318f 30%,
                #e33f5f 50%,
                #f77638 70%,
                #fec66d 100%
            );
    }

    .instagram:before {
        background: linear-gradient(
            180deg,
            #ffffff 0%,
            #666666 40%,
            #4f4f4f 60%,
            #eee 100%
        );
        border: 1px solid #7f8382;
    }

    .linkedin {
        background: linear-gradient(180deg, #b9dcf2 0%, #0a66c2 100%);
    }

    .linkedin:before {
        background: linear-gradient(
            180deg,
            #ffffff 0%,
            #666666 40%,
            #4f4f4f 60%,
            #eee 100%
        );
        border: 1px solid #7f8382;
    }

    .letterboxd {
        background: linear-gradient(180deg, #2c3440 0%, #14181c 100%);
    }

    .letterboxd:before {
        background: linear-gradient(
            180deg,
            #ffffff 0%,
            #666666 40%,
            #4f4f4f 60%,
            #eee 100%
        );
        border: 1px solid #7f8382;
    }

    .arena {
        background: linear-gradient(180deg, #222, #000 100%);
    }

    .arena:before {
        background: linear-gradient(
            180deg,
            #ffffff 0%,
            #666666 40%,
            #4f4f4f 60%,
            #eee 100%
        );
        border: 1px solid #7f8382;
    }

    .github {
        background: linear-gradient(180deg, #2F363D, #24292E 100%);
    }

    .github:before {
        background: linear-gradient(
            180deg,
            #ffffff 0%,
            #666666 40%,
            #4f4f4f 60%,
            #eee 100%
        );
        border: 1px solid #7f8382;
    }

    .tiktok {
        background: linear-gradient(180deg, #222, #010101 100%);
    }

    .tiktok:before {
        background: linear-gradient(
            180deg,
            #ffffff 0%,
            #666666 40%,
            #4f4f4f 60%,
            #eee 100%
        );
        border: 1px solid #7f8382;
    }

    .spotify {
        background: linear-gradient(180deg, #55cd7f 0%, #1ed760 100%);
    }

    .spotify:before {
        background: linear-gradient(
            180deg,
            #ffffff 0%,
            #666666 40%,
            #4f4f4f 60%,
            #eee 100%
        );
        border: 1px solid #7f8382;
    }

    .youtube {
        background: linear-gradient(180deg, #e95454 0%, #ff0000 100%);
    }

    .youtube:before {
        background: linear-gradient(
            180deg,
            #ffffff 0%,
            #666666 40%,
            #4f4f4f 60%,
            #eee 100%
        );
        border: 1px solid #7f8382;
    }

    button::before {
        content: "";
        position: absolute;
        top: -4px; /* Control how much larger the background layer is */
        left: -4px;
        right: -4px;
        bottom: -4px;
        z-index: -1; /* Make sure it stays behind the button */
        border-radius: 10em; /* Optional, gives rounded corners */
    }

    button:hover {
        cursor: pointer;
    }

    a {
        text-decoration: none;
        color: white;
    }

</style>
