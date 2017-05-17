/* eslint-disable no-console */
/* eslint-disable comma-dangle */

import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import webpackDevMiddleware from 'webpack-dev-middleware';
import webpackHotMiddleware from 'webpack-hot-middleware';
import formatWebpackMessages from 'react-dev-utils/formatWebpackMessages';
import clearConsole from 'react-dev-utils/clearConsole';
import historyApiFallback from 'connect-history-api-fallback';
import chalk from 'chalk';

import webpackConfig from '../webpackConfig/webpack.config.dev';
import { copyPublicFolder } from './files';
import { DIST, PUBLIC } from '../webpackConfig/paths';

// Heavily inspired by CRA, thanks Dan!
require('dotenv').config({ silent: true });

const isInteractive = process.stdout.isTTY;
const env = process.env.NODE_ENV;
const port = process.env.PORT || '3000';
let compiler;

function buildCompiler() {
  compiler = webpack(webpackConfig);
  let isFirstCompile = true;

  // "invalid" event fires when you have changed a file, and Webpack is
  // recompiling a bundle. WebpackDevServer takes care to pause serving the
  // bundle, so if you refresh, it'll wait instead of serving the old one.
  // "invalid" is short for "bundle invalidated", it doesn't imply any errors.
  compiler.plugin('invalid', function() {
    console.log('Compiling...');
  });

  // "done" event fires when Webpack has finished recompiling the bundle.
  // Whether or not you have warnings or errors, you will get this event.
  compiler.plugin('done', function(stats) {
    // We have switched off the default Webpack output in WebpackDevServer
    // options so we are going to "massage" the warnings and errors and present
    // them in a readable focused way.
    var messages = formatWebpackMessages(stats.toJson({}, true));
    var isSuccessful = !messages.errors.length && !messages.warnings.length;
    var showInstructions = isSuccessful && (isInteractive || isFirstCompile);

    if (showInstructions) {
      console.log();
      console.log(chalk.green(
        `=>  [\u2713] Compile successful, the app is running at localhost:${port}`
      ));
      isFirstCompile = false;
    }

    // If errors exist, only show errors.
    if (messages.errors.length) {
      console.log(chalk.red('Failed to compile.'));
      messages.errors.forEach(message => {
        console.log(message);
        console.log();
      });
      return;
    }

    // Show warnings if no errors were found.
    if (messages.warnings.length) {
      console.log(chalk.yellow('Compiled with warnings.'));
      console.log();
      messages.warnings.forEach(message => {
        console.log(message);
        console.log();
      });
    }
  });
}

function addMiddleware(devServer) {
  devServer.use(historyApiFallback({
    // Paths with dots should still use the history fallback.
    // See https://github.com/facebookincubator/create-react-app/issues/387.
    disableDotRule: true
  }));

  // Finally, by now we have certainly resolved the URL.
  // It may be /index.html, so let the dev server try serving it again.
  devServer.use(devServer.middleware);
}

function startDevServer() {
  const devServer = new WebpackDevServer(compiler, {
    hot: true,
    host: port,
    contentBase: DIST,
    publicPath: '/',
    historyApiFallback: true,
    compress: true,
    quiet: true,
    watchOptions: {
      ignored: /node_modules/
    }
  });

  // // Add hot middleware
  // addMiddleware(devServer);

  devServer.listen(3000, err => {
    if (err) {
      return console.log(err);
    }

    console.log(chalk.green(`=>  [\u2713] Development server starting...`));
  });
}

function run() {
  copyPublicFolder();
  buildCompiler();
  startDevServer();
}

// Kick off the build
run();