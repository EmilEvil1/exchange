import {reducer as form} from 'redux-form';
import appModel from 'src/models/app/model';
import authModel from 'src/models/auth/model';
import notifierModel from 'src/models/notifier/model';
import restModel from 'src/models/rest/model';
import routeModel from 'src/models/route/model';

const reducers = {
  form,
  [appModel.namespace]: appModel.reduce,
  [authModel.namespace]: authModel.reduce,
  [notifierModel.namespace]: notifierModel.reduce,
  [restModel.namespace]: restModel.reduce,
  [routeModel.namespace]: routeModel.reduce,
};

export default reducers;
