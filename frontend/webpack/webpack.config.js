import {resolve} from 'path';
import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import mode from 'src/utils/mode';
import routing from './routing.config';

const config = {
  name: 'webpack config',
  mode: process.env.NODE_ENV,
  devtool: mode({
    production: false,
    development: 'inline-source-map',
  }),
  resolve: {
    modules: [
      routing.paths.src.root,
      'node_modules'
    ],
    extensions: ['.js', '.jsx', '.json'],
    alias: mode({
      production: {
        'src': routing.paths.src.root,
      },
      development: {
        'react-dom': '@hot-loader/react-dom',
        'src': routing.paths.src.root,
      },
    }),
  },
  entry: mode({
    production: {
      bundle: [
        'whatwg-fetch',
        '@babel/polyfill',
        routing.paths.src.bundle,
      ],
    },
    development: {
      bundle: [
        'webpack-hot-middleware/client',
        'whatwg-fetch',
        '@babel/polyfill',
        routing.paths.src.bundle,
      ],
    },
  }),
  output: {
    path: routing.paths.public.root,
    filename: 'static/js/[name].min.js',
    chunkFilename: 'static/js/[name].chunk.min.js',
    publicPath: '/',
  },
  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PORT': JSON.stringify(process.env.PORT),
    }),
    new webpack.ContextReplacementPlugin(/moment[\\\/]lang$/, /^\.\/(en-gb|ru)$/),
    new CopyPlugin([{
      from: routing.paths.src.docs,
      to: routing.paths.public.static.docs,
    }, {
      from: routing.paths.src.fonts,
      to: routing.paths.public.static.fonts,
    }, {
      from: routing.paths.src.favicon,
      to: routing.paths.public.favicon,
    }]),
    mode.isDevelopment() && new webpack.HotModuleReplacementPlugin(),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: 'babel-loader',
      },
      // {
      //   test: /\./,
      //   loader: 'raw-loader',
      // },
      {
        test: /\.(jpe?g|png|gif|svg|ico)$/i,
        loader: 'file-loader',
      },
    ],
  },
  optimization: {
    minimize: mode.isProduction(),
    minimizer: [
      new TerserPlugin({
        cache: true,
        parallel: true,
        sourceMap: true,
      }),
    ],
  }
};

export default config;
