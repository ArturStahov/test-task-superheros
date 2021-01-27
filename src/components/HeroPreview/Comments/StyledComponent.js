import styled from 'styled-components';

const Wrapper = styled.div`
  width: 320px;
  position: absolute;
  bottom: -71px;
  right: 40px;
`;

const MessageContainer = styled.ul`
  padding: 10px;
  max-height: 200px;
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

const Message = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 12px;
`;

const Text = styled.p`
  width: 100%;
  line-height: 24px;
  padding: 10px 20px;
  border-radius: 5px;
  color: white;
  text-align: center;
  background: #796e6a;
  align-self: flex-end;
`;
const TextName = styled.p`
  line-height: 24px;
  position: absolute;
  top: 45px;
  color: #7b270a;
  font-weight: 600;
`;
const TextDate = styled.p`
  line-height: 24px;
  position: absolute;
  top: 0;
  color: white;
`;

const Avatar = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin: 2px 5px;
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

export {
  MessageContainer,
  Form,
  Input,
  Text,
  Avatar,
  Wrapper,
  Message,
  TextDate,
  TextName,
};
