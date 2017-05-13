import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleLintPlugin from'stylelint-webpack-plugin';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';

import { DIST, NODE_MODULES, SRC } from './paths';
import fontRules from './rules-fonts';
import javaScriptRules from './rules-javascript';
import mediaRules from './rules-media';
import styleRules from './rules-styles';

require('dotenv').config({ silent: true });

import getClientEnvironment from '../tools/env';
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
    'webpack-hot-middleware/client',
    './index_hot',
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
    new InterpolateHtmlPlugin(env.raw),
    new webpack.DefinePlugin(env.stringified),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NamedModulesPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.ejs`,
    }),
    new ExtractTextPlugin({
      disable: true,
    })
  ],

  devtool: 'eval-source-map',
};
