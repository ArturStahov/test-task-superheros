import { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import gsap from 'gsap';
import { Bounce } from 'gsap';
import Header from './components/Header';
import Section from './components/Section';
import FormCreateHero from './components/FormCreateHero';
import HeroList from './components/HeroList';
import Modal from './components/Modal';
import HeroPreview from './components/HeroPreview';
import AuthTab from './components/Auth/AuthTab/AuthTab';
import ButtonLogOut from './components/ButtonLogOut';
import { AppBar } from './components/AppBar';
import { infoNotification } from './Notification/errorHandler';
import { userValue } from './selectors/authSelector';
import { getAllUserHero } from './redux/hero-card/hero-card-operations';
import { AllHeroNetwork } from './components/AllHeroNetwork';
import Logo from 'components/Header/Logo';
import ChatOpenButton from './components/Chat/ChatOpenButton';
import Chat from './components/Chat';

export default function App() {
  const [itemPreview, setItemPreview] = useState(null);
  const [toggleChat, setToggleChat] = useState(false);
  const [chatRef, setChatRef] = useState(null);
  const user = useSelector(userValue);
  const dispatch = useDispatch();

  useEffect(() => {
    if (user) {
      infoNotification('Welcome!');
      dispatch(getAllUserHero(user));
      console.log(user);
      return;
    }
  }, [user, dispatch]);

  const handlerOpenModal = item => {
    setItemPreview(item);
    console.log('itemPreviewHero', item);
  };

  const handlerCloseModal = () => {
    setItemPreview(null);
  };

  const openChat = () => {
    gsap.to(chatRef.current, {
      duration: 3,
      delay: 0,
      x: 0,
      rotateY: 0,
      scale: 1,
      ease: Bounce.easeOut,
      opacity: 1,
    });

    // setToggleChat(true)
  };
  const closeChat = () => {
    gsap.to(chatRef.current, {
      duration: 3,
      delay: 0,
      x: -150,
      scale: 0,
      rotateY: 360,
      opacity: 0,
    });
    // setToggleChat(false)
  };
  const getChatRef = chatRef => {
    setChatRef(chatRef);
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
        {user && <ChatOpenButton onOpen={openChat} />}
        {user && <Chat user={user} onClose={closeChat} getRef={getChatRef} />}
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
