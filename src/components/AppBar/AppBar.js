import { useState, useEffect } from 'react';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';
import db from 'firebase/config';
import { AppBlock, UserName, Avatar, LoaderWrapper } from './StyledComponent';
import { errorNotification } from 'Notification/errorHandler';

export function AppBar({ userName, userIco }) {
  const [previewImg, setPreviewImg] = useState(null);

  const updateUserProfile = async () => {
    const response = await fetch(previewImg);
    const file = await response.blob();
    console.log(file);
    const uniqItemId = Date.now().toString();
    await db.storage().ref(`userImage/${uniqItemId}`).put(file);
    //get image url
    const photoURL = await db
      .storage()
      .ref('userImage')
      .child(uniqItemId)
      .getDownloadURL();

    const update = {
      photoURL,
    };

    await db.auth().currentUser.updateProfile(update);
  };

  useEffect(() => {
    if (previewImg) {
      updateUserProfile();
    }
  }, [previewImg]);

  const handlerUploadFile = async file => {
    try {
      let reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImg(reader.result);
        console.log(previewImg);
      };
      const isLt2M = file && file.size / 1024 / 1024 < 2;
      if (!isLt2M) {
        throw new Error('Image must smaller than 2MB!');
      }
      if (file) {
        reader.readAsDataURL(file);
      } else {
        setPreviewImg(null);
      }
    } catch (error) {
      console.log(error);
      errorNotification(error.message);
    }
  };

  return (
    <AppBlock>
      <Avatar src={previewImg ? previewImg : userIco} alt="user avatar image" />
      <UserName>{userName}</UserName>

      <LoaderWrapper>
        <input
          accept=".jpg, .png, .jpeg"
          id="icon-button-file"
          onChange={e => handlerUploadFile(e.target.files[0])}
          type="file"
        />
        <label htmlFor="icon-button-file">
          <IconButton
            color="primary"
            aria-label="upload picture"
            component="span"
          >
            <PhotoCamera style={{ fontSize: 30 }} />
          </IconButton>
        </label>
      </LoaderWrapper>
    </AppBlock>
  );
}
