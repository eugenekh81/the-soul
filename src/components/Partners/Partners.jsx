import './Partners.scss';

import ekr320 from '/images/partners/ekr-320.png';
import katie320 from '/images/partners/katieeastman-320.png';
import renovare320 from '/images/partners/renovare-320.png';
import solven320 from '/images/partners/solven-320.png';
import wca320 from '/images/partners/wca-320.png';

import { Donate } from '../Donate/Donate';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const Partners = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className='page__section section partners'>
      <div className='container'>
        <h2 className='section__title'>
          {lang === 'en' ? 'Partners' : 'Партнери'}
        </h2>

        <ul className='partners__list'>
          <li className='partners__list-item'>
            <a
              href='https://www.solvenplus.one/'
              className='partners__link'
              target='_blank'
              rel='noreferrer'
            >
              <img src={solven320} alt='' className='partners__logo' />
            </a>
          </li>
          <li className='partners__list-item'>
            <a className='partners__link' target='_blank'>
              <img src={renovare320} alt='' className='partners__logo' />
            </a>
          </li>
          <li className='partners__list-item'>
            <a
              href='https://drkatieeastman.com/about'
              className='partners__link'
              target='_blank'
              rel='noreferrer'
            >
              <img src={katie320} alt='' className='partners__logo' />
            </a>
          </li>
          <li className='partners__list-item'>
            <a href='https://www.ekrfoundation.org/' className='partners__link'>
              <img src={ekr320} alt='' className='partners__logo' />
            </a>
          </li>
          <li className='partners__list-item'>
            <a
              href='https://www.wca.earth/'
              className='partners__link'
              target='_blank'
              rel='noreferrer'
            >
              <img src={wca320} alt='' className='partners__logo' />
            </a>
          </li>
        </ul>
        <Donate />
      </div>
    </section>
  );
};
