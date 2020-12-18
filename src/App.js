import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import FormCreateHero from './components/FormCreateHero/FormCreateHero';
import HeroList from './components/HeroList/HeroList';
import Modal from './components/Modal/Modal';
import HeroPreviewList from './components/HeroPreviewList/HeroPreviewList';

export default function App() {
  const [itemArr, setItemArr] = useState([]);
  const [itemEdit, setItemEdit] = useState(null);
  const [itemPreview, setItemPreview] = useState(null);

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
        <FormCreateHero
          onCreateHero={handlerFormCreateHero}
          itemEdit={itemEdit}
        />
      </Header>

      <main>
        <Section>
          <HeroList
            itemArr={itemArr}
            onDeleteItem={handlerDeleteItem}
            onEditItem={handlerEditItem}
            onPreviewItem={handlerOpenModal}
          />
        </Section>
        {itemPreview && (
          <Modal onCloseModal={handlerCloseModal}>
            <HeroPreviewList itemHero={itemPreview} />{' '}
          </Modal>
        )}
      </main>
      <Footer />
    </>
  );
}
