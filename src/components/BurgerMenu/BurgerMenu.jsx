import PropTypes from 'prop-types';
import './BurgerMenu.scss';
import logo from '/images/logo/header-logo-4--mobile.png';
import cn from 'classnames';
import { useState } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { LanguageSelector } from '../LanguageSelector/';
import { useLang } from '../../hooks/useLang';

export const BurgerMenu = ({ isOpen, onClose }) => {
  const lang = useLang();
  const { pathname } = useLocation();
  const [isTeamOpen, setIsTeamOpen] = useState(false);
  const [isProjectsOpen, setIsProjectsOpen] = useState(false);

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
              <LanguageSelector variant='burger' />
              <div className='top-actions__buttons'>
                <a
                  href='mailto:psysoulcenter@gmail.com'
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
        <div className='container'>
          <ul className='burger-menu__menu-list'>
            <li className='burger-menu__list-item'>
              <NavLink
                to={`/${lang}`}
                onClick={() => onClose()}
                className={cn('burger-menu__nav-link', {
                  'is-active': pathname === `/${lang}`,
                })}
              >
                {lang === 'en' ? 'Home' : 'Головна'}
              </NavLink>
            </li>
            <li className='burger-menu__list-item'>
              <NavLink
                to={`/${lang}/about-us`}
                onClick={() => onClose()}
                className={cn('burger-menu__nav-link', {
                  'is-active': pathname === `/${lang}/about-us`,
                })}
              >
                {lang === 'en' ? 'About Us' : 'Про нас'}
              </NavLink>
            </li>

            <li
              className={cn('burger-menu__list-item', 'burger-menu__dropdown', {
                'burger-menu__dropdown--open': isProjectsOpen,
              })}
              onClick={() => setIsProjectsOpen(!isProjectsOpen)}
            >
              <button type='button' className='burger-menu__nav-button'>
                {lang === 'en' ? 'Projects' : 'Проекти'}
                <svg
                  className={cn('accordeon-icon', {
                    'accordeon-icon--open': isProjectsOpen,
                  })}
                >
                  <use href='/images/icons/right-arrow.svg#rightArrow'></use>
                </svg>
              </button>
              <ul className='burger-menu__menu-list'>
                <li className='burger-menu__list-item'>
                  <NavLink
                    to={`/${lang}/projects/ukrainian-circle`}
                    onClick={() => onClose()}
                    className={cn('burger-menu__nav-link', {
                      'is-active':
                        pathname === `/${lang}/projects/ukrainian-circle`,
                    })}
                  >
                    {lang === 'en' ? 'Ukrainian circle' : 'Українське коло'}
                  </NavLink>
                </li>
                <li className='burger-menu__list-item'>
                  <NavLink
                    to={`/${lang}/projects/meetings-with-the-soul`}
                    onClick={() => onClose()}
                    className={cn('burger-menu__nav-link', {
                      'is-active':
                        pathname === `/${lang}/projects/meetings-with-the-soul`,
                    })}
                  >
                    {lang === 'en'
                      ? 'Meetings with The Soul'
                      : 'Зустрічі з Душею'}
                  </NavLink>
                </li>
                <li className='burger-menu__list-item'>
                  <NavLink
                    to={`/${lang}/projects/crisis-center`}
                    onClick={() => onClose()}
                    className={cn('burger-menu__nav-link', {
                      'is-active':
                        pathname === `/${lang}/projects/crisis-center`,
                    })}
                  >
                    {lang === 'en'
                      ? 'Crisis Center'
                      : 'Кризовий центр'}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li
              className={cn('burger-menu__list-item', 'burger-menu__dropdown', {
                'burger-menu__dropdown--open': isTeamOpen,
              })}
              onClick={() => setIsTeamOpen(!isTeamOpen)}
            >
              <button type='button' className='burger-menu__nav-button'>
                {lang === 'en' ? 'Team' : 'Команда'}
                <svg
                  className={cn('accordeon-icon', {
                    'accordeon-icon--open': isTeamOpen,
                  })}
                >
                  <use href='/images/icons/right-arrow.svg#rightArrow'></use>
                </svg>
              </button>
              <ul className='burger-menu__menu-list'>
                <li className='burger-menu__list-item'>
                  <NavLink
                    to={`/${lang}/team/olexandra-shymanova`}
                    onClick={() => onClose()}
                    className={cn('burger-menu__nav-link', {
                      'is-active':
                        pathname === `/${lang}/team/olexandra-shymanova`,
                    })}
                  >
                    {lang === 'en'
                      ? 'Olexandra Shymanova'
                      : 'Олександра Шиманова'}
                  </NavLink>
                </li>
                <li className='burger-menu__list-item'>
                  <NavLink
                    to={`/${lang}/team/mariya-vynnytska`}
                    onClick={() => onClose()}
                    className={cn('burger-menu__nav-link', {
                      'is-active':
                        pathname === `/${lang}/team/mariya-vynnytska`,
                    })}
                  >
                    {lang === 'en' ? 'Mariya Vynnytska' : 'Марія Винницька'}
                  </NavLink>
                </li>
                <li className='burger-menu__list-item'>
                  <NavLink
                    to={`/${lang}/team/iryna-royenko`}
                    onClick={() => onClose()}
                    className={cn('burger-menu__nav-link', {
                      'is-active': pathname === `/${lang}/team/iryna-royenko`,
                    })}
                  >
                    {lang === 'en' ? 'Iryna Royenko' : 'Ірина Роєнко'}
                  </NavLink>
                </li>
                <li className='burger-menu__list-item'>
                  <NavLink
                    to={`/${lang}/team/maryna-yakhno`}
                    onClick={() => onClose()}
                    className={cn('burger-menu__nav-link', {
                      'is-active': pathname === `/${lang}/team/maryna-yakhno`,
                    })}
                  >
                    {lang === 'en' ? 'Maryna Yakhno' : 'Марина Яхно'}
                  </NavLink>
                </li>
              </ul>
            </li>
            <li className='burger-menu__list-item'>
              <NavLink
                to={`/${lang}/donate`}
                onClick={() => onClose()}
                className={cn('burger-menu__nav-link', {
                  'is-active': pathname === `/${lang}/donate`,
                })}
              >
                {lang === 'en' ? 'Donate' : 'Підтримати'}
              </NavLink>
            </li>
            <li className='burger-menu__list-item'>
              <NavLink
                className={cn(
                  'burger-menu__yellow-blue',
                  'burger-menu__nav-link',
                  {
                    'is-active': pathname === `/${lang}/events/yellow-blue`,
                  }
                )}
                to={`/${lang}/events/yellow-blue`}
                onClick={() => onClose()}
              >
                <span className='burger-menu__yellow-blue--yellow'>
                  Yellow{' '}
                </span>

                <span className='burger-menu__yellow-blue--blue'>Blue</span>
              </NavLink>
            </li>
          </ul>

          <div className='burger-menu__social social'>
            <div className='social__icons'>
              <a
                href='https://www.facebook.com/TheSoul.Psychology/'
                className='social__icon social__icon--fb'
                target='_blank'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  version='1.1'
                  viewBox='0 0 20 20'
                >
                  <path d='M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M12.274,7.034h-1.443  c-0.171,0-0.361,0.225-0.361,0.524V8.6h1.805l-0.273,1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545V7.726  c0-1.254,0.87-2.273,2.064-2.273h1.443V7.034z' />
                </svg>
              </a>
              <a
                href='https://www.instagram.com/psysoulcenter/'
                target='_blank'
                className='social__icon social__icon--ig'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  version='1.1'
                  viewBox='0 0 20 20'
                >
                  <path d='M13 10c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-0.171 0.018-0.338 0.049-0.5h-1.049v3.997c0 0.278 0.225 0.503 0.503 0.503h6.995c0.277 0 0.502-0.225 0.502-0.503v-3.997h-1.049c0.031 0.162 0.049 0.329 0.049 0.5zM10 12c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.896-2 2 0.896 2 2 2zM12.4 7.9h1.199c0.166 0 0.301-0.135 0.301-0.3v-1.199c0-0.166-0.135-0.301-0.301-0.301h-1.199c-0.166 0-0.301 0.135-0.301 0.301v1.199c0.001 0.165 0.136 0.3 0.301 0.3zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6c5.302 0 9.6-4.298 9.6-9.6s-4.298-9.6-9.6-9.6zM15 13.889c0 0.611-0.5 1.111-1.111 1.111h-7.778c-0.611 0-1.111-0.5-1.111-1.111v-7.778c0-0.611 0.5-1.111 1.111-1.111h7.778c0.611 0 1.111 0.5 1.111 1.111v7.778z' />
                </svg>
              </a>
              <a
                href='https://t.me/Psysoulcenter'
                target='_blank'
                className='social__icon social__icon--tg'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  version='1.1'
                  viewBox='0 0 29 29'
                >
                  <path d='M18.578 20.422l2.297-10.828c0.203-0.953-0.344-1.328-0.969-1.094l-13.5 5.203c-0.922 0.359-0.906 0.875-0.156 1.109l3.453 1.078 8.016-5.047c0.375-0.25 0.719-0.109 0.438 0.141l-6.484 5.859-0.25 3.563c0.359 0 0.516-0.156 0.703-0.344l1.687-1.625 3.5 2.578c0.641 0.359 1.094 0.172 1.266-0.594zM28 14c0 7.734-6.266 14-14 14s-14-6.266-14-14 6.266-14 14-14 14 6.266 14 14z' />
                </svg>
              </a>
              <a
                href='https://www.youtube.com/@thesoulpsychologycenter/videos'
                target='_blank'
                className='social__icon social__icon--yt'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  version='1.1'
                  id='Youtube_w_x2F__circle'
                  x='0px'
                  y='0px'
                  viewBox='0 0 20 20'
                  enableBackground='new 0 0 20 20'
                  xmlSpace='preserve'
                >
                  <path d='M11.603,9.833L9.357,8.785C9.161,8.694,9,8.796,9,9.013v1.974c0,0.217,0.161,0.319,0.357,0.228l2.245-1.048  C11.799,10.075,11.799,9.925,11.603,9.833z M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6  S15.302,0.4,10,0.4z M10,13.9c-4.914,0-5-0.443-5-3.9s0.086-3.9,5-3.9s5,0.443,5,3.9S14.914,13.9,10,13.9z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </aside>
  );
};

BurgerMenu.propTypes = {
  isOpen: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};
