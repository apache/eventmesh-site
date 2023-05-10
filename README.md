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

## Sync Documentation from `apache/eventmesh`

The `npm run fetch` script (`scripts/fetch.ts`) clones the `apache/eventmesh` repository and copies the documentations to `docs` and `i18n/zh/docusaurus-plugin-content-docs`. To update the documentation, please create a pull request in the `apache/eventmesh` repository.

```sh
npm run fetch

npm run start -- --locale en
```

