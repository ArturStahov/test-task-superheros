import styled from 'styled-components';

import { useState, useEffect } from 'react';
import uniqid from 'uniqid';

const Form = styled.form`
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
  border: none;
  clip-path: polygon(0 0, 95% 0, 100% 100%, 5% 100%);
  cursor: pointer;
`;

export default function FormCreateHeros({ onCreateHero, itemEdit }) {
  const [nickName, setNickName] = useState('');
  const [realName, setRealName] = useState('');
  const [description, setDescription] = useState('');
  const [superPowers, setSuperPowers] = useState('');
  const [catchPhrase, setCatchPhrase] = useState('');
  const [images, setImages] = useState('');

  useEffect(() => {
    if (itemEdit) {
      setNickName(itemEdit.nickName);
      setRealName(itemEdit.realName);
      setDescription(itemEdit.description);
      setSuperPowers(itemEdit.superPowers);
      setCatchPhrase(itemEdit.catchPhrase);
      setImages(itemEdit.images);
    }
  }, [itemEdit]);

  const handlerInput = e => {
    const { name, value } = e.target;
    switch (name) {
      case 'nickName':
        setNickName(value);
        break;
      case 'realName':
        setRealName(value);
        break;
      case 'description':
        setDescription(value);
        break;
      case 'superPowers':
        setSuperPowers(value);
        break;
      case 'catchPhrase':
        setCatchPhrase(value);
        break;
      case 'images':
        setImages(value);
        break;
      default:
        return;
    }
  };

  const handlerSubmit = e => {
    e.preventDefault();
    const heroObject = {
      nickName,
      realName,
      description,
      superPowers,
      catchPhrase,
      images,
      id: uniqid(),
    };
    onCreateHero(heroObject);
    setNickName('');
    setRealName('');
    setDescription('');
    setSuperPowers('');
    setCatchPhrase('');
    setImages('');
  };

  return (
    <Form onSubmit={handlerSubmit}>
      <Col>
        <FormGroup>
          <Label>Nick name *</Label>
          <Input
            value={nickName}
            onChange={handlerInput}
            name="nickName"
            placeholder="30 characters max. length"
            type="text"
            maxLength="30"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Real name</Label>
          <Input
            value={realName}
            onChange={handlerInput}
            name="realName"
            placeholder="30 characters max. length"
            type="text"
            maxLength="30"
          />
        </FormGroup>
        <FormGroup>
          <Label>Description *</Label>
          <TextArea
            value={description}
            onChange={handlerInput}
            name="description"
            placeholder="200 characters max. length"
            required
          />
        </FormGroup>
      </Col>
      <Col>
        <FormGroup>
          <Label>Super powers *</Label>
          <TextArea
            value={superPowers}
            onChange={handlerInput}
            name="superPowers"
            placeholder="200 characters max. length"
            maxLength="200"
            required
          />
        </FormGroup>
        <FormGroup>
          <Label>Catch phrase</Label>
          <TextArea
            value={catchPhrase}
            onChange={handlerInput}
            name="catchPhrase"
            placeholder="200 characters max. length"
            maxLength="200"
          />
        </FormGroup>
        <FormGroup>
          <Label>Hero images *</Label>
          <Input
            value={images}
            onChange={handlerInput}
            name="images"
            placeholder="1mb max"
            type="text"
            required
          />
        </FormGroup>
      </Col>
      <Button type="submit">{itemEdit ? 'Edit Hero' : 'Create Hero'}</Button>
    </Form>
  );
}
