import db from 'firebase/config';
import * as action from './hero-card-action';

export const addHero = ({
  name,
  descriptions,
  imgFile,
  userId,
  nickName,
}) => async dispatch => {
  dispatch(action.addHeroRequest());

  try {
    // save image to storage
    const response = await fetch(imgFile);
    const file = await response.blob();
    console.log(file);
    const uniqId = Date.now().toString();
    await db.storage().ref(`heroImage/${uniqId}`).put(file);
    //get image url
    const webImageUrl = await db
      .storage()
      .ref('heroImage')
      .child(uniqId)
      .getDownloadURL();
    console.log(webImageUrl);
    // create hero obj and save in server
    const heroItem = {
      uniqId,
      name,
      descriptions,
      webImageUrl,
      userId,
      nickName,
    };
    console.log(heroItem);

    await db.firestore().collection('heroItems').add(heroItem);

    dispatch(action.addHeroSuccess(heroItem));
  } catch (error) {
    console.log(error);
    dispatch(action.addHeroError(error.message));
  }
};

export const deleteHero = item => async dispatch => {
  dispatch(action.deleteHeroRequest());
};

export const editHero = item => async dispatch => {
  dispatch(action.editHeroRequest());
};
