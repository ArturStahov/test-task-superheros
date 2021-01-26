import { useState, useRef, useEffect } from 'react';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import db from 'firebase/config';
import { useSelector } from 'react-redux';
import { userValue } from 'selectors/authSelector';

import {
  MessageContainer,
  Form,
  Input,
  Text,
  Avatar,
  Wrapper,
  Message,
  TextDate,
  TextName,
} from './StyledComponent';

export default function Comments({ serverId }) {
  const dummy = useRef();
  const user = useSelector(userValue);

  const commentsRef = db
    .firestore()
    .collection('publicHero')
    .doc(serverId)
    .collection('comments');

  const [commentsArr] = useCollectionData(commentsRef, {
    idField: 'commentsId',
  });
  const [sortArray, setSortArray] = useState([]);

  useEffect(() => {
    if (commentsArr) {
      const sortArray = commentsArr.sort((a, b) => {
        return a.date - b.date;
      });
      setSortArray(sortArray);
    }
  }, [commentsArr]);

  //    console.log('commentsArr', commentsArr)
  const [formValue, setFormValue] = useState('');

  console.log('this hero serverId ', serverId);
  const sendMessage = async e => {
    e.preventDefault();

    const { photoURL, nickName } = user;

    await commentsRef.add({
      text: formValue,
      createdAt: db.firestore.FieldValue.serverTimestamp(),
      photoURL,
      date: Date.now(),
      commentsId: '',
      name: nickName,
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <Wrapper>
      <MessageContainer>
        {sortArray &&
          sortArray.length > 0 &&
          sortArray.map(msg => (
            <Message key={msg.commentsId}>
              <Avatar src={msg.photoURL} />
              {/* <TextDate>{msg.createdAt}</TextDate> */}
              <TextName>{msg.name}</TextName>
              <Text>{msg.text}</Text>
            </Message>
          ))}

        <span ref={dummy}></span>
      </MessageContainer>

      <Form onSubmit={sendMessage}>
        <Input
          value={formValue}
          onChange={e => setFormValue(e.target.value)}
          placeholder="input comments"
          maxLength="50"
        />

        <Button
          type="submit"
          disabled={!formValue}
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
        >
          Add
        </Button>
      </Form>
    </Wrapper>
  );
}
