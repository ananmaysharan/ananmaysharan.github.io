<script>
    import opinion from "$lib/assets/work/splash/opinion-splash.webp";
    import Contents from "$lib/components/Contents.svelte";
    import Overview from "$lib/components/Overview.svelte";

    const sections = [
        { id: "overview", title: "Overview" },
    ];
</script>

<div class="flex flex-col gap-8 md:grid md:grid-cols-[1fr_4fr] md:gap-8">
    <aside class="hidden md:block">
    <Contents {sections} />
    </aside>

    <section class="prose mx-8 my-8 flex flex-col gap-16 md:max-w-200">
        <Overview  
            title="Opinion Generator"
            link="https://ananmaysharan.github.io/opinion-generator/"
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
                A project inspired by some funny tweets that allows people to generate their own NYT Opinion headlines. Allowed me to experiment with using the canvas2html library.
            </p>
        </section>
    </section>
</div>
