const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Apache EventMesh',
  tagline: 'Dynamic cloud-native eventing infrastruture',
  url: 'https://eventmesh.apache.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'apache',
  projectName: 'incubator-eventmesh',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter&display=swap',
  ],
  themeConfig: {
    navbar: {
      title: 'Apache EventMesh',
      logo: {
        alt: 'Apache EventMesh Logo',
        src: 'img/logo.svg',
      },
      items: [
        {
          type: 'doc',
          docId: 'intro',
          position: 'left',
          label: 'Docs',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          to: '/contribute',
          label: 'Contribute',
          position: 'left',
        },
        {
          type: 'localeDropdown',
          position: 'left',
        },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'EventMesh',
          items: [
            {
              label: 'Documentation',
              to: '/docs',
            },
            {
              label: 'Contribute',
              to: '/contribute',
            },
            {
              label: 'Releases',
              href: 'https://github.com/apache/incubator-eventmesh/releases',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/apache/incubator-eventmesh',
            },
            {
              label: 'Issue Tracker',
              href: 'https://github.com/apache/incubator-eventmesh/issues',
            },
            {
              label: 'Pull Requests',
              href: 'https://github.com/apache/incubator-eventmesh/pulls',
            },
          ],
        },
        {
          title: 'Apache Software Foundation',
          items: [
            {
              label: 'Foundation',
              href: 'https://www.apache.org/',
            },
            {
              label: 'License',
              href: 'https://www.apache.org/licenses/LICENSE-2.0',
            },
            {
              label: 'Sponsorship',
              href: 'https://www.apache.org/foundation/sponsorship.html',
            },
            {
              label: 'Code of Conduct',
              href: 'https://www.apache.org/foundation/policies/conduct',
            },
            {
              label: 'Thanks',
              href: 'http://www.apache.org/foundation/thanks.html',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} The Apache Software Foundation.`,
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh-hans'],
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};
