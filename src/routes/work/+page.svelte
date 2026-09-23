<script>
    import Card from "$lib/components/Card.svelte";
    import { workView } from "$lib/workViewMode.svelte.js";
    import aa from "$lib/assets/work/aa.webp";
    import gardiner from "$lib/assets/work/gardiner.webp";
    import mms from "$lib/assets/work/mms.webp";
    import ocean from "$lib/assets/work/ocean-records/year_view.webm";
    import oceanGlobal from "$lib/assets/work/ocean-records/global.webm";
    import oceanMonth from "$lib/assets/work/ocean-records/month_view.webm";
    import pollution from "$lib/assets/work/pollution.webp";
    import pigeonsplanes from "$lib/assets/work/pigeonsplanes.webp";
    import zinezone from "$lib/assets/work/zinezone.webm";
    import harvard from "$lib/assets/work/harvard.webp";
    import nutmeg from "$lib/assets/work/splash/nutmeg-splash.webp";
</script>

<main class="w-full px-6 pt-8 sm:pt-12 pb-12 font-serif text-base leading-6 text-text-muted">
<div class="grid {workView.mode === 'grid' ? 'grid-cols-1 gap-4 md:grid-cols-2' : workView.mode === 'feature' ? 'grid-cols-1 gap-16 md:gap-24' : 'grid-cols-1 border-t border-border'}">
    <Card
        accessibleLabel="Doji"
        phoneVideo
        title="Doji"
        description="Doji is a social shopping app for people to express their personal style. I designed and shipped profile and look sharing features, as well as the education flow for the Doji iOS extension."
        tags={[]}
        img={null}
        url={null}
        variant={workView.mode}
    />
    <Card
        title={"Ocean Records"}
        description={"Data visualization project using Google DeepMind's Perch machine learning model to detect clashes between animal and human sounds underwater."}
        year={"2025"}
        tags={["Design", "Development", "Research"]}
        img={ocean}
        videoSources={[oceanGlobal, ocean, oceanMonth]}
        url={"/work/ocean-records"}
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
        title={"Measuring Main Streets"}
        description={"Mapping every main street in Canada"}
        year={"2024"}
        tags={["Design", "Development", "Research"]}
        img={mms}
        url={"/work/measuring-main-streets"}
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
</main>
