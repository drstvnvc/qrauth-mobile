import { SET_ACTIVE_USER, SET_HAS_LOGIN_ERROR } from './actionTypes';

const initialState = {
  user: null,
  hasLoginError: false,
};

function reducer(state = initialState, { type, payload }) {
  switch (type) {
    case SET_ACTIVE_USER:
      return { ...state, user: payload };
    case SET_HAS_LOGIN_ERROR:
      return { ...state, hasLoginError: payload };
    default:
      return state;
  }
}

export default reducer;
