import path from 'path';

import { SRC } from './paths';

const env = process.env.NODE_ENV;

export default [
  {
    test: /\.(woff|woff2)$/,
    include: SRC,
    use: [
      {
        loader: 'url-loader',
        options: {
          name: path.join('[path]',
            (env === 'production') ? '[name].[hash:8].[ext]' : '[name].[ext]'),
          limit: 20000,
        },
      },
    ],
  },
];
