import styled from 'styled-components';

const Container = styled.div`
  width: 300px;
  background-color: #194763;
  border: none;
  @media screen and (max-width: 767px) {
    margin: 0 auto;
  }
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

export { ButtonSign, ButtonLogin, ControlWrapper, Container };
