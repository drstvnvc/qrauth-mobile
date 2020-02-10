import { LOGIN, SIGNUP, SET_ACTIVE_USER, LOGOUT, SET_HAS_LOGIN_ERROR } from './actionTypes';

export function login(email, password) {
  return {
    type: LOGIN,
    payload: { email, password },
  };
}

export function signup(user) {
  return {
    type: SIGNUP,
    payload: { user },
  };
}

export function setActiveUser(user) {
  return {
    type: SET_ACTIVE_USER,
    payload: user,
  };
}

export function logout() {
  return {
    type: LOGOUT,
  };
}

export function setHasLoginError(hasError) {
  return {
    type: SET_HAS_LOGIN_ERROR,
    payload: hasError,
  };
}
