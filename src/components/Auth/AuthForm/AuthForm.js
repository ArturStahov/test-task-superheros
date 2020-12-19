import { useState, useContext } from 'react';
import { error, info } from '@pnotify/core';
import '@pnotify/core/dist/PNotify.css';
import '@pnotify/core/dist/BrightTheme.css';
import styled from 'styled-components';
import FetchApiAuth from '../../../Utils/FetchApiAuth';
import authContext from '../../../Utils/Context.js';

const Form = styled.form`
  width: 280px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const FormGroup = styled.label`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  margin: 0 5px;
  position: relative;
  &:not(:last-child) {
    margin-bottom: 20px;
  }
`;
const Label = styled.span`
  font-size: 1.4rem;
  color: #9a3535;
  font-weight: 700;
  width: 100%;
  margin-bottom: 5px;
`;

const Input = styled.input`
  padding-left: 5px;
  width: 100%;
  height: 28px;
  border: 3px solid #5546d0;
  background-color: #aba6d2;
  padding-left: 10px;
  outline: none;
  caret-color: #ff9200;
  &::placeholder {
    font-size: 1.2rem;
    color: #42424b;
    font-weight: 400;
  }
  &:focus {
    box-shadow: inset 4px 4px 5px 0px rgba(0, 0, 0, 0.75);
  }
`;
const Button = styled.button`
  width: 200px;
  height: 30px;
  background-color: #ff4040;
  font-size: 1.4rem;
  font-weight: 600;
  color: #c09f00;
  border: none;
  clip-path: polygon(0 0, 100% 0, 86% 100%, 14% 100%);
  cursor: pointer;
`;

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

    // тут авторизация и в контент записуем что авторизованы
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
