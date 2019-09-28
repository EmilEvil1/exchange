import http from 'http';
import express from 'express';
import webpack from 'webpack';
import wabpackDevMiddleware from 'webpack-dev-middleware';
import wabpackHotMiddleware from 'webpack-hot-middleware';
import proxy from 'http-proxy-middleware';
import webpackConfig from './webpack.config';
import routing from './routing.config';
import settings from './settings.config';

const compiler = webpack(webpackConfig);
const app = express();

app.set('port', settings.server.port);

app.use(wabpackDevMiddleware(compiler, {
  publicPath: webpackConfig.output.publicPath,
  serverSideRender: true
}));
app.use(wabpackHotMiddleware(compiler));

app.use('/static', express.static(routing.paths.public.static.root));
app.use('/api', proxy({
  target: 'http://www.fairpay24.com:8080',
  changeOrigin: true,
}));

app.get('*', (req, res) => res.sendFile(routing.paths.public.index));

const server = http.createServer(app);
server.listen(app.get('port'), err => {
  if (err) {
    return console.log(err);
  }
  return console.log(`Server has started on ${settings.server.fullhost}`);
});
