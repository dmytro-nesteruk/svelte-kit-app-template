import type { PageLoad } from './$types';

export const load = (() => {
	return {
		data: 'Sveltekit',
	};
}) satisfies PageLoad;
