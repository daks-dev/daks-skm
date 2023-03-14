import getter, { sources } from '$lib/assets/images/content/partners';

import type { PageLoad } from './$types';
export const load: PageLoad = async () => ({
  dataset: await getter(sources)
});
