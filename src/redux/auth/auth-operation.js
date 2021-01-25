import db from '../../firebase/config';
import * as action from './auth-action';
import noIco from '../../images/ico/no-user-ico.png';

export const SignInUser = ({ email, password }) => async dispatch => {
  dispatch(action.signInRequest());
  try {
    await db.auth().signInWithEmailAndPassword(email, password);

    const user = await db.auth().currentUser;
    const { uid, displayName, photoURL } = user;
    console.log(user);
    const userObj = {
      id: uid,
      nickName: displayName,
      photoURL: photoURL ? photoURL : noIco,
    };
    dispatch(action.signInSuccess(userObj));
  } catch (error) {
    console.log(error);
    dispatch(action.signInError(error.message));
  }
};

export const SignUpUser = ({ email, password, nickName }) => async dispatch => {
  dispatch(action.signUpRequest());

  try {
    await db.auth().createUserWithEmailAndPassword(email, password);

    const update = {
      displayName: nickName,
    };

    await db.auth().currentUser.updateProfile(update);
    const user = await db.auth().currentUser;
    const { uid, displayName, photoURL } = user;

    const userObj = {
      id: uid,
      nickName: displayName,
      photoURL: photoURL ? photoURL : noIco,
    };
    dispatch(action.signUpSuccess(userObj));
  } catch (error) {
    dispatch(action.signUpError(error.message));
    console.log(error.message);
  }
};

export const SignOutUser = () => async dispatch => {
  dispatch(action.signOutRequest());
  try {
    await db.auth().signOut();
    dispatch(action.signOutSuccess());
  } catch (error) {
    console.log(error);
    dispatch(action.signOutError(error.message));
  }
};
