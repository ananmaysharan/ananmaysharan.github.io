<script>
    import Card from "$lib/components/Card.svelte";
    import aa from "$lib/assets/work/aa.webp";
    import gardiner from "$lib/assets/work/gardiner.webp";
    import mms from "$lib/assets/work/mms.webp";
    import memorymend from "$lib/assets/work/memorymend.webp";
    import ocean from "$lib/assets/work/ocean.webp";
    import pollution from "$lib/assets/work/pollution.webp";
</script>

<div class="text">
    <p>Please find a selection of work below.</p>
</div>

<div class="grid">
    <Card
        title={"Ocean Records"}
        description={"Using machine learning to listen to the ocean"}
        year={"2025"}
        tags={["Design", "Development", "Research"]}
        img={ocean}
        url={"/work/ocean-records"}
    />
    <Card
        title={"Memory Mend"}
        description={"Democratizing machine embroidery and infusing memory into textile repair"}
        year={"2025"}
        tags={["Design", "Development", "Research"]}
        img={memorymend}
        url={"/work"}
    />
    <Card
        title={"Measuring Main Streets"}
        description={"Mapping every main street in Canada"}
        year={"2024"}
        tags={["Design", "Development", "Research"]}
        img={mms}
        url={"/work/measuring-main-streets"}
    />
    <Card
        title={"Chemical Valley Pollution Map"}
        description={"Visualizing 10 years of pollution events in Ontario's Chemical Valley"}
        year={"2023"}
        tags={["Mapping", "Development"]}
        img={pollution}
        url={"/work/chemical-valley-pollution-map"}
    />
    <Card
        title={"Under Gardiner Archival Map"}
        description={"Helping archive the history of Toronto's Gardiner Expressway"}
        year={"2023"}
        tags={["Mapping", "Development"]}
        img={gardiner}
        url={"/work/under-gardiner-archival-map"}
    />
    <Card
        title={"Adaptive Artifacts"}
        description={"Made some weather charts"}
        year={"2023"}
        tags={["Data Visualization", "Development"]}
        img={aa}
        url={"/work/adaptive-artifacts"}
    />
    <!-- <Card title={'Pigeons and Planes'} year={'2021'} tags={['Writing']} img={pigeonsplanes} url={'/work/pigeons-planes'}/> -->
</div>
