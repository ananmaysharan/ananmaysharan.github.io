<script>
    import { onMount, onDestroy } from "svelte";
    import Listening from "$lib/components/Listening.svelte";
    import Button from "$lib/components/Button.svelte";
    import HoverCard from "$lib/components/HoverCard.svelte";
    import { Copy, ArrowRight } from "phosphor-svelte";
    import profile from "$lib/assets/profile.jpg";

    const BIRTHDAY = new Date(2001, 3, 1); // April 1, 2001

    function getAge() {
        const now = Date.now();
        const ageMs = now - BIRTHDAY.getTime();
        const ageYears = ageMs / (365.25 * 24 * 60 * 60 * 1000);
        return ageYears.toFixed(9);
    }

    let age = getAge();
    /** @type {ReturnType<typeof setInterval> | undefined} */
    let interval;

    onMount(() => {
        interval = setInterval(() => {
            age = getAge();
        }, 50);
    });

    onDestroy(() => {
        if (interval) clearInterval(interval);
    });
</script>

<div class="text" id="about-text">
    <p>
        Hi! My name is Ananmay Sharan. I'm a designer who loves to code, working
        across software and hardware.
    </p>

    <img src={profile} alt="profile" id="profile" />

    <div>
        <p>
            I'm currently studying <a
                href="https://www.gsd.harvard.edu/design-engineering/"
                >Design Engineering</a
            >
            at Harvard University, a collaborative degree program between the Graduate
            School of Design and the School of Engineering and Applied Sciences.
            The program is built around a core of engineering and design methods
            that involve gaining understanding of complex challenges, imagining novel
            solutions, and building and assessing prototypes.
            <HoverCard>
                <span slot="trigger" class="coursework"
                    >See the coursework I've completed.</span
                >
                <svelte:fragment slot="content">
                    <p class="coursework-heading">Graduate School of Design</p>
                    <ul class="coursework-list">
                        <li>Design Engineering Studio I</li>
                        <li>Design Engineering Studio II</li>

                        <li>Integrative Frameworks: Product Management</li>
                        <li>Integrative Frameworks: Product Design</li>
                        <li>
                            Digital Production: Design, Materials, Fabrication
                        </li>
                    </ul>
                    <p class="coursework-heading">
                        School of Engineering & Applied Sciences
                    </p>
                    <ul class="coursework-list">
                        <li>Introduction to Electrical Engineering</li>
                        <li>Design, Technology, and Social Impact</li>
                    </ul>
                    <p class="coursework-heading">Harvard Divinity School</p>
                    <ul class="coursework-list">
                        <li>Spirituality and Technology</li>
                    </ul>
                </svelte:fragment>
            </HoverCard>
        </p>
        <p></p>
        <p>
            I'm <span class="age">{age}</span> years old and currently live in
            Cambridge, MA. Previously, I lived in
            <HoverCard
                ><span slot="trigger" class="location">Toronto,</span>
                <svelte:fragment slot="content">2019 to 2025</svelte:fragment>
            </HoverCard>
            <HoverCard
                ><span slot="trigger" class="location">Washington DC,</span>
                <svelte:fragment slot="content">2017 to 2019</svelte:fragment>
            </HoverCard>
            <HoverCard
                ><span slot="trigger" class="location">Rome</span>
                <svelte:fragment slot="content">2013 to 2016</svelte:fragment>
            </HoverCard> and <HoverCard
                ><span slot="trigger" class="location">New Delhi.</span>
                <svelte:fragment slot="content"
                    >2004 to 2012, and part of 2016
                </svelte:fragment>
            </HoverCard>
        </p>

        <p>
            Before graduate school, I worked at the <a
                href="https://canurb.org/">Canadian Urban Institute</a
            >
            as a web developer and data analyst, and interned at
            <a href="https://thebentway.ca/">The Bentway</a>
            and
            <a
                href="https://www.wmg.com/news/warner-music-group-acquires-sodatone-33396"
                >Sodatone (Warner Music Group)</a
            >. I graduated from the University of Toronto with a bachelor’s
            degree in Human Geography, Computer Science and GIS in 2023.
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

        <div class="buttons">
            <Button url={"mailto:ananmay01@gmail.com"} buttonText={"Email"} />
            <button
                class="copy-btn"
                on:click={() =>
                    navigator.clipboard.writeText("ananmay01@gmail.com")}
            >
                <span class="copy-icon">
                    <Copy size={16} weight="bold" />
                </span>
            </button>
        </div>
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

    .buttons {
        margin-top: 2rem;
        display: flex;
        gap: 0.5rem;
    }

    #profile {
        align-self: center;
    }

    .copy-btn {
        display: inline-flex;
        justify-content: center;
        align-items: center;
        width: 33px;
        height: 33px;
        border: none;
        border-radius: 8px;
        background: transparent;
        color: #00000099;
        cursor: pointer;
        transition: background 0.2s;
        padding: 0;
    }

    @media (hover: hover) {
        .copy-btn:hover {
            background: #eee;
            border: 1px solid #ddd;
        }
    }

    .copy-icon {
        display: inline-flex;
        transition: transform 0.15s ease;
    }

    .copy-btn:active .copy-icon {
        transform: scale(0.9);
    }

    .age {
        display: inline-block;
        width: 11.5ch;
    }

    /* .coursework-heading {
        font-weight: 600;
        margin: 0 0 0.5rem 0;
        font-size: 0.9rem;
    }

    .coursework-list {
        margin: 0;
        padding-left: 1.2rem;
        font-size: 0.85rem;
        line-height: 1.6;
    } */

    #about-text {
        display: flex;
        flex-direction: column;
        gap: 4rem;
        align-items: start;
        max-width: 600px;
        margin: 4rem auto;
        padding: 0 1.5rem;
    }
</style>
