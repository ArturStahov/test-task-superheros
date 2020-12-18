import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

const List = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
`;

const Item = styled.li`
  position: relative;
  width: 250px;
  height: 300px;
  transition: transform 0.3s ease-in-out;
  cursor: pointer;
  &:hover {
    transform: scale(1.1);
  }
  &:not(:last-child) {
    margin-right: 20px;
  }
`;
const Title = styled.h2`
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translateX(-50%);
  font-size: 3.8rem;
  font-family: 'Bangers';
  font-weight: 400;
  color: #ffbf00;
  -webkit-text-stroke-width: 3px;
  -webkit-text-stroke-color: #9a3535;
  text-transform: uppercase;
`;
const Images = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const ControlWrapper = styled.div`
  display: flex;
  position: absolute;
  left: 50%;
  bottom: 0;
  transform: translateX(-50%);
`;
const Button = styled.button`
  width: 40px;
  height: 40px;
  background-color: #9a3535;
  outline: none;
  border: none;

  cursor: pointer;
  &:hover .icon {
    color: #ffffff;
  }
  &:not(:last-child) {
    margin-right: 10px;
  }
`;
export default function HeroLists({ itemArr, onDeleteItem, onEditItem }) {
  return (
    <List>
      {itemArr.map(({ nickName, images, id }) => (
        <Item key={id}>
          <Title>{nickName}</Title>
          <Images src={images} alt={nickName} />
          <ControlWrapper>
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
