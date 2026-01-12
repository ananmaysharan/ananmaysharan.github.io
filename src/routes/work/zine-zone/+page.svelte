<script>
    import opinion from "$lib/assets/work/zinezone.webm";
    import contents from "$lib/assets/work/zinezone.webp";
    import Contents from "$lib/components/Contents.svelte";
    import Overview from "$lib/components/Overview.svelte";

    const sections = [
        { id: "overview", title: "Overview" },
    ];
</script>

<div class="splash-container">
    <aside>
    <Contents {sections} />
    </aside>

    <section class="splash-content">
        <Overview  
            title="Zine Zone"
            link="https://archive.org/details/zinezone_internetarchive/"
            img={opinion}
            showInfo={false}
            roles={[]}
            timeline={["2024"]}
            technologies={["HTML", "CSS", "Javascript", "Github Pages"]}
            skills={["Web Development", "UI Design", "Creative Coding"]}
        />

        <section id="overview">
            <h2>Overview</h2>

            <p>
            I collaborated with my friend and artist <a href="https://www.calliasilvertonfineart.ca/" target="_blank" rel="noopener noreferrer">Callia Silverton</a> to create this zine of
            iPhone photography taken between 2021-2023. The purpose of the project
            was to try and document life in Toronto in our last two years of university. The
            printed zine contained a total of 85 images, a selection of which are
            highlighted below.            
            </p>
            <img src={contents} alt="zinezone-contents" />
        </section>
    </section>
</div>

<style>
    img {
        width: 100%;
        height: auto;
    }
</style>
