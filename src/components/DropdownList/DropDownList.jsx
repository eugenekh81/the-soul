import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';
import cn from 'classnames';
import { useEffect } from 'react';

export const DropDownList = ({ isTeamOpen, clickCheck }) => {
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
          to='/en/team/oleksandra-shymanova'
        >
          Olexandra Shymanova
        </NavLink>
      </li>
      <li>
        <NavLink
          className='team-list__link'
          to='/en/team/mariya-vynnytska'
        >
          Mariya Vynnytska
        </NavLink>
      </li>
      <li>
        <NavLink
          className='team-list__link'
          to='/en/team/iryna-royenko'
        >
          Iryna Royenko
        </NavLink>
      </li>
      <li>
        <NavLink
          className='team-list__link'
          to='/en/team/maryna-yakhno'
        >
          Maryna Yakhno
        </NavLink>
      </li>
    </ul>
  );
};

DropDownList.propTypes = {
  isTeamOpen: PropTypes.bool,
  clickCheck: PropTypes.func,
}
