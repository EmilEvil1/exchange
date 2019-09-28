import http from 'http';
import express from 'express';
import proxy from 'http-proxy-middleware';
import routing from './routing.config';
import settings from './settings.config';

const app = express();

app.set('port', settings.server.port);

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
