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
        background-color: #fff;
        border: 1px solid #ddd;
        padding: 1em;
    }

    .insight:hover {
        background-color: #f9f9f9;
        cursor: pointer;

    }

    .insight-text {
    font-family: 'Cooper Regular', 'Georgia', 'Times New Roman', serif;
        margin: 0;
    }

    p {
        margin: 0;
    }
</style>