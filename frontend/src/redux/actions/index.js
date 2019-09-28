import appModel from 'frontend/src/models/app';
import authModel from 'frontend/src/models/auth';
import notifierModel from 'frontend/src/models/notifier';
import restModel from 'frontend/src/models/rest';
import routeModel from 'frontend/src/models/route';

const actions = {
  [appModel.namespace]: appModel.actions,
  [authModel.namespace]: authModel.actions,
  [notifierModel.namespace]: notifierModel.actions,
  [restModel.namespace]: restModel.actions,
  [routeModel.namespace]: routeModel.actions,
};

export default actions;
