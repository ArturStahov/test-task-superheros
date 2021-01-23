import db from '../../firebase/config';
import * as action from './auth-action';

export const SignInUser = ({ email, password }) => async (
  dispatch,
  getState,
) => {
  dispatch(action.signInRequest());
  try {
    await db.auth().signInWithEmailAndPassword(email, password);
    const { uid, displayName } = await db.auth().currentUser;

    const userObj = {
      id: uid,
      nickName: displayName,
    };
    dispatch(action.signInSuccess(userObj));
  } catch (error) {
    console.log(error);
    dispatch(action.signInError(error.message));
  }
};

export const SignUpUser = ({ email, password, nickName }) => async (
  dispatch,
  getState,
) => {
  dispatch(action.signUpRequest());

  try {
    await db.auth().createUserWithEmailAndPassword(email, password);

    const update = {
      displayName: nickName,
    };

    await db.auth().currentUser.updateProfile(update);
    const user = await db.auth().currentUser;

    const { uid, displayName } = user;

    const userObj = {
      id: uid,
      nickName: displayName,
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
