import { configureStore } from '@reduxjs/toolkit';
import authUserReducer from './auth/auth-reducer';
import rootHeroCardReducer from './hero-card/hero-card-reducer';
import changeRatingReducer from './rating/rating-reducer';

const store = configureStore({
  reducer: {
    heroCards: rootHeroCardReducer,
    auth: authUserReducer,
    changeRating: changeRatingReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

export default store;
