<script>
    import Button from "$lib/components/Button.svelte";
    import adaptive from "$lib/assets/work/splash/adaptive-splash.webp";
</script>


<div class='splash-container'>

<div class="text project-description">
    <h1>Adaptive Artifacts</h1>

    <h2>2023</h2>

    <h3>Description</h3>

    <p>
        As part of my internship with The Bentway, I worked on an interactive data dashboard that displays data collected by 4 weather stations as part of Adaptive Artifacts, an installation at The Bentway. It is a research project investigating the way computers, natural systems and fabrication processes can work together to create welcoming and inspiring spaces that are highly adaptive, responsive and resilient.    
    </p>

    <p> Note: The Render instance takes a little time to spin up on first load, so open the project in a new tab or browse my other projects!    </p>

    <h3>Technologies</h3>

    <p>Plotly Dash, Python (Pandas), Render</p>

    <Button
        buttonText={"Visit Website"}
        url={"https://adaptive-artifacts.onrender.com/"}
    />
</div>

<div class="splash">
    <img src={adaptive} alt="adaptive-splash" />
</div>

</div>

<style>

    img {
        width: 100%;
        height: auto;
    }
</style>
