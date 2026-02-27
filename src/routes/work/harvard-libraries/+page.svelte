<script>
    import harvard from "$lib/assets/work/harvard.webp";
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
            title="Harvard Libraries"
            link="https://harvard-libraries.vercel.app/"
            img={harvard}
            showInfo={false}
            roles={[]}
            timeline={["2025"]}
            technologies={["React", "React Motion"]}
            skills={["Web Development", "UI Design"]}
        />

        <section id="overview">
            <h2>Overview</h2>

            <p>
                One of my current goals is to study at every library on campus. I found the official website with the library locations uninutitive and difficult to use, so I created a simple web app that displays all Harvard libraries on an interactive map with details about each location. This project helped me improve my React skills and learn about React Motion for smooth animations.
            </p>
        </section>
    </section>
</div>
