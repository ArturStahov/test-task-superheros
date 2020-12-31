import { useState, useEffect } from 'react';
import * as action from '../../redux/hero-card/hero-card-action';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Title,
  Button,
  TextArea,
  Input,
  Label,
  FormGroup,
  Col,
  Form,
} from './StyledComponent';

function FormCreateHeros({
  onCreateItem,
  itemEdit,
  onEditItem,
  onClearItemEdit,
}) {
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

  //create hero object and clear state and form input
  //submit hero obj in App.js
  const handlerSubmit = e => {
    e.preventDefault();

    if (itemEdit) {
      onEditItem(
        itemEdit.id,
        nickName,
        realName,
        description,
        superPowers,
        catchPhrase,
        images,
      );

      onClearItemEdit(null);
    } else {
      onCreateItem(
        nickName,
        realName,
        description,
        superPowers,
        catchPhrase,
        images,
      );
    }

    setNickName('');
    setRealName('');
    setDescription('');
    setSuperPowers('');
    setCatchPhrase('');
    setImages('');
  };

  return (
    <>
      <Form onSubmit={handlerSubmit}>
        <Title>{itemEdit ? 'Edit Hero!' : 'Create Hero!'}</Title>
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
              placeholder="images url"
              type="text"
              required
            />
          </FormGroup>
        </Col>
        <Button type="submit">{itemEdit ? 'Update!' : 'Go!'}</Button>
      </Form>
    </>
  );
}

const mapDispatchToProps = dispatch => {
  return {
    onCreateItem: (
      nickName,
      realName,
      description,
      superPowers,
      catchPhrase,
      images,
    ) =>
      dispatch(
        action.addCard(
          nickName,
          realName,
          description,
          superPowers,
          catchPhrase,
          images,
        ),
      ),
    onEditItem: (
      id,
      nickName,
      realName,
      description,
      superPowers,
      catchPhrase,
      images,
    ) =>
      dispatch(
        action.editCard(
          id,
          nickName,
          realName,
          description,
          superPowers,
          catchPhrase,
          images,
        ),
      ),

    onClearItemEdit: value => dispatch(action.addItemEdit(value)),
  };
};

const mapStateToProps = state => {
  return {
    itemEdit: state.itemEdit,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(FormCreateHeros);

FormCreateHeros.propTypes = {
  onCreateHero: PropTypes.func.isRequired,
  itemEdit: PropTypes.object,
};
