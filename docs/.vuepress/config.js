module.exports = {
  title: 'Pinewood Builders',
  description: 'The unofficial Pinewood Builders website!',
  dest: 'public/',
  themeConfig: {
    repo: 'https://gitlab.com/pinewood-builders/pinewood-website',
    editLinks: true,
    docsDir: 'docs/',
    logo: '/PBST-Logo.png',
    smoothScroll: true,
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
          link: 'https://pet.pinewood-builders.ga'
        },
        {
          text: 'TMS-Handbook',
          link: 'https://tms.pinewood-builders.ga'
        },
        {
          text: 'PET-Handbook',
          link: 'https://pet.pinewood-builders.ga'
        }
      ]
    }
  ]
  },
  sidebarDepth: 2,
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
  ],
}