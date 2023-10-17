import { concepts } from '../../data/concepts.js';
import './Concepts.scss';
import sprite from '/images/concepts/concepts.svg';

export const Concepts = () => {
  return (
    <section className='page__section concepts'>
      <div className='container'>
        <ul className='concept__list'>
          {concepts.map((c) => (
            <li className='concept__item' key={c.id}>
              <div className='concept__icon-container'>
                <svg className='concept__icon'>
                  <use href={sprite + c.iconSrc} />
                </svg>
              </div>
              <div className='concept__content'>
                <h3 className='concept__title'>{c.title}</h3>
                <p className='concept__text'>{c.text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};
