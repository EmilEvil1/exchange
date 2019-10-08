import truetype from 'src/utils/truetype';
import * as root from './root.routes';

const routes = [
  {
    path: '/',
    exact: true,
    component: root.root,
  },
  {
    path: '/sign-in',
    exact: true,
    component: root.signIn,
  },
  {
    path: '/sign-up',
    exact: true,
    component: root.signUp,
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
