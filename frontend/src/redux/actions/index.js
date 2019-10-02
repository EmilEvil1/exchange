import appModel from 'src/models/app/model';
import authModel from 'src/models/auth/model';
import notifierModel from 'src/models/notifier/model';
import restModel from 'src/models/rest/model';
import routeModel from 'src/models/route/model';

const actions = {
  [appModel.namespace]: appModel.actions,
  [authModel.namespace]: authModel.actions,
  [notifierModel.namespace]: notifierModel.actions,
  [restModel.namespace]: restModel.actions,
  [routeModel.namespace]: routeModel.actions,
};

export default actions;
