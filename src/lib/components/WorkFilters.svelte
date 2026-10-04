<script lang="ts">
    import { onMount } from 'svelte';
    import { page } from '$app/state';
    import { resolve } from '$app/paths';
    import { getWorkFilter, workFilters } from '#lib/workFilters.ts';
    import Subnav from './Subnav.svelte';

    let mounted = $state(false);
    onMount(() => { mounted = true; });

    const selected = $derived(mounted ? getWorkFilter(page.url.searchParams.get('filter')) : 'all');
    const items = $derived(workFilters.map(filter => ({
        label: filter.label,
        href: resolve('/work') + (filter.value === 'all' ? '' : `?filter=${filter.value}`),
        current: selected === filter.value,
    })));
</script>

<Subnav label="Work categories" {items} />
