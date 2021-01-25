import styled from 'styled-components';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  inputText: {
    width: '100%',
  },
  input: {
    fontSize: '1.8rem',
    color: 'white',
    paddingLeft: 5,
    marginBottom: 20,
  },
}));

const Title = styled.h2`
  font-size: 1.8rem;
  color: #4671d5;
  font-size: 2.6rem;
  font-family: 'Bangers';
  letter-spacing: 2px;
  text-align: center;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Form = styled.form`
  width: 350px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;

const TextArea = styled.textarea`
  width: 100%;
  height: 125px;
  padding: 5px;
  border: 3px solid #5546d0;
  background-color: #aba6d2;
  caret-color: #ff9200;
  resize: none;
  outline: none;
  margin-bottom: 20px;
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

export { Title, Button, TextArea, Form, useStyles };
