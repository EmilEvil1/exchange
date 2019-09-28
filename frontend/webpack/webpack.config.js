import webpack from 'webpack';
import CopyPlugin from 'copy-webpack-plugin';
import TerserPlugin from 'terser-webpack-plugin';
import mode from 'src/utils/mode';
import routing from './routing.config';

const config = {
  name: 'Webpack config',
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
  output: mode({
    production: {
      path: routing.paths.public.root,
      filename: 'static/js/[name].min.js',
      chunkFilename: 'static/js/[name].chunk.min.js',
    },
    development: {
      path: routing.paths.public.root,
      filename: '[name].js',
      chunkFilename: '[name].chunk.js',
      publicPath: '/static/',
    },
  }),
  plugins: [
    mode({
      development: new webpack.HotModuleReplacementPlugin(),
    }),
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV),
      'process.env.PORT': JSON.stringify(process.env.PORT),
    }),
    new CopyPlugin([{
      from: routing.paths.src.fonts,
      to: routing.paths.public.static.fonts,
    }]),
  ].filter(Boolean),
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  optimization: mode({
    production: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          cache: true,
          parallel: true,
          sourceMap: true,
        }),
      ],
    },
  })
};

export default config;
