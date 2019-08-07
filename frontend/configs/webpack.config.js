import webpack from 'webpack';
import merge from 'webpack-merge';
import TerserPlugin from 'terser-webpack-plugin';
import routing from 'frontend/configs/routing.config';
import mode from 'frontend/utils/mode';

const config = merge([
  mode({
    development: {
      devtool: mode({ development: 'cheap-module-eval-source-map' }),
    },
  }),
  {
    name: 'Webpack config',
    mode: process.env.NODE_ENV,
    resolve: merge([
      {
        modules: [
          routing.paths.utils.root,
          routing.paths.src.root,
          'node_modules'
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
      mode({
        development: {
          alias: {
            'react-dom': '@hot-loader/react-dom',
            'frontend': routing.paths.root,
          },
        },
        production: {
          alias: {
            'frontend': routing.paths.root,
          },
        },
      }),
    ]),
    entry: mode({
      development: {
        bundle: [
          'webpack-hot-middleware/client',
          'whatwg-fetch',
          '@babel/polyfill',
          routing.paths.src.bundle,
        ],
      },
      production: {
        bundle: [
          'whatwg-fetch',
          '@babel/polyfill',
          routing.paths.src.bundle,
        ],
      },
    }),
    output: mode({
      development: {
        path: routing.paths.public.root,
        filename: '[name].js',
        chunkFilename: '[name].chunk.js',
        publicPath: '/static/',
      },
      production: {
        path: routing.paths.public.root,
        filename: 'static/js/[name].min.js',
        chunkFilename: 'static/js/[name].chunk.min.js',
      },
    }),
    plugins: mode({
      development: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          'process.env.PORT': JSON.stringify(process.env.PORT),
        }),
      ],
      production: [
        new webpack.DefinePlugin({
          'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
          'process.env.PORT': JSON.stringify(process.env.PORT),
        }),
      ],
    }),
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
      ],
    },
  },
  mode({
    production: {
      optimization: {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            cache: true,
            parallel: true,
            sourceMap: true,
          }),
        ],
      },
    },
  }),
]);

export default config;
