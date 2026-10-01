<script>
    import { onMount, onDestroy } from "svelte";
    import Listening from "$lib/components/Listening.svelte";
    import Button from "$lib/components/Button.svelte";
    import HoverCard from "$lib/components/HoverCard.svelte";
    import {
        CopyIcon,
        CheckCircleIcon,
        GithubLogoIcon,
        LinkedinLogoIcon,
        XLogoIcon,
        TiktokLogoIcon,
        YoutubeLogoIcon,
        InstagramLogoIcon,
        SpotifyLogoIcon,
    } from "phosphor-svelte";
    import ArenaLogo from "$lib/components/icons/ArenaLogo.svelte";
    import profile from "$lib/assets/profile.jpg";
    import FaviconLink from "$lib/components/FaviconLink.svelte";
    import dojiIcon from "$lib/assets/favicons/doji.png";
    import torontoIcon from "$lib/assets/favicons/utoronto.ico";
    import { orderedFaviconReveals } from "$lib/actions/orderedFaviconReveals";
    import { animatedParagraph } from "$lib/actions/animatedParagraph";
    import gsdIcon from "$lib/assets/favicons/harvard-gsd.png";
    import harvardIcon from "$lib/assets/favicons/harvard.png";
    import seasIcon from "$lib/assets/favicons/harvard-seas.png";
    import cuiIcon from "$lib/assets/favicons/canadian-urban-institute.png";
    import bentwayIcon from "$lib/assets/favicons/the-bentway.png";
    import wmgIcon from "$lib/assets/favicons/warner-music-group.png";

    const BIRTHDAY = new Date(2001, 3, 1);

    function getAge() {
        const now = Date.now();
        const ageMs = now - BIRTHDAY.getTime();
        const ageYears = ageMs / (365.25 * 24 * 60 * 60 * 1000);
        return ageYears.toFixed(9);
    }

    let age = $state(getAge());
    let copied = $state(false);
    /** @type {ReturnType<typeof setInterval> | undefined} */
    let interval;
    /** @type {ReturnType<typeof setTimeout> | undefined} */
    let copyTimeout;

    function copyEmail() {
        void navigator.clipboard.writeText("ananmay01@gmail.com");
        copied = !copied;
        clearTimeout(copyTimeout);
        if (copied) {
            copyTimeout = setTimeout(() => {
                copied = false;
            }, 2000);
        }
    }

    onMount(() => {
        interval = setInterval(() => {
            age = getAge();
        }, 50);
    });

    onDestroy(() => {
        if (interval) clearInterval(interval);
        clearTimeout(copyTimeout);
    });
</script>

