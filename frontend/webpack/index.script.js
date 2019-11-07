import fsx from 'fs-extra';
import {resolve} from 'path';
import routing from './routing.config';

const symbolsDir = resolve(__dirname, '../src/symbols');

const eachFiles = (path, test, callback) => {
  if (!fsx.existsSync(path)){
    console.log('no dir ', path);
    return null;
  }
  return fsx.readdirSync(path).map(file => {
    const filepath = resolve(path, file);
    if (fsx.lstatSync(filepath).isDirectory()) {
      return eachFiles(filepath, test, callback);
    } else if (test.test(filepath)) {
      return callback(filepath)
    }
    return null;
  });
};

fsx.writeFileSync(routing.paths.public.index, `
<!doctype html>
<html lang="ru">
  <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, user-scalable=no, initial-scale=1.0, maximum-scale=1.0, minimum-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Fair Pay</title>
      <link rel="shortcut icon" href="favicon.ico">
  </head>
  <body>
    <svg xmlns="//www.w3.org/2000/svg" style="z-index:-99999;position:fixed;top:-99999px;left:-99999px;visibility:hidden;opacity:0;">
      ${eachFiles(symbolsDir,/\.svg$/,(filepath) => fsx.readFileSync(filepath, 'utf-8').replace('<svg xmlns="http://www.w3.org/2000/svg"', '<symbol').replace('</svg', '</symbol')).join('\n')}
    </svg>
    <div id="root" class="site-wrapper"></div>
    <script type="text/javascript" src="/static/js/bundle.min.js?v=${Date.now()}"></script>
  </body>
</html>
`.trim());
