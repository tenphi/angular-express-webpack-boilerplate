# angular-express-webpack-boilerplate

A comprehensive boilerplate for express+angular application that uses webpack. It works in both production and development modes and provides automatic rebundling and restaring while developing.

This webpack configuration has several predefined loaders:
* [babel-loader](https://github.com/babel/babel-loader) for *.es6.js files
* [less-loader](https://github.com/webpack/less-loader) for *.less files
* [html-loader](https://github.com/webpack/html-loader) for *.html files
* [css-loader](https://github.com/webpack/css-loader) for *.css files
* [file-loader](https://github.com/webpack/file-loader) and [image-loader](https://github.com/novoda/image-loader) for *.jpeg, *.png, *.gif and *.svg files
* [postcss-loader](https://github.com/postcss/postcss-loader) for css postprocessing (autoprefixer + csswring)

...and plugins:
* extract-text-webpack-plugin for external css bundle in production mode
* stats-webpack-pluginto for [analyse](http://webpack.github.io/analyse/)

Default angular app has [angular-ui-router](https://github.com/angular-ui/ui-router) module.

Based on the great article: [The ultimate webpack setup](http://www.christianalfoni.com/articles/2015_04_19_The-ultimate-webpack-setup)

### installation

Clone the repo:

```bash
$ git clone git@github.com:tenphi/webpack-express-boilerplate.git my-project
$ cd my-project
```

Install dependencies:

```bash
$ npm install
```

Install webpack globally
```bash
$ npm install -g webpack
```

### development

Run server with:

```bash
$ npm start
```

It runs express server on localhost on port 3000 and webpack-dev-server on port 3001 with proxing requests from the first one to the second one.

You can specify host of the application:

```bash
$ APP_HOST=appdomain.com npm start
```

Application has two separate directory `frontend` and `backend`. The entry point for frontend is `frontend/app.es6.js` file and for backend it is `backend/server.js`.

### production

Build assets for the application:

```bash
$ NODE_ENV=production webpack -p --config webpack.production.config.js
```

Then run the app:

```bash
$ NODE_ENV=production npm start
```

Do not forget to specify your app domain in `server.js` for production mode!

### Have fun!
