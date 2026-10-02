<script>
    import PhoneVideo from '#lib/components/PhoneVideo.svelte';
    import Overview from '#lib/components/Overview.svelte';
    import profile from '#lib/assets/home/doji-profile-loop.mp4';
    import education from '#lib/assets/home/doji-education-loop.mp4';
    import settings from '#lib/assets/home/doji-settings.mp4';

    const projects = [
        {
            id: 'sharing',
            title: 'Profile sharing and look sharing',
            description: 'I worked on how people share their profiles and looks from Doji.',
            src: profile,
            label: 'Doji profile sharing demo',
        },
        {
            id: 'ios-extension',
            title: 'Doji iOS extension',
            description: 'I worked on the setup flow for adding items to Doji from other apps.',
            src: education,
            label: 'Doji iOS extension setup demo',
        },
        {
            id: 'settings',
            title: 'Settings page redesign',
            description: 'I redesigned the settings page in Doji.',
            src: settings,
            label: 'Doji settings redesign demo',
        },
    ];
</script>

<main aria-label="Doji" class="flex flex-col items-center px-8">
    <section class="prose w-full my-8 flex flex-col gap-16 md:max-w-200">
        <Overview title="Doji" showInfo={false} />
        {#each projects as project}
            <section aria-labelledby={project.id}>
                <h2 id={project.id}>{project.title}</h2>
                <p>{project.description}</p>
                <div class="device not-prose">
                    <PhoneVideo src={project.src} label={project.label} />
                </div>
            </section>
        {/each}
    </section>
</main>

<style>
    .device {
        width: min(75%, 300px, calc(65svh * 442 / 914));
        aspect-ratio: 442 / 914;
        margin: 32px auto 0;
    }
</style>
