import { useState } from 'react';
import styled from 'styled-components';
import RegistrationForm from '../RegistrationForm/RegistrationForm';
import AuthForm from '../AuthForm/AuthForm';

const Container = styled.div`
  width: 300px;
  background-color: #194763;
  border: none;
  clip-path: polygon(0 0, 100% 0, 100% 72%, 75% 100%, 25% 100%, 0 72%);
`;
const ControlWrapper = styled.div`
  width: 100%;
  display: flex;
`;
const ButtonLogin = styled.button`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
  background-color: ${props => (props.changeBg ? '#194763' : '#579AC1')};
  font-size: 2rem;
  font-family: 'Bangers';
  color: ${props => (props.changeBg ? '#E7B468' : '#FFFFFF')};
  outline: none;
  border: none;
  cursor: pointer;
`;

const ButtonSign = styled.button`
  width: 150px;
  height: 40px;
  margin-bottom: 20px;
  background-color: ${props => (props.changeBg ? '#194763' : '#579AC1')};
  font-size: 2rem;
  font-family: 'Bangers';
  color: ${props => (props.changeBg ? '#E7B468' : '#FFFFFF')};
  outline: none;
  border: none;
  cursor: pointer;
`;

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
