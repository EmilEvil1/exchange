import {resolve} from 'path';

const paths = {public: {static: {}}, src: {}};
paths.root = resolve(__dirname, '../../');
paths.public.root = resolve(paths.root, './frontend/public');
paths.public.index = resolve(paths.public.root, './index.html');
paths.public.static.root = resolve(paths.public.root, './static');
paths.public.static.docs = resolve(paths.public.static.root, './docs');
paths.public.static.fonts = resolve(paths.public.static.root, './fonts');
paths.src.root = resolve(paths.root, './frontend/src');
paths.src.docs = resolve(paths.src.root, './docs');
paths.src.fonts = resolve(paths.src.root, './fonts');
paths.src.favicon = resolve(paths.src.root, './favicon.ico');
paths.src.bundle = resolve(paths.src.root, './bundle.jsx');

const routing = {
  paths,
};

export default routing;
