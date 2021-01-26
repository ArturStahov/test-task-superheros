import { useRef, useState, useEffect } from 'react';
import { useCollectionData } from 'react-firebase-hooks/firestore';
import Button from '@material-ui/core/Button';
import SendIcon from '@material-ui/icons/Send';
import db from 'firebase/config';
import ChatMessage from './ChatMessage/ChatMessage';
import ChatCloseButton from './ChatCloseButton/ChatCloseButton';
import { ChatRoom, ChatModal, Form, Input } from './StyledComponent';

export default function Chat({ user, onClose, getRef }) {
  const dummy = useRef();

  const chatModalRef = useRef(null);
  console.log('chatModalRef', chatModalRef);

  const messagesRef = db.firestore().collection('messagesChat');
  const query = messagesRef.orderBy('createdAt').limitToLast(20);

  const [messageArr] = useCollectionData(query, { idField: 'uniqKey' });

  const [formValue, setFormValue] = useState('');

  useEffect(() => {
    if (chatModalRef) {
      getRef(chatModalRef);
    }
  }, [chatModalRef]);

  //old version (work)
  // const [messageArr, setMessageArr] = useState([])
  // const getRealtimeData = async () => {
  //     await db.firestore().collection('messagesChat').orderBy('createdAt').limitToLast(15).onSnapshot((data) => {
  //         const dataMessage = data.docs.map(doc => ({ ...doc.data() }))
  //         const sortedArr = dataMessage.sort((a, b) => {
  //             return a.uniqKey - b.uniqKey
  //         })
  //         setMessageArr(sortedArr)
  //     })
  // }
  // useEffect(() => {
  //     getRealtimeData();
  // }, [])

  useEffect(() => {
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  }, [messageArr]);

  const sendMessage = async e => {
    e.preventDefault();

    const { id, photoURL } = user;

    await messagesRef.add({
      text: formValue,
      createdAt: db.firestore.FieldValue.serverTimestamp(),
      id,
      photoURL,
      uniqKey: Date.now(),
    });

    setFormValue('');
    dummy.current.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <ChatModal ref={chatModalRef}>
      <ChatCloseButton onClose={onClose} />
      <ChatRoom>
        {messageArr &&
          messageArr.map(msg => (
            <ChatMessage key={msg.uniqKey} message={msg} user={user} />
          ))}

        <span ref={dummy}></span>
      </ChatRoom>

      <Form onSubmit={sendMessage}>
        <Input
          value={formValue}
          onChange={e => setFormValue(e.target.value)}
          placeholder="input message"
        />

        <Button
          type="submit"
          disabled={!formValue}
          variant="contained"
          color="primary"
          endIcon={<SendIcon />}
        >
          Send
        </Button>
      </Form>
    </ChatModal>
  );
}
