import styled from 'styled-components';

const ChatModal = styled.div`
  padding-top: 30px;
  position: fixed;
  width: 30%;
  min-width: 320px;
  height: 50%;
  left: 0;
  top: 0;
  background-color: #3a77a6;
  z-index: 9;
  border: 3px solid #001d34;
  border-bottom-right-radius: 1rem;
  box-shadow: 10px 4px 15px 0px rgba(0, 0, 0, 0.38);
`;
const ChatRoom = styled.ul`
  padding: 10px;
  height: 80%;
  margin: 10px;
  overflow-y: scroll;
  display: flex;
  flex-direction: column;
  &::-webkit-scrollbar {
    width: 0.5rem;
  }
  &::-webkit-scrollbar-track {
    background: #1e1e24;
  }

  &::-webkit-scrollbar-thumb {
    background: #ffaa00;
  }
`;
const Form = styled.form`
  width: 80%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
`;
const Input = styled.input`
  max-width: 250px;
  height: 30px;
  border: 2px solid #ff9640;
  border-radius: 0.5rem;
  outline: none;
  padding-left: 5px;
  font-size: 1.6rem;
  color: #000000;
  margin-right: 5px;
  &::placeholder {
    font-size: 1.4rem;
    color: rgba(0, 0, 0, 0.6);
  }
`;

export { ChatRoom, ChatModal, Form, Input };
