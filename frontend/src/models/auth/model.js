import {select, put, delay, takeEvery, all} from 'redux-saga/effects';
import {createActions, handleActions} from 'redux-actions';
import get from 'lodash/get';
import truetype from 'frontend/utils/truetype';

const authModel = () => {
  const namespace = 'auth';

  const createPayload = payload => payload;
  const createMeta = (payload, meta) => meta;
  const creators = [createPayload, createMeta];

  const actions = createActions({
    accessDenied: creators,
  }, {
    prefix: namespace,
  });

  const reduce = handleActions({}, {});

  const sagas = {
    utils: {
      *withPermissions(permissions) {
        if (!truetype.isArray(permissions)) {
          return true;
        }
        const userPermissions = yield select(state => get(state, 'auth.user.permissions'));
        if (truetype.isArray(userPermissions)) {
          return false;
        }
        return permission.every(authority => userPermissions.includes(permission));
      },
      *withPermission(permission) {
        if (truetype.isUndefined(permission)) {
          return true;
        }
        const userPermissions = yield select(state => get(state, 'auth.user.permissions'));
        if (truetype.isArray(userPermissions)) {
          return false;
        }
        return userPermissions.include(permission);
      },
    },
  };

  const saga = function* () {};

  return {
    namespace,
    actions,
    reduce,
    sagas,
    saga,
  };
};

export default authModel();
