import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';
import CircularDependencyPlugin from 'circular-dependency-plugin';
import AddAssetHtmlPlugin from 'add-asset-html-webpack-plugin';
import { BundleAnalyzerPlugin } from 'webpack-bundle-analyzer';
import DashboardPlugin from 'webpack-dashboard/plugin';

import fontRules from './rules-fonts';
import javaScriptRules from './rules-javascript';
import mediaRules from './rules-media';
import styleRules from './rules-styles';
import getClientEnvironment from '../tools/env';
import { DIST, NODE_MODULES, SRC, PUBLIC } from './paths';

require('dotenv').config({ silent: true });

const port = process.env.PORT || '3000';
const env = getClientEnvironment();

const rules = [
  ...fontRules,
  ...javaScriptRules,
  ...mediaRules,
  ...styleRules,
];

export default {
  context: SRC,

  entry: [
    'react-hot-loader/patch',
    `webpack-dev-server/client?http://localhost:${port}`,
    'webpack/hot/only-dev-server',
    './index',
  ],

  output: {
    filename: 'bundle.js',
    path: DIST,
    publicPath: '/',
  },

  module: {
    rules,
  },

  resolve: {
    modules: [
      `${NODE_MODULES}`,
      `${SRC}`
    ],

    extensions: ['.js', '.json', '.jsx'],

    alias: {

    },
  },

  plugins: [
    new DashboardPlugin(),
    new webpack.DllReferencePlugin({
      manifest: `${NODE_MODULES}/vendor-manifest.json`,
    }),
    new InterpolateHtmlPlugin(env.raw),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: `${PUBLIC}/index.html`,
    }),
    new AddAssetHtmlPlugin({
      filepath: `${NODE_MODULES}/vendor.dll.js`,
      includeSourcemap: false
    }),
    new ExtractTextPlugin({
      disable: true,
    }),
    new CircularDependencyPlugin({
      exclude: /a\.js|node_modules/, // exclude node_modules
      failOnError: false, // show a warning when there is a circular dependency
    }),
  ],

  devtool: 'eval-source-map',
};
