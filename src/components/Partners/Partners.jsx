import './Partners.scss';

import { partners } from '../../data/partners';

import { Donate } from '../Donate';
import { PartnersItem } from '../PartnersItem/';
import { useLang } from '../../hooks/useLang';

export const Partners = () => {
  const lang = useLang();
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
