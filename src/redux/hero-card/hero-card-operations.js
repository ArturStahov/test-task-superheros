import db from 'firebase/config';
import * as action from './hero-card-action';

export const getAllUserHero = user => async dispatch => {
  dispatch(action.getAllUserHeroRequest());
  try {
    //get all userHeroItem from server
    const data = await db.firestore().collection(`publicHero`).get();
    const dataFilter = await data.docs.filter(
      doc => doc.data().userId === user.id,
    );
    const dataItems = await dataFilter.map(doc => {
      // console.log('doc.data()userId!!!!', doc.data().userId)
      return {
        ...doc.data(),
        serverId: doc.id,
      };
    });
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

    // const createdAt = db.firestore.FieldValue.serverTimestamp();

    // create hero obj
    const heroItem = {
      uniqItemId,
      name,
      descriptions,
      webImageUrl,
      nickName,
      userId,
    };

    // //save item in personal folder in server
    // await db.firestore().collection(`heroItems${userId}`).add(heroItem);

    //save item in public folder in server
    const data = await db.firestore().collection(`publicHero`).add(heroItem);
    const completedHero = {
      ...heroItem,
      serverId: data.id,
    };

    dispatch(action.addHeroSuccess(completedHero));
  } catch (error) {
    console.log(error);
    dispatch(action.addHeroError(error.message));
  }
};

export const deleteHero = item => async dispatch => {
  dispatch(action.deleteHeroRequest());
  const { serverId } = item;
  try {
    await db.firestore().collection(`publicHero`).doc(serverId).delete();
    dispatch(action.deleteHeroSuccess(item));
  } catch (error) {
    console.log(error);
    dispatch(action.deleteHeroError(error.message));
  }
};

export const editHero = item => async dispatch => {
  dispatch(action.editHeroRequest());
};
