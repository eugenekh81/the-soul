import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { About } from './components/About/About';
import { Header } from './components/Header';
import { Hero } from './components/Hero/Hero';
import { ModulesList } from './components/ModulesList/ModulesList';
import { Presentation } from './components/Presentation/Presentation';

export const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Hero />

        <About />

        <Presentation />

        <ModulesList />
      </main>
    </>
  );
};
