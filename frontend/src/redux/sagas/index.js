import {fork} from 'redux-saga/effects';
import appModel from 'frontend/src/models/app/model';
import notifierModel from 'frontend/src/models/notifier/model';
import restModel from 'frontend/src/models/rest';
import routeModel from 'frontend/src/models/route/model';

const sagas = (history, store) => function*() {
  yield fork(appModel.saga(history, store));
  yield fork(notifierModel.saga);
  yield fork(restModel.saga);
  yield fork(routeModel.saga);
};

export default sagas;
