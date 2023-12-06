import { useContext } from 'react';
import { Donate } from '../Donate/Donate';
import './SupportUs.scss';
import { LangContext } from '../../context/LangContextProvider';

export const SupportUs = () => {
  const lang = useLang();
  return (
    <section className='page__section section support-us'>
      <div className='container'>
        <h2 className='section__title'>
          {lang === 'en' ? 'Support Us' : 'ПІДТРИМАТИ НАС'}
        </h2>
        <p className='section__description text-center'>
          {lang === 'en'
            ? 'The Ukrainian Circle project is a non-profit social initiative and is created by our colleagues in The Soul Centre.'
            : 'Проект «Українське коло» є неприбутковою соціальною ініціативою, створеною нашим колективом Центру психології The Soul.'}
        </p>
        <p className='section__description text-center'>
          {lang === 'en'
            ? 'If you would like to support The Ukrainian Circle project, you may donate any amount you wish - any help is appreciated!'
            : 'Якщо ви бажаєте підтримати проект «Українське Коло», ви можете переказати будь-яку суму. Ми вдячні за вашу підтримку!'}
        </p>

        <Donate />
      </div>
    </section>
  );
};
