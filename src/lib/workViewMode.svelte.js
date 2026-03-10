import { browser } from '$app/environment';

/** @type {'grid' | 'list'} */
const initial = browser ? /** @type {'grid' | 'list'} */ (localStorage.getItem('workViewMode') || 'grid') : 'grid';

export const workView = $state({
	/** @type {'grid' | 'list'} */
	mode: initial
});

/** @param {'grid' | 'list'} mode */
export function setViewMode(mode) {
	workView.mode = mode;
	if (browser) {
		localStorage.setItem('workViewMode', mode);
	}
}
