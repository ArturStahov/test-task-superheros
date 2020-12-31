import { createReducer } from '@reduxjs/toolkit';
import * as action from './hero-card-action';

const heroCardReducer = createReducer([], {
  [action.addCard]: (state, { payload }) => [...state, payload],
  [action.deleteCard]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
  [action.editCard]: (state, { payload }) => [
    ...state.filter(item => item.id !== payload.id),
    payload,
  ],
});

const itemEditReducer = createReducer(null, {
  [action.addItemEdit]: (state, { payload }) => payload,
});

export { heroCardReducer, itemEditReducer };
