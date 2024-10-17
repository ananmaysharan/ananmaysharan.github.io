<script>
    import Button from "$lib/components/Button.svelte";
    import mms from "$lib/assets/work/splash/mms-splash.webp";
</script>


<div class='splash-container'>

<div class="text project-description">
    <h1>Measuring Main Streets</h1>

    <h2>2024 — Present</h2>

    <h3>Description</h3>

    <p>
        In my role at the Canadian Urban Institute, I was responsible for the
        development of the Measuring Main Streets platform, a part of the
        Research Knowledge Initiative program from Housing, Infrastructure and
        Communities Canada. 
    </p>

    <p>I worked to architect the platform's structure, as
        well as decide on the core technologies used to develop and host the
        platform.</p>

    <p>
        Working with the wider team, I helped develop an interactive map of
        every main street across Canada, as well a set of interactive data
        visuzaliation tools, case studies and reports. I also worked with a
        graphic designer to develop a visual identity for the platform.
    </p>

    <h3>Technologies</h3>

    <p>SvelteKit, Javascript, Mapbox, Supabase, Azure</p>

    <Button
        buttonText={"Visit Website"}
        url={"http://measuringmainstreets.ca"}
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
