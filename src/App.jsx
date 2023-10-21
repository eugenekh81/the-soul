import './App.scss';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Concepts } from './components/Concepts';
import { ModulesList } from './components/ModulesList';
import { Presentation } from './components/Presentation';
import { Team } from './components/Team/Team';
import { Contacts } from './components/Contacts';
import { Partners } from './components/Partners';
import { Reviews } from './components/Reviews';
import { PsychologicalState } from './components/PsychologicalState/';
import { Results } from './components/Results';
import { Participants } from './components/Participants/Participants';
import { JoinTheProgram } from './components/JoinProgram/JoinTheProgram';
import { SupportUs } from './components/SupportUs/SupportUs';

export const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <Hero />

        <About />

        <Concepts />

        <Presentation />

        <Participants />

        <PsychologicalState />

        <ModulesList />

        <Results />

        <Reviews />

        <JoinTheProgram />

        <SupportUs />

        <Team />

        <Partners />

        <Contacts />
      </main>
    </>
  );
};
