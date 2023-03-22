import getter, { sources } from '$lib/assets/images/content/partners';

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => ({
  dataset: await getter(sources)
});
