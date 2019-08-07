import {reducer as form} from 'redux-form';
import appModel from 'frontend/src/models/app/model';
import notifierModel from 'frontend/src/models/notifier/model';
import restModel from 'frontend/src/models/rest';
import routeModel from 'frontend/src/models/route/model';

const reducers = {
  form,
  [appModel.namespace]: appModel.reducer,
  [notifierModel.namespace]: notifierModel.reducer,
  [restModel.namespace]: restModel.reducer,
  [routeModel.namespace]: routeModel.reducer,
};

export default reducers;
