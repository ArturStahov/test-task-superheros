import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { Form, useStyles } from './StyledComponent';
import { SignInUser } from '../../../redux/auth/auth-operation';
import { errorMessageValue } from '../authSelector';
import * as notification from '../../../Notification/errorHandler';

export default function AuthForms() {
  const { control, handleSubmit, reset } = useForm();
  const classes = useStyles();
  const dispatch = useDispatch();
  let errorMessage = useSelector(errorMessageValue);

  const onSubmit = data => {
    console.log(data);
    dispatch(SignInUser(data));
  };

  useEffect(() => {
    if (errorMessage) {
      notification.errorNotification(errorMessage);
      return;
    }
  }, [errorMessage]);

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      <Controller
        name="email"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            type="email"
            className={classes.inputText}
            InputProps={{
              className: classes.input,
            }}
            onChange={onChange}
            value={value}
            label="E-mail"
            variant="outlined"
            required
          />
        )}
      />
      <Controller
        name="password"
        control={control}
        defaultValue=""
        render={({ onChange, value }) => (
          <TextField
            type="password"
            className={classes.inputText}
            InputProps={{
              className: classes.input,
            }}
            onChange={onChange}
            value={value}
            label="Password"
            variant="outlined"
            required
          />
        )}
      />

      <Button
        className={classes.buttonSubmit}
        type="submit"
        variant="contained"
        color="primary"
      >
        Log In
      </Button>
    </Form>
  );
}
