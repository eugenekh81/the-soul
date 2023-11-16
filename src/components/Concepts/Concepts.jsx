import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './Concepts.scss';
import { concepts } from '../../data/concepts.js';
import sprite from '/images/concepts/concepts.svg';
import { LangContext } from '../../context/LangContextProvider.jsx';
import { useContext } from 'react';

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
            <Col xs={12} sm={6} lg={4} className='concept__item' key={c.id}>
              <div className='concept__icon-container'>
                <svg className='concept__icon'>
                  <use href={sprite + c.iconSrc} />
                </svg>
              </div>
              <div className='concept__content'>
                <h3 className='concept__title'>{c.title[lang]}</h3>
                <p className='concept__text'>{c.text[lang]}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
