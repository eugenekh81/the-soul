import Row from 'react-bootstrap/Row';
import './Concepts.scss';
import { concepts } from '../../data/concepts.js';

import { LangContext } from '../../context/LangContextProvider.jsx';
import { useContext } from 'react';
import { ConceptItem } from '../ConceptItem/ConceptItem.jsx';

export const Concepts = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className='page__section page__section--bgc-green section concepts'>
      <div className='container'>
        <h2 className='section__title'>
          {lang === 'en' ? 'Key concepts' : 'Ключові постулати'}
        </h2>

        <p className='section__description concepts__description text-align-center'>
          {lang === 'en' ? (
            <>
              The &quot;Ukrainian Circle&quot; Program is based on these key
              concepts:
            </>
          ) : (
            <>
              Програма&quot;Українське Коло&quot; базується на наступних
              ключових постулатах:
            </>
          )}
        </p>

        <Row className='concept__list'>
          {concepts.map((c) => (
            <ConceptItem key={c.id} {...c} />
          ))}
        </Row>
      </div>
    </section>
  );
};
