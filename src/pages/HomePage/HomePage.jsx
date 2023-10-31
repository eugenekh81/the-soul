import 'bootstrap/dist/css/bootstrap.min.css';
import { HomeBanner } from '../../components/HomeBanner/HomeBanner';
import { Team } from '../../components/Team/Team';
import { AboutCenter } from '../../components/AboutCenter/AboutCenter';
import { HomeSoulCover } from '../../components/HomeSoulCover/HomeSoulCover';
import { Projects } from '../../components/Projects/Projects';

export const HomePage = () => {
  return (
    <>
      <HomeBanner />

      <AboutCenter />

      <HomeSoulCover />

      <Projects />
      
      <Team />
    </>
  );
};
