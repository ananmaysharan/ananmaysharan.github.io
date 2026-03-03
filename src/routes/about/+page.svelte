<script>
    import { onMount, onDestroy } from "svelte";
    import Listening from "$lib/components/Listening.svelte";
    import Button from "$lib/components/Button.svelte";
    import HoverCard from "$lib/components/HoverCard.svelte";
    import { CopyIcon, GithubLogoIcon, LinkedinLogoIcon, XLogoIcon, TiktokLogoIcon, YoutubeLogoIcon, InstagramLogoIcon, SpotifyLogoIcon } from "phosphor-svelte";
    import ArenaLogo from "$lib/components/icons/ArenaLogo.svelte";
    import profile from "$lib/assets/profile.jpg";

    const BIRTHDAY = new Date(2001, 3, 1);

    function getAge() {
        const now = Date.now();
        const ageMs = now - BIRTHDAY.getTime();
        const ageYears = ageMs / (365.25 * 24 * 60 * 60 * 1000);
        return ageYears.toFixed(9);
    }

    let age = $state(getAge());
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

<div class="prose flex flex-col gap-16 items-start max-w-[600px] mx-auto my-16 px-6">
    <p>
        Hi! My name is Ananmay Sharan. I'm a design engineer working
        across software and hardware.
    </p>

    <img src={profile} alt="profile" id="profile" class="w-[300px] h-full self-center" />

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
                {#snippet trigger()}
                    <span>See the coursework I've completed.</span>
                {/snippet}
                {#snippet content()}
                    <p>Graduate School of Design</p>
                    <ul>
                        <li>Design Engineering Studio I</li>
                        <li>Design Engineering Studio II</li>
                        <li>Integrative Frameworks: Product Management</li>
                        <li>Integrative Frameworks: Product Design</li>
                        <li>Digital Production: Design, Materials, Fabrication</li>
                    </ul>
                    <p>School of Engineering & Applied Sciences</p>
                    <ul>
                        <li>Introduction to Electrical Engineering</li>
                        <li>Design, Technology, and Social Impact</li>
                    </ul>
                    <p>Harvard Divinity School</p>
                    <ul>
                        <li>Spirituality and Technology</li>
                    </ul>
                {/snippet}
            </HoverCard>
        </p>
        <p></p>
        <p>
            I'm <span class="inline-block w-[11.5ch]">{age}</span> years old and currently live in
            Cambridge, MA. Previously, I lived in
            <HoverCard>
                {#snippet trigger()}<span>Toronto,</span>{/snippet}
                {#snippet content()}2019 to 2025{/snippet}
            </HoverCard>
            <HoverCard>
                {#snippet trigger()}<span>Washington DC,</span>{/snippet}
                {#snippet content()}2017 to 2019{/snippet}
            </HoverCard>
            <HoverCard>
                {#snippet trigger()}<span>Rome</span>{/snippet}
                {#snippet content()}2013 to 2016{/snippet}
            </HoverCard> and <HoverCard>
                {#snippet trigger()}<span>New Delhi.</span>{/snippet}
                {#snippet content()}2004 to 2012, and part of 2016{/snippet}
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
            >. I graduated from the University of Toronto with a bachelor's
            degree in Human Geography, Computer Science and GIS in 2023.
        </p>
        <p>
            Some of my interests include: urban environments, design, music,
            fashion, cooking and soccer, particularly in how they interact with
            technology and digital culture.
        </p>
        <p>
            Please reach out to me via email if you're interested in chatting
            about any of my projects, past experience or to just to say hi!
        </p>

        <div class="mt-8 flex flex-col gap-4">
            <div class="flex gap-2">
                <Button url={"mailto:ananmay01@gmail.com"} buttonText={"Email"} />
                <button
                    class="inline-flex justify-center items-center w-8 h-8 border border-transparent rounded-lg bg-transparent text-[#00000099] cursor-pointer p-0 transition-all duration-200 hover:bg-[linear-gradient(#fff,#eee)] hover:border-[#eee] active:scale-[0.98]"
                    onclick={() => navigator.clipboard.writeText("ananmay01@gmail.com")}
                >
                    <CopyIcon size={16} weight="bold" />
                </button>
            </div>

            <p>Alternatively, find me on these platforms:</p>

            <div class="flex gap-2">
            <a href="https://www.linkedin.com/in/ananmay-sharan/" target="_blank" rel="noopener noreferrer" class="inline-flex text-[#00000099] no-underline hover:text-[#222]" aria-label="LinkedIn">
                <LinkedinLogoIcon size={20} weight="bold" />
            </a>
            <a href="https://github.com/ananmaysharan" target="_blank" rel="noopener noreferrer" class="inline-flex text-[#00000099] no-underline hover:text-[#222]" aria-label="Github">
                <GithubLogoIcon size={20} weight="bold" />
            </a>
            <a href="https://x.com/ananmaysharan" target="_blank" rel="noopener noreferrer" class="inline-flex text-[#00000099] no-underline hover:text-[#222]" aria-label="Twitter">
                <XLogoIcon size={20} weight="bold" />
            </a>
            <a href="https://www.are.na/ananmay-sharan" target="_blank" rel="noopener noreferrer" class="inline-flex text-[#00000099] no-underline hover:text-[#222]" aria-label="Are.na">
                <ArenaLogo size={20} />
            </a>
            <a href="https://www.youtube.com/@ananmay" target="_blank" rel="noopener noreferrer" class="inline-flex text-[#00000099] no-underline hover:text-[#222]" aria-label="YouTube">
                <YoutubeLogoIcon size={20} weight="bold" />
            </a>
            <a href="https://www.tiktok.com/@ananmay_" target="_blank" rel="noopener noreferrer" class="inline-flex text-[#00000099] no-underline hover:text-[#222]" aria-label="TikTok">
                <TiktokLogoIcon size={20} weight="bold" />
            </a>
            <a href="https://instagram.com/ananmaysharan" class="inline-flex text-[#00000099] no-underline hover:text-[#222]" aria-label="Instagram">
                <InstagramLogoIcon size={20} weight="bold" />
            </a>
            <a href="https://open.spotify.com/user/ananmaysharan" class="inline-flex text-[#00000099] no-underline hover:text-[#222]" aria-label="Spotify">
                <SpotifyLogoIcon size={20} weight="bold" />
            </a>
            </div>
        </div>
    </div>
</div>

<div class="fixed bottom-4 right-4">
    <Listening />
</div>
