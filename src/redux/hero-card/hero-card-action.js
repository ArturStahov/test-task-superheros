import { createAction } from '@reduxjs/toolkit';
import uniqid from 'uniqid';

export const addCard = createAction(
  'hero-card/add',
  (nickName, realName, description, superPowers, catchPhrase, images) => {
    return {
      payload: {
        id: uniqid(),
        nickName,
        realName,
        description,
        superPowers,
        catchPhrase,
        images,
      },
    };
  },
);

export const deleteCard = createAction('hero-card/delete');

export const editCard = createAction(
  'hero-card/edit',
  (id, nickName, realName, description, superPowers, catchPhrase, images) => {
    return {
      payload: {
        id,
        nickName,
        realName,
        description,
        superPowers,
        catchPhrase,
        images,
      },
    };
  },
);

export const addItemEdit = createAction('hero-card/editItem');
