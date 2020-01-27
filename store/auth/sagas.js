import { put, call, takeLatest } from 'redux-saga/effects';

import { setActiveUser } from './actions';
import { LOGIN } from './actionTypes';

function* login(payload) {
}

export function* watchLogin() {
  yield takeLatest(LOGIN, login);
}
