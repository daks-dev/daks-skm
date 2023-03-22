// export const csr = false;
export const prerender = true;

import type { LayoutLoad } from './$types';
export const load: LayoutLoad = ({ url}) => ({
  refresh: url.pathname
});
