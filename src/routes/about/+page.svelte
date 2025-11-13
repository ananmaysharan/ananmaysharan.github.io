<script>
    import Listening from "$lib/components/Listening.svelte";
    import Button from "$lib/components/Button.svelte";
    import profile from "$lib/assets/profile.jpg";
</script>

<div class="text" id="about-text">
    <img src={profile} alt="profile" id="profile" />

    <div>
        <p>
            I'm currently studying <a
                href="https://www.gsd.harvard.edu/design-engineering/"
                >Design Engineering</a
            > at Harvard University, a collaborative degree program between the Graduate
            School of Design and the School of Engineering and Applied Sciences.
        </p>
        <p>
            Previously, I worked at the <a href="https://canurb.org/"
                >Canadian Urban Institute</a
            >
            as a web developer and data analyst, and interned at
            <a href="https://thebentway.ca/">The Bentway</a>
            and
            <a href="https://www.sodatone.com/">Sodatone (Warner Music Group)</a
            >.
        </p>
        <p>
            I graduated from the University of Toronto with a bachelor’s degree
            in Human Geography, Computer Science and GIS in 2023.
        </p>
        <p>
            Some of my interests include: urban environments, design, music,
            fashion, cooking and soccer, particularly in how they interact with
            technology and digital culture.
        </p>
        <p>
            Please reach out to me via email if you’re interested in chatting
            about any of my projects, past experience or to just to say hi!
        </p>

    <Button url={"mailto:ananmay01@gmail.com"} buttonText={"Email"} />
        </div>

</div>

<div class="media-container">
    <Listening />
</div>

<style>
    img {
        width: 300px;
        height: 100%;
    }

    #about-text {
        display: flex;
        flex-direction: row;
        gap: 4rem;
        align-items: center;
        padding: 4rem;
    }
</style>
