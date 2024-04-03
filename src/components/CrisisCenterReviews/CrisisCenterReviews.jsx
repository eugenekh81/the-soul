import { useContext } from 'react';
import { crisisCenter } from '../../data/crisisCenter';
import { CrisisCenterReviewsList } from '../CrisisCenterReviewsList';
import { LangContext } from '../../context/LangContextProvider';

export const CrisisCenterReviews = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className='page__section section crisis-center__reviews'>
      <h2 className='section__title'>{crisisCenter[lang].reviews.title}</h2>
      <div className='container'>
        <CrisisCenterReviewsList />
      </div>
    </section>
  );
};
