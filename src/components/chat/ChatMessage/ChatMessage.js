import {
  MessageWrapper,
  Avatar,
  TextUser,
  TextNetwork,
  TextName,
} from './StyledComponent';
import NoAvatarIco from 'images/ico/no-user-ico.png';

export default function ChatMessage({ message, user }) {
  const { text, id, photoURL, name } = message;

  let isUserMsg = id === user.id ? true : false;

  return (
    <>
      <MessageWrapper isUserMsg={isUserMsg}>
        <Avatar src={photoURL || NoAvatarIco} />
        <TextName>{name}</TextName>
        {isUserMsg ? (
          <TextUser>{text}</TextUser>
        ) : (
          <TextNetwork>{text}</TextNetwork>
        )}
      </MessageWrapper>
    </>
  );
}
