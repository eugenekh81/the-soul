import { useContext } from 'react';
import { crisisCenter } from '../../data/crisisCenter';
import { LangContext } from '../../context/LangContextProvider';
import { CrisisCenterSupportGroupsList } from '../CrisisCenterSupportGroupsList/CrisisCenterSupportGroupsList';

export const CrisisCenterSupportGroups = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className='page__section section support-groups'>
      <div className='container'>
        <h2 className='section__title support-groups__title'>
          {crisisCenter[lang].supportGroups.title}
        </h2>
        <p className='support-groups__subtitle'>
          {crisisCenter[lang].supportGroups.subtitle}
        </p>

        <CrisisCenterSupportGroupsList />
      </div>
    </section>
  );
};
