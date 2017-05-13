/* eslint-disable no-console */
/* eslint-disable comma-dangle */

import browserSync from 'browser-sync';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import historyApiFallback from 'connect-history-api-fallback';
import chalk from 'chalk';

require('dotenv').config({ silent: true });

import webpackConfig from '../webpackConfig/webpack.config.dev';

const env = process.env.NODE_ENV;
const bs = browserSync.create();
const compiler = webpack(webpackConfig);

// function copyPublicFolder() {
//   fs.copySync(paths.appPublic, paths.appBuild, {
//     dereference: true,
//     filter: file => file !== paths.appHtml
//   });
// }

// function findVendorDLL() {
//   const paths = klaw(buildPath, { nodir: true });
//   return paths.find(f => f.path.includes('vendor')).path;
// }

const devMiddlewareOptions = {
  publicPath: webpackConfig.output.publicPath,
  stats: {
    context: webpackConfig.context,
    hash: false,
    version: false,
    timings: false,
    entrypoints: true,
    chunkOrigins: true,
    chunkModules: false,
    children: false,
    colors: true,
    chunks: false
  },
};

bs.init({
  server: {
    baseDir: 'src',

    middleware: [
      historyApiFallback(),
      webpackDevMiddleware(compiler, devMiddlewareOptions),
      webpackHotMiddleware(compiler),
    ],
  },

  port: 3000,

  ui: {
    port: 3001,
  },

  open: false,
  reloadOnRestart: true,

  // no need to watch '*.js' here, webpack will take care of it for us,
  // including full page reloads if HMR won't work
  files: [
    'src/css/*.css',
    // 'dist/*.html',
  ],
});

bs.emitter.on('init', () => {
  console.log(chalk.green(
    `
[BS]  Browsersync server is running.
[BS]  NODE_ENV is set to ${chalk.white.bold(env)}.
[BS]  Access URLs are listed below.
    `
  ));
});
