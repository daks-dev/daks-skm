/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{html,svelte,ts,js}',
    './node_modules/daks-svelte/**/*.{svelte,html,ts,js}'
  ],

  presets: [
    require('daks-svelte/tailwindcss/presets/font-family.cjs'),
    require('daks-svelte/tailwindcss/presets/common.cjs')
  ],

  /*
  theme: {
    extend: {
      backgroundImage: {
        waiting: 'url('/assets/icons/spinners/clock.svg')',
        loading: 'url('/assets/icons/spinners/90-ring-bg.svg')'
      }
    }
  }
  */
};
