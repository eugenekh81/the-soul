import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import { concepts } from '../../data/concepts.js';
import './Concepts.scss';
import sprite from '/images/concepts/concepts.svg';

export const Concepts = () => {
  return (
    <section className='page__section concepts'>
      <div className='container'>
      <h2 className='section__title'>Key concepts</h2>

      <p className='section__description text-align-center'>
          The &quot;Ukrainian Circle&quot; Program is based on these key concepts:
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
                <h3 className='concept__title'>{c.title}</h3>
                <p className='concept__text'>{c.text}</p>
              </div>
            </Col>
          ))}
        </Row>
      </div>
    </section>
  );
};
