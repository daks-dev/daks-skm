<script lang="ts">
  import { onMount } from 'svelte';
  import { YandexMetrikaHit } from 'daks-svelte';

  import type { PageData } from './$types';
  export let data: PageData;
  const { image } = data;

  const title = 'СКМ • О предприятии';
  const description = 'О предприятии СКМ';

  onMount(() => document?.lazyload.update());
</script>

<YandexMetrikaHit
  {title}
  {description} />

<main class="grow" itemprop="mainContentOfPage">
  <header class="content mb-0">
    <h1 class="title">О предприятии</h1>
  </header>

  <div
    class="content my-auto py-8
              flex flex-wrap lg:flex-nowrap gap-8">
    <div class="flex-auto text-lg">
      <h2 class="mb-7">Строительная компания «МАСШТАБ»</h2>
      <p>
        Строительная компания «Масштаб» является достаточно молодой и перспективной организацией,
        занимающейся контролем за соблюдением технологических процессов строительного производства,
        включающих в себя входной контроль качества строительных материалов и продукции поступающей
        на строительную площадку, оценку технического состояния зданий и сооружений, мониторинг
        объектов нового строительства и окружающей застройки попадающей в геотехническую зону
        влияния.
      </p>
      <p>
        Сотрудниками Строительной компании «Масштаб» являются <b
          >высококвалифицированные специалисты</b>
        с <b>высшим строительным образованием</b>, а так же <b>судебно-технические эксперты</b>.
      </p>
    </div>

    <img
      class="
        flex-initial mx-auto
        bg-no-repeat bg-center bg-1/5 bg-loading"
      src={image.thumbnail.src}
      width={image.thumbnail.width}
      height={image.thumbnail.height}
      alt="skm: thumbnail"
      loading="eager"
      itemprop="thumbnailURL" />
    <link
      href={image.source.src}
      rel="image"
      itemprop="image" />
  </div>
</main>
