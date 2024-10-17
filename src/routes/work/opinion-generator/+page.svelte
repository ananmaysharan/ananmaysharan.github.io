<script>
    import Button from "$lib/components/Button.svelte";
    import opinion from "$lib/assets/work/splash/opinion-splash.webp";
</script>


<div class='splash-container'>

<div class="text project-description">
    <h1>Opinion Generator</h1>

    <h2>2024</h2>

    <h3>Description</h3>

    <p>
        A project inspired by some funny tweets that allows people to generate their own NYT Opinion headlines. Allowed me to experiment with using the canvas2html library.
    </p>

    <h3>Technologies</h3>

    <p>HTML, CSS, Javascript, Github Pages</p>

    <Button
        buttonText={"Visit Website"}
        url={"https://ananmaysharan.github.io/opinion-generator/"}
    />
</div>

<div class="splash">
    <img src={opinion} alt="opinion-splash" />
</div>

</div>

<style>

    img {
        width: 100%;
        height: auto;
    }
</style>
