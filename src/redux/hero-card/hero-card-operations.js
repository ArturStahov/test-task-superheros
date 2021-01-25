import db from 'firebase/config';
import * as action from './hero-card-action';

export const getAllUserHero = user => async dispatch => {
  dispatch(action.getAllUserHeroRequest());
  try {
    //get all userHeroItem from server
    const data = await db.firestore().collection(`heroItems${user.id}`).get();
    const dataItems = await data.docs.map(doc => ({
      ...doc.data(),
      serverId: doc.id,
    }));
    console.log('dataGetAll', dataItems);
    dispatch(action.getAllUserHeroSuccess(dataItems));
  } catch (error) {
    console.log(error);
    dispatch(action.getAllUserHeroError(error.message));
  }
};

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
    const uniqItemId = Date.now().toString();
    await db.storage().ref(`heroImage/${uniqItemId}`).put(file);
    //get image url
    const webImageUrl = await db
      .storage()
      .ref('heroImage')
      .child(uniqItemId)
      .getDownloadURL();
    console.log(webImageUrl);

    // create hero obj
    const heroItem = {
      uniqItemId,
      name,
      descriptions,
      webImageUrl,
      nickName,
    };

    //save item in personal folder in server
    await db.firestore().collection(`heroItems${userId}`).add(heroItem);

    //save item in public folder in server
    await db.firestore().collection(`publicHero`).add(heroItem);

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
