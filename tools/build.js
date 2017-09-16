// More info: https://webpack.js.org/api/node/

/* eslint-disable no-console */
/* eslint-disable comma-dangle */

import webpack from 'webpack';
import historyApiFallback from 'connect-history-api-fallback';
import chalk from 'chalk';
const FileSizeReporter = require('react-dev-utils/FileSizeReporter');

// Add any config variables in a .env file and they will be included
// during the build process and available in your app
require('dotenv').config({ silent: true });

import { PUBLIC, DIST } from '../webpackConfig/paths';
import webpackConfig from '../webpackConfig/webpack.config.prod';
import { copyPublicFolder } from './files';

// If you want to use the DLL in production instead of
// CommonsChunks this will let you find the hashed file name
// so you can append it to the body of public/index.html
// function findVendorDLL() {
//   const paths = klaw(buildPath, { nodir: true });
//   return paths.find(f => f.path.includes('vendor')).path;
// }

const env = process.env.NODE_ENV;
const compiler = webpack(webpackConfig);

console.log(chalk.cyan(`=>  webpack is bundling project files...`));
console.log(chalk.green(`=>  NODE_ENV is set to ${chalk.white(env)}.`));

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

  console.log(chalk.green('Syncing files from public to dist'));
  copyPublicFolder();

  if (buildWarnings) {
    console.log(chalk.yellow(
      `=>  But the build has some issues...
=>  Look at the compiler warnings above!`
    ));
  }

  return 0;
});
