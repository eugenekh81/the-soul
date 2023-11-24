import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useContext, useEffect } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const DropDownListProjects = ({ isProjectsOpen, clickCheck }) => {
  console.log('opening projects dropdown');
  const { lang } = useContext(LangContext);
  useEffect(() => {
    return () => {
      setTimeout(() => {
        document.removeEventListener('click', clickCheck);
      }, 300);
    };
  }, [isProjectsOpen]);

  return (
    <ul
      className={cn('header__projects-list', 'projects-list', {
        'projects-list--open': isProjectsOpen,
      })}
      style={{
        maxHeight: isProjectsOpen ? `${30 * 2 + 8 * 2 + 8 * 3}px` : '0',
      }}
    >
      <li className='projects-list__item'>
        <NavLink
          className='projects-list__link'
          to={`/${lang}/projects/ukrainian-circle`}
        >
          {lang === 'en' ? 'Ukrainian Circle' : 'Українське Коло'}
        </NavLink>
      </li>
      <li className='projects-list__item'>
        <NavLink
          className='projects-list__link'
          to={`/${lang}/projects/meetings-with-the-soul`}
        >
          {lang === 'en' ? 'Meetings with The Soul' : 'Зустрічі з Душею'}
        </NavLink>
      </li>
    </ul>
  );
};

DropDownListProjects.propTypes = {
  isProjectsOpen: PropTypes.bool,
  clickCheck: PropTypes.func,
};
