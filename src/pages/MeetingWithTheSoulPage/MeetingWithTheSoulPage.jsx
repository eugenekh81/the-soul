import './MeetingWithTheSoulPage.scss';
import { MeetingWithTheSoulBanner } from '../../components/MeetingWithTheSoulBanner';
import { Partners } from '../../components/Partners';
import { MeetingWIthTheSoulContent } from '../../MeetingWithTheSoulContent';
import { Helmet } from 'react-helmet';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const MeetingWithTheSoulPage = () => {
  const { lang } = useContext(LangContext);

  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>
          {lang === 'en'
            ? 'The Soul | Meetings with the Soul'
            : 'The Soul | Зустрічі з Душею'}
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
      <MeetingWithTheSoulBanner />

      <MeetingWIthTheSoulContent />

      <Partners />
    </>
  );
};
