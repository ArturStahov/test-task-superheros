import { useState, useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt, faEdit } from '@fortawesome/free-solid-svg-icons';

import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import * as action from '../../redux/hero-card/hero-card-action';
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

function HeroLists({ itemArr, onDeleteItem, onEditItem, onPreviewItem }) {
  const [paginateHeroList, setPaginateHeroList] = useState([]);
  const [paginatePage, setPaginatePage] = useState(1);

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
          <Item key={item.id}>
            <Overlay onClick={() => onPreviewItem(item)}>
              <Title>{item.nickName}</Title>
              <Images src={item.images} alt={item.nickName} />
            </Overlay>
            <ControlWrapper className="control">
              <Button type="button" onClick={() => onDeleteItem(item.id)}>
                <FontAwesomeIcon
                  className="icon"
                  icon={faTrashAlt}
                  color="#42424B"
                  size="2x"
                />
              </Button>
              <Button type="button" onClick={() => onEditItem(item)}>
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

const mapStateToProps = state => {
  return {
    itemArr: state.heroCards,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onDeleteItem: id => dispatch(action.deleteCard(id)),
    onEditItem: item => dispatch(action.addItemEdit(item)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(HeroLists);

HeroLists.propTypes = {
  itemArr: PropTypes.array.isRequired,
  onDeleteItem: PropTypes.func.isRequired,
  onEditItem: PropTypes.func.isRequired,
  onPreviewItem: PropTypes.func.isRequired,
};
