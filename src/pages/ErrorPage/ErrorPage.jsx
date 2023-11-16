import './ErrorPage.scss';
import { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { LangContext } from '../../context/LangContextProvider';

export const ErrorPage = () => {
  const { lang } = useContext(LangContext);
  return (
    <section id='error-page' className='error-page'>
      <div className="container">
        <div className="error-page__content">
        <h1>
        {lang === 'en'
          ? "The page you requested wasn't found"
          : 'На жаль,сторінки з такою адресою не існує'}
      </h1>
      <NavLink to={`/${lang}`} className='error-page__home-button'>
        {lang === 'en'
          ? 'Go to the Home page'
          : 'Повернутись на домашню сторінку'}
      </NavLink>
        </div>
      </div>

    </section>
  );
};
