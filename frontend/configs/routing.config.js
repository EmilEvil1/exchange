import path from 'path';

const paths = {public: {static: {}}, utils: {}, src: {}};
paths.root = path.resolve(__dirname, '../');
paths.public.root = path.resolve(paths.root, './public');
paths.public.static.root = path.resolve(paths.public.root, './static');
paths.utils.root = path.resolve(paths.root, './utils');
paths.src.root = path.resolve(paths.root, './src');
paths.src.bundle = path.resolve(paths.src.root, './bundle.jsx');

const routing = {
  paths,
};

export default routing;
