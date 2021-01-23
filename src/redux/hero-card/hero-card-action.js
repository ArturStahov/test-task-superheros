import { createAction } from '@reduxjs/toolkit';

export const addHeroRequest = createAction('addHero/Request');
export const addHeroSuccess = createAction('addHero/Success');
export const addHeroError = createAction('addHero/Error');

export const deleteHeroRequest = createAction('deleteHero/Request');
export const deleteHeroSuccess = createAction('deleteHero/Success');
export const deleteHeroError = createAction('deleteHero/Error');

export const editHeroRequest = createAction('editHero/Request');
export const editHeroSuccess = createAction('editHero/Success');
export const editHeroError = createAction('editHero/Error');
