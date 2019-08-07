import {select, put, delay, takeEvery, all} from 'redux-saga/effects';
import {createActions, handleActions} from 'redux-actions';

// TODO переделать модель
// export type NotifierItemType = {
//   id: number,
//   type: string | void,
//   title: string | void,
//   message: string | void,
//   isHidden: boolean,
//   autoDismiss: number | void,
//   lockAutoDismiss: boolean | void,
// };

const notifierModel = () => {
  const namespace = 'notifier';

  const createPayload = payload => payload;
  const createMeta = (payload, meta) => meta;
  const creators = [createPayload, createMeta];

  const actions = createActions({
    sendNotification: creators,
    showNotification: creators,
    hideNotification: creators,
    removeNotification: creators,
    lockAutoDismissNotification: creators,
  }, {
    prefix: namespace
  });

  let counter = 0;
  const reducer = handleActions(
      {
        [actions.sendNotification]: (state, {payload}) => {
          const id = counter;
          counter += 1;
          return [...state, {...payload, id, isHidden: true}];
        },
        [actions.showNotification]: (state, {payload}) =>
            state.map(item => {
              if (item.id === payload) {
                return {...item, isHidden: false};
              }
              return item;
            }),
        [actions.hideNotification]: (state, {payload}) =>
            state.map(item => {
              if (item.id === payload) {
                return {...item, isHidden: true};
              }
              return item;
            }),
        [actions.removeNotification]: (state, {payload}) => state.filter(item => item.id !== payload),
        [actions.lockAutoDismissNotification]: (state, {payload}) =>
            state.map(item => {
              if (item.id === payload) {
                return {...item, lockAutoDismiss: true};
              }
              return item;
            }),
      },
      []
  );

  const sagas = {
    *sendNotification({payload}) {
      const id = counter - 1;

      yield delay(0);
      yield put(actions.showNotification(id));

      if (payload.autoDismiss > 0) {
        yield delay(payload.autoDismiss);
        const notification = yield select(state => state[namespace].find(item => item.id === id));

        if (notification !== undefined && notification.lockAutoDismiss) {
          return;
        }

        yield put(actions.hideNotification(id));
      }
    },
    *hideNotification({payload}) {
      yield delay(200);
      yield put(actions.removeNotification(payload));
    },
  };

  const saga = function*() {
    yield all([
      takeEvery(actions.sendNotification, sagas.sendNotification),
      takeEvery(actions.hideNotification, sagas.hideNotification),
    ]);
  };

  return {
    namespace,
    actions,
    reducer,
    saga,
  };
};

export default notifierModel();
