import { createReducer } from '@reduxjs/toolkit';

import { changeRating } from './rating-action';

const changeRatingReducer = createReducer(false, {
  [changeRating]: (_, { payload }) => payload,
});

export default changeRatingReducer;
