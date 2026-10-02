/** Retry muted autoplay when a clip enters view or the page returns to the foreground. */
export function visibleVideoPlayback(video: HTMLVideoElement, active = true) {
    let visible = false;
    let destroyed = false;

    function play() {
        if (!active || !visible || document.hidden || destroyed || !video.paused || video.ended) return;
        video.muted = true;
        void video.play().catch((error: unknown) => {
            // Autoplay policy can require a real tap. Keep native playback available.
            if (!destroyed && error instanceof DOMException && error.name === 'NotAllowedError') {
                video.controls = true;
            }
        });
    }

    const observer = new IntersectionObserver(([entry]) => {
        visible = entry.isIntersecting;
        play();
    });
    observer.observe(video);
    video.addEventListener('canplay', play);
    document.addEventListener('visibilitychange', play);

    return {
        update(nextActive: boolean) {
            active = nextActive;
            if (!active) {
                video.pause();
                video.currentTime = 0;
            } else {
                play();
            }
        },
        destroy() {
            destroyed = true;
            observer.disconnect();
            video.removeEventListener('canplay', play);
            document.removeEventListener('visibilitychange', play);
        },
    };
}
