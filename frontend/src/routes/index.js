import truetype from 'frontend/utils/truetype';
import * as root from './root.routes';

const routes = [
  {
    path: '/',
    exact: true,
    component: root.root,
  },
  {
    name: 'page404',
    component: root.page404,
  },
];

export default routes;
