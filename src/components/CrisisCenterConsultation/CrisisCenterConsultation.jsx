import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import { crisisCenter } from '../../data/crisisCenter.js';
import { CrisisCenterConsultationList } from '../CrisisCenterConsultationList/CrisisCenterConsultationList.jsx';

export const CrisisCenterConsultation = () => {
  const { lang } = useContext(LangContext);

  return (
    <section className='page__section section crisis-center__consultations consultations'>
      <div className='container'>
          <h2 className='consultations__title section__title'>{crisisCenter[lang]?.title}</h2>
          <p className='consultations__text'>{crisisCenter[lang]?.subtitle}</p>

        
        <div className='consultations__content'>
        </div>

        <CrisisCenterConsultationList items={crisisCenter[lang].topics} />
      </div>
    </section>
  );
};
