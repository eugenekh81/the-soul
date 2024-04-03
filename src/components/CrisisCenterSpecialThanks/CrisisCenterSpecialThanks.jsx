import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import { crisisCenter } from '../../data/crisisCenter';
import { CrisisCenterSpecialThanksList } from '../CrisisCenterSpecialThanksList/CrisisCenterSpecialThanksList';

export const CrisisCenterSpecialThanks = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className='page__section section crisis-center__special-thanks special-thanks'>
      <div className='container'>
        <div className='special-thanks__content'>
          <div className='special-thanks__text-content'>
            {crisisCenter[lang].specialThanks.textContent.map((item) => {
              return (
                <p
                  key={item.id}
                  className='special-thanks__text'
                  dangerouslySetInnerHTML={{ __html: item.text }}
                ></p>
              );
            })}
          </div>

          <CrisisCenterSpecialThanksList />
        </div>
      </div>
    </section>
  );
};
