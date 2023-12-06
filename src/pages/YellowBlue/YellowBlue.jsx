import './YellowBlue.scss';
import { Hero } from './Hero.jsx';
import { Information } from './Information.jsx';
import { ScheduleInfo } from './ScheduleInfo.jsx';

import { Registration } from './Registration.jsx';
import { MoreInfo } from './MoreInfo.jsx';


export const YellowBlue = () => {

  return (
    <div className='yellow-blue'>
      <Hero />

      <Information />

      <ScheduleInfo />

      <Registration />

      <MoreInfo />


    </div>
  );
};
