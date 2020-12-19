import { useState } from 'react';
import {
  ButtonSign,
  ButtonLogin,
  ControlWrapper,
  Container,
} from './StyledComponent';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import AuthForm from '../AuthForm/AuthForm';

export default function AuthTabs() {
  const [LogIn, SetLogIn] = useState(true);
  const [SignUp, SetSignUp] = useState(false);

  const handlerButton = id => {
    SetLogIn(false);
    SetSignUp(false);
    switch (id) {
      case 'LogIn':
        SetLogIn(true);
        break;
      case 'SignUp':
        SetSignUp(true);
        break;
      default:
        console.log('error:no id!');
    }
  };

  return (
    <Container>
      <ControlWrapper>
        <ButtonLogin
          changeBg={LogIn}
          onClick={e => handlerButton(e.target.id)}
          id="LogIn"
          type="button"
          autoFocus
        >
          LogIn
        </ButtonLogin>
        <ButtonSign
          changeBg={SignUp}
          onClick={e => handlerButton(e.target.id)}
          id="SignUp"
          type="button"
        >
          SignUp
        </ButtonSign>
      </ControlWrapper>
      {LogIn && <AuthForm />}
      {SignUp && <RegistrationForm />}
    </Container>
  );
}
