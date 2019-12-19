import {createActions, handleActions} from 'redux-actions';
import {all, put, fork, take, cancel, select} from 'redux-saga/effects';
import get from 'lodash/get';
import notifierModel from 'src/models/notifier/model';
import authModel from 'src/models/auth/model';
import truetype from 'src/utils/truetype';
import request from 'src/utils/request';

const restModel = () => {
  const namespace = 'rest';

  const createPayload = payload => payload;
  const createMeta = (payload, meta) => meta;
  const creaters = [createPayload, createMeta];

  const actions = createActions(
    {
      request: creaters,
      requestFail: creaters,
      receive: creaters,
      requestAll: creaters,
      requestAllFail: creaters,
      receiveAll: creaters,
      reset: creaters,
    },
    {
      prefix: namespace
    }
  );

  const utils = {
    restIsLoading(fieldId) {
      return (state) => {
        const field = state[namespace][fieldId];
        if (field === undefined) {
          return false;
        }
        return field.status === 'loading';
      }
    },
    restIsFail(fieldId) {
      return (state) => {
        const field = state[namespace][fieldId];
        if (field === undefined) {
          return false;
        }
        return field.status === 'fail';
      }
    },
    restIsReceived(fieldId) {
      return (state) => {
        const field = state[namespace][fieldId];
        if (field === undefined) {
          return false;
        }
        return field.status === 'received';
      }
    },
    restContent(fieldId, defaultValue) {
      return (state) => {
        const field = state[namespace][fieldId];
        if (field === undefined || field.content === undefined) {
          return defaultValue;
        }
        return field.content;
      }
    },
  };

  const takeLatestRequest = (() => {
    const tasks = {};
    return (pattern, saga, ...args) =>
      fork(function*() {
        while (true) {
          const action = yield take(pattern);
          const {fieldId} = action.meta;
          if (tasks[fieldId]) {
            yield cancel(tasks[fieldId]);
          }
          tasks[fieldId] = yield fork(saga, ...args, action);
        }
      });
  })();

  const sagas = {
    utils: {
      *getField(fieldId) {
        return yield select(state => state[namespace][fieldId]);
      },
      withField(callback) {
        return function*(action) {
          const {meta} = action;
          const field = yield sagas.utils.getField(meta.fieldId);
          if (field === undefined) {
            return null;
          }
          return yield callback(action);
        };
      },
    },
    *request({payload, meta}) {
      if (!(yield authModel.sagas.utils.withPermissions(meta.permissions))) {
        return yield put(actions.reset(null, meta));
      }
      const {error, result} = yield request(payload);
      if (!(yield sagas.utils.getField(meta.fieldId))) {
        return null;
      }
      if (error) {
        if (truetype.isFunction(meta.onFail)) {
          yield meta.onFail(result);
        }
        return yield put(actions.requestFail(error, meta));
      }
      if (truetype.isFunction(meta.onSuccess)) {
        yield meta.onSuccess(result);
      }
      return yield put(actions.receive(result.payload, meta));
    },
    *requestFail({payload: error}) {
      return yield put(
        notifierModel.actions.send({
          type: 'error',
          message: `messages:${get(error, 'payload.type', 'missingErrorMessage')}`,
        })
      );
    },
    *requestAll({payload, meta}) {
      if (!(yield authModel.sagas.utils.withPermissions(meta.permissions))) {
        return yield put(actions.reset(null, meta));
      }
      const {error, result} = yield request({
        endpoint: `/api/${payload}/all`,
      });
      if (!(yield sagas.utils.getField(meta.fieldId))) {
        return null;
      }
      if (error) {
        if (truetype.isFunction(meta.onFail)) {
          yield meta.onFail(result);
        }
        return yield put(actions.requestAllFail(error, meta));
      }
      if (truetype.isFunction(meta.onSuccess)) {
        yield meta.onSuccess(result);
      }
      return yield put(actions.receiveAll(result.payload, meta));
    },
    *requestAllFail({payload: error}) {
      return yield put(
        notifierModel.actions.send({
          type: 'error',
          message: `messages:${get(error, 'payload.type', 'missingErrorMessage')}`,
        })
      );
    },
  };

  const saga = function*() {
    return yield all([
      takeLatestRequest(actions.request, sagas.utils.withField(sagas.request)),
      takeLatestRequest(actions.requestFail, sagas.utils.withField(sagas.requestFail)),
      takeLatestRequest(actions.requestAll, sagas.utils.withField(sagas.requestAll)),
      takeLatestRequest(actions.requestAllFail, sagas.utils.withField(sagas.requestAllFail)),
    ]);
  };

  const reduceHelper = reduce => (state, action) => {
    const {
      type,
      meta: {fieldId},
    } = action;
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
      [fieldId]: reduce(state[fieldId], action),
    };
  };

  const reduce = handleActions(
    {
      [actions.request]: reduceHelper(state => ({
        ...state,
        status: 'loading',
      })),
      [actions.requestFail]: reduceHelper(state => ({
        ...state,
        status: 'fail',
      })),
      [actions.receive]: reduceHelper((state, {payload}) => ({
        status: 'received',
        content: payload,
      })),
      [actions.requestAll]: reduceHelper(state => ({
        ...state,
        status: 'loading',
      })),
      [actions.requestAllFail]: reduceHelper(state => ({
        ...state,
        status: 'fail',
      })),
      [actions.receiveAll]: reduceHelper((state, {payload}) => ({
        status: 'received',
        content: payload,
      })),
      [actions.reset]: reduceHelper(),
    },
    {},
  );

  return {
    namespace,
    utils,
    actions,
    reduce,
    sagas,
    saga,
  };
};

export default restModel();
