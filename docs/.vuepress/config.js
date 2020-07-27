module.exports = ctx => ({
  title: 'Pinewood Builders',
  description: 'The unofficial Pinewood Builders website!',
  dest: 'public/',
  themeConfig: {
    repo: 'https://gitlab.com/pinewood-builders/pinewood-website',
    editLinks: true,
    docsDir: 'docs/',
    logo: '/PB-Logo.png',
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
    },
    {
      text: 'Discords',
      items: [{
          text: 'PB',
          link: 'https://discord.gg/RHWxvhc'
        },{
          text: 'PBST',
          link: 'https://discord.gg/DDUzTwM'
        },
        {
          text: 'TMS',
          link: 'https://discord.gg/3axZ5tb'
        },
        {
          text: 'PET',
          link: 'https://discord.gg/t4KBPkM'
        },{
          text: 'PBA',
          link: 'https://discord.gg/MVAcxTS'
        },{
          text: 'PBM',
          link: 'https://discord.gg/yTVFKne'
        },{
          text: 'MM',
          link: 'https://discord.gg/EjBYFCd'
        },{
          text: 'PBQA',
          link: 'https://discord.gg/6xwcuRh'
        },
]
    }
  ]
  },
  sidebarDepth: 3,
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        'ga': 'UA-168777162-1' // UA-00000000-0
      }
    ]
  ],
})
