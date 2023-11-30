import {
  AboutUsDescription,
  AboutUsGoal,
  AboutUsHero,
  AboutUsPlans,
  AboutUsActivities,
} from '../../components/AboutUsComponents';
import {} from '../../components/AboutUsComponents';
import { Donate } from '../../components/Donate/Donate';
import { Partners } from '../../components/Partners/Partners';
import './AboutUsPage.scss';

export const AboutUsPage = () => {
  return (
    <div className='about-us'>
      <AboutUsHero />
      <AboutUsDescription />
      <AboutUsGoal />
      <AboutUsActivities />
      <AboutUsPlans />
      <Donate />
      <Partners />
    </div>
  );
};
