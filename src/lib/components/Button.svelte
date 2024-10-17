<script>
    export let buttonText = 'View Project';
    export let url;
</script>

<a href={url} target="_blank"><button>{buttonText}</button></a>

<style>
    button {
        position: relative;
        padding: 1em;
        border-radius: 10em;
        border: 0px;
        background: linear-gradient(180deg, #BFBFBF 0%, #7F8382 100%), linear-gradient(180deg, #BFBFBF 0%, #7F8382 100%);
        color: white;
        text-shadow: 0px -0.8px #4F4F4F;
    }

    button::before {
        content: '';
        position: absolute;
        top: -2px;  /* Control how much larger the background layer is */
        left: -2px;
        right: -2px;
        bottom: -2px;
 
 
        background: linear-gradient(180deg, #FFFFFF 0%, #666666 38.61%, #4F4F4F 61.84%, #eee 100%);
        z-index: -1;  /* Make sure it stays behind the button */
        border-radius: 10em;  /* Optional, gives rounded corners */
        border: 1px solid #7F8382;
    }

    button:hover {
        cursor: pointer;
    }


    a {
        text-decoration: none;
        color: white;
    }
</style>