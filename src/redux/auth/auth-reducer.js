import { createReducer } from '@reduxjs/toolkit';
import * as action from './auth-action';

const authUserReducer = createReducer('', {
  [action.logIn]: (state, { type, payload }) => payload,
  [action.logOut]: (state, { type, payload }) => payload,
});

export default authUserReducer;
