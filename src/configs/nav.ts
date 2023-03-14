import { Nav } from 'daks-svelte';
import type { NavSite } from 'daks-svelte/types';

const config: NavSite = {
  navbar: {
    links: [
      {
        href: '/about',
        label: '<span class="lg:hidden">О компании</span><span class="hidden lg:inline">О!</span>',
        links: [
          {
            href: '/feedbacks',
            label: 'Отзывы'
          },
          {
            href: '/news',
            label: 'Новости'
          }
        ]
      },
      {
        href: '/activity',
        label: 'Деятельность'
      },
      {
        href: '/permissions',
        label: 'Допуски'
      },
      {
        href: '/projects',
        label: 'Проекты'
      },
      {
        href: '/partners',
        label: 'Партнеры'
      },
      {
        href: '/contacts',
        label: 'Контакты'
      }
    ]
  },
  footer: {
    links: [
      {
        href: '/privacy',
        label: 'Конфиденциальность'
      },
      {
        href: '/admin',
        label: 'ic:outline-settings',
        disallow: true
      }
    ],
    copylink: {
      href: '/',
      label: 'СК&nbsp;«Масштаб»&trade;'
    }
  }
};

export const map = [
  ...Nav.map(config.navbar.links),
  ...Nav.map(config.footer.links ?? []),
  ...(config.allow ?? [])
].filter((el, idx, arr) => arr.indexOf(el) === idx);

export default config;
