import { partners } from '../../data/partners.js';
import { PartnersItem } from '../../components/PartnersItem/PartnersItem.jsx';
import { useLang } from '../../hooks/useLang.jsx';

export const Partners = () => {
  const lang = useLang();
  return (
    <section className='page__section section yellow-blue__partners'>
      <div className='container'>
        <div className='yellow-blue__partners-content'>
          <h3 className='yellow-blue__partners-title'>
            {lang === 'en' ? 'Supported by' : 'Партнери'}
          </h3>

          <ul className='partners__list'>
            {partners.map((partner) => (
              <PartnersItem {...partner} key={partner.id} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};
