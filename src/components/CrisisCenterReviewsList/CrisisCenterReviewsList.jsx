import { useContext } from 'react';
import { crisisCenter } from '../../data/crisisCenter';
import { LangContext } from '../../context/LangContextProvider';
import { CrisisCenterReviewsItem } from '../CrisisCenterReviewsItem/CrisisCenterReviewsItem';

export const CrisisCenterReviewsList = () => {
  const { lang } = useContext(LangContext);
  return (
    <ul className='crisis-center__reviews-list'>
      {crisisCenter[lang].reviews.items.map((r) => (
        <CrisisCenterReviewsItem key={r.id} {...r} />
      ))}
    </ul>
  );
};
