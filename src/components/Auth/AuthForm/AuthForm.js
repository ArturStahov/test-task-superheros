import { useState, useContext } from 'react';
import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import { Button, Input, Label, FormGroup, Form } from './StyledComponent';
import FetchApiAuth from '../../../Utils/FetchApiAuth';
import authContext from '../../../Utils/Context.js';

export default function AuthForms() {
  const [Email, setEmail] = useState('');
  const [Pass, setPass] = useState('');
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
      default:
        return;
    }
  };

  //login user
  const handlerSubmit = e => {
    e.preventDefault();
    FetchApiAuth(Email, Pass)
      .then(data => {
        if (!data) return;
        const userId = data.localId;
        info({
          title: 'You signed in successfully!',
          text: 'Welcome to the Hero Factory',
          delay: 3000,
        });
        console.log('You signed in successfully!');
        setEmail('');
        setPass('');
        onLogIn(userId);
      })
      .catch(err => {
        error({
          title: 'Oops...!',
          text: err,
          delay: 3000,
        });
      });
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
        <Label>Password*</Label>
        <Input
          value={Pass}
          onChange={handlerInput}
          name="Pass"
          type="password"
          autoComplete="off"
          required
        />
      </FormGroup>
      <Button type="submit">Submit</Button>
    </Form>
  );
}
