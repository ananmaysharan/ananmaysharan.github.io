<script>
    import opinion from "#lib/assets/work/splash/opinion-splash.webp";
    import Overview from "#lib/components/Overview.svelte";

</script>

<div class="flex flex-col items-center px-8">
    <section class="prose w-full my-8 flex flex-col gap-16 md:max-w-200">
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
