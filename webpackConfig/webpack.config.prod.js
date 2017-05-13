import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import StyleLintPlugin from'stylelint-webpack-plugin';
import ImageminPlugin from 'imagemin-webpack-plugin';
import InterpolateHtmlPlugin from 'react-dev-utils/InterpolateHtmlPlugin';

import { DIST, NODE_MODULES, SRC, ROOT } from './paths';
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
    new InterpolateHtmlPlugin(env.raw),
    new webpack.DefinePlugin(env.stringified),
    new webpack.optimize.UglifyJsPlugin({
      sourceMap: true,
    }),
    new HtmlWebpackPlugin({
      template: `${SRC}/index.ejs`,
    }),
    new ExtractTextPlugin({
      filename: '[name].[contenthash:8].bundle.css',
    }),
    new StyleLintPlugin({
      configFile: '.stylelintrc.js',
      files: ['**/*.css'],
      // syntax: 'scss',
    }),
    new ImageminPlugin({
      gifsicle: {
        interlaced: true,
      },
      jpegtran: {
        progressive: true,
      },
    }),
  ],

  devtool: 'source-map',

  performance: {
    hints: 'warning',
  },

  profile: true,
};
