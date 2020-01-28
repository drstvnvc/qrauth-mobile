import { SET_ACTIVE_USER } from './actionTypes';

const initialState = null;

function reducer(state = initialState, { payload, ...action }) {
  switch (action.type) {
    case SET_ACTIVE_USER:
      return payload;
    default:
      return state;
  }
}

export default reducer;
