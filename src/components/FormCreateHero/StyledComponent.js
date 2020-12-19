import styled from 'styled-components';

const Form = styled.form`
  max-width: 600px;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin: 0 auto;
`;
const Col = styled.div`
  width: 250px;
  display: flex;
  flex-wrap: wrap;
  &:not(:last-child) {
    margin-right: 20px;
  }
  margin-bottom: 20px;
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
const TextArea = styled.textarea`
  width: 100%;
  height: 50px;
  padding: 5px;
  border: 3px solid #5546d0;
  background-color: #aba6d2;
  caret-color: #ff9200;
  resize: none;
  outline: none;
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
const Title = styled.h2`
  width: 100%;
  font-size: 4.8rem;
  font-family: 'Bangers';
  font-weight: 400;
  color: #ffbf00;
  text-align: center;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #9a3535;
  text-transform: uppercase;
`;

export { Title, Button, TextArea, Input, Label, FormGroup, Col, Form };
