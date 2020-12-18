import { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimesCircle } from '@fortawesome/free-solid-svg-icons';
import { Modal, ContentBlock, ButtonClose } from './StyledComponents';
import PropTypes from 'prop-types';

export default function ModalWindows({ onCloseModal, children }) {
  const [isOut, setIsOut] = useState(false);
  const timeOut = useRef();

  useEffect(() => {
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handlerEscape);
    return () => {
      document.body.style.overflow = 'visible';
      window.removeEventListener('keydown', handlerEscape);
      clearTimeout(timeOut.current);
    };
  }, []);

  const handlerEscape = e => {
    if (e.code === 'Escape') {
      fadeoutModal();
    }
  };

  const fadeoutModal = () => {
    setIsOut(true);
    const timeOutId = setTimeout(() => onCloseModal(), 500);
    timeOut.current = timeOutId;
  };

  const styledClose = 'close';
  const styledOpen = 'open';
  return (
    <Modal>
      <ContentBlock className={isOut ? styledClose : styledOpen}>
        <ButtonClose
          type="button"
          onClick={() => {
            fadeoutModal();
          }}
        >
          <FontAwesomeIcon icon={faTimesCircle} color="green" size="2x" />
        </ButtonClose>
        {children}
      </ContentBlock>
    </Modal>
  );
}

ModalWindows.propTypes = {
  onCloseModal: PropTypes.func.isRequired,
};
