import { Hero } from '/src/components/Hero';
import { AboutUC } from '/src/components/AboutUC';
import { Concepts } from '/src/components/Concepts';
import { ModulesList } from '/src/components/ModulesList';
import { Presentation } from '/src/components/Presentation';
import { Team } from '/src/components/Team/Team';
import { Partners } from '/src/components/Partners';
import { Reviews } from '/src/components/Reviews';
import { MentalState } from '/src/components/MentalState';
import { Results } from '/src/components/Results';
import { Participants } from '/src/components/Participants';
import { JoinTheProgram } from '/src/components/JoinProgram';
import { SupportUs } from '/src/components/SupportUs';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const UkrainianCirclePage = () => {
  const { lang } = useContext(LangContext);
  return (
    <>
      <Helmet>
        <title>
          {lang === 'en'
            ? 'The Soul | Ukrainian Cirle'
            : 'The Soul | Українське Коло'}
        </title>
        <meta
          name='description'
          content="The Soul Ukrainian Center of Psychology is a professional collaboration of psychologists from different disciplines, established to offer psychological support to people and provide a choice of the most effective methods and approaches. The Ukrainian Center of Psychology, The Soul 'Душа', was created on February 2, 2021, as an initiative and creative union of psychologists practicing in various fields (such as psychoanalysis)."
        />
        <meta
          name='robots'
          content='noindex, nofollow, max-image-preview:large'
        ></meta>
        <link rel='canonical' href='https://ukrainiancircle.com.ua/'></link>
      </Helmet>

      <Hero />

      <AboutUC />

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
