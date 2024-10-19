<script>
    import Card from "$lib/components/Card.svelte";
    import aa from '$lib/assets/work/aa.webp';
    import gardiner from '$lib/assets/work/gardiner.webp';
    import mms from '$lib/assets/work/mms.webp';
    import opiniongenerator from '$lib/assets/work/opiniongenerator.webp';
    import pigeonsplanes from '$lib/assets/work/pigeonsplanes.webp';
    import pollution from '$lib/assets/work/pollution.webp';


</script>

<div class='text'>

<p>Please find a selection of work below.</p>

</div>

<div class='grid'>

    <Card title={'Measuring Main Streets'} year={'2024'} tags={['Mapping', 'Web Development', 'Design']} img={mms} url={'/work/measuring-main-streets'}/>
    <Card title={'Chemical Valley Pollution Map'} year={'2023'} tags={['Mapping', 'Web Development']} img={pollution} url={'/work/chemical-valley-pollution-map'}/>
    <Card title={'Under Gardiner Archival Map'} year={'2023'} tags={['Mapping', 'Web Development']} img={gardiner} url={'/work/under-gardiner-archival-map'}/>
    <Card title={'Opinion Generator'} year={'2024'} tags={['Personal', 'Web Development']} img={opiniongenerator} url={'/work/opinion-generator'}/>
    <Card title={'Adaptive Artifacts'} year={'2023'} tags={['Data Visualization', 'Web Development']} img={aa} url={'/work/adaptive-artifacts'}/>
    <Card title={'Pigeons and Planes'} year={'2021'} tags={['Writing']} img={pigeonsplanes} url={'/work/pigeons-planes'}/>


</div>