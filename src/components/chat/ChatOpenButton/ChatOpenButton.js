import IconButton from '@material-ui/core/IconButton';
import AddCommentIcon from '@material-ui/icons/AddComment';
import { Wrapper } from './StyledComponent';

export default function ChatOpenButton() {
  return (
    <Wrapper>
      <IconButton aria-label="delete">
        <AddCommentIcon style={{ fontSize: 36, color: '#4671D5' }} />
      </IconButton>
    </Wrapper>
  );
}
