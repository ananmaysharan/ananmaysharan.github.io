<script lang="ts">
	import { onMount, onDestroy } from 'svelte';
	import chairImg from '$lib/assets/home/chair.png';
	import zineImg from '$lib/assets/home/zine.png';
	import trains from '$lib/assets/home/trains.png';
	import ocean from '$lib/assets/work/ocean.webp';
	import hardwarerender from '$lib/assets/work/memory-mend/hardwarerender.webp';

	interface Props {
		chairLink?: string;
		zineLink?: string;
		trainsLink?: string;
		oceanLink?: string;
		interval?: number;
	}

	let {
		chairLink = '#',
		zineLink = '#',
		trainsLink = '#',
		oceanLink = '#',
		interval = 900
	}: Props = $props();

	const images = [
		{ src: chairImg, alt: 'Chair', link: chairLink },
		{ src: zineImg, alt: 'Zine', link: zineLink },
		{ src: trains, alt: 'Train', link: trainsLink },
		{ src: ocean, alt: 'Ocean Records Project', link: oceanLink },
		{ src: hardwarerender, alt: 'Hardware Render', link: '#' }
	];

	let currentIndex = $state(0);
	let isPaused = $state(false);
	let intervalId: ReturnType<typeof setInterval>;

	function startCycling() {
		if (intervalId) clearInterval(intervalId);
		intervalId = setInterval(() => {
			if (!isPaused && images.length > 1) {
				currentIndex = (currentIndex + 1) % images.length;
			}
		}, interval);
	}

	function handleMouseEnter() {
		isPaused = true;
	}

	function handleMouseLeave() {
		isPaused = false;
	}

	function handleImageClick() {
		const currentImage = images[currentIndex];
		if (currentImage.link && currentImage.link !== '#') {
			window.open(currentImage.link, '_blank');
		}
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

<div class="w-full max-w-[400px] mx-auto h-full flex items-center justify-center">
	<div
		class="w-full overflow-hidden transition-transform duration-200 ease-in-out hover:scale-[1.02] hover:cursor-pointer motion-reduce:transition-none motion-reduce:hover:transform-none"
		onmouseenter={handleMouseEnter}
		onmouseleave={handleMouseLeave}
		onclick={handleImageClick}
		onkeydown={(e) => e.key === 'Enter' && handleImageClick()}
		role="button"
		tabindex="0"
	>
		<img
			src={images[currentIndex].src}
			alt={images[currentIndex].alt}
			class="w-full h-auto block transition-opacity duration-300 ease-in-out motion-reduce:transition-none"
			class:cursor-pointer={images[currentIndex].link !== '#'}
		/>
	</div>
</div>
