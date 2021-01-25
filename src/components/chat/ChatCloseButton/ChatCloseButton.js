import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { ButtonClose } from './StyledComponent';

export default function ChatCloseButton({ onClose }) {
  return (
    <ButtonClose
      type="button"
      onClick={() => {
        onClose();
      }}
    >
      <FontAwesomeIcon icon={faTimesCircle} color="#FFC000" size="2x" />
    </ButtonClose>
  );
}
