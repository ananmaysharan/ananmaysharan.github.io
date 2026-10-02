<script lang="ts">
	import pincode from '#lib/assets/home/pincode.webm';
	import icsDrop from '#lib/assets/home/ics-drop.webm';
	import dojiProfile from '#lib/assets/home/doji-profile-loop.mp4';
	import dojiAnimation from '#lib/assets/home/doji-animation-loop.mp4';
	import PhoneVideo from './PhoneVideo.svelte';
	import profilePoster from '#lib/assets/home/doji-profile-loop-poster.webp';
	import animationPoster from '#lib/assets/home/doji-animation-loop-poster.webp';
	import dropPoster from '#lib/assets/home/ics-drop-poster.webp';
	import pincodePoster from '#lib/assets/home/pincode-poster.webp';
	import { visibleVideoPlayback } from '#lib/actions/visibleVideoPlayback.ts';

	const items = [
		{ src: dojiProfile, poster: profilePoster, alt: 'Doji profile sharing' },
		{ src: icsDrop, poster: dropPoster, alt: 'ICS Drop' },
		{ src: dojiAnimation, poster: animationPoster, alt: 'Doji shopping animation' },
		{ src: pincode, poster: pincodePoster, alt: 'Pincode' },
	];

	let currentIndex = $state(0);
	let isPaused = $state(false);
	let isBrowserClip = $derived(items[currentIndex].src === icsDrop);
	let isPhoneClip = $derived(items[currentIndex].src === dojiProfile || items[currentIndex].src === dojiAnimation);

	function advance() {
		currentIndex = (currentIndex + 1) % items.length;
	}

	let videoEl = $state<HTMLVideoElement | null>(null);

	function handleVideoEnded() {
		if (isPaused && videoEl) {
			videoEl.currentTime = 0;
			void videoEl.play().catch(() => { if (videoEl) videoEl.controls = true; });
		} else {
			advance();
		}
	}

	function handleMouseEnter() {
		isPaused = true;
	}

	function handleMouseLeave() {
		isPaused = false;
	}

</script>

<div class="gallery-shell w-full max-w-140 mx-auto">
	<div
		role="region"
		aria-label="Image gallery"
		class="gallery-stage w-full"
		class:standard-stage={!isPhoneClip}
		class:phone-stage={isPhoneClip}
		class:plain-frame={!isBrowserClip && !isPhoneClip}
		class:browser-stage={isBrowserClip}
		onmouseenter={handleMouseEnter}
		onmouseleave={handleMouseLeave}
	>
		{#key items[currentIndex].src}
		{#if isPhoneClip}
			<div class="phone-slide">
					<PhoneVideo src={items[currentIndex].src} poster={items[currentIndex].poster} label={items[currentIndex].alt} bind:videoEl loop={false} onended={handleVideoEnded} />
			</div>
		{:else}
			<div class={isBrowserClip ? 'browser-frame' : 'w-full h-full'}>
			<video
				bind:this={videoEl}
				use:visibleVideoPlayback
				src={items[currentIndex].src}
				poster={items[currentIndex].poster}
				preload="auto"
				aria-label={items[currentIndex].alt}
				class="w-full object-contain block transition-opacity duration-300 ease-in-out motion-reduce:transition-none"
				class:h-full={!isBrowserClip}
				class:h-auto={isBrowserClip}
				autoplay
				muted
				playsinline
				onended={handleVideoEnded}
			></video>
			</div>
		{/if}
		{/key}
	</div>
</div>

<style>
	.gallery-shell {
		display: flex;
		align-items: center;
		height: 100%;
		min-height: 0;
	}

	.gallery-stage {
		display: flex;
		align-items: center;
		justify-content: center;
		max-height: 100%;
	}

	.standard-stage {
		aspect-ratio: 3 / 2;
	}

	.phone-stage {
		height: 100%;
		min-height: 0;
	}

	.phone-slide {
		height: min(100%, 50svh);
		width: auto;
		max-width: 100%;
		aspect-ratio: 442 / 914;
	}

	.plain-frame {
		border: 1px solid var(--color-border);
	}

	.browser-stage {
		padding: 12px;
	}

	.browser-frame {
		width: 100%;
		aspect-ratio: 16 / 9;
		overflow: hidden;
		padding: 4px;
		border: 1px solid rgb(0 0 0 / 10%);
		border-radius: 13px;
		background: rgb(220 220 224 / 45%);
		-webkit-backdrop-filter: blur(12px);
		backdrop-filter: blur(12px);
		box-shadow: inset 0 1px 0 rgb(255 255 255 / 80%);
	}

	.browser-frame video {
		height: 100%;
		object-fit: contain;
		padding: 8px;
		border-radius: 8px;
		background: white;
		box-shadow: 0 0 0 1px rgb(0 0 0 / 6%);
	}

	@media (max-width: 63.999rem) {
		.gallery-shell { height: auto; align-items: flex-start; }
		.phone-stage { height: auto; }
		.phone-slide { height: min(50svh, 28rem); }
		.browser-stage { aspect-ratio: auto; padding: 0; }
	}

	@media (max-width: 39.999rem) {
		.phone-stage { padding-block: 1.5rem; }
		.phone-slide { width: 72%; height: auto; }
	}
</style>
