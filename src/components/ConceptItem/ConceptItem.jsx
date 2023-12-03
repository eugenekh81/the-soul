import { useInView } from 'react-intersection-observer';
import PropTypes from 'prop-types';
import Col from 'react-bootstrap/Col';
import './ConceptItem.scss';
import sprite from '/images/concepts/concepts.svg';
import { useContext, useEffect, useState } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import cn from 'classnames';

export const ConceptItem = ({ iconSrc, title, text }) => {
  const { lang } = useContext(LangContext);
  const { ref: conceptRef, inView } = useInView();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  return (
    <Col
      xs={12}
      sm={6}
      lg={4}
      className={cn('concept__item', 'animation', 'animation__fade-up', {
        'animation__fade-up--fire': animated || inView,
      })}
    >
      <div className='concept__icon-container'>
        <div className='animation__point' ref={conceptRef}></div>
        <svg className='concept__icon'>
          <use href={sprite + iconSrc} />
        </svg>
      </div>
      <div className='concept__content'>
        <h3 className='concept__title'>{title[lang]}</h3>
        <p className='concept__text'>{text[lang]}</p>
      </div>
    </Col>
  );
};

ConceptItem.propTypes = {
  text: PropTypes.shape({
    en: PropTypes.string,
    ua: PropTypes.string,
  }).isRequired,
  title: PropTypes.shape({
    en: PropTypes.string,
    ua: PropTypes.string,
  }).isRequired,
  iconSrc: PropTypes.string.isRequired,
};
