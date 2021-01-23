import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './auth/auth-reducer';
import rootHeroCardReducer from './hero-card/hero-card-reducer';

const store = configureStore({
  reducer: {
    heroCards: rootHeroCardReducer,
    auth: authUserReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