<main class="w-full px-6 pt-4 sm:pt-6 pb-12">
<section use:orderedFaviconReveals class="about-content flex flex-col items-start w-full max-w-120 mx-auto font-serif">
    <img
        src={profile}
        alt="profile"
        id="profile"
        class="w-75 h-full self-center lg:self-start mb-6"
    />

    <p>
        Hi! My name is Ananmay Sharan.
    </p>

    <div class="biography">
        <p use:animatedParagraph>
            I'm currently studying
            <HoverCard>
                {#snippet trigger()}<span>Design Engineering</span>{/snippet}
                {#snippet content()}
                    <p>
                        The program is built around a core of engineering and
                        design methods that involve gaining understanding of
                        complex challenges, imagining novel solutions, and
                        building and assessing prototypes. <a
                            href="https://www.gsd.harvard.edu/design-engineering/"
                            >See more here.</a
                        >
                    </p>
                {/snippet}
            </HoverCard>
            at <FaviconLink href="https://www.harvard.edu/" icon={harvardIcon} label="Harvard University" suffix="," iconScale={1.3} bordered={false} /> a collaborative degree program between the
            <FaviconLink href="https://www.gsd.harvard.edu/" icon={gsdIcon} label="Graduate School of Design" bordered={false} /> and the
            <FaviconLink href="https://seas.harvard.edu/" icon={seasIcon} label="School of Engineering and Applied Sciences" suffix="." bordered={false} />
            <HoverCard>
                {#snippet trigger()}
                    <span class="coursework-link">See the coursework I've completed.</span>
                {/snippet}
                {#snippet content()}
                    <p>Graduate School of Design</p>
                    <ul>
                        <li>Design Engineering Studio I</li>
                        <li>Design Engineering Studio II</li>
                        <li>Integrative Frameworks: Product Management</li>
                        <li>Integrative Frameworks: Product Design</li>
                        <li>
                            Digital Production: Design, Materials, Fabrication
                        </li>
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
        <p use:animatedParagraph>
            During the summer of 2026, I worked on design at
            <FaviconLink href="https://doji.com/" icon={dojiIcon} label="Doji" /> in New York City.
        </p>
        <p>
            I'm <span class="tabular-nums">{age}</span>{' '}years old and
            currently live in Cambridge, MA. Previously, I lived in
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

        <p use:animatedParagraph>
            I led technical development at the
            <FaviconLink href="https://canurb.org/" icon={cuiIcon} label="Canadian Urban Institute" />
            as a web developer and designer, and interned at
            <FaviconLink href="https://thebentway.ca/" icon={bentwayIcon} label="The Bentway" bordered={false} />
            and
            <FaviconLink href="https://www.wmg.com/news/warner-music-group-acquires-sodatone-33396" icon={wmgIcon} label="Warner Music Group/Sodatone" suffix="." bordered={false} /> I graduated from the
            <FaviconLink href="https://www.utoronto.ca/" icon={torontoIcon} label="University of Toronto" /> with a bachelor's
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
                <Button
                    url={"mailto:ananmay01@gmail.com"}
                    buttonText={"Email"}
                />
                <button
                    type="button"
                    class="copy-button inline-flex justify-center items-center w-8 h-8 border border-transparent rounded-lg bg-transparent text-[#00000099] cursor-pointer p-0"
                    onclick={copyEmail}
                    aria-label={copied ? "Email copied" : "Copy email address"}
                >
                    <span class="copy-icon-stack" aria-hidden="true">
                        <span class="copy-state" class:shown={!copied}>
                            <CopyIcon size={16} weight="bold" />
                        </span>
                        <span class="copy-state" class:shown={copied}>
                            <CheckCircleIcon size={32} weight="bold" />
                        </span>
                    </span>
                    <span class="sr-only" aria-live="polite">
                        {copied ? "Email copied" : "Copy email address"}
                    </span>
                </button>
            </div>

            <p>Alternatively, find me on these platforms:</p>

            <div class="flex gap-2">
                <a
                    href="https://www.linkedin.com/in/ananmay-sharan/"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex text-[#00000099] no-underline hover:text-[#222]"
                    aria-label="LinkedIn"
                >
                    <LinkedinLogoIcon size={20} weight="bold" />
                </a>
                <a
                    href="https://github.com/ananmaysharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex text-[#00000099] no-underline hover:text-[#222]"
                    aria-label="Github"
                >
                    <GithubLogoIcon size={20} weight="bold" />
                </a>
                <a
                    href="https://x.com/ananmaysharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex text-[#00000099] no-underline hover:text-[#222]"
                    aria-label="Twitter"
                >
                    <XLogoIcon size={20} weight="bold" />
                </a>
                <a
                    href="https://www.are.na/ananmay-sharan"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex text-[#00000099] no-underline hover:text-[#222]"
                    aria-label="Are.na"
                >
                    <ArenaLogo size={20} />
                </a>
                <a
                    href="https://www.youtube.com/@ananmay"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex text-[#00000099] no-underline hover:text-[#222]"
                    aria-label="YouTube"
                >
                    <YoutubeLogoIcon size={20} weight="bold" />
                </a>
                <a
                    href="https://www.tiktok.com/@ananmay_"
                    target="_blank"
                    rel="noopener noreferrer"
                    class="inline-flex text-[#00000099] no-underline hover:text-[#222]"
                    aria-label="TikTok"
                >
                    <TiktokLogoIcon size={20} weight="bold" />
                </a>
                <a
                    href="https://instagram.com/ananmaysharan"
                    class="inline-flex text-[#00000099] no-underline hover:text-[#222]"
                    aria-label="Instagram"
                >
                    <InstagramLogoIcon size={20} weight="bold" />
                </a>
                <a
                    href="https://open.spotify.com/user/ananmaysharan"
                    class="inline-flex text-[#00000099] no-underline hover:text-[#222]"
                    aria-label="Spotify"
                >
                    <SpotifyLogoIcon size={20} weight="bold" />
                </a>
            </div>
        </div>
    </div>
</section>
</main>

<div class="fixed bottom-4 right-4">
    <Listening />
</div>

<style>
    .about-content {
        font-size: var(--body-font-size);
        line-height: var(--body-line-height);
        color: var(--body-color);
        gap: var(--body-paragraph-space);
    }

    .about-content > p,
    .biography p {
        color: var(--body-color);
    }

    .coursework-link,
    .coursework-link :global([data-animated-word]) {
        text-decoration: underline;
    }

    .about-content :global(.hover-card-trigger) {
        text-decoration: none;
    }

    .about-content :global(.hover-card-trigger:hover),
    .about-content :global(.hover-card-trigger:hover [data-animated-word]) {
        text-decoration: underline;
    }

    .biography > p + p {
        margin-top: var(--body-paragraph-space);
    }

    .about-content p a {
        text-decoration: none;
    }

    .about-content p a:hover {
        color: var(--color-primary);
        text-decoration: underline;
    }

    .copy-button {
        transition:
            transform 0.15s ease-out,
            background 0.15s ease-out,
            border-color 0.15s ease-out;
    }

    .copy-button:hover {
        background: linear-gradient(#fff, #eee);
        border-color: #eee;
        box-shadow:
            inset 0 0 1px 1px #ffffff24,
            0 0 0 1px #00000014,
            0 2px 2px #0000000a,
            0 0 0 1px #eee;
    }

    .copy-button:active {
        transform: scale(0.97);
    }

    .copy-icon-stack {
        position: relative;
        width: 16px;
        height: 16px;
    }

    .copy-state {
        position: absolute;
        inset: 0;
        display: flex;
        align-items: center;
        justify-content: center;
        opacity: 0;
        filter: blur(2px);
        transform: scale(0.9);
        transition:
            opacity 0.15s ease-out,
            filter 0.15s ease-out,
            transform 0.15s ease-out;
    }

    .copy-state.shown {
        opacity: 1;
        filter: blur(0);
        transform: scale(1);
    }

    @media (prefers-reduced-motion: reduce) {
        .copy-button,
        .copy-state {
            transition-property: opacity, filter, background, border-color;
        }
    }
</style>
