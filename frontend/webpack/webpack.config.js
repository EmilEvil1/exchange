import webpack from 'webpack';
import merge from 'webpack-merge';
import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import mode from 'src/utils/mode';
import routing from './routing.config';

const config = merge([
  mode({
    development: {
      devtool: mode({development: 'inline-source-map'}),
    },
  }),
  {
    name: 'Webpack config',
    mode: process.env.NODE_ENV,
    resolve: merge([
      {
        modules: [
          routing.paths.src.root,
          'node_modules'
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
      mode({
        development: {
          alias: {
            'react-dom': '@hot-loader/react-dom',
            'src': routing.paths.src.root,
          },
        },
        production: {
          alias: {
            'src': routing.paths.src.root,
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
    plugins: [
      ...mode({
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
      new CopyPlugin([{
        from: routing.paths.src.fonts,
        to: routing.paths.public.static.fonts,
      }]),
    ],
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
