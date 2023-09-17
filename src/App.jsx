import './App.scss'
import logo from '/images/header/header-logo--mobile.png';

export const App = () => {

  return (
    <>
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

      <main className="main">
        <section className="hero">
              <div className="hero__banner"></div>
            <div className="hero__content">
              <div className="hero__title">
                <span className="hero__title--top">
                  Ukrainian
                  <br />
                </span>
                <span className="hero__title--bottom">
                  Circle
                </span>
              </div>
              <div className="hero__decor-element"></div>
              <p className="hero__description hero__description--top">
              psychological recovery program
              </p>
              <p className="hero__description hero__description--bottom">
              June - August 2023
              </p>
            </div>
        </section>

      </main>
    </>
  )
}
