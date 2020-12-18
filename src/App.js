import { useState } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import FormCreateHero from './components/FormCreateHero/FormCreateHero';
import HeroList from './components/HeroList/HeroList';

export default function App() {
  const [itemArr, setItemArr] = useState([]);
  const [itemEdit, setItemEdit] = useState(null);

  const handlerFormCreateHero = heroObj => {
    setItemArr(prevState => [...prevState, heroObj]);
  };
  const handlerDeleteItem = itemId => {
    setItemArr([...itemArr.filter(item => item.id !== itemId)]);
  };
  const handlerEditItem = itemId => {
    setItemEdit(itemArr.find(item => item.id === itemId));
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
          />
        </Section>
      </main>
      <Footer />
    </>
  );
}
