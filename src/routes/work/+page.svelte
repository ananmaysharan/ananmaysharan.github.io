<script>
    import Card from "$lib/components/Card.svelte";
    import aa from "$lib/assets/work/aa.webp";
    import gardiner from "$lib/assets/work/gardiner.webp";
    import mms from "$lib/assets/work/mms.webp";
    import memorymend from "$lib/assets/work/memorymend.webp";
    import ocean from "$lib/assets/work/ocean.webp";
    import pollution from "$lib/assets/work/pollution.webp";
    import opiniongenerator from "$lib/assets/work/opiniongenerator.webp";
    import pigeonsplanes from "$lib/assets/work/pigeonsplanes.webp";
    import zinezone from "$lib/assets/work/zinezone.webm";
    import drake from "$lib/assets/work/drake.webp";
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
        description={"Retrofitting a sewing machine to be able to mend clothes with embroidery"}
        year={"2025"}
        tags={["Design", "Development", "Research"]}
        img={memorymend}
        url={"/work/memory-mend"}
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
        title={"Drake Time"}
        description={"Gotta watch the time ’cause it’s flying right by..."}
        year={"2026"}
        tags={["Personal", "Development"]}
        img={drake}
        url={"/work/drake-time"}
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
    <Card
        title={"Opinion Generator"}
        description={"Got a hot take?"}
        year={"2024"}
        tags={["Personal", "Development"]}
        img={opiniongenerator}
        url={"/work/opinion-generator"}
    />
    <Card
        title={"Zine Zone"}
        description={"in collaboration with Callia Silverton"}
        year={"2024"}
        tags={["Personal", "Development"]}
        img={zinezone}
        url={"/work/zine-zone"}
    />
    <Card
        title={"Pigeons and Planes/Complex News"}
        description={"Writing about new music"}
        year={"2021"}
        tags={["Writing"]}
        img={pigeonsplanes}
        url={"/work/pigeons-planes"}
    />
</div>
