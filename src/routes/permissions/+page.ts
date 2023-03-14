import getter from '$lib/assets/images/content/permissions';

import type { PageLoad } from './$types';
export const load: PageLoad = async () => ({
  ...await getter()
});
