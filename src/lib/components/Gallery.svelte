<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import chairImg from '$lib/assets/home/chair.png';
	import trains from '$lib/assets/home/trains.png';
	import hardwarerender from '$lib/assets/work/memory-mend/hardwarerender.webp';
	import pincode from '$lib/assets/home/pincode.webm';
	import icsDrop from '$lib/assets/home/ics-drop.webm';

	interface Props {
		interval?: number;
	}

	let { interval = 1400 }: Props = $props();

	const items = [
		{ src: hardwarerender, alt: 'Hardware Render' },
		{ src: icsDrop, alt: 'ICS Drop' },
		{ src: trains, alt: 'Train' },
		{ src: pincode, alt: 'Pincode' },
		{ src: chairImg, alt: 'Chair' },
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

	let videoEl = $state<HTMLVideoElement | null>(null);

	function handleVideoEnded() {
		if (isPaused && videoEl) {
			videoEl.currentTime = 0;
			videoEl.play();
		} else {
			advance();
			startCycling();
		}
	}

	function handleMouseLeaveVideo() {
		isPaused = false;
		if (videoEl && videoEl.ended) {
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
		onmouseleave={isPlayingVideo ? handleMouseLeaveVideo : handleMouseLeave}
	>
		{#if isVideo(items[currentIndex].src)}
			<video
				bind:this={videoEl}
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
