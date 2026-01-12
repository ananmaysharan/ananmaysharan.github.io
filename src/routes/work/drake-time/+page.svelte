<script>
    import drake from "$lib/assets/work/drake.webp";
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
            title="Drake Time"
            link="https://drake-time.vercel.app/"
            img={drake}
            showInfo={false}
            roles={[]}
            timeline={["2025"]}
            technologies={["HTML", "CSS", "Javascript"]}
            skills={["Web Development", "UI Design", "Creative Coding"]}
        />

        <section id="overview">
            <h2>Overview</h2>

            <p>
                Drake Time is a web clock that tells the time in the style of Drake's timestamp record titles. It displays the current time and a visual of the Nothing Was The Same (2013) album cover. The background sky color changes depending on the time. Like many ideas, something similar had been done before: drakeweather.com (now inactive) was a website created over 10 years ago, by Tom Galle, Bob Jeusett and Bert. This project is different in that it focuses on the time instead of the weather, but the concept of changing the album cover background is the same, so I wanted to acknowledge their work. See if you can find the easter eggs hidden in the clock using the Location Change and Time Travel features!
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
