<script lang="ts">
  import { onMount } from 'svelte';
  import { Contacts, Lightbox, Sign, YandexMap, YandexMetrikaHit } from 'daks-svelte';
  import image from '$lib/assets/images/contacts.webp?webp';
  import thumbnail from '$lib/assets/images/contacts.webp?w=320&webp';

  import microdata from '$configs/microdata';

  const data = {
    locations: [
      {
        geometry: [55.771174, 37.60589],
        properties: {
          iconContent: '<strong class="tracking-wider">СК «МАСШТАБ»</strong>',
          balloonContentHeader: 'Строительная компания «МАСШТАБ»',
          balloonContentBody: '<img class=mx-auto src=/images/ymap.webp width=192 height=192 />',
          balloonContentFooter:
            '<div class=text-center>время работы: 9 <sup>00</sup> -- 19 <sup>00</sup></div>'
        },
        options: {
          preset: 'islands#nightStretchyIcon'
        }
      }
    ],
    state: {
      center: [55.771174, 37.60589],
      zoom: 17,
      behaviors: ['drag', 'dblClickZoom', 'rightMouseButtonMagnifier', 'multiTouch'],
      controls: ['zoomControl', 'fullscreenControl']
    },
    options: {
      autoFitToViewport: 'always'
    }
  };

  const title = 'СКМ • Контакты';
  const description = 'Контакты предприятия СКМ';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main
  class="grow gap-8"
  itemprop="mainContentOfPage">
  <header class="content mb-0">
    <h1 class="title">Контакты</h1>
  </header>

  <div class="content flex justify-around items-center gap-8">
    <Contacts
      class="py-4 h-fit"
      {microdata} />

    <Lightbox
      class="relative group -sm:hidden md:shrink-0"
      custom={{ overlay: 'overflow-offset' }}
      title="Масштаб &trade;"
      description="Строительная компания">
      <svelte:fragment slot="thumbnail">
        <Sign
          class="top-2 left-5"
          icon="ic:round-zoom-out-map"
          dark />
        <img
          class="
            mx-3
            rounded-md
            drop-shadow-md hover:drop-shadow-deep hover:scale-105
            transition duration-300 ease-in-out"
          src={thumbnail.src}
          alt="" />
      </svelte:fragment>
      <img
        src={image.src}
        alt="" />
    </Lightbox>
  </div>

  <div
    class="
      content flex grow
      h-[40vmax] xs:h-[35vmax] sm:h-[30vmax] md:h-[25vmax] lg:h-auto">
    <YandexMap
      class="
        w-full min-h-full overflow-hidden
        border-4 border-slate-400"
      {data} />
  </div>
</main>
