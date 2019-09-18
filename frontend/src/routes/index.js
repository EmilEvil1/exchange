import truetype from 'frontend/utils/truetype';
import * as root from './root.routes';

const routes = [
  {
    path: '/',
    exact: true,
    component: root.root,
  },
  {
    path: '/application/:id',
    exact: true,
    component: root.application,
  },
  {
    name: 'page404',
    component: root.page404,
  },
];

export default routes;
