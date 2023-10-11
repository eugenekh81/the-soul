import './Header.scss';
import logo from '/images/logo/header-logo--mobile.png';

export const Header = () => {

  return (
    <header className="header">
        <div className="container">
          <div className="header__content">
          <a href="/the-soul/" className="logo">
            <img src={logo} alt="The Soul" />
          </a>

          <div className="header__buttons">
            <a href="tel:+123456789" className="header__button header__button--call"></a>
            <a href="#menu" className="header__button header__button--burger-menu"></a>
          </div>
          </div>
        </div>
      </header>
  )
}
