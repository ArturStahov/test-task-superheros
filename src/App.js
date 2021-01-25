import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Header from './components/Header';
import Section from './components/Section';
import FormCreateHero from './components/FormCreateHero';
import HeroList from './components/HeroList';
import Modal from './components/Modal';
import HeroPreview from './components/HeroPreview';
import AuthTab from './components/Auth/AuthTab/AuthTab';

import ButtonLogOut from './components/ButtonLogOut';
import { AppBar } from './components/AppBar';
import * as notification from './Notification/errorHandler';
import { userValue } from './components/Auth/authSelector';
import { getAllUserHero } from './redux/hero-card/hero-card-operations';
import { AllHeroNetwork } from './components/AllHeroNetwork';
import Logo from 'components/Header/Logo';
import ChatOpenButton from './components/chat/ChatOpenButton';
import Chat from './components/chat';

export default function App() {
  const [itemPreview, setItemPreview] = useState(null);
  const user = useSelector(userValue);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      notification.infoNotification('Welcome!');
      dispatch(getAllUserHero(user));
      console.log(user);
      return;
    }
  }, [user, dispatch]);

  const handlerOpenModal = item => {
    setItemPreview(item);
  };

  const handlerCloseModal = () => {
    setItemPreview(null);
  };

  return (
    <>
      <Header>
        {!user && <Logo title="hero factory" />}

        {user ? <FormCreateHero /> : <AuthTab />}
        {user && <AppBar userName={user.nickName} userIco={user.photoURL} />}
      </Header>
      <main>
        {user && <ButtonLogOut />}
        {user && <ChatOpenButton />}
        {user && <Chat user={user} />}
        {user && (
          <Section title="You Hero">
            <HeroList onPreviewItem={handlerOpenModal} />
          </Section>
        )}
        {user && (
          <Section title="All hero from network">
            {user && <AllHeroNetwork onPreviewItem={handlerOpenModal} />}
          </Section>
        )}

        {itemPreview && (
          <Modal onCloseModal={handlerCloseModal}>
            <HeroPreview itemHero={itemPreview} />
          </Modal>
        )}
      </main>
    </>
  );
}
