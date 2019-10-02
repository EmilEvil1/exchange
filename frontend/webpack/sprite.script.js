import fs from 'fs';
import {resolve} from 'path';

const symbolsDir = resolve(__dirname, '../src/sprite/symbols');
const sprite = resolve(__dirname, '../src/sprite/index.js');

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

fs.writeFileSync(sprite, `export default \`
<svg xmlns="//www.w3.org/2000/svg" style="z-index:-99999;position:fixed;top:-99999px;left:-99999px;visibility:hidden;opacity:0;">
  ${each(symbolsDir,/\.svg$/,(filepath) => fs.readFileSync(filepath, 'utf-8')).join('\n')}
</svg>
\`;
`);
