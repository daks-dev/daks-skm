<script lang="ts">
  import classNames from 'classnames';
  import { onMount } from 'svelte';

  export let infographic: any[];

  let className: any = undefined;
  export { className as class };

  onMount(() => {
    let delay = 0;
    infographic.forEach((info) => info.max && (delay = info.max > delay ? info.max : delay));
    delay = delay * 10;
    infographic.forEach((info, idx) => {
      if (info.max) {
        info.count ??= 0;
        setTimeout(() => {
          const inteval = setInterval(() => {
            if (info.count < info.max) infographic[idx].count = ++info.count;
            // if (info.node) info.node.style.opacity = .5 + info.count / info.max / 2;
            else {
              if (info.node) info.node.style.opacity = 1;
              clearInterval(inteval);
            }
          }, delay / info.max);
        }, 750 + 250 * idx);
      }
    });
  });
</script>

<div
  class={classNames(
    'my-auto py-4',
    'flex flex-wrap justify-around gap-8',
    className
  )}>
  {#each infographic as info}
    <figure class="flex flex-col items-center gap-4">
      <img
        bind:this={info.node}
        class="
          p-7 rounded-lg
          bg-slate-600 dark:bg-transparent"
        style:opacity=".25"
        src={info.icon.src}
        width={info.icon.width}
        height={info.icon.height}
        alt={info.text.toLowerCase()}
        decoding="sync"
        loading="eager" />
      <figcaption
        class="flex flex-col items-center gap-2">
        <span
          class="
            font-bold text-4xl
            text-gray-500 dark:text-slate-300">
          {@html info.count || '&mdash;'} 
        </span>
        <span
          class="
            text-lg md:text-xl
            text-slate-600 dark:text-slate-300">
          {info.text}
        </span>
      </figcaption>
    </figure>
  {/each}
</div>
