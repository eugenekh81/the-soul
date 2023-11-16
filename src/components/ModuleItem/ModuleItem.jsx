import './ModuleItem.scss';
import PropTypes from 'prop-types';
import { useContext } from 'react';
import { Col } from 'react-bootstrap';
import { LangContext } from '../../context/LangContextProvider';

export const ModuleItem = ({
  id,
  cover,
  report,
  title,
  description,
  button,
}) => {
  const { lang } = useContext(LangContext);
  return (
    <Col xs={12} sm={6} lg={4} className='modules__module module'>
      <div className='module__img-container'>
        <img className='module__cover' src={cover} alt='Module cover' />
        <div className='module__cover-text'>
          <p className='module__number'>
            {lang === 'en' ? 'Module ' : 'Модуль '}
            {id}
          </p>
          <p className='module__title'>{title[lang]}</p>
        </div>
      </div>

      <div className='module__content-container'>
        <p className='module__description'>{description[lang]}</p>
        <a
          href={report[lang]}
          className='button'
          target='_blank'
          rel='noreferrer'
        >
          {button[lang]}
        </a>
      </div>
    </Col>
  );
};

ModuleItem.propTypes = {
  id: PropTypes.number.isRequired,
  cover: PropTypes.element,
  report: PropTypes.element,
  title: PropTypes.shape({
    en: PropTypes.string,
    ua: PropTypes.string,
  }).isRequired,
  description: PropTypes.shape({
    en: PropTypes.string,
    ua: PropTypes.string,
  }).isRequired,
  button: PropTypes.shape({
    en: PropTypes.string,
    ua: PropTypes.string,
  }).isRequired,
};
