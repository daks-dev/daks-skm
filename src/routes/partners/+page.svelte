<script lang="ts">
  import { YandexMetrikaHit, GalleryKit } from 'daks-svelte';

  import type { PageData } from './$types';
  export let data: PageData;

  const { dataset } = data;

  const title = 'СКМ • Партнёры';
  const description = 'Партнёры предпрятия СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage">
  <header class="content">
    <h1 class="title">Наши партнеры</h1>
  </header>

  <GalleryKit
    class="content lg:grid-cols-2 gap-x-8 gap-y-12"
    custom={{
      caption: 'text-lg text-slate-700 dark:text-slate-400'
    }}
    {dataset}
    grid
    centered
    scale
    shadow />
</main>
