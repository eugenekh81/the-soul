import './YellowBlue.scss';
import { Hero } from './Hero.jsx';
import { Information } from './Information.jsx';
import { useLang } from '../../hooks/useLang.jsx';

export const YellowBlue = () => {


  return (
    <div className='yellow-blue'>
      <Hero />

      <Information />
    </div>
  );
};
