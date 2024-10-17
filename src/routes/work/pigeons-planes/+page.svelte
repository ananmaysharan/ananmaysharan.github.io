<script>
    import Button from "$lib/components/Button.svelte";
    import pigeons from "$lib/assets/work/splash/pigeons-splash.webp";
</script>


<div class='splash-container'>

<div class="text project-description">
    <h1>Pigeons and Planes</h1>

    <h2>2021</h2>

    <h3>Description</h3>

    <p>
        I wrote some articles for Pigeons and Planes, a part of Complex News, covering new music.

    </p>

    <Button
        buttonText={"View Articles"}
        url={"https://www.complex.com/author/loveinamovie"}
    />
</div>

<div class="splash">
    <img src={pigeons} alt="pigeons-splash" />
</div>

</div>

<style>

    img {
        width: 100%;
        height: auto;
    }
</style>
