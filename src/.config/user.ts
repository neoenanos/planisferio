import type { UserConfig } from '~/types'

export const userConfig: Partial<UserConfig> = {
  site: {
    title: 'Planisferio',
    subtitle: '...Tipografías del plano...',
    author: 'NeoEnanos Chocloneros',
    description: 'Partidarios del choclón',
    website: 'https://planisferio.cl',
    pageSize: 10,
    socialLinks: [
      {
        name: 'github',
        href: 'https://github.com/neoenanos/planisferio',
      },
      {
        name: 'rss',
        href: '/atom.xml',
      },
      {
        name: 'telegram',
        href: 'https://t.me/burocrata',
      },
      {
        name: 'email',
        href: 'mailto:tribilin@planisferio.cl',
      },
    ],
    navLinks: [

      // {
      //   name: 'Manifest',
      //   href: '/manifiests/',
      // },
      // {
      //   name: 'Poetry',
      //   href: '/poetry',
      // },
      // {
      //   name: 'Brain',
      //   href: '/brain',
      // },
      {
        name: 'Text',
        href: '/posts',
      },
      // {
      //   name: 'Authors',
      //   href: '/authors',
      // },
      // {
      //   name: 'Archive',
      //   href: '/archive',
      // },
      {
        name: 'Categories',
        href: '/categories',
      },

      {
        name: 'Chat',
        href: '/xat',
      },

    ],
    footer: [
      '© %year %author',
    ],
  },
  appearance: {
    theme: 'system',
    locale: 'es-es',
  },
  analytics: {
    posthogAnalyticsId: 'phc_ePvCXCEx2aScDEtVEXcGBfwyjXQ5JaSwJ8Tc2QN3ldu',
  },
  seo: {
    twitter: '',
    meta: [],
    link: [],
  },
  comment: {
    twikoo: { lang: 'es', envId: '', region: '' },
  },
}
