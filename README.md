# Apache EventMesh Website

## Development

Clone and install dependencies:

```sh
git clone git@github.com:apache/eventmesh-site.git
cd eventmesh-site

npm install
```

Preview the website in development mode:

```sh
# Start the website with English documentations
npm run start -- --locale en

# Start the website with Chinese documentations
npm run start -- --locale zh
```

Build and view the website:

```sh
npm run build

npm run serve
```

## Check contents style

Before you commit your changes, you can check the style of the contents by running the following command:

```sh
$ npm run autocorrect --lint
```

And then follow the instructions to fix the style issues.

## Sync Documentation from `apache/eventmesh`

The `npm run fetch` script (`scripts/fetch.ts`) clones the `apache/eventmesh` repository and copies the documentations to `docs` and `i18n/zh/docusaurus-plugin-content-docs`. To update the documentation, please create a pull request in the `apache/eventmesh` repository.

```sh
npm run fetch

npm run start -- --locale en
```
