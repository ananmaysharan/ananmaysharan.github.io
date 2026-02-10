<script>
	// @ts-nocheck
	import { onMount, onDestroy } from 'svelte';
	import chairImg from '$lib/assets/home/chair.png';
	import zineImg from '$lib/assets/home/zine.png';
	import trains from '$lib/assets/home/trains.png';
	import ocean from '$lib/assets/work/ocean.webp';
	import hardwarerender from '$lib/assets/work/memory-mend/hardwarerender.webp';
	
	export let chairLink = '#';
	export let zineLink = '#';
	export let trainsLink = '#';
	export let oceanLink = '#';
	export let interval = 900; // 2 seconds by default
	
	const images = [
		{ src: chairImg, alt: 'Chair', link: chairLink },
		{ src: zineImg, alt: 'Zine', link: zineLink },
		{ src: trains, alt: 'Train', link: trainsLink },
		{ src: ocean, alt: 'Ocean Records Project', link: oceanLink },
		{ src: hardwarerender, alt: 'Hardware Render', link: '#' }
	];
	
	let currentIndex = 0;
	let isPaused = false;
	let intervalId;
	
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

<div class="home-gallery">
	<div 
		class="image-container"
		on:mouseenter={handleMouseEnter}
		on:mouseleave={handleMouseLeave}
		on:click={handleImageClick}
		on:keydown={(e) => e.key === 'Enter' && handleImageClick()}
		role="button"
		tabindex="0"
	>
		<img 
			src={images[currentIndex].src} 
			alt={images[currentIndex].alt}
			class="home-image"
			class:clickable={images[currentIndex].link !== '#'}
		/>
	</div>
</div>

<style>
	.home-gallery {
		width: 100%;
		max-width: 400px;
		margin: 0 auto;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.image-container {
		width: 100%;
		/* border-radius: 8px; */
		overflow: hidden;
		transition: transform 0.2s ease;
	}
	
	.image-container:hover {
		transform: scale(1.02);
        cursor: pointer;
	}

	.home-image {
		width: 100%;
		height: auto;
		display: block;
		transition: opacity 0.3s ease;
	}
	
	.home-image.clickable {
		cursor: pointer;
	}
	
	@media (prefers-reduced-motion: reduce) {
		.image-container,
		.home-image {
			transition: none;
		}
		
		.image-container:hover {
			transform: none;
		}
	}
</style>