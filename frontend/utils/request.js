import {call, put} from 'redux-saga/effects';
import xhr from 'frontend/utils/xhr';
// import actions from 'frontend/src/redux/actions';

function* request(options) {
  try {
    const result = yield call(xhr, options);
    return {result};
  } catch (error) {
    // TODO: auth model
    // if (error.status === 401) {
    //   yield put(actions.auth.accessDenied());
    // }
    return {error};
  }
}

export default request;
