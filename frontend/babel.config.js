module.exports = {
  presets: [
    [
      '@babel/preset-env',
      {
        targets: {
          browsers: ['last 10 versions', 'safari >= 8', 'ie >= 10'],
        },
        corejs: 3,
        useBuiltIns: 'entry',
        debug: false,
      },
    ],
    '@babel/preset-react',
  ],
  plugins: [
    '@babel/plugin-syntax-dynamic-import',
    '@babel/plugin-proposal-export-default-from',
    '@babel/plugin-proposal-export-namespace-from',
    ['@babel/plugin-proposal-decorators', {legacy: true}],
    ['@babel/plugin-proposal-class-properties', {loose: true}],
  ],
  env: {
    development: {
      plugins: [
        'react-hot-loader/babel',
        [
          'babel-plugin-styled-components',
          {
            pure: true,
          },
        ],
      ],
    },
  },
};
