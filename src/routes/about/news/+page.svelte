<script lang="ts">
  import { YandexMetrikaHit, Skeleton, TextPlaceholder, ImagePlaceholder, TestimonialPlaceholder } from 'daks-svelte';

  const title = 'СКМ • Новости';
  const description = 'Новости предприятия СКМ';
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main itemprop="mainContentOfPage snap-start">
  <header class="content">
    <h1 class="title">Новости</h1>
  </header>

  <div 
    class="
      content
      flex flex-col  gap-8">
      <TextPlaceholder class="mx-auto mb-8 w-full max-w-3xl" />
    {#each Array(5) as val}
      <ImagePlaceholder class="odd:-scale-x-100 snap-start" />
    {/each}
    <TestimonialPlaceholder class="mx-auto mt-8 w-full max-w-xl" />
  </div>
</main>
