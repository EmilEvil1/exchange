import {takeEvery, delay} from 'redux-saga/effects';
import {createActions, handleActions} from 'redux-actions';
import {buildQuery} from 'src/utils/xhr';
import truetype from 'src/utils/truetype';

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

  const utils = {
    resize() {
      const {store} = require('src/redux/store');
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
    },
  };

  const reduce = handleActions({
    [actions.setLang]: (state, {payload}) => ({
      ...state,
      lang: payload,
    }),
    [actions.setBreakpoint]: (state, {payload}) => ({
      ...state,
      breakpoint: payload,
    }),
  }, {
    lang: 'ru',
    breakpoint: 'md',
  });

  const sagas = {
    utils: {},
    *init() {
      yield delay(0);
      yield sagas.initResize();
    },
    *initResize() {
      window.addEventListener('resize', utils.resize);
      utils.resize();
    },
    *historyPush({payload}) {
      const {history} = require('src/redux/store');
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

  const saga = function* () {
    yield takeEvery(actions.init, sagas.init);
    yield takeEvery(actions.historyPush, sagas.historyPush);
  };

  return {
    namespace,
    utils,
    actions,
    reduce,
    sagas,
    saga,
  };
};

export default appModel();
