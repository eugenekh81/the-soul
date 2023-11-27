import { AboutUsDescription } from '../../components/AboutUsDescription/AboutUsDescription';
import { AboutUsHero } from '../../components/AboutUsHero';
import './AboutUsPage.scss';

export const AboutUsPage = () => {
  return (
    <div className='about-us'>
      <AboutUsHero />

      <AboutUsDescription />
    </div>
  );
};
