import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useContext, useEffect } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const DropDownListTeam = ({ isTeamOpen, clickCheck }) => {
  const lang = useLang();
  useEffect(() => {
    return () => {
      setTimeout(() => {
        document.removeEventListener('click', clickCheck);
      }, 300);
    };
  }, [isTeamOpen]);

  return (
    <ul
      className={cn('header__team-list', 'team-list', {
        'team-list--open': isTeamOpen,
      })}
      style={{
        maxHeight: isTeamOpen ? `${30 * 4 + 8 * 2 + 8 * 3}px` : '0',
      }}
    >
      <li className='team-list__item'>
        <NavLink
          className='team-list__link'
          to={`/${lang}/team/olexandra-shymanova`}
        >
          {lang === 'en' ? 'Olexandra Shymanova' : 'Олександра Шиманова'}
        </NavLink>
      </li>
      <li className='team-list__item'>
        <NavLink
          className='team-list__link'
          to={`/${lang}/team/mariya-vynnytska`}
        >
          {lang === 'en' ? 'Mariya Vynnytska' : 'Марія Винницька'}
        </NavLink>
      </li>
      <li className='team-list__item'>
        <NavLink className='team-list__link' to={`/${lang}/team/iryna-royenko`}>
          {lang === 'en' ? 'Iryna Royenko' : 'Ірина Роєнко'}
        </NavLink>
      </li>
      <li className='team-list__item'>
        <NavLink className='team-list__link' to={`/${lang}/team/maryna-yakhno`}>
          {lang === 'en' ? 'Maryna Yakhno' : 'Марина Яхно'}
        </NavLink>
      </li>
    </ul>
  );
};

DropDownListTeam.propTypes = {
  isTeamOpen: PropTypes.bool,
  clickCheck: PropTypes.func,
};
