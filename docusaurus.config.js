const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

// Reverse the sidebar items ordering (including nested category items)
const reverseSidebarItems = (items) => {
  const result = items.map((item) => {
    if (item.type === 'category') {
      return {
        ...item,
        items: reverseSidebarItems(item.items),
      };
    }
    return item;
  });

  result.reverse();
  return result;
};

/** @type {import('@docusaurus/types').DocusaurusConfig} */
module.exports = {
  title: 'Apache EventMesh',
  tagline: `
    EventMesh is a new generation serverless event middleware for building distributed event-driven applications.
  `,
  url: 'https://eventmesh.apache.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'images/favicon.ico',
  organizationName: 'apache',
  projectName: 'eventmesh',
  themeConfig: {
    algolia: {
      appId: 'D5N4C17BGA',
      apiKey: 'b88c3c5f941724113717b2c8456d0422',
      indexName: 'apache_eventmesh',
    },
    navbar: {
      title: 'Apache EventMesh',
      logo: {
        alt: 'Apache EventMesh Logo',
        src: 'images/logo.png',
      },
      items: [
        {
          type: 'doc',
          docId: 'introduction',
          position: 'left',
          label: 'Documentation',
        },
        {
          to: '/download',
          label: 'Download',
          position: 'left',
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        {
          type: 'doc',
          docsPluginId: 'events',
          docId: 'release-notes/v1.10.0',
          position: 'left',
          label: 'Events',
        },
        {
          type: 'doc',
          docsPluginId: 'community',
          docId: 'how-to-subscribe',
          position: 'left',
          label: 'Community',
        },
        {
          to: '/team',
          position: 'left',
          label: 'Team',
        },
        {
          type: 'docsVersionDropdown',
          position: 'right',
          dropdownActiveClassDisabled: true,
        },
        {
          type: 'localeDropdown',
          position: 'right',
        },
        {
          href: 'https://github.com/apache/eventmesh',
          className: 'header-github-link',
          'aria-label': 'GitHub',
          position: 'right',
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
              to: '/docs/introduction',
            },
            {
              label: 'Events',
              to: '/events/release-notes/v1.10.0',
            },
            {
              label: 'Releases',
              href: 'https://github.com/apache/eventmesh/releases',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'GitHub',
              href: 'https://github.com/apache/eventmesh',
            },
            {
              label: 'Issue Tracker',
              href: 'https://github.com/apache/eventmesh/issues',
            },
            {
              label: 'Pull Requests',
              href: 'https://github.com/apache/eventmesh/pulls',
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
              href: 'https://www.apache.org/licenses/',
            },
            {
              label: 'Sponsorship',
              href: 'https://www.apache.org/foundation/sponsorship.html',
            },
            {
              label: 'Thanks',
              href: 'http://www.apache.org/foundation/thanks.html',
            },
            {
              label: 'Security',
              href: 'https://www.apache.org/security/',
            },
            {
              label: 'Events',
              href: 'https://www.apache.org/events/current-event',
            },
            {
              label: 'Privacy',
              href: 'https://privacy.apache.org/policies/privacy-policy-public.html',
            },
          ],
        },
      ],
      copyright: `
        Copyright © ${new Date().getFullYear()} The Apache Software Foundation.
        Apache EventMesh, EventMesh, Apache, the Apache feather logo,
        and the Apache EventMesh logo are trademarks of The Apache Software Foundation.
      `,
    },
    docs: {
      sidebar: {
        hideable: true,
      },
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
      additionalLanguages: [
        'bash',
        'java',
        'gradle',
        'groovy',
        'properties',
        'json',
        'protobuf',
        'sql',
        'antlr4',
        'log',
        'rust'
      ],
    },
  },
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'zh'],
    localeConfigs: {
      en: {
        label: 'English',
      },
      zh: {
        label: '简体中文',
      },
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars/docs.js'),
          editUrl: 'https://github.com/apache/eventmesh-site/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/apache/eventmesh-site/edit/master/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
  plugins: [
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'events',
        path: 'events',
        routeBasePath: 'events',
        sidebarPath: require.resolve('./sidebars/events.js'),
        async sidebarItemsGenerator({
          defaultSidebarItemsGenerator,
          ...args
        }) {
          const sidebarItems = await defaultSidebarItemsGenerator(args);
          return reverseSidebarItems(sidebarItems);
        },
      },
    ],
    [
      '@docusaurus/plugin-content-docs',
      {
        id: 'community',
        path: 'community',
        routeBasePath: 'community',
        sidebarPath: require.resolve('./sidebars/community.js'),
      },
    ],
  ],
};
