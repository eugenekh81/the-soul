import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Concepts } from './components/Concepts';
import { ModulesList } from './components/ModulesList';
import { Presentation } from './components/Presentation';
import { Team } from './components/Team/Team';
import { VideoReviews } from './components/VideoReviews';
import { Contacts } from './components/Contacts';
import { Partners } from './components/Partners';
import { Reviews } from './components/Reviews';
import { Demographics } from './components/Demographics';
import { PsychologicalState } from './components/PsychologicalState/';
import { Infographics } from './components/Infographics';

export const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Hero />

        <About />

        <Concepts />

        <Presentation />

        <Demographics />

        <PsychologicalState />

        <ModulesList />

        <Infographics />

        <Reviews />

        <VideoReviews />

        <Team />

        <Partners />

        <Contacts />
      </main>
    </>
  );
};
