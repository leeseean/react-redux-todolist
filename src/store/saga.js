import { call, put, takeEvery/* , takeLatest */ } from 'redux-saga/effects';
import Api from '../api';
import {AJAX_REQUESTED} from './types';
import {ajaxSucceeded, ajaxFailed} from './actions';

// worker Saga: will be fired on AJAX_REQUESTED actions
function* ajaxMainfestJson(action) {
   try {
      const res = yield call(Api.ajaxMainfestJson, action.data);
      yield put(ajaxSucceeded(res.data));
   } catch (e) {
      yield put(ajaxFailed(e.message));
   }
}

/*
  Starts ajaxMainfestJson on each dispatched `AJAX_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
    yield takeEvery(AJAX_REQUESTED, ajaxMainfestJson);
} 

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "AJAX_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/
/* function* mySaga() {
  yield takeLatest(AJAX_REQUESTED, ajaxMainfestJson);
} */

export default mySaga;