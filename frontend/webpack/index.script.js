import fs from 'fs';
import {resolve} from 'path';
import routing from './routing.config';

const symbolsDir = resolve(__dirname, '../src/sprite/symbols');
const index = resolve(routing.paths.public.root, './index.html');

const each = (path, test, callback) => {
  if (!fs.existsSync(path)){
    console.log('no dir ', path);
    return null;
  }
  return fs.readdirSync(path).map(file => {
    const filepath = resolve(path, file);
    if (fs.lstatSync(filepath).isDirectory()) {
      return each(filepath, test, callback);
    } else if (test.test(filepath)) {
      return callback(filepath)
    }
    return null;
  });
};

fs.writeFileSync(index, `
<!doctype html>
<html lang="ru">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Exchange</title>
  </head>
  <body>
    <svg xmlns="//www.w3.org/2000/svg" style="z-index:-99999;position:fixed;top:-99999px;left:-99999px;visibility:hidden;opacity:0;">
      ${each(symbolsDir,/\.svg$/,(filepath) => fs.readFileSync(filepath, 'utf-8')).join('\n')}
    </svg>
    <div id="root" class="site-wrapper"></div>
    <script type="text/javascript" src="/static/js/bundle.min.js"></script>
  </body>
</html>
`.trim());
