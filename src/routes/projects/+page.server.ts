import getter from '$lib/assets/images/gallery';

import type { PageServerLoad } from './$types';
export const load: PageServerLoad = async () => ({
  ...await getter()
});
