import { Component } from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import Section from './components/Section/Section';
import FormCreateHero from './components/FormCreateHero/FormCreateHero';

export default class App extends Component {
  render() {
    return (
      <>
        <Header title="hero factory" />

        <main>
          <Section>
            <FormCreateHero />
          </Section>
        </main>
        <Footer />
      </>
    );
  }
}
