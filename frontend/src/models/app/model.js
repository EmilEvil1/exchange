import {takeEvery, delay} from 'redux-saga/effects';
import {createActions, handleActions} from 'redux-actions';
import {buildQuery} from 'frontend/utils/xhr';
import truetype from 'frontend/utils/truetype'

const appModel = () => {
  const namespace = 'app'

  const createPayload = (payload = {}) => payload;
  const createMeta = (payload, meta = {}) => meta;
  const creators = [createPayload, createMeta];

  const actions = createActions({
    init: creators,
    setLang: creators,
    setBreakpoint: creators,
    historyPush: creators,
  }, {
    prefix: namespace,
  });

  const defaultState = {
    lang: 'ru',
    breakpoint: 'md',
  };

  const reducer = handleActions({
    [actions.setLang]: (state, {payload}) => ({
      ...state,
      lang: payload,
    }),
    [actions.setBreakpoint]: (state, {payload}) => ({
      ...state,
      breakpoint: payload,
    }),
  }, defaultState);

  const saga = (history, store) => {
    const resize = () => {
      const siteWrapper = document.querySelector('.site-wrapper');
      if (!siteWrapper) return null;
      let breakpoint;
      if (siteWrapper.offsetWidth < 768) {
        breakpoint = 'xs';
      } else if (siteWrapper.offsetWidth >= 768 && siteWrapper.offsetWidth < 1024) {
        breakpoint = 'sm';
      } else {
        breakpoint = 'md';
      }
      if (breakpoint === store.getState()[namespace]['breakpoint']) return null;
      return store.dispatch(actions.setBreakpoint(breakpoint));
    };

    const sagas = {
      *init() {
        yield sagas.initResize();
      },
      *initResize() {
        yield window.addEventListener('resize', resize);
        yield delay(0);
        yield resize();
      },
      *historyPush({payload}) {
        if (truetype.isObject(payload)) {
          const {path, query} = payload;
          return yield history.push(`${payload.path}${buildQuery(query)}`);
        }
        if (truetype.isString(payload)) {
          return yield history.push(payload);
        }
        throw new Error(`Недопустимый тип для payload: ${truetype(payload)}`);
      }
    };

    return function* () {
      yield takeEvery(actions.init, sagas.init);
      yield takeEvery(actions.historyPush, sagas.historyPush);
    };
  };

  const utils = {};

  return {
    namespace,
    actions,
    reducer,
    saga,
    utils,
  };
};

export default appModel();
