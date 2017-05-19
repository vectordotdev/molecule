import path from 'path';
import webpack from 'webpack';
import { dependencies } from '../package.json';

import { SRC, NODE_MODULES } from './paths';

const nodeOnly = ['electron-devtools-installer'];

module.exports = {
  context: SRC,
  entry: {
    vendor: [
      'babel-polyfill',
      ...Object.keys(dependencies)
      .filter(d => nodeOnly.indexOf(d) === -1)
    ] // [path.join(SRC, "vendors.js")] for explicit vendor imports
  },
  devtool: 'eval',
  output: {
    path: NODE_MODULES,
    publicPath: '/',
    filename: "[name].dll.js",
    library: "[name]"
  },
  plugins: [
    new webpack.DllPlugin({
      path: path.join(NODE_MODULES, "[name]-manifest.json"),
      name: "[name]"
    }),
    new webpack.optimize.OccurrenceOrderPlugin()
  ],
  performance: {
    hints: false,
  }
};