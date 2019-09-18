import {reducer as form} from 'redux-form';
import appModel from 'frontend/src/models/app';
import authModel from 'frontend/src/models/auth';
import notifierModel from 'frontend/src/models/notifier';
import restModel from 'frontend/src/models/rest';
import routeModel from 'frontend/src/models/route';

const reducers = {
  form,
  [appModel.namespace]: appModel.reduce,
  [authModel.namespace]: authModel.reduce,
  [notifierModel.namespace]: notifierModel.reduce,
  [restModel.namespace]: restModel.reduce,
  [routeModel.namespace]: routeModel.reduce,
};

export default reducers;
