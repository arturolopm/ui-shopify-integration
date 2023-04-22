# ui-shopify-integration

## Setting up UI Shopify Integration:

This guide will walk you through setting up UI Shopify Integration on your local machine and deploying it to Netlify.

## Prerequisites:

Before you begin, make sure you have the following installed on your machine:

- Node.js
- NPM

## Steps:

- Clone the repository from Github using the following command:

```sh

git clone https://github.com/arturolopm/ui-shopify-integration.git
```

- Navigate to the project directory:

```sh
cd ui-shopify-integration
```

- Install the project dependencies using NPM:

```sh
npm install
```

- Start the development server:

```sh
npm run dev
```

- Open your web browser and navigate to http://localhost:<port> to see the app running locally. Replace <port> with the port number specified by your local server.

- To build the project for production, run the following command:

```sh
npm run build
```

- To preview the production build, run the following command:

```sh
npm run preview
```

- Once you're satisfied with the preview, you can deploy the app . Here's how:

Build command:

```sh
npm run build
```

- Publish directory: dist

- if you prefer you can see the result here:

[Netlify]

## License

MIT

[Netlify]: https://arturolopm-ui-shopify-integration.netlify.app/
