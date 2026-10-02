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
		{ src: dojiProfile, poster: profilePoster, alt: 'Doji profile sharing', type: 'phone' },
		{ src: icsDrop, poster: dropPoster, alt: 'ICS Drop', type: 'browser' },
		{ src: dojiAnimation, poster: animationPoster, alt: 'Doji shopping animation', type: 'phone' },
		{ src: pincode, poster: pincodePoster, alt: 'Pincode', type: 'plain' },
	];

	let currentIndex = $state(0);
	let isPaused = $state(false);
	let hasFrame = $state(items.map(() => false));

	function handleVideoEnded(event: Event, index: number) {
		if (index !== currentIndex) return;
		if (isPaused) {
			const video = event.currentTarget as HTMLVideoElement;
			video.currentTime = 0;
			void video.play().catch(() => { video.controls = true; });
		} else {
			hasFrame[index] = false;
			currentIndex = (currentIndex + 1) % items.length;
		}
	}
</script>

<div class="gallery-shell w-full max-w-140 mx-auto">
	<div role="region" aria-label="Video reel" class="gallery-stage w-full"
		onpointerenter={(event) => { if (event.pointerType === 'mouse') isPaused = true; }}
		onpointerleave={(event) => { if (event.pointerType === 'mouse') isPaused = false; }}>
		{#each items as item, index (item.src)}
			<div class="gallery-slide" class:active={index === currentIndex} aria-hidden={index !== currentIndex} inert={index !== currentIndex}>
				{#if item.type === 'phone'}
					<div class="phone-slide">
						<PhoneVideo src={item.src} poster={item.poster} label={item.alt}
							active={index === currentIndex} loop={false} onended={(event) => handleVideoEnded(event, index)} />
					</div>
				{:else}
					<div class="desktop-slide" class:browser-frame={item.type === 'browser'} class:plain-frame={item.type === 'plain'}>
						<div class="video-surface" class:browser-screen={item.type === 'browser'}>
							<video use:visibleVideoPlayback={index === currentIndex} src={item.src} poster={item.poster}
								preload="auto" aria-label={item.alt} muted playsinline
								onplaying={() => { hasFrame[index] = true; }} onended={(event) => handleVideoEnded(event, index)}></video>
							{#if !hasFrame[index]}<img class="clip-poster" src={item.poster} alt="" aria-hidden="true" />{/if}
						</div>
					</div>
				{/if}
			</div>
		{/each}
	</div>
</div>

<style>
	.gallery-shell { height: 100%; min-height: 0; }
	.gallery-stage { position: relative; height: 100%; min-height: 0; }
	.gallery-slide {
		position: absolute; inset: 0;
		display: flex; align-items: center; justify-content: center;
		visibility: hidden; pointer-events: none;
	}
	.gallery-slide.active { visibility: visible; pointer-events: auto; }
	.phone-slide { height: min(100%, 50svh); max-width: 100%; aspect-ratio: 442 / 914; }
	.desktop-slide { width: 100%; }
	.plain-frame { border: 1px solid var(--color-border); }
	.video-surface { position: relative; width: 100%; aspect-ratio: 3 / 2; overflow: hidden; background: white; }
	video, .clip-poster { position: absolute; inset: 0; display: block; width: 100%; height: 100%; object-fit: contain; }
	.clip-poster { pointer-events: none; }
	.browser-frame {
		width: calc(100% - 24px); padding: 4px;
		border: 1px solid rgb(0 0 0 / 10%); border-radius: 13px;
		background: rgb(220 220 224 / 45%);
		box-shadow: inset 0 1px 0 rgb(255 255 255 / 80%);
	}
	.browser-screen { aspect-ratio: 16 / 9; border: 1px solid rgb(0 0 0 / 6%); border-radius: 8px; }
	.browser-screen video, .browser-screen .clip-poster { padding: 8px; }
	@media (max-width: 63.999rem) {
		.gallery-shell { height: auto; }
		.gallery-stage { height: min(50svh, 28rem); }
		.phone-slide { height: 100%; }
		.browser-frame { width: 100%; }
	}
	@media (max-width: 39.999rem) {
		.gallery-stage { height: auto; aspect-ratio: 1 / 1.65; }
		.phone-slide { width: 72%; height: auto; }
	}
</style>
