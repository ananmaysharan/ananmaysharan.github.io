<script>
    import opinion from "$lib/assets/work/splash/opinion-splash.webp";
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
            title="Opinion Generator"
            link="https://ananmaysharan.github.io/opinion-generator/"
            img={opinion}
            showInfo={false}
            roles={[]}
            timeline="2024"
            technologies={["HTML", "CSS", "Javascript", "Github Pages"]}
            skills={["Web Development", "UI Design", "Creative Coding"]}
        />

        <section id="overview">
            <h2>Overview</h2>

            <p>
                A project inspired by some funny tweets that allows people to generate their own NYT Opinion headlines. Allowed me to experiment with using the canvas2html library.
            </p>
        </section>
    </section>
</div>

<style>
    img {
        width: 100%;
        height: auto;
    }
</style>
