import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Header from './components/Header';
import Section from './components/Section';
import FormCreateHero from './components/FormCreateHero';
import HeroList from './components/HeroList';
import Modal from './components/Modal';
import HeroPreviewList from './components/HeroPreviewList';
import AuthTab from './components/Auth/AuthTab/AuthTab';

import ButtonLogOut from './components/ButtonLogOut';
import { AppBar } from './components/AppBar';
import * as notification from './Notification/errorHandler';
import { userValue } from './components/Auth/authSelector';

export default function App() {
  const [itemPreview, setItemPreview] = useState(null);
  const user = useSelector(userValue);

  useEffect(() => {
    if (user) {
      notification.infoNotification('Welcome!');
      console.log(user);
      return;
    }
  }, [user]);

  const handlerOpenModal = item => {
    setItemPreview(item);
  };

  const handlerCloseModal = () => {
    setItemPreview(null);
  };

  return (
    <>
      <Header title="hero factory">
        {user ? <FormCreateHero /> : <AuthTab />}
        {user && <AppBar userName={user.nickName} />}
      </Header>
      <main>
        {user && <ButtonLogOut />}
        <Section>
          {user && <HeroList onPreviewItem={handlerOpenModal} />}
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
