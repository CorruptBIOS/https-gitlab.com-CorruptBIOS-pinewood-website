module.exports = {
	dest: 'public/',
	title: 'PBST Handbook 2.0',
	head: [
		['link', { rel: 'icon', href: `/favicon.png` }]
	],
	ga: '',
	description: 'The unofficiall PBST handbook. (Version 2.0)',
	themeConfig: {
		repo: 'https://gitlab.com/TCOOfficiall/pbst-handbook.git',
		editLinks: false,
		editLinkText: '',
		lastUpdated: 'Last updated',
		nav: [
			{
				text: 'Home',
				link: '/'
			},
			{
				text: 'The Guide',
				link: '/guide/'
			},
			{
				text: 'Ranks',
				items: [
					{
						text: 'All PBST Officers Rules',
						link: '/ranks/#all-pbst-officers'
					},
					{
						text: 'Trainees',
						link: '/ranks/#trainee-s'
					},
{
						text: 'Tiers',
						link: '/ranks/#tiers'
					},
{
						text: 'Special Defence',
						link: '/ranks/#special-defence'
					},
{
						text: 'Trainers',
						link: '/ranks/#trainers'
					},
				]
			},
			{
				text: 'Contact',
				items: [
					{
						text: 'Discord',
						link: 'https://discord.gg/JHUnGsQ'
					}
				]
			}
		],
		docsDir: 'docs'
	}

};
