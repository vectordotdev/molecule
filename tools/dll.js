// More info: https://webpack.js.org/api/node/

/* eslint-disable no-console */
/* eslint-disable comma-dangle */

import webpack from 'webpack';
import chalk from 'chalk';

require('dotenv').config({ silent: true });

import webpackConfig from '../webpackConfig/webpack.dll.js';

const env = process.env.NODE_ENV;
const compiler = webpack(webpackConfig);

console.log(chalk.cyan(`=>  webpack is building dll...`));
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
      `ERRORS DURING COMPILATION! Fix them and try again!`
    ));

    return 1;
  }

  console.log(
    chalk.green(`=>  [\u2713] Vendor modules are compiled according DLL manifest`)
  );

  if (buildWarnings) {
    console.log(chalk.yellow(
      `=>  But the build has some issues...
=>  Look at compiler warnings above!`
    ));
  }

  return 0;
});
