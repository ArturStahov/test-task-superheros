import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './auth/auth-reducer';
import {
  heroCardReducer,
  itemEditReducer,
} from './hero-card/hero-card-reducer';

const store = configureStore({
  reducer: {
    heroCards: heroCardReducer,
    auth: authUserReducer,
    itemEdit: itemEditReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
