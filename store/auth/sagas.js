import { put, call, takeLatest } from 'redux-saga/effects';

import { setActiveUser, setHasLoginError } from './actions';
import { LOGIN, LOGOUT, SIGNUP } from './actionTypes';
import authService from '../../services/apiServices/AuthService';
import { navigate } from '../../services/NavigationService';
import { SCREENS } from '../../constants';
import { resetState } from '../shared';

function* login({ payload: { email, password } }) {
  try {
    const user = yield call(authService.login, email, password);
    yield put(setActiveUser(user));
    yield call(navigate, SCREENS.AUTH_LOADING);
  } catch (e) {
    yield put(setHasLoginError(true));
  }
}

function* signup({ payload: { user } }) {
  try {
    const data = yield call(authService.signup, user);
    yield put(setActiveUser(data));
    yield call(navigate, SCREENS.AUTH_LOADING);
  } catch (e) {}
}

function* logout() {
  yield put(resetState());
  yield call(authService.logout);
  yield call(navigate, SCREENS.AUTH_LOADING);
}

export function* watchLogin() {
  yield takeLatest(LOGIN, login);
}

export function* watchSignup() {
  yield takeLatest(SIGNUP, signup);
}

export function* watchLogout() {
  yield takeLatest(LOGOUT, logout);
}
