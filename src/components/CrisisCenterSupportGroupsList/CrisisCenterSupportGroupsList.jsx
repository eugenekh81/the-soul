import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import { crisisCenter } from '../../data/crisisCenter';
import { CrisisCenterSupportGroupsItem } from '../CrisisCenterSupportGroupsItem/CrisisCenterSupportGroupsItem';

export const CrisisCenterSupportGroupsList = () => {
  const { lang } = useContext(LangContext);
  return (
    <ul className='support-groups__list'>
      {crisisCenter[lang].supportGroups.gallery.map((g) => (
        <CrisisCenterSupportGroupsItem key={g.id} {...g} />
      ))}
    </ul>
  );
};
