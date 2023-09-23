import './App.scss';
import { Header } from './components/Header';

export const App = () => {
  return (
    <>
      <Header />

      <main className='main'>
        <section className='hero'>
          <div className='hero__content'>
            <div className='hero__banner'></div>
            <div className='hero__title-container'>
              <div className='hero__title'>
                <span className='hero__title--top'>
                  Ukrainian
                  <br />
                </span>
                <span className='hero__title--bottom'>Circle</span>
              </div>
              <div className='hero__decor-element'></div>
              <p className='hero__description hero__description--top'>
                psychological recovery program
              </p>
              <p className='hero__description hero__description--bottom'>
                June - August 2023
              </p>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};
