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
    A dynamic cloud-native eventing infrastructure used to decouple the application and backend middleware layer,
    which supports a wide range of use cases that encompass complex multi-cloud,
    widely distributed topologies using diverse technology stacks.
  `,
  url: 'https://eventmesh.apache.org',
  baseUrl: '/',
  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'apache',
  projectName: 'incubator-eventmesh',
  stylesheets: [
    'https://fonts.googleapis.com/css2?family=Inter:wght@400;700&display=swap',
  ],
  themeConfig: {
    navbar: {
      title: 'Apache EventMesh (Incubating)',
      logo: {
        alt: 'Apache EventMesh Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: '/blog',
          label: 'Blog',
          position: 'left',
        },
        // {
        //   type: 'doc',
        //   docId: 'intro',
        //   position: 'left',
        //   label: 'Docs',
        // },
        {
          type: 'doc',
          docsPluginId: 'events',
          docId: 'release-notes/v1.2.0',
          position: 'left',
          label: 'Events',
        },
        {
          type: 'doc',
          docsPluginId: 'community',
          docId: 'apache-release',
          position: 'left',
          label: 'Community',
        },
        // {
        //   type: 'localeDropdown',
        //   position: 'left',
        // },
      ],
    },
    footer: {
      style: 'light',
      links: [
        {
          title: 'EventMesh',
          items: [
            // {
            //   label: 'Documentation',
            //   to: '/docs',
            // },
            {
              label: 'Events',
              to: '/events',
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
              label: 'Thanks',
              href: 'http://www.apache.org/foundation/thanks.html',
            },
          ],
        },
      ],
      copyright: `
        Copyright © ${new Date().getFullYear()} The Apache Software Foundation.
        Apache EventMesh, Apache Incubator, EventMesh, Apache, the Apache feather logo,
        the Apache EventMesh logo and the Apache Incubator project logo
        are trademarks of The Apache Software Foundation.
      `,
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
          sidebarPath: require.resolve('./sidebars/docs.js'),
          editUrl: 'https://github.com/apache/incubator-eventmesh-site/edit/master/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/apache/incubator-eventmesh-site/edit/master/blog/',
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
