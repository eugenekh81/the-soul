import './Header.scss';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import logo from '/images/logo/header-logo-4--mobile.png';
import { DropDownList } from '../DropdownList/DropDownList';
export const Header = () => {
  const { pathname } = useLocation();
  const [isTeamOpen, setIsTeamOpen] = useState(false);
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
        <div className='header__content'>
          <NavLink to='/' className='logo'>
            <img src={logo} alt='The Soul' />
          </NavLink>

          <nav className='nav'>
            <NavLink
              to='/en/ukrainian-circle'
              className={cn('header__nav-link', {
                'active-link': pathname === '/en/ukrainian-circle',
              })}
            >
              Ukrainian Circle
            </NavLink>

            <NavLink
              className={cn('header__nav-link', 'header__nav-link--team', {
                'active-link': pathname.includes('team'),
              })}
              onClick={handleMenuToggle}
              ref={dropdownLink}
            >
              Our Team
              {isListRendered && (
                <DropDownList isTeamOpen={isTeamOpen} clickCheck={clickCheck} />
              )}
            </NavLink>
          </nav>

          <div className='header__buttons'>
            <a
              href='mailto:contact@thesoul.com.ua'
              className='header__button header__button--mobile header__button--email-icon'
            ></a>
            <a
              href='mailto:contact@thesoul.com.ua'
              className='header__button header__button--desktop header__button--email'
            >
              <span>contact@thesoul.com.ua</span>
            </a>
            <a
              href='#menu'
              className='header__button header__button--burger-menu'
            ></a>
          </div>
        </div>
      </div>
    </header>
  );
};
