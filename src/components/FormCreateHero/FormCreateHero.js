import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { TextField } from '@material-ui/core';
import FileLoader from './FileLoader/FileLoader';
import { addHero } from 'redux/hero-card/hero-card-operations';
import { userValue } from '../../selectors/authSelector';
import { errorNotification } from 'Notification/errorHandler';

import { Button, TextArea, Form, useStyles, Title } from './StyledComponent';

export default function FormCreateHeros() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { id, nickName } = useSelector(userValue);
  const { control, handleSubmit, reset } = useForm();
  const [imgFile, setImgFile] = useState(null);
  const [isClearPreviewImg, setIsClearPreviewImg] = useState(false);

  const onSubmit = data => {
    if (imgFile) {
      const formData = {
        ...data,
        imgFile,
        userId: id,
        nickName,
      };
      reset();
      setIsClearPreviewImg(true);
      dispatch(addHero(formData));
    } else {
      errorNotification('upload hero image!');
    }
    setIsClearPreviewImg(false);
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Title>Create You Hero</Title>

      <Controller
        name="name"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            type="text"
            className={classes.inputText}
            InputProps={{
              className: classes.input,
            }}
            onChange={onChange}
            value={value}
            label="Hero name"
            id="standard-basic"
            autoComplete="off"
            required
          />
        )}
      />
      <Controller
        name="descriptions"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextArea
            onChange={onChange}
            value={value}
            placeholder="Hero descriptions"
            required
          />
        )}
      />

      <FileLoader
        onUploadFile={setImgFile}
        isClearPreview={isClearPreviewImg}
      />

      <Button type="submit">Create</Button>
    </Form>
  );
}
