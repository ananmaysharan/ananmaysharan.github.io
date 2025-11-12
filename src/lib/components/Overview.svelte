<script>
    //@ts-nocheck
    import Button from "./Button.svelte";
    export let title = "";
    export let img;
    export let roles = [];
    export let timeline = "";
    export let technologies = [];
    export let skills = [];
    export let link = "";
    export let showInfo = true;
</script>

<div>
    <div class="title">
        <h1>{title}</h1>
        <Button
            buttonText={"Visit Website"}
            url={link}
        />
    </div>

    <img src={img} alt="img" class="image" />

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
            <p>{timeline}</p>
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
        display: flex;
        gap: 4rem;
        justify-content: space-between;
        color: #999;
    }

    .info ul,
    li {
        list-style-type: none;
        padding: 0;
        margin: 0;
    }
</style>
