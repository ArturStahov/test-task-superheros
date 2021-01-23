import { createAction } from '@reduxjs/toolkit';

export const signUpRequest = createAction('auth/signUpRequest');
export const signUpSuccess = createAction('auth/signUpSuccess');
export const signUpError = createAction('auth/signUpError');

export const signInRequest = createAction('auth/signInRequest');
export const signInSuccess = createAction('auth/signInSuccess');
export const signInError = createAction('auth/signInError');

export const signOutRequest = createAction('auth/signOutRequest');
export const signOutSuccess = createAction('auth/signOutSuccess');
export const signOutError = createAction('auth/signOutError');
export const breakError = createAction('auth/breakError');
