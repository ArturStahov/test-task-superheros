import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as action from './auth-action';

const authUserReducer = createReducer(null, {
  [action.signUpSuccess]: (_, { payload }) => payload,
  [action.signInSuccess]: (_, { payload }) => payload,
  [action.signOutSuccess]: () => null,
});

const spinnerAuthReducer = createReducer(false, {
  [action.signUpRequest]: () => true,
  [action.signUpSuccess]: () => false,
  [action.signUpError]: () => false,
  [action.signInRequest]: () => true,
  [action.signInSuccess]: () => false,
  [action.signInError]: () => false,
  [action.signOutRequest]: () => true,
  [action.signOutSuccess]: () => false,
  [action.signOutError]: () => false,
});

const errorAuthReducer = createReducer('', {
  [action.signInRequest]: () => '',
  [action.signUpRequest]: () => '',
  [action.signOutRequest]: () => '',
  [action.signInError]: (_, { payload }) => payload,
  [action.signUpError]: (_, { payload }) => payload,
  [action.signOutError]: (_, { payload }) => payload,
});

const rootAuthReducer = combineReducers({
  user: authUserReducer,
  loading: spinnerAuthReducer,
  error: errorAuthReducer,
});

export default rootAuthReducer;
