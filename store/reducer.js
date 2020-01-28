import { combineReducers } from 'redux';

import { RESET_STATE } from './shared';
import { reducer as authReducer } from './auth';

const reducer = combineReducers({
  auth: authReducer,
});

export default function(state, action) {
  if (action.type === RESET_STATE) {
    state = undefined;
  }

  return reducer(state, action);
};
