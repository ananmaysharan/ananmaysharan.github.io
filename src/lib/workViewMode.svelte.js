import { browser } from '$app/environment';

export const workView = $state({
	/** @type {'grid' | 'list' | 'feature'} */
	mode: 'feature'
});

/** @param {'grid' | 'list' | 'feature'} mode */
export function setViewMode(mode) {
	workView.mode = mode;
	if (browser) {
		localStorage.setItem('workViewMode', mode);
	}
}
