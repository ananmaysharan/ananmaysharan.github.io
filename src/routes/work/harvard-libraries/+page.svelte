<script>
    import harvard from "$lib/assets/work/harvard.webp";
    import Overview from "$lib/components/Overview.svelte";

</script>

<div class="flex flex-col items-center px-8">
    <section class="prose w-full my-8 flex flex-col gap-16 md:max-w-200">
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
