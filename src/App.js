import { useState, useContext } from 'react';

import Header from './components/Header';
import Section from './components/Section';
import FormCreateHero from './components/FormCreateHero';
import HeroList from './components/HeroList';
import Modal from './components/Modal';
import HeroPreviewList from './components/HeroPreviewList';
import AuthTab from './components/Auth/AuthTab/AuthTab';
import authContext from './Utils/Context';
import ButtonLogOut from './components/ButtonLogOut';
import FetchAddDeleteItems from './Utils/FetchAddDeleteItem';
import FetchGetAllItems from './Utils/FetchGetAllItems';

export default function App() {
  const [itemPreview, setItemPreview] = useState(null);
  //global context user auth(userId:user token from firebase,isLoggedIn:bool only read,onLogOut:function change param isLoggedIn in false)
  const { isLoggedIn, onLogOut } = useContext(authContext);

  // useEffect(() => {
  //   if (!userID) {
  //     return;
  //   }
  //   FetchGetAllItems(userID)
  //     .then(data => {
  //       console.log('GetAllItems', data);
  //       if (data) {
  //         setItemArr(data);
  //       }
  //     })
  //     .catch(error => console.log(error))
  //     .finally(() => handlerPaginateHeroList(1));
  //   return () => {
  //     setItemArr([]);
  //   };
  // }, [userID]);

  // useEffect(() => {
  //   if (!userID) {
  //     return;
  //   }
  //   FetchAddDeleteItems(userID, itemArr)
  //     .then(data => {
  //       console.log('AddDeleteItems', data);
  //     })
  //     .catch(error => console.log(error));
  // }, [itemArr]);

  const handlerOpenModal = item => {
    setItemPreview(item);
  };

  const handlerCloseModal = () => {
    setItemPreview(null);
  };

  return (
    <>
      <Header title="hero factory">
        {isLoggedIn ? <FormCreateHero /> : <AuthTab />}
      </Header>
      <main>
        {isLoggedIn && <ButtonLogOut onLogOut={onLogOut} />}
        <Section>
          {isLoggedIn && <HeroList onPreviewItem={handlerOpenModal} />}
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
