import { useContext } from "react";
import { LangContext } from "../../context/LangContextProvider";

export const Hero = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className='yellow-blue__hero reveal'>
      <div className='container'>
        <div className='yellow-blue__hero-content'>
          <div className='yellow-blue__description'>
            <h1 className='yellow-blue__main-title animation animation__fade-up animation__fade-up--fire'>
              <span className='yellow-blue__main-title--yellow'>Yellow</span>{' '}
              <span className='yellow-blue__main-title--blue'>Blue</span>
            </h1>
            <div className='yellow-blue__schedule'>
              <div className='yellow-blue__text-container'>
                <p className='yellow-blue__text pull-up'>
                  {lang === 'en' ? 'December 15, 2023 / Friday' : '15 грудня 2023 року / п’ятниця'}
                </p>
              </div>
              <div className='yellow-blue__text-container'>
                <p className='yellow-blue__text yellow-blue__text--last pull-up'>
                  {lang === 'en' ? '7:00 pm EET' : '19:00 – 21:00 за київським часом'}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
