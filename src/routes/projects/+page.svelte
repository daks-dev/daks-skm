<script lang="ts">
  import { YandexMetrikaHit, LightboxKit } from 'daks-svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  const { images, thumbnails } = data;

  const title = 'СКМ • Проекты';
  const description = 'Проекты предпрятия СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Недавние проекты</h1>
  </header>

  <LightboxKit
    class="wrapper gap-y-12 gap-x-16"
    custom={{ overlay: 'overflow-offset' }}
    options={{ behaviour: 'loop' }}
    {images}
    {thumbnails}
    sign
    centered
    rounded
    shadow
    scale
    grayscale />
</main>
