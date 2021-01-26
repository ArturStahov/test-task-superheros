import IconButton from '@material-ui/core/IconButton';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { Button } from './StyledComponent';

export default function ChatOpenButton({ onOpen }) {
  return (
    <Button onClick={() => onOpen()}>
      <IconButton aria-label="delete">
        <AddCommentIcon style={{ fontSize: 36, color: '#4671D5' }} />
      </IconButton>
    </Button>
  );
}
