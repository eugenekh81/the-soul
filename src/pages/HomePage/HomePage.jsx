import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeBanner } from '../../components/HomeBanner/HomeBanner';
import { Team } from '../../components/Team/Team';
import { AboutCenter } from '../../components/AboutCenter/AboutCenter';
import { HomeSoulCover } from '../../components/HomeSoulCover/HomeSoulCover';
import { Projects } from '../../components/Projects/Projects';
import { PastProjects } from '../../components/PastProjects/PastProjects';
import { Helmet } from 'react-helmet';
export const HomePage = () => {


  return (
    <>
      <Helmet>
        <title>The Soul | Home</title>
        <meta name="description" content="The Soul Ukrainian Center of Psychology is a professional collaboration of psychologists from different disciplines, established to offer psychological support to people and provide a choice of the most effective methods and approaches. The Ukrainian Center of Psychology, The Soul 'Душа', was created on February 2, 2021, as an initiative and creative union of psychologists practicing in various fields (such as psychoanalysis)." />
        <meta name="robots" content="noindex, nofollow, max-image-preview:large"></meta>
        <link rel="canonical" href="https://ukrainiancircle.com.ua/"></link>
      </Helmet>

      <HomeBanner />

      <AboutCenter />

      <HomeSoulCover />

      <Projects />

      <PastProjects />

      <Team />
    </>
  );
};
