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
          plugins: ['transform-class-properties']
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
