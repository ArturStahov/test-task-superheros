import { useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import { Button } from './StyledComponent';
import { SignOutUser } from '../../redux/auth/auth-operation';

export default function ButtonLogOuts() {
  const dispatch = useDispatch();
  return (
    <Button type="button" onClick={() => dispatch(SignOutUser())}>
      <FontAwesomeIcon
        className="icon"
        icon={faPowerOff}
        color="#000000"
        size="2x"
      />
    </Button>
  );
}

ButtonLogOuts.propTypes = {
  onLogOut: PropTypes.func,
};
