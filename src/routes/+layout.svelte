<script lang="ts">
  import { BROWSER } from 'esm-env';
  import {
    lazyload,
    AppHead,
    Footer,
    NavbarKit,
    RouteTransition,
    ScreenBlock,
    YandexMetrikaInit
  } from 'daks-svelte';

  import '../app.css';
  import '$iconify';

  import type { LayoutData } from './$types';
  export let data: LayoutData;

  import { app, nav } from '$configs';

  if (BROWSER) document.lazyload ??= lazyload();
</script>

<AppHead {app} />

<RouteTransition
  class="flex flex-col grow"
  mode={1}
  refresh={data.refresh}>
  <slot />
</RouteTransition>

<Footer {...nav.footer} />

<NavbarKit {...nav.navbar} />

<ScreenBlock class="bg-neutral-100 dark:bg-gray-800" />

<YandexMetrikaInit />
