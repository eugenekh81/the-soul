import './App.scss';
import { About } from './components/About/About';
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';

export const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Hero />

        <About />
      </main>
    </>
  );
};
