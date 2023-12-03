import './Partners.scss';

import { partners } from '../../data/partners';

import { Donate } from '../Donate/Donate';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import { PartnersItem } from '../PartnersItem/PartnersItem';

export const Partners = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className='page__section section partners'>
      <div className='container'>
        <h2 className='section__title'>
          {lang === 'en' ? 'Partners' : 'Партнери'}
        </h2>

        <ul className='partners__list'>
          {partners.map((partner) => (
            <PartnersItem {...partner} key={partner.id} />
          ))}
        </ul>

        <Donate />
      </div>
    </section>
  );
};
