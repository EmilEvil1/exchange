import path from 'path';

const paths = {frontend: {public: {static: {}}, utils: {}, src: {}}};
paths.root = path.resolve(__dirname, '../../');
paths.frontend.root = path.resolve(paths.root, './frontend');
paths.frontend.public.root = path.resolve(paths.frontend.root, './public');
paths.frontend.public.static.root = path.resolve(paths.frontend.public.root, './static');
paths.frontend.utils.root = path.resolve(paths.frontend.root, './utils');
paths.frontend.src.root = path.resolve(paths.frontend.root, './src');
paths.frontend.src.bundle = path.resolve(paths.frontend.src.root, './bundle.jsx');

const routing = {
  paths,
};

export default routing;
