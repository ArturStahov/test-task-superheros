import { useState, useContext, useEffect, useRef } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
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

export default function App() {
  const [itemArr, setItemArr] = useState([]);
  const [itemEdit, setItemEdit] = useState(null);
  const [itemPreview, setItemPreview] = useState(null);
  const { userID, isLoggedIn, onLogOut } = useContext(authContext);

  useEffect(() => {
    //Get items in first loading
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
      .catch(error => console.log(error));
    return () => {
      setItemArr([]); //clear after logout
    };
  }, [userID]);

  useEffect(() => {
    //PUT items every change ItemsArr
    if (!userID) {
      return;
    }
    FetchAddDeleteItems(userID, itemArr)
      .then(data => {
        console.log('AddDeleteItems', data);
      })
      .catch(error => console.log(error));
  }, [itemArr]);

  const handlerFormCreateHero = heroObj => {
    if (itemEdit) {
      setItemArr([...itemArr.filter(item => item.id !== itemEdit.id)]);
      setItemEdit(null);
    }
    setItemArr(prevState => [...prevState, heroObj]);
  };

  const handlerDeleteItem = itemId => {
    setItemArr([...itemArr.filter(item => item.id !== itemId)]);
  };

  const handlerEditItem = itemId => {
    setItemEdit(itemArr.find(item => item.id === itemId));
  };

  const handlerOpenModal = itemPreviewId => {
    setItemPreview(itemArr.find(item => item.id === itemPreviewId));
  };

  const handlerCloseModal = () => {
    setItemPreview(null);
  };

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
            <HeroList
              itemArr={itemArr}
              onDeleteItem={handlerDeleteItem}
              onEditItem={handlerEditItem}
              onPreviewItem={handlerOpenModal}
            />
          )}
        </Section>
        {itemPreview && (
          <Modal onCloseModal={handlerCloseModal}>
            <HeroPreviewList itemHero={itemPreview} />
          </Modal>
        )}
      </main>
      <Footer />
    </>
  );
}
