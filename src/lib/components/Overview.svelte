<script lang="ts">
    import Button from "./Button.svelte";
    import { GithubLogoIcon } from "phosphor-svelte";
    interface Props {
        title?: string;
        img: any;
        roles?: any;
        timeline?: any;
        technologies?: any;
        skills?: any;
        link?: string;
        showGithub?: boolean;
        githubLink?: string;
        showInfo?: boolean;
        buttonVariant?: 'default' | 'grey' | 'yellow' | 'blue' | 'orange' | 'green';
    }

    let {
        title = "",
        img,
        roles = [],
        timeline = [],
        technologies = [],
        skills = [],
        link = "",
        showGithub = false,
        githubLink = "",
        showInfo = true,
        buttonVariant = "default"
    }: Props = $props();

    let isVideo = $derived(img && (img.endsWith('.webm') || img.endsWith('.mp4') || img.endsWith('.mov')));
</script>

<div>
    <div class="flex items-center justify-between">
        <h1 class="m-0!">{title}</h1>
        <div class="flex gap-4 items-center">
        {#if showGithub}
            <Button
                buttonText={"View Github"}
                url={githubLink}
                variant="grey"
            >
                <GithubLogoIcon size={16} weight="bold"/>
            </Button>
        {/if}
        <Button
            buttonText={"Visit Website"}
            url={link}
            variant={buttonVariant}
        />
        </div>
    </div>

    {#if isVideo}
        <video src={img} class="w-full h-auto border border-border mt-8" autoplay loop muted playsinline></video>
    {:else}
        <img src={img} alt="img" class="w-full h-auto border border-border mt-8" />
    {/if}

    {#if showInfo}
    <div class="not-prose font-sans grid grid-cols-2 justify-between text-text-secondary md:flex md:gap-16 md:justify-between">
        <div>
            <h4 class="mb-2">Role</h4>
            {#each roles as role}
                <li>
                    <ul class="list-none p-0 m-0">
                        {role}
                    </ul>
                </li>
            {/each}
        </div>

        <div>
            <h4 class="mb-2">Timeline</h4>
            {#each timeline as time}
                <li>
                    <ul class="list-none p-0 m-0">
                        {time}
                    </ul>
                </li>
            {/each}
        </div>

        <div>
            <h4 class="mb-2">Skills</h4>
            {#each skills as skill}
                <li>
                    <ul class="list-none p-0 m-0">
                        {skill}
                    </ul>
                </li>
            {/each}
        </div>

        <div>
            <h4 class="mb-2">Technologies</h4>
            {#each technologies as technology}
                <li>
                    <ul class="list-none p-0 m-0">
                        {technology}
                    </ul>
                </li>
            {/each}
        </div>
    </div>
    {/if}
</div>
