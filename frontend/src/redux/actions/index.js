import appModel from 'src/models/app';
import authModel from 'src/models/auth';
import notifierModel from 'src/models/notifier';
import restModel from 'src/models/rest';
import routeModel from 'src/models/route';

const actions = {
  [appModel.namespace]: appModel.actions,
  [authModel.namespace]: authModel.actions,
  [notifierModel.namespace]: notifierModel.actions,
  [restModel.namespace]: restModel.actions,
  [routeModel.namespace]: routeModel.actions,
};

export default actions;
