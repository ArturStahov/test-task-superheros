import IconButton from '@material-ui/core/IconButton';

import { Button } from './StyledComponent';
import ChatIcon from '@material-ui/icons/Chat';

export default function ChatOpenButton({ onOpen }) {
  return (
    <Button onClick={() => onOpen()}>
      <IconButton aria-label="delete">
        <ChatIcon style={{ fontSize: 36, color: '#4671D5' }} />
      </IconButton>
    </Button>
  );
}
