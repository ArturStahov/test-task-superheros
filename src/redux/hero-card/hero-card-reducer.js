import { createReducer, combineReducers } from '@reduxjs/toolkit';
import * as action from './hero-card-action';

const heroCardReducer = createReducer([], {
  [action.addHeroSuccess]: (state, { payload }) => [...state, payload],
  [action.deleteHeroSuccess]: (state, { payload }) =>
    state.filter(item => item.id !== payload),
  [action.editHeroSuccess]: (state, { payload }) => [
    ...state.filter(item => item.id !== payload.id),
    payload,
  ],
});

const loaderHeroReducer = createReducer(false, {
  [action.addHeroRequest]: () => true,
  [action.addHeroSuccess]: () => false,
  [action.addHeroError]: () => false,
  [action.deleteHeroRequest]: () => true,
  [action.deleteHeroSuccess]: () => false,
  [action.deleteHeroError]: () => false,
  [action.editHeroRequest]: () => true,
  [action.editHeroSuccess]: () => false,
  [action.editHeroError]: () => false,
});

const errorReducer = createReducer('', {
  [action.addHeroError]: (_, { payload }) => payload,
  [action.deleteHeroError]: (_, { payload }) => payload,
  [action.editHeroError]: (_, { payload }) => payload,
});

const rootHeroCardReducer = combineReducers({
  heroItemsArray: heroCardReducer,
  heroLoader: loaderHeroReducer,
  heroError: errorReducer,
});

export default rootHeroCardReducer;
