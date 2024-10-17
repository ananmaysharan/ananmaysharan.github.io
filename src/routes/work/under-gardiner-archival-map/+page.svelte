<script>
    import Button from "$lib/components/Button.svelte";
    import gardiner from "$lib/assets/work/splash/under-gardiner-splash.webp";
</script>


<div class='splash-container'>

<div class="text project-description">
    <h1>Under Gardiner Archival Map</h1>

    <h2>2023</h2>

    <h3>Description</h3>

    <p>
        I worked as an intern at The Bentway, a non-profit that operates a public space and programming platform under the Gardiner Expressway in Toronto. 
        The Bentway and the City of Toronto have collaborated on the Under Gardiner Public Realm Plan, a vision for underutilized public spaces below and adjacent to the Gardiner Expressway.

    </p>

    <p>
        As part of the Under Gardiner Public Realm Plan, I worked with another intern to create an interactive web map drawing on photographic records from the City of Toronto Archive and Toronto Public Library.
    </p>

    <p> We were  responsible for the data collection, manipulation, web development and design of the project, which included geocoding and tagging 400+ photos by theme. I built features to filter the images by time and theme.  </p>

    <h3>Technologies</h3>

    <p>Mapbox, HTML, CSS, Javascript, Github Pages</p>

    <Button
        buttonText={"Visit Website"}
        url={"https://thebentway.github.io/gardinerwebmap/"}
    />
</div>

<div class="splash">
    <img src={gardiner} alt="pollution-splash" />
</div>

</div>

<style>

    img {
        width: 100%;
        height: auto;
    }
</style>
