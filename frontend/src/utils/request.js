import {call, put} from 'redux-saga/effects';
import xhr from 'src/utils/xhr';

const request = function* (options) {
  try {
    if (options.endpoint === '/api/currencies') {
      return {
        result: {
          status: 200,
          payload: require('./request.currencies'),
          afterAt: Date.now(),
        },
      };
    }
    const result = yield call(xhr, options);
    return {result};
  } catch (error) {
    if (error.status === 401) {
      yield put({type: 'auth/accessDenied'});
    }
    return {error};
  }
};

export default request;
