<script>
    import Card from "$lib/components/Card.svelte";
    import opiniongenerator from "$lib/assets/work/opiniongenerator.webp";
    import pigeonsplanes from "$lib/assets/work/pigeonsplanes.webp";
    import zinezone from "$lib/assets/work/zinezone.webm";
</script>

<div class="text">
    <p>Works in progress, demos and other fun stuff.</p>
</div>

<div class="grid">
    <Card
        title={"Opinion Generator"}
        description={"Got a hot take?"}
        year={"2024"}
        tags={["Personal", "Development"]}
        img={opiniongenerator}
        url={"/play/opinion-generator"}
    />
    <Card
        title={"Zine Zone"}
        description={"in collaboration with Callia Silverton"}
        year={"2024"}
        tags={["Personal", "Development"]}
        img={zinezone}
        url={"/play/zine-zone"}
    />
    <Card
        title={"Pigeons and Planes/Complex News"}
        description={"Writing about new music"}
        year={"2021"}
        tags={["Writing"]}
        img={pigeonsplanes}
        url={"/play/pigeons-planes"}
    />
</div>
