import PropTypes from 'prop-types';
import './BurgerMenu.scss';
import logo from '/images/logo/header-logo-4--mobile.png';
import cn from 'classnames';
import { LangContext } from '../../context/LangContextProvider';
import { useContext } from 'react';
import { NavLink, useLocation } from 'react-router-dom';

export const BurgerMenu = ({ isOpen, onClose }) => {
  const { lang, setLang } = useContext(LangContext);
  const { pathname } = useLocation();

  return (
    <aside className={cn('burger-menu', { 'burger-menu--open': isOpen })}>
      <div className='burger-menu__top-actions'>
        <div className='container'>
          <div className='top-actions'>
            <div className='top-actions__content'>
              <NavLink
                to={`/${lang}`}
                className='logo'
                onClick={() => {
                  onClose();
                }}
              >
                <img src={logo} alt='The Soul' />
              </NavLink>
              <div className='top-actions__buttons'>
                <a
                  href='mailto:contact@thesoul.com.ua'
                  className='top-actions__button top-actions__button--mobile top-actions__button--email-icon'
                ></a>
                <button
                  type='button'
                  href='#'
                  className='top-actions__button top-actions__button--close'
                  onClick={() => {
                    onClose(false);
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className='burger-menu__content'>
        <div className='burger-menu__lang-selector'>
          <button
            className={cn(
              'burger-menu__lang-btn',
              { 'is-active--lang': lang === 'en'}
            )}
            onClick={() => {
              setLang('en');
              /* onClose(); */
            }}
          >
            EN
          </button>
          {' | '}
          <button
            className={cn(
              'burger-menu__lang-btn',
              { 'is-active--lang': lang === 'ua'}
            )}
            onClick={() => {
              setLang('ua');
              /* onClose(); */
            }}
          >
            UA
          </button>
        </div>

        <div className='container'>
          <ul className='burger-menu__menu-list'>
            <li className='burger-menu__list-item'>
              <NavLink
                to={`/${lang}`}
                onClick={() => onClose()}
                className={cn('burger-menu__nav-link', { 'is-active': pathname === `/${lang}`})}
              >
                {lang === 'en' ? 'Home' : 'Головна'}
              </NavLink>
            </li>
            <li className='burger-menu__list-item'>
              <NavLink
                to={`/${lang}/ukrainian-circle`}
                onClick={() => onClose()}
                className={cn('burger-menu__nav-link', { 'is-active': pathname === `/${lang}/ukrainian-circle`})}
              >
                {lang === 'en' ? 'Ukrainian circle' : 'Українське коло'}
              </NavLink>
            </li>
            <li className='burger-menu__list-item'>
              <NavLink to='#' className={'burger-menu__nav-link burger-menu__nav-link--inactive'}>
                {lang === 'en' ? 'Our team:' : 'Наша команда:'}
              </NavLink>
            </li>
            <ul className='burger-menu__menu-list'>
              <li className='burger-menu__list-item'>
                <NavLink
                  to={`/${lang}/team/oleksandra-shymanova`}
                  onClick={() => onClose()}
                  className={cn('burger-menu__nav-link', { 'is-active': pathname === `/${lang}/team/oleksandra-shymanova`})}
                >
                  {lang === 'en'
                    ? 'Oleksandra Shymanova'
                    : 'Олександра Шиманова'}
                </NavLink>
              </li>
              <li className='burger-menu__list-item'>
                <NavLink
                  to={`/${lang}/team/mariya-vynnytska`}
                  onClick={() => onClose()}
                  className={cn('burger-menu__nav-link', { 'is-active': pathname === `/${lang}/team/mariya-vynnytska`})}
                >
                  {lang === 'en' ? 'Mariya Vynntska' : 'Марія Винницька'}
                </NavLink>
              </li>
              <li className='burger-menu__list-item'>
                <NavLink
                  to={`/${lang}/team/iryna-royenko`}
                  onClick={() => onClose()}
                  className={cn('burger-menu__nav-link', { 'is-active': pathname === `/${lang}/team/iryna-royenko`})}
                >
                  {lang === 'en' ? 'Iryna Royenko' : 'Ірина Роєнко'}
                </NavLink>
              </li>
              <li className='burger-menu__list-item'>
                <NavLink
                  to={`/${lang}/team/maryna-yakhno`}
                  onClick={() => onClose()}
                  className={cn('burger-menu__nav-link', { 'is-active': pathname === `/${lang}/team/maryna-yakhno`})}
                >
                  {lang === 'en' ? 'Maryna Yakhno' : 'Марина Яхно'}
                </NavLink>
              </li>
            </ul>
          </ul>
        </div>
      </div>
    </aside>
  );
};

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
