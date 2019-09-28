import {fork} from 'redux-saga/effects';
import appModel from 'src/models/app/model';
import notifierModel from 'src/models/notifier/model';
import restModel from 'src/models/rest';
import routeModel from 'src/models/route/model';

const sagas = function*() {
  yield fork(appModel.saga);
  yield fork(notifierModel.saga);
  yield fork(restModel.saga);
  yield fork(routeModel.saga);
};

export default sagas;
