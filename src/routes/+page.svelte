<script>
    import Listening from "$lib/components/Listening.svelte";
    import Gallery from "$lib/components/Gallery.svelte";
</script>

<main class="h-[90vh] w-screen overflow-hidden flex flex-col items-center justify-center relative">
    <Gallery/>

    <div class="absolute bottom-8 right-8">
        <Listening/>
    </div>
</main>
