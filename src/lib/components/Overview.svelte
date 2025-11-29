<script>
    //@ts-nocheck
    import Button from "./Button.svelte";
    export let title = "";
    export let img;
    export let roles = [];
    export let timeline = [];
    export let technologies = [];
    export let skills = [];
    export let link = "";
    export let showInfo = true;

    $: isVideo = img && (img.endsWith('.webm') || img.endsWith('.mp4') || img.endsWith('.mov'));
</script>

<div>
    <div class="title">
        <h1>{title}</h1>
        <Button
            buttonText={"Visit Website"}
            url={link}
        />
    </div>

    {#if isVideo}
        <video src={img} class="image" autoplay loop muted playsinline></video>
    {:else}
        <img src={img} alt="img" class="image" />
    {/if}

    {#if showInfo}
    <div class="info">
        <div class="info-section">
            <h4>Role</h4>
            {#each roles as role}
                <li>
                    <ul>
                        {role}
                    </ul>
                </li>
            {/each}
        </div>

        <div class="info-section">
            <h4>Timeline</h4>
            {#each timeline as time}
                <li>
                    <ul>
                        {time}
                    </ul>
                </li>
            {/each}
        </div>

        <div class="info-section">
            <h4>Skills</h4>
            {#each skills as skill}
                <li>
                    <ul>
                        {skill}
                    </ul>
                </li>
            {/each}
        </div>

        <div class="info-section">
            <h4>Technologies</h4>
            {#each technologies as technology}
                <li>
                    <ul>
                        {technology}
                    </ul>
                </li>
            {/each}
        </div>
    </div>
    {/if}
</div>

<style>

    .title {
        display: flex;
        align-items: center;
        justify-content: space-between;
        align-items: center;
    }

    .title h1 {
        margin: 0;
    }  

    h4 {
        margin-bottom: 0.5rem;
    }

    .image {
        width: 100%;
        height: auto;
        border: 1px solid #eee;
        margin-top: 2rem;
    }

    .info {
    display: grid;
    justify-content: space-between;
    color: #999;
    grid-template-columns: 1fr 1fr;
}


    .info ul,
    li {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }

    @media (min-width: 768px) {
    .info {
        display: flex;
        gap: 4rem;
        justify-content: space-between;
    }
    }


</style>
