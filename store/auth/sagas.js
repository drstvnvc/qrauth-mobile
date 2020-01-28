import { put, call, takeLatest } from 'redux-saga/effects';

import { setActiveUser } from './actions';
import { LOGIN } from './actionTypes';
import authService from '../../services/apiServices/AuthService';

function* login({ payload: { email, password } }) {
  const response = yield call(authService.login, email, password);
}

export function* watchLogin() {
  yield takeLatest(LOGIN, login);
}
