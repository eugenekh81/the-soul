import './Header.scss';
import { NavLink } from 'react-router-dom';

import logo from '/images/logo/header-logo--mobile.png';

export const Header = () => {

  return (
    <header className="header">
        <div className="container">
          <div className="header__content">
          <NavLink to="/the-soul" className="logo">
            <img src={logo} alt="The Soul" />
          </NavLink>

          <NavLink to="/the-soul/en/ukrainian-circle" className="header__nav-link">
            Ukrainian Cirlce
          </NavLink>
          <NavLink to="/the-soul/en/team" className="header__nav-link">
            Our Team
          </NavLink>

          <div className="header__buttons">
            <a href="tel:+123456789" className="header__button header__button--call"></a>
            <a href="#menu" className="header__button header__button--burger-menu"></a>
          </div>
          </div>
        </div>
      </header>
  )
}
