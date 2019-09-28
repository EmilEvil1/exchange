import path from 'path';

const paths = {public: {static: {}}, src: {}};
paths.root = path.resolve(__dirname, '../../');
paths.public.root = path.resolve(paths.root, './frontend/public');
paths.public.static.root = path.resolve(paths.public.root, './static');
paths.public.static.fonts = path.resolve(paths.public.static.root, './fonts');
paths.src.root = path.resolve(paths.root, './frontend/src');
paths.src.fonts = path.resolve(paths.src.root, './fonts');
paths.src.bundle = path.resolve(paths.src.root, './bundle.jsx');

const routing = {
  paths,
};

export default routing;
