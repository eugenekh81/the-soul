import 'bootstrap/dist/css/bootstrap.min.css';
import { Team } from '../../components/Team';
import { Helmet } from 'react-helmet';
export const TeamPage = () => {


  return (
    <>
      <Helmet>
        <html lang="en" />
        <title>The Soul | Tean</title>
        <meta name="description" content="The Soul Ukrainian Center of Psychology is a professional collaboration of psychologists from different disciplines, established to offer psychological support to people and provide a choice of the most effective methods and approaches. The Ukrainian Center of Psychology, The Soul 'Душа', was created on February 2, 2021, as an initiative and creative union of psychologists practicing in various fields (such as psychoanalysis)." />
        <meta name="robots" content="noindex, nofollow, max-image-preview:large"></meta>
        <link rel="canonical" href="https://ukrainiancircle.com.ua/"></link>
      </Helmet>
        <h1>Our team</h1>

        <Team />
    </>
  );
};
