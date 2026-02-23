<script>
    import Listening from "$lib/components/Listening.svelte";
    import Gallery from "$lib/components/Gallery.svelte";
</script>

<main class="home-page">
    <Gallery/>

    <div class='media-container'>
        <Listening/>
    </div>
</main>

<style>
    .home-page {
        height: 90vh; /* Account for 10vh navbar */
        width: 100vw;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        position: relative;
    }
    
    .media-container {
        position: absolute;
        bottom: 2rem;
        right: 2rem;
    }
</style>