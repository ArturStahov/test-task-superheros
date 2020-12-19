import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { Button } from './StyledComponent';

export default function ButtonLogOuts({ onLogOut }) {
  return (
    <Button type="button" onClick={() => onLogOut()}>
      <FontAwesomeIcon
        className="icon"
        icon={faPowerOff}
        color="#000000"
        size="2x"
      />
    </Button>
  );
}
