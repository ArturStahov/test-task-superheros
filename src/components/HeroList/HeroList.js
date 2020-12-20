import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import PropTypes from 'prop-types';
import {
  Overlay,
  Button,
  ControlWrapper,
  Images,
  Title,
  Item,
  List,
} from './StyledComponent';

//create hero card list from itemArr
export default function HeroLists({
  itemArr,
  onDeleteItem,
  onEditItem,
  onPreviewItem,
}) {
  return (
    <List>
      {itemArr.map(({ nickName, images, id }) => (
        <Item key={id}>
          <Overlay onClick={() => onPreviewItem(id)}>
            <Title>{nickName}</Title>
            <Images src={images} alt={nickName} />
          </Overlay>
          <ControlWrapper className="control">
            <Button type="button" onClick={() => onDeleteItem(id)}>
              <FontAwesomeIcon
                className="icon"
                icon={faTrashAlt}
                color="#42424B"
                size="2x"
              />
            </Button>
            <Button type="button" onClick={() => onEditItem(id)}>
              <FontAwesomeIcon
                className="icon"
                icon={faEdit}
                color="#42424B"
                size="2x"
              />
            </Button>
          </ControlWrapper>
        </Item>
      ))}
    </List>
  );
}

HeroLists.propTypes = {
  itemArr: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
  onPreviewItem: PropTypes.func.isRequired,
};
