import ExtractTextPlugin from 'extract-text-webpack-plugin';

import { SRC } from './paths';

export default [
  {
    test: /\.css$/,
    include: SRC,
    use: ExtractTextPlugin.extract({
      fallback: {
        loader: 'style-loader',
        options: {
          // pass loader options here
        },
      },
      use: [
        {
          loader:'css-loader',
          options: {
            modules: true,
            localIdentName: '[path]___[name]__[local]___[hash:base64:5]',
            importLoaders: 1,
          },
        },

        {
          loader: 'postcss-loader',
          options: {
            // pass loader options here
          },
        },
      ],
    }),
  },
];
