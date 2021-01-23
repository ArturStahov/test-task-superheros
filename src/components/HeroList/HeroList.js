import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';
import { useDispatch, useSelector } from 'react-redux';

import { heroItemsValue } from './hero-selector';
import {
  deleteHero,
  editHero,
} from '../../redux/hero-card/hero-card-operations';
import PaginationView from '../PaginationView/PaginationView';
import {
  Overlay,
  Button,
  ControlWrapper,
  Images,
  Title,
  Item,
  List,
} from './StyledComponent';

export default function HeroLists({ onPreviewItem }) {
  const [paginateHeroList, setPaginateHeroList] = useState([]);
  const [paginatePage, setPaginatePage] = useState(1);

  const dispatch = useDispatch();
  const itemArr = useSelector(heroItemsValue);

  const handlerPaginateHeroList = (activePageNumber = 1) => {
    setPaginatePage(activePageNumber);
  };

  useEffect(() => {
    if (!itemArr) {
      return;
    }
    setPaginateHeroList([
      ...itemArr.slice((paginatePage - 1) * 5, paginatePage * 5),
    ]);
  }, [paginatePage, itemArr]);

  return (
    <>
      <List>
        {paginateHeroList.map(item => (
          <Item key={item.uniqId}>
            <Overlay onClick={() => onPreviewItem(item)}>
              <Title>{item.name}</Title>
              <Images src={item.webImageUrl} alt={item.name} />
            </Overlay>
            <ControlWrapper className="control">
              <Button type="button" onClick={() => dispatch(deleteHero(item))}>
                <FontAwesomeIcon
                  className="icon"
                  icon={faTrashAlt}
                  color="#42424B"
                  size="2x"
                />
              </Button>
              <Button type="button" onClick={() => dispatch(editHero(item))}>
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
      {itemArr.length > 0 && (
        <PaginationView
          onHandlerChange={handlerPaginateHeroList}
          length={itemArr.length}
        />
      )}
    </>
  );
}
