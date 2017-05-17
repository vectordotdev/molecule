import { SRC } from './paths';

export default [
  {
    test: /\.(js|jsx)$/,
    include: SRC,
    use: [
      {
        loader: 'babel-loader',
        options: {
          babelrc: false,
          presets: [
            ['env', { es2015: { modules: false } }],
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

            test: {
              plugins: ["transform-es2015-modules-commonjs"]
            }
          },
          plugins: ['transform-class-properties']
        },
      },
    ],
  },

  {
    test: [/\.js?$/, /\.jsx?$/],
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
