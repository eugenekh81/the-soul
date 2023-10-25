import { Hero } from '/src/components/Hero';
import { About } from '/src/components/About';
import { Concepts } from '/src/components/Concepts';
import { ModulesList } from '/src/components/ModulesList';
import { Presentation } from '/src/components/Presentation';
import { Team } from '/src/components/Team/Team';
import { Partners } from '/src/components/Partners';
import { Reviews } from '/src/components/Reviews';
import { MentalState } from '/src/components/MentalState';
import { Results } from '/src/components/Results';
import { Participants } from '/src/components/Participants/Participants';
import { JoinTheProgram } from '/src/components/JoinProgram/JoinTheProgram';
import { SupportUs } from '/src/components/SupportUs/SupportUs';


export const UkrainianCirclePage = () => {
  return (
    <>

        <Hero />

        <About />

        <Concepts />

        <Presentation />

        <Participants />

        <MentalState />

        <ModulesList />

        <Results />

        <Reviews />

        <JoinTheProgram />

        <SupportUs />

        <Team />

        <Partners />

    </>
  );
};
