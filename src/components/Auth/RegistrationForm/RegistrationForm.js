import { useState, useContext } from 'react';
import { Button, Input, Label, FormGroup, Form } from './StyledComponent';
import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';

import FetchApiSignUp from '../../../Utils/FetchApiSignUp';
import authContext from '../../../Utils/Context.js';

export default function RegistrationForms() {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
  const [confirmPass, setConfirmPass] = useState('');
  const { onLogIn } = useContext(authContext);

  const handlerInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'Email':
        setEmail(value);
        break;
      case 'Pass':
        setPass(value);
        break;
      case 'confirmPass':
        setConfirmPass(value);
        break;
      default:
        return;
    }
  };

  const handlerSubmit = e => {
    e.preventDefault();
    if (Pass !== confirmPass) {
      error({
        title: 'Oops...!',
        text: 'Passwords are not the same! Try again!',
        delay: 3000,
      });
    } else {
      FetchApiSignUp(Email, Pass)
        .then(data => {
          if (data.error) {
            const {
              error: { message },
            } = data;
            throw message;
          } else {
            const userId = data.localId;
            info({
              title: 'You have successfully registered in the system!',
              text: 'Welcome to the Hero Factory',
              delay: 3000,
            });
            setEmail('');
            setPass('');
            setConfirmPass('');
            onLogIn(userId);
          }
        })
        .catch(err => {
          console.log(err);
          error({
            title: 'Oops...!',
            text: err,
            delay: 3000,
          });
        });
    }
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <FormGroup>
        <Label>Email*</Label>
        <Input
          value={Email}
          onChange={handlerInput}
          name="Email"
          placeholder="30 characters max. length"
          type="email"
          maxLength="30"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Password*(min 6 characters length)</Label>
        <Input
          value={Pass}
          onChange={handlerInput}
          name="Pass"
          type="password"
          autoComplete="off"
          required
        />
      </FormGroup>
      <FormGroup>
        <Label>Confirm Password*</Label>
        <Input
          value={confirmPass}
          onChange={handlerInput}
          name="confirmPass"
          type="password"
          autoComplete="off"
          required
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
