import {createActions, handleActions} from 'redux-actions';

const notifierModel = () => {
  const namespace = 'notifier';

  const createPayload = payload => payload;
  const createMeta = (payload, meta) => meta;
  const creators = [createPayload, createMeta];

  const actions = createActions({
    send: creators,
    show: creators,
    hide: creators,
    remove: creators,
    lockDismiss: creators,
  }, {
    prefix: namespace,
  });

  const utils = {};

  const reduce = handleActions({}, []);

  const sagas = {
    utils: {},
  };

  const saga = function*() {};

  return {
    namespace,
    utils,
    actions,
    reduce,
    sagas,
    saga,
  };
};

export default notifierModel();
