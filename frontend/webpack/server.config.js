import http from 'http';
import express from 'express';
import webpack from 'webpack';
import wabpackDevMiddleware from 'webpack-dev-middleware';
import wabpackHotMiddleware from 'webpack-hot-middleware';
import proxy from 'http-proxy-middleware';
import webpackConfig from './webpack.config';
import routing from './routing.config';
import settings from './settings.config';
import sprite from 'src/sprite';

const compiler = webpack(webpackConfig);
const app = express();

app.set('port', settings.server.port);

app.use(wabpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  serverSideRender: true
}));
app.use(wabpackHotMiddleware(compiler));
app.use('/static', express.static(routing.paths.public.static.root));
app.use('/rest', proxy({
  target: 'http://www.fairpay24.com:8080',
  changeOrigin: true,
  pathRewrite: {
    '^/rest': '/api'
  },
}));

app.get('*', (req, res) => res.send(`
  <!doctype html>
  <html lang="ru">
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
    <meta http-equiv="X-UA-Compatible" content="ie=edge">
    <title>Exchange</title>
  </head>
  <body>
    ${sprite}
    <div id="root" class="site-wrapper"></div>
    <script type="text/javascript" src="/static/bundle.js"></script>
  </body>
  </html>
`));

const server = http.createServer(app);

server.listen(app.get('port'), err => {
  if (err) {
    return console.log(err);
  }
  return console.log(`Server has started on ${settings.server.fullhost}`);
});
