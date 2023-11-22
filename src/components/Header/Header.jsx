import './Header.scss';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { useContext, useEffect, useRef, useState } from 'react';

import logo from '/images/logo/header-logo-4--mobile.png';
import { DropDownList } from '../DropdownList/DropDownList';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { LangContext } from '../../context/LangContextProvider';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';

export const Header = () => {
  const { pathname } = useLocation();
  const { lang } = useContext(LangContext);
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isListRendered, setIsListRendered] = useState(false);
  const dropdownLink = useRef(null);

  const clickCheck = (e) => {
    e.preventDefault();

    if (e.target !== dropdownLink.current) {
      setIsTeamOpen(false);

      setTimeout(() => {
        setIsListRendered(false);
      }, 300);
    }
  };

  useEffect(() => {
    if (isTeamOpen) {
      document.addEventListener('click', clickCheck);
    }
  }, [isTeamOpen, isListRendered]);

  const handleMenuToggle = (e) => {
    e.preventDefault();

    if (isTeamOpen) {
      setIsTeamOpen(false);
    } else {
      setIsListRendered(true);
      setTimeout(() => {
        setIsTeamOpen(true);
      }, 1);
    }

    if (isListRendered) {
      setTimeout(() => {
        setIsListRendered(false);
        setIsTeamOpen(false);
      }, 300);
    } else {
      setIsListRendered(true);

      setTimeout(() => {
        setIsTeamOpen(true);
      }, 1);
    }
  };
  return (
    <header className='header'>
      <div className='container'>
        <div className='top-actions'>
          <div className='top-actions__content'>
            <NavLink to={`/${lang || ''}`} className='logo'>
              <img src={logo} alt='The Soul' />
            </NavLink>

            <nav className='nav'>
              <NavLink
                to='/en/ukrainian-circle'
                className={cn('header__nav-link', {
                  'active-link':
                    pathname === `/${lang}/projects/ukrainian-circle`,
                })}
              >
                {lang === 'en' ? 'Ukrainian Circle' : 'Українське Коло'}
              </NavLink>

              <NavLink
                className={cn('header__nav-link', 'header__nav-link--team', {
                  'active-link': pathname.includes('team'),
                })}
                onClick={handleMenuToggle}
                ref={dropdownLink}
              >
                {lang === 'en' ? 'Team' : 'Команда'}

                {isListRendered && (
                  <DropDownList
                    isTeamOpen={isTeamOpen}
                    clickCheck={clickCheck}
                  />
                )}
              </NavLink>
            </nav>

            <div className='header__options-container'>
              <LanguageSelector />

              <div className='top-actions__buttons'>
                <a
                  href='mailto:contact@thesoul.com.ua'
                  className='top-actions__button top-actions__button--mobile top-actions__button--email-icon'
                ></a>
                <a
                  href='mailto:contact@thesoul.com.ua'
                  className='top-actions__button top-actions__button--desktop top-actions__button--email'
                >
                  <span>contact@thesoul.com.ua</span>
                </a>
                <button
                  type='button'
                  href='#'
                  className='top-actions__button top-actions__button--burger-menu'
                  onClick={() => {
                    console.log('clicked!');
                    setIsBurgerOpen((prev) => !prev);
                  }}
                ></button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <BurgerMenu
        isOpen={isBurgerOpen}
        onClose={() => setIsBurgerOpen(false)}
      />
    </header>
  );
};
