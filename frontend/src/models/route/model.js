import {createActions, handleActions} from 'redux-actions';

const routeModel = () => {
  const namespace = 'route';

  const createPayload = (payload = {}) => payload;
  const createMeta = (payload, meta = {}) => meta;
  const creators = [createPayload, createMeta];

  const actions = createActions({
    init: creators,
    destroy: creators,
  }, {
    prefix: namespace,
  });

  const utils = {
    createRouteState: (routeId) => ({
      routeId,
    }),
  };

  const reduce = handleActions({

  }, {});

  const sagas = {
    utils: {},
  };

  const saga = function* () {};

  return {
    namespace,
    utils,
    actions,
    reduce,
    sagas,
    saga,
  };
}

export default routeModel();
