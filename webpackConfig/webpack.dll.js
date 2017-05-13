import path from 'path';
import webpack from 'webpack';

import { SRC, NODE_MODULES } from './paths';

module.exports = {
  context: SRC,
  entry: {
    vendor: [path.join(SRC, "vendors.js")]
  },
  devtool: 'inline-eval-cheap-source-map',
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