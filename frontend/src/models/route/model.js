import {createActions, handleActions} from 'redux-actions';

const routeModel = () => {
  const namespace = 'route';

  const createPayload = (payload = {}) => payload;
  const createMeta = (payload, meta = {}) => meta;
  const creators = [createPayload, createMeta];

  const utils = {
    createRouteState: (routeId) => ({
      routeId,
    }),
  };

  const actions = createActions({
    init: creators,
    initialize: creators,
    destroy: creators,
  }, {
    prefix: namespace,
  });

  const reducer = handleActions({

  }, {});

  const saga = function* () {};

  return {
    namespace,
    utils,
    actions,
    reducer,
    saga,
  };
}

export default routeModel();
