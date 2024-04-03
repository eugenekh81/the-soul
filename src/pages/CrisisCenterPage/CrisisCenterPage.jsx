import { Helmet } from 'react-helmet';
import './CrisisCenterPage.scss';
import { CrisisCenterBanner } from '../../components/CrisisCenterBanner';
import { CrisisCenterDescription } from '../../components/CrisisCenterDescription';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import { CrisisCenterConsultation } from '../../components/CrisisCenterConsultation/CrisisCenterConsultation';
import { CrisisCenterSupportGroups } from '../../components/CrisisCenterSupportGroups';
import { CrisisCenterReviews } from '../../components/CrisisCenterReviews/CrisisCenterReviews';
import { Partners } from '../../components/Partners';
import { CrisisCenterSpecialThanks } from '../../components/CrisisCenterSpecialThanks/CrisisCenterSpecialThanks';

export const CrisisCenterPage = () => {
  const lang = useContext(LangContext);
  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>
          {lang === 'en'
            ? 'The Soul | Crisis Center'
            : 'The Soul | Кризовий Центр'}
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

      <section className='crisis-center'>
        <CrisisCenterBanner />
        <CrisisCenterDescription />
        <CrisisCenterConsultation />
        <CrisisCenterSupportGroups />
        <CrisisCenterReviews />
        <Partners />
        <CrisisCenterSpecialThanks />
      </section>
    </>
  );
};
