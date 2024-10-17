<script>
    import Button from "$lib/components/Button.svelte";
    import pollution from "$lib/assets/work/splash/pollution-splash.webp";
</script>


<div class='splash-container'>

<div class="text project-description">
    <h1>Chemical Valley Pollution Notification Map</h1>

    <h2>2023</h2>

    <h3>Description</h3>

    <p>
        I worked as a research assistant with the Technoscience Research Unit at Environmental Data Justice Lab within the University of Toronto to help build an interacive map of notifications about pollution incidents in Canada's Chemical Valley that were collected by Aamjiwnaang community members from 2013-2023.

    </p>

    <p>
        The map is connected to a report co-created between the Yellowhead Institute and the Technoscience Research Unit, titled "Data Colonialism in Canada’s Chemical Valley: Aamjiwnaang First Nation and the Failure of the Pollution Notification System".
    </p>

    <p>
        I worked to help clean and prepare the raw data, and built several features including the ability to filter the notifications by Season, Company and Pollution Type. I also built an interactive time-slider to help further filter notifications. Finally, I integrated the report's design identity into the web map and helped them host it on Github Pages.
    </p>

    <h3>Technologies</h3>

    <p>Mapbox, HTML, CSS, Javascript, Github Pages</p>

    <Button
        buttonText={"Visit Website"}
        url={"https://www.landandrefinery.org/projects/pollution-notification-map"}
    />
</div>

<div class="splash">
    <img src={pollution} alt="pollution-splash" />
</div>

</div>

<style>

    img {
        width: 100%;
        height: auto;
    }
</style>
