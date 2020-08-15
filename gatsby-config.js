module.exports = {
  siteMetadata: {
    title: 'Investment Programming and Management',
    description: 'Documentation for Investment Programming and Management Online System',
    repository: {
      baseUrl: 'https://github.com/mlab817/ipms-docs',
      subDirectory: 'src',
      branch: 'master'
    },
    keywords: 'investment,investment programming,documentation,system',
    lang: 'en',
    navigationStyle: '',
    isSearchEnabled: true
  },
  pathPrefix: `/gtc`,
  plugins: [
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'Carbon Design Gatsby Theme',
        short_name: 'Gatsby Theme Carbon',
        start_url: '/',
        background_color: '#ffffff',
        theme_color: '#0062ff',
        display: 'browser',
      },
    },
    {
      resolve: 'gatsby-theme-carbon',
      options: {
        iconPath: './src/images/favicon.png',
        mediumAccount: 'carbondesign',
        repository: {
          baseUrl:
            'https://github.com/carbon-design-system/gatsby-theme-carbon',
          subDirectory: '/packages/example',
        },
      },
    },
  ],
};
