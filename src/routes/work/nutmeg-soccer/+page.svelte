<script>
    import Button from "$lib/components/Button.svelte";
    import mms from "$lib/assets/work/splash/mms-splash.webp";
</script>


<div class='splash-container'>

<div class="text project-description">
    <h1>Nutmeg Soccer</h1>

    <h2>2025</h2>

    <h3>Description</h3>

    <p>
        I redesigned the Nutmeg Soccer website.
    </p>


    <h3>Technologies</h3>

    <p>Wordpress, Figma</p>

    <Button
        buttonText={"Visit Website"}
        url={"nutmegsoccer.org"}
    />
</div>

<div class="splash">
    <img src={mms} alt="mms-splash" />
</div>

</div>

<style>

    img {
        width: 100%;
        height: auto;
    }
</style>
