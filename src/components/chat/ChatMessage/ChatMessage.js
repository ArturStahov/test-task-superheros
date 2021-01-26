import {
  MessageWrapper,
  Avatar,
  TextUser,
  TextNetwork,
} from './StyledComponent';
import NoAvatarIco from 'images/ico/no-user-ico.png';

export default function ChatMessage({ message, user }) {
  const { text, id, photoURL } = message;

  let isUserMsg = id === user.id ? true : false;

  return (
    <>
      <MessageWrapper isUserMsg={isUserMsg}>
        <Avatar src={photoURL || NoAvatarIco} />
        {isUserMsg ? (
          <TextUser>{text}</TextUser>
        ) : (
          <TextNetwork>{text}</TextNetwork>
        )}
      </MessageWrapper>
    </>
  );
}
