<script lang="ts">
  import { YandexMetrikaHit, LightboxKit } from 'daks-svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  const { sources, thumbnails } = data;

  const title = 'СКМ • Допуски';
  const description = 'Допуски предпрятия СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Допуски</h1>
  </header>

  <LightboxKit
    class="content gap-8"
    custom={{ overlay: 'overflow-offset' }}
    options={{ behaviour: 'loop' }}
    {sources}
    {thumbnails}
    sign
    centered
    shadow
    scale />
</main>
