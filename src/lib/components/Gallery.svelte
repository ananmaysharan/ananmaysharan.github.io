<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import chairImg from '$lib/assets/home/chair.png';
	import trains from '$lib/assets/home/trains.png';
	import hardwarerender from '$lib/assets/work/memory-mend/hardwarerender.webp';
	import pincode from '$lib/assets/home/pincode.webm';

	interface Props {
		interval?: number;
	}

	let { interval = 1000 }: Props = $props();

	const items = [
		{ src: trains, alt: 'Train' },
		{ src: chairImg, alt: 'Chair' },
		{ src: hardwarerender, alt: 'Hardware Render' },
		{ src: pincode, alt: 'Pincode' },

	];

	function isVideo(src: string) {
		return src && (src.endsWith('.webm') || src.endsWith('.mp4') || src.endsWith('.mov'));
	}

	let currentIndex = $state(0);
	let isPaused = $state(false);
	let isPlayingVideo = $derived(isVideo(items[currentIndex].src));
	let intervalId: ReturnType<typeof setInterval>;

	function advance() {
		currentIndex = (currentIndex + 1) % items.length;
	}

	function startCycling() {
		if (intervalId) clearInterval(intervalId);
		intervalId = setInterval(() => {
			if (!isPaused && !isPlayingVideo && items.length > 1) {
				advance();
			}
		}, interval);
	}

	function handleVideoEnded() {
		if (!isPaused) {
			advance();
		}
	}

	function handleMouseEnter() {
		isPaused = true;
	}

	function handleMouseLeave() {
		isPaused = false;
	}

	onMount(() => {
		startCycling();
	});

	onDestroy(() => {
		if (intervalId) {
			clearInterval(intervalId);
		}
	});
</script>

<div class="w-full max-w-100 mx-auto h-full flex items-center justify-center">
	<div
		role="region"
		aria-label="Image gallery"
		class="w-full overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:cursor-pointer motion-reduce:transition-none motion-reduce:hover:transform-none"
		onmouseenter={handleMouseEnter}
		onmouseleave={handleMouseLeave}
	>
		{#if isVideo(items[currentIndex].src)}
			<video
				src={items[currentIndex].src}
				class="w-full h-auto block transition-opacity duration-300 ease-in-out motion-reduce:transition-none"
				autoplay
				muted
				playsinline
				onended={handleVideoEnded}
			></video>
		{:else}
			<img
				src={items[currentIndex].src}
				alt={items[currentIndex].alt}
				class="w-full h-auto block transition-opacity duration-300 ease-in-out motion-reduce:transition-none"
			/>
		{/if}
	</div>
</div>
