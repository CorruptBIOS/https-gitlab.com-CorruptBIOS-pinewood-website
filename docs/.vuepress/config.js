module.exports = {
  title: 'Pinewood Builders',
  description: 'The unofficiall Pinewood Builders website!',
  dest: 'public/',
  themeConfig: {
    repo: 'https://gitlab.com/pinewood-builders/pinewood-website',
    editLinks: true,
    docsDir: 'docs/',
    logo: '/PBST-Logo.png',
    smoothScroll: true,
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