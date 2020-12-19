import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import {
  Overlay,
  Button,
  ControlWrapper,
  Images,
  Title,
  Item,
  List,
} from './StyledComponent';

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
