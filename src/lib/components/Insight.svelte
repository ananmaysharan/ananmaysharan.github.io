<script>
    export let text = "";
</script>

<div class="insight">
    <p class="insight-text">{text}</p>
</div>

<style>
    .insight {
        display: flex;
        align-items: flex-start;
        background-color: #f0f0f0;
        padding: 1em;
    }

    .insight-text {
        font-family: 'Helvetica Neue', Arial, sans-serif;
        margin: 0;
    }

    p {
        margin: 0;
    }
</style>