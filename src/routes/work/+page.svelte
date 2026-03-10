<script>
    import Card from "$lib/components/Card.svelte";
    import { SquaresFourIcon, RowsIcon } from "phosphor-svelte";
    import { workView, setViewMode } from "$lib/workViewMode.svelte.js";
    import aa from "$lib/assets/work/aa.webp";
    import gardiner from "$lib/assets/work/gardiner.webp";
    import mms from "$lib/assets/work/mms.webp";
    import memorymend from "$lib/assets/work/memorymend.webp";
    import ocean from "$lib/assets/work/ocean.webp";
    import pollution from "$lib/assets/work/pollution.webp";
    import opiniongenerator from "$lib/assets/work/splash/opinion-splash.webp";
    import pigeonsplanes from "$lib/assets/work/pigeonsplanes.webp";
    import zinezone from "$lib/assets/work/zinezone.webm";
    import drake from "$lib/assets/work/drake.webp";
    import harvard from "$lib/assets/work/harvard.webp";
    import nutmeg from "$lib/assets/work/splash/nutmeg-splash.webp";
</script>

<div class="m-4 flex flex-row items-center justify-between">
    <p class="m-0">Please find a selection of work below.</p>
    <div class="flex flex-row border border-border">
        <button
            class="p-2 flex items-center justify-center cursor-pointer border-none bg-white text-text-secondary hover:bg-gray-50"
            onclick={() => setViewMode('grid')}
            aria-label="Grid view"
        >
            <SquaresFourIcon size={18} weight={workView.mode === 'grid' ? 'fill' : 'bold'} />
        </button>
        <button
            class="p-2 flex items-center justify-center cursor-pointer border-0 border-l border-solid border-border bg-white text-text-secondary hover:bg-gray-50"
            onclick={() => setViewMode('list')}
            aria-label="List view"
        >
            <RowsIcon size={18} weight={workView.mode === 'list' ? 'fill' : 'bold'} />
        </button>
    </div>
</div>

<div class="grid m-4 {workView.mode === 'grid' ? 'grid-cols-1 gap-4 md:grid-cols-2' : 'grid-cols-1 border-t border-border'}">
    <Card
        title={"Ocean Records"}
        description={"Using machine learning to listen to the ocean"}
        year={"2025"}
        tags={["Design", "Development", "Research"]}
        img={ocean}
        url={"/work/ocean-records"}
        variant={workView.mode}
    />
    <Card
        title={"Memory Mend"}
        description={"Retrofitting a sewing machine to mend clothes with embroidery"}
        year={"2025"}
        tags={["Design", "Development", "Research"]}
        img={memorymend}
        url={"/work/memory-mend"}
        variant={workView.mode}
    />
        <Card
        title={"Measuring Main Streets"}
        description={"Mapping every main street in Canada"}
        year={"2024"}
        tags={["Design", "Development", "Research"]}
        img={mms}
        url={"/work/measuring-main-streets"}
        variant={workView.mode}
    />
            <Card
        title={"Harvard Libraries"}
        description={"Campus library app"}
        year={"2026"}
        tags={["Personal", "Development"]}
        img={harvard}
        url={"/work/harvard-libraries"}
        variant={workView.mode}
    />
        <Card
        title={"Chemical Valley Pollution Map"}
        description={"Visualizing 10 years of pollution in Ontario's Chemical Valley"}
        year={"2023"}
        tags={["Mapping", "Development"]}
        img={pollution}
        url={"/work/chemical-valley-pollution-map"}
        variant={workView.mode}
    />
    <Card
        title={"Drake Time"}
        description={"Gotta watch the time ’cause it’s flying right by..."}
        year={"2026"}
        tags={["Personal", "Development"]}
        img={drake}
        url={"/work/drake-time"}
        variant={workView.mode}
    />
    <!-- <Card
        title={"Nutmeg Soccer"}
        description={"Website redesign for a community soccer organization"}
        year={"2025"}
        tags={["Development"]}
        img={nutmeg}
        url={"/work/nutmeg-soccer"}
    /> -->
    <!-- <Card
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
    /> -->
    <Card
        title={"Opinion Generator"}
        description={"Got a hot take?"}
        year={"2024"}
        tags={["Personal", "Development"]}
        img={opiniongenerator}
        url={"/work/opinion-generator"}
        variant={workView.mode}
    />
    <Card
        title={"Zine Zone"}
        description={"in collaboration with Callia Silverton"}
        year={"2024"}
        tags={["Personal", "Development"]}
        img={zinezone}
        url={"/work/zine-zone"}
        variant={workView.mode}
    />
    <!-- <Card
        title={"Pigeons and Planes/Complex News"}
        description={"Writing about new music"}
        year={"2021"}
        tags={["Writing"]}
        img={pigeonsplanes}
        url={"/work/pigeons-planes"}
    /> -->
</div>
