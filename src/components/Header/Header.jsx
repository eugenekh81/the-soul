import './Header.scss';
import logo from '/images/header/header-logo--mobile.png';

export const Header = () => {

  return (
    <header className="header">
        <div className="container">
          <div className="header__content">
          <a href="/" className="logo">
            <img src={logo} alt="The Soul" />
          </a>

          <div className="header__buttons">
            <a href="tel: +123456789" className="header__buttons--call"></a>
            <a href="" className="header__buttons--burger-menu"></a>
          </div>
          </div>
        </div>
      </header>
  )
}
