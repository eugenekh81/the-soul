import './Header.scss';
import cn from 'classnames';
import { NavLink, useLocation } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';

import logo from '/images/logo/header-logo-4--mobile.png';
import { DropDownListTeam } from '../DropdownListTeam';
import { BurgerMenu } from '../BurgerMenu/BurgerMenu';
import { LanguageSelector } from '../LanguageSelector/LanguageSelector';
import { DropDownListProjects } from '../DropdownListProjects';
import { useLang } from '../../hooks/useLang';

export const Header = () => {
  const { pathname } = useLocation();
  const lang = useLang();
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);
  const [isBurgerOpen, setIsBurgerOpen] = useState(false);
  const [isTeamListRendered, setIsTeamListRendered] = useState(false);
  const [isProjectsListRendered, setIsProjectsListRendered] = useState(false);
  const dropdownTeamLink = useRef(null);
  const dropdownProjectsLink = useRef(null);

  const clickCheckTeam = (e) => {
    e.preventDefault();

    if (e.target !== dropdownTeamLink.current) {
      setIsTeamOpen(false);

      setTimeout(() => {
        setIsTeamListRendered(false);
      }, 300);
    }
  };

  const clickCheckProjects = (e) => {
    e.preventDefault();

    if (e.target !== dropdownProjectsLink.current) {
      setIsProjectsOpen(false);

      setTimeout(() => {
        setIsProjectsListRendered(false);
      }, 300);
    }
  };

  useEffect(() => {
    if (isTeamOpen) {
      document.addEventListener('click', clickCheckTeam);
    }

    if (isProjectsOpen) {
      document.addEventListener('click', clickCheckProjects);
    }
  }, [isTeamOpen, isTeamListRendered, isProjectsOpen, isProjectsListRendered]);

  const handleTeamMenuToggle = (e) => {
    e.preventDefault();

    if (isTeamOpen) {
      setIsTeamOpen(false);
    } else {
      setIsTeamListRendered(true);

      setIsProjectsListRendered(false);
      setIsProjectsOpen(false);

      setTimeout(() => {
        setIsTeamOpen(true);
      }, 1);
    }

    if (isTeamListRendered) {
      setTimeout(() => {
        setIsTeamListRendered(false);
        setIsTeamOpen(false);
      }, 300);
    } else {
      setIsTeamListRendered(true);

      setIsProjectsListRendered(false);
      setIsProjectsOpen(false);

      setTimeout(() => {
        setIsTeamOpen(true);
      }, 1);
    }
  };

  const handleProjectsMenuToggle = (e) => {
    e.preventDefault();

    if (isProjectsOpen) {
      setIsProjectsOpen(false);
    } else {
      setIsProjectsListRendered(true);

      setIsTeamListRendered(false);
      setIsTeamOpen(false);

      setTimeout(() => {
        setIsProjectsOpen(true);
      }, 1);
    }

    if (isProjectsListRendered) {
      setTimeout(() => {
        setIsProjectsListRendered(false);
        setIsProjectsOpen(false);
      }, 300);
    } else {
      setIsProjectsListRendered(true);

      setIsTeamListRendered(false);
      setIsTeamOpen(false);

      setTimeout(() => {
        setIsProjectsOpen(true);
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
                to={`/${lang}/about-us`}
                className={cn('header__nav-link', {
                  'active-link': pathname.includes('about-us'),
                })}
              >
                {lang === 'en' ? 'About Us' : 'Про нас'}
              </NavLink>
              <NavLink
                to={`/${lang}/ukrainian-circle`}
                className={cn('header__nav-link', {
                  'active-link': pathname.includes('projects'),
                })}
                onClick={handleProjectsMenuToggle}
                ref={dropdownProjectsLink}
              >
                {lang === 'en' ? 'Projects' : 'Проекти'}

                {isProjectsListRendered && (
                  <DropDownListProjects
                    isProjectsOpen={isProjectsOpen}
                    clickCheck={clickCheckProjects}
                  />
                )}
              </NavLink>

              <NavLink
                className={cn('header__nav-link', 'header__nav-link--team', {
                  'active-link': pathname.includes('team'),
                })}
                onClick={handleTeamMenuToggle}
                ref={dropdownTeamLink}
              >
                {lang === 'en' ? 'Team' : 'Команда'}

                {isTeamListRendered && (
                  <DropDownListTeam
                    isTeamOpen={isTeamOpen}
                    clickCheck={clickCheckTeam}
                  />
                )}
              </NavLink>

              <NavLink
                to={`/${lang}/donate`}
                className={cn('header__nav-link', {
                  'active-link': pathname === `/${lang}/donate`,
                })}
              >
                {lang === 'en' ? 'Donate' : 'Підтримати'}
              </NavLink>
            </nav>

            <NavLink
              className={cn('header__yellow-blue', 'header__nav-link', {
                'active-link': pathname === `/${lang}/events/yellow-blue`,
              })}
              to={`/${lang}/events/yellow-blue`}
            >
              <span className='header__yellow-blue--yellow'>Yellow </span>

              <span className='header__yellow-blue--blue'>Blue</span>
            </NavLink>

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
                  <span>{/* contact@thesoul.com.ua */}</span>
                </a>
                <button
                  type='button'
                  href='#'
                  className='top-actions__button top-actions__button--burger-menu'
                  onClick={() => {
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
