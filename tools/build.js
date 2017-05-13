// More info: https://webpack.js.org/api/node/

/* eslint-disable no-console */
/* eslint-disable comma-dangle */

import webpack from 'webpack';
import browserSync from 'browser-sync';
import historyApiFallback from 'connect-history-api-fallback';
import chalk from 'chalk';

require('dotenv').config({ silent: true });

import webpackConfig from '../webpackConfig/webpack.config.prod';


const env = process.env.NODE_ENV;
const compiler = webpack(webpackConfig);

console.log(chalk.cyan(
  `
=>  webpack is bundling project files...`
));

console.log(chalk.green(
  `=>  NODE_ENV is set to ${chalk.white(env)}.
`
));

compiler.run((err, stats) => {
  if (err) {
    console.log(chalk.red(err.stack || err));
    if (err.details) {
      console.log(chalk.red(err.details));
    }
    return 1;
  }

  stats.toJson('verbose');

  console.log(stats.toString({
    context: webpackConfig.context,
    performance: true,
    hash: true,
    timings: true,
    entrypoints: true,
    chunkOrigins: true,
    chunkModules: false,
    colors: true,
  }));

  const buildErrors = stats.hasErrors();
  const buildWarnings = stats.hasWarnings();

  if (buildErrors) {
    console.log(chalk.red.bold(
    `
:(  ERRORS DURING COMPILATION!
=>  Fix them and try again!`
    ));

    return 1;
  }

  console.log(chalk.green(
    `
:)  PROJECT FILES ARE COMPILED!
    `
  ));

  if (buildWarnings) {
    console.log(chalk.yellow(
      `=>  But build have some issues...
=>  Look at compiler warnings above!`
    ));
  }

  console.log(chalk.cyan(
    `
=>  Starting server to serve files from ${chalk.white.bold('dist')} folder...
    `
  ));

  const bs = browserSync.create();

  bs.init({
    server: {
      baseDir: 'dist',

      middleware: [
        historyApiFallback(),
      ],
    },

    port: 4000,

    ui: {
      port: 4001,
    },

    open: false,
    reloadOnRestart: true,
  });

  bs.emitter.on('init', () => {
    console.log(chalk.green(
      `[BS]  Browsersync server is running.
[BS]  NODE_ENV is set to ${chalk.white.bold(env)}.
[BS]  Access URLs are listed below.
      `
    ));
  });

  return 0;
});
