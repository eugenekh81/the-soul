import { crisisCenter } from '../../data/crisisCenter';
import { CrisisCenterSpecialThanksItem } from '../CrisisCenterSpecialThanksItem';
export const CrisisCenterSpecialThanksList = () => {
  return (
    <ul className='special-thanks__list'>
      {crisisCenter.photos.map((p) => (
        <CrisisCenterSpecialThanksItem key={p.id} {...p} />
      ))}
    </ul>
  );
};
