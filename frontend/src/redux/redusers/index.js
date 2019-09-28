import {reducer as form} from 'redux-form';
import appModel from 'src/models/app';
import authModel from 'src/models/auth';
import notifierModel from 'src/models/notifier';
import restModel from 'src/models/rest';
import routeModel from 'src/models/route';

const reducers = {
  form,
  [appModel.namespace]: appModel.reduce,
  [authModel.namespace]: authModel.reduce,
  [notifierModel.namespace]: notifierModel.reduce,
  [restModel.namespace]: restModel.reduce,
  [routeModel.namespace]: routeModel.reduce,
};

export default reducers;
