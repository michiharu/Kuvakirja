import { put, call, fork, take } from 'redux-saga/effects';
import * as API from '../api/axios-func';
import authModule from './authModule';

function* handleRequestLogin() {
  while (true) {
    const action = yield take(authModule.actions.login.toString());
    console.log(action)
    const data = yield call(API.login, action.payload);
    if (data.error === undefined) {
      yield put(authModule.actions.loginSuccess());
    } else {
      yield put(authModule.actions.loginError());
    }
  }
}

export function* rootSaga() {
  yield fork(handleRequestLogin);
}