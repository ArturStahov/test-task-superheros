import { useState, useContext, useEffect } from 'react';
import Header from './components/Header/Header';
import Section from './components/Section/Section';
import FormCreateHero from './components/FormCreateHero/FormCreateHero';
import HeroList from './components/HeroList/HeroList';
import Modal from './components/Modal/Modal';
import HeroPreviewList from './components/HeroPreviewList/HeroPreviewList';
import AuthTab from './components/Auth/AuthTab/AuthTab';
import authContext from './Utils/Context';
import ButtonLogOut from './components/ButtonLogOut/ButtonLogOut';
import FetchAddDeleteItems from './Utils/FetchAddDeleteItem';
import FetchGetAllItems from './Utils/FetchGetAllItems';
import PaginationView from './components/PaginationView/PaginationView';

export default function App() {
  //hero  array
  const [itemArr, setItemArr] = useState([]);
  //selected edit hero item
  const [itemEdit, setItemEdit] = useState(null);
  // select hero item for preview in Modal window
  const [itemPreview, setItemPreview] = useState(null);
  //global context user auth(userId:user token from firebase,isLoggedIn:bool only read,onLogOut:function change param isLoggedIn in false)
  const { userID, isLoggedIn, onLogOut } = useContext(authContext);
  //paginateHeroList:sort array itemArr for HeroList component
  const [paginateHeroList, setPaginateHeroList] = useState([]);
  // active page  number in paginate
  const [paginatePage, setPaginatePage] = useState(1);

  // go to firebase than user login and return save user hero array
  useEffect(() => {
    if (!userID) {
      return;
    }
    FetchGetAllItems(userID)
      .then(data => {
        console.log('GetAllItems', data);
        if (data) {
          setItemArr(data);
        }
      })
      .catch(error => console.log(error))
      .finally(() => handlerPaginateHeroList(1));
    return () => {
      setItemArr([]);
    };
  }, [userID]);

  // save in firebase itemArr if it change(edit some item or delete)
  useEffect(() => {
    if (!userID) {
      return;
    }
    FetchAddDeleteItems(userID, itemArr)
      .then(data => {
        console.log('AddDeleteItems', data);
      })
      .catch(error => console.log(error));
  }, [itemArr]);

  //create hero item and add in itemArr
  //if heroObj is from itemEditor then filter itemArr and change itemObj in editObj
  const handlerFormCreateHero = heroObj => {
    if (itemEdit) {
      setItemArr([...itemArr.filter(item => item.id !== itemEdit.id)]);
      setItemEdit(null);
    }
    setItemArr(prevState => [...prevState, heroObj]);
  };

  //filter itemArr in obj delete  and return new array
  const handlerDeleteItem = itemId => {
    setItemArr([...itemArr.filter(item => item.id !== itemId)]);
  };

  // find edit obj in itemArr for selected item id in click edit in hero card
  const handlerEditItem = itemId => {
    setItemEdit(itemArr.find(item => item.id === itemId));
  };

  //find item in itemArr and submit itemObj in Modal windows for click view in hero card
  const handlerOpenModal = itemPreviewId => {
    setItemPreview(itemArr.find(item => item.id === itemPreviewId));
  };

  // clear save selected item preview and close Modal windows
  const handlerCloseModal = () => {
    setItemPreview(null);
  };

  //save select page number in PaginationView Component
  const handlerPaginateHeroList = (activePageNumber = 1) => {
    setPaginatePage(activePageNumber);
  };

  //follow for change page pagination number
  //return new pagination array hero obj which uses HeroList component
  useEffect(() => {
    setPaginateHeroList([
      ...itemArr.slice((paginatePage - 1) * 5, paginatePage * 5),
    ]);
  }, [paginatePage, itemArr]);

  return (
    <>
      <Header title="hero factory">
        {isLoggedIn ? (
          <FormCreateHero
            onCreateHero={handlerFormCreateHero}
            itemEdit={itemEdit}
          />
        ) : (
          <AuthTab />
        )}
      </Header>
      <main>
        {isLoggedIn && <ButtonLogOut onLogOut={onLogOut} />}
        <Section>
          {isLoggedIn && (
            <>
              <HeroList
                itemArr={paginateHeroList}
                onDeleteItem={handlerDeleteItem}
                onEditItem={handlerEditItem}
                onPreviewItem={handlerOpenModal}
              />
              {itemArr.length > 0 && (
                <PaginationView
                  onHandlerChange={handlerPaginateHeroList}
                  length={itemArr.length}
                />
              )}
            </>
          )}
        </Section>
        {itemPreview && (
          <Modal onCloseModal={handlerCloseModal}>
            <HeroPreviewList itemHero={itemPreview} />
          </Modal>
        )}
      </main>
    </>
  );
}
