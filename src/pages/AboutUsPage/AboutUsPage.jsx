import {
  AboutUsDescription,
  AboutUsGoal,
  AboutUsHero,
  AboutUsPlans,
  AboutUsActivities,
} from '../../components/AboutUsComponents';
import {} from '../../components/AboutUsComponents';
import './AboutUsPage.scss';

export const AboutUsPage = () => {
  return (
    <div className='about-us'>
      <AboutUsHero />
      <AboutUsDescription />
      <AboutUsGoal />
      <AboutUsActivities />
      <AboutUsPlans />
    </div>
  );
};
