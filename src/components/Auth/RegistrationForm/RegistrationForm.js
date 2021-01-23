import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useForm, Controller } from 'react-hook-form';
import { TextField, Button } from '@material-ui/core';
import { Form, useStyles } from './StyledComponent';
import * as notification from '../../../Notification/errorHandler';
import { SignUpUser } from '../../../redux/auth/auth-operation';
import { errorMessageValue, userValue } from '../authSelector';

export default function RegistrationForms() {
  const { control, handleSubmit } = useForm();
  const classes = useStyles();
  const dispatch = useDispatch();
  let errorMessage = useSelector(errorMessageValue);

  const onSubmit = ({ password, confirmPass, nickName, email }) => {
    if (password !== confirmPass) {
      notification.errorNotification('Passwords are not the same! Try again!');
      return;
    }

    const registrationObj = {
      password,
      nickName,
      email,
    };
    dispatch(SignUpUser(registrationObj));
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
            label="password"
            variant="outlined"
            required
          />
        )}
      />

      <Controller
        name="confirmPass"
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
            label="confirm password"
            variant="outlined"
            required
          />
        )}
      />

      <Controller
        name="nickName"
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
            label="you nick name"
            variant="outlined"
            required
          />
        )}
      />

      <Button
        className={classes.buttonSubmit}
        type="submit"
        variant="contained"
        color="secondary"
      >
        Sign Up
      </Button>
    </Form>
  );
}
