import {all, put, fork, take, cancel} from 'redux-saga/effects';
import {createActions, handleActions} from 'redux-actions';
import request from 'frontend/utils/request';
import notifierModel from 'frontend/src/models/notifier/model';


const restModel = () => {
  const namespace = 'rest';

  const createPayload = payload => payload;
  const createMeta = (payload, meta) => meta;
  const creaters = [createPayload, createMeta];

  const actions = createActions({
    request: creaters,
    requestFail: creaters,
    receive: creaters,
    requestAll: creaters,
    requestAllFail: creaters,
    receiveAll: creaters,
    reset: creaters,
  }, {
    prefix: namespace,
  });

  const takeLatestRequest = ((tasks) => {
    return (pattern, saga, ...args) =>
        fork(function*() {
          while (true) {
            const action = yield take(pattern);
            const {fieldId: taskId} = action.meta;
            if (tasks[taskId]) {
              yield cancel(tasks[taskId]);
            }
            tasks[taskId] = yield fork(saga, ...args, action);
          }
        });
  })({});

  const reduceHelper = reduce => (state, action) => {
    const {
      type,
      meta: {fieldId},
    } = action;
    const field = state[fieldId];
    if (type === String(actions.reset)) {
      return Object.entries(state).reduce((result, [key, value]) => {
        if (key === fieldId) {
          return result;
        }
        return {
          ...result,
          [key]: value,
        };
      }, {});
    }
    return {
      ...state,
      [fieldId]: reduce(field, action),
    };
  };

  const reducer = handleActions({
    [actions.request]: reduceHelper((field) => ({
      ...field,
      status: 'loading',
    })),
    [actions.requestFail]: reduceHelper((field) => ({
      ...field,
      status: 'fail',
    })),
    [actions.receive]: reduceHelper((field, {payload}) => ({
      status: 'received',
      content: payload,
    })),
    [actions.requestAll]: reduceHelper((field) => ({
      ...field,
      status: 'loading',
    })),
    [actions.requestAllFail]: reduceHelper((field) => ({
      ...field,
      status: 'fail',
    })),
    [actions.receiveAll]: reduceHelper((field, {payload}) => ({
      status: 'received',
      content: payload,
    })),
    [actions.reset]: reduceHelper(),
  }, {});

  const sagas = {
    *request({payload, meta}) {
      if (Array.isArray(meta.authorities) && !(yield utilHasAuthority(...meta.authorities))) {
        return yield put(actions.reset(null, meta));
      }
      const {error, result} = yield request(payload);
      if (error) {
        return yield put(actions.requestFail(error, meta));
      }
      return yield put(actions.receive(result.payload, meta));
    },
    *requestFail({payload: error}) {
      return yield put(
          notifierModel.actions.sendNotification({
            type: 'error',
            message: 'TODO: message',
          })
      );
    },
    *requestAll({payload, meta}) {
      if (Array.isArray(meta.authorities) && !(yield utilHasAuthority(...meta.authorities))) {
        return yield put(actions.reset(null, meta));
      }
      const {error, result} = yield request({
        endpoint: `/rest/${payload}/all`,
      });
      if (error) {
        return yield put(actions.requestAllFail(error, meta));
      }
      return yield put(actions.receiveAll(result.payload, meta));
    },
    *requestAllFail({payload: error}) {
      return yield put(
          notifierModel.actions.sendNotification({
            type: 'error',
            message: 'TODO: message',
          })
      );
    },
  };

  const saga = function*() {
    yield all([
      takeLatestRequest(actions.request, sagas.request),
      takeLatestRequest(actions.requestFail, sagas.requestFail),
      takeLatestRequest(actions.requestAll, sagas.requestAll),
      takeLatestRequest(actions.requestAllFail, sagas.requestAllFail),
    ]);
  };

  return {
    namespace,
    actions,
    reducer,
    saga,
  };
};

export default restModel();
