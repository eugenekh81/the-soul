import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useContext, useEffect } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const DropDownList = ({ isTeamOpen, clickCheck }) => {
  const { lang } = useContext(LangContext);
  useEffect(() => {
    return () => {
      setTimeout(() => {
        document.removeEventListener('click', clickCheck);
      }, 300);
    }
  }, [isTeamOpen]);

  return (
    <ul
      className={cn('header__team-list', 'team-list', {
        'team-list--open': isTeamOpen,
      })}
    >
      <li>
        <NavLink
          className='team-list__link'
          to={`/${lang}/team/oleksandra-shymanova`}
        >
          {lang === 'en' ? 'Olexandra Shymanova' : 'Олександра Шиманова'}

        </NavLink>
      </li>
      <li>
        <NavLink
          className='team-list__link'
          to={`/${lang}/team/mariya-vynnytska`}
        >
          {lang === 'en' ? 'Mariya Vynnytska' : 'Марія Вінницька'}

        </NavLink>
      </li>
      <li>
        <NavLink
          className='team-list__link'
          to={`/${lang}/team/iryna-royenko`}
        >
          {lang === 'en' ? 'Iryna Royenko' : 'Ірина Роєнко'}

        </NavLink>
      </li>
      <li>
        <NavLink
          className='team-list__link'
          to={`/${lang}/team/maryna-yakhno`}
        >
          {lang === 'en' ? 'Maryna Yakhno' : 'Марина Яхно'}

        </NavLink>
      </li>
    </ul>
  );
};

DropDownList.propTypes = {
  isTeamOpen: PropTypes.bool,
  clickCheck: PropTypes.func,
}
