module.exports = ctx => ({
  title: 'Pinewood Builders',
  description: 'The unofficial Pinewood Builders website!',
  dest: 'public/',
  themeConfig: {
    repo: 'https://gitlab.com/pinewood-builders/pinewood-website',
    editLinks: true,
    docsDir: 'docs/',
    logo: '/PBST-Logo.png',
    smoothScroll: true,
    algolia: ctx.isProd ? ({
      apiKey: '857a996795096390eefa22b6eeaf893d',
      indexName: 'pinewood-builders'
  }) : null,
    nav: [{
      text: 'Home',
      link: '/'
    },
    {
      text: 'History of PB',
      link: '/pb/history/'
    },
    {
      text: 'Pinewood',
      items: [{
          text: 'PBST-Handbook',
          link: 'https://pbst.pinewood-builders.com'
        },
        {
          text: 'TMS-Handbook',
          link: 'https://tms.pinewood-builders.com'
        },
        {
          text: 'PET-Handbook',
          link: 'https://pet.pinewood-builders.com'
        }
      ]
    }
  ]
  },
  sidebarDepth: 2,
  markdown: {
    linkify: true,
    extendMarkdown: md => {
      md.use(require('markdown-it-imsize'));
    },
  },
  plugins: [
    [
      'vuepress-plugin-zooming',
      {
        selector: '.theme-default-content img.zooming',
        delay: 1000,
        options: {
          bgColor: 'white',
          zIndex: 10000,
        },
      },
    ],
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-168777162-1' // UA-00000000-0
      }
    ]
  ],
})