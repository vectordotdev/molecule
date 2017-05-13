import { SRC } from './paths';

export default [
  {
    test: /\.jsx?$/,
    include: SRC,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['latest', { es2015: { modules: false } }],
              'stage-3',
              'react',
            ],

          plugins: [
            [
              'react-css-modules',
              {
                context: SRC,
                // generateScopedName: '[path]___[name]__[local]___[hash:base64:5]',
              },
            ],
          ],

          env: {
            development: {
              plugins: [
                'react-hot-loader/babel',
              ],
            },

            production: {
              // TODO
            },
          },
        },
      },
    ],
  },

  {
    test: /\.jsx?$/,
    include: SRC,
    enforce: 'pre',
    use: [
      {
        loader: 'eslint-loader',
        options: {
          emitWarning: true,
        },
      },
    ],
  },
];
