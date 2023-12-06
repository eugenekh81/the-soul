import { useLang } from '../../hooks/useLang';
import './Hero.scss';

import cn from 'classnames';

export const Hero = () => {
  const lang = useLang();
  return (
    <section className='hero'>
      <div className='hero__content'>
        <div className='hero__banner'>
          <div className='hero__banner--green-fill'></div>
        </div>
        <div className='hero__title-container'>
          <div className='hero__title'>
            <span
              className={cn('hero__title--top', {
                'hero__title--top_ua': lang === 'ua',
              })}
            >
              {lang === 'en' ? 'Ukrainian' : 'Українське'}
              <br />
            </span>
            <span
              className={cn('hero__title--bottom', {
                'hero__title--bottom_ua': lang === 'ua',
              })}
            >
              {lang === 'en' ? 'Circle' : 'Коло'}
            </span>
          </div>
          <div className='hero__decor-element'></div>
          <p
            className={cn('hero__description', 'hero__description--top', {
              'hero__description--top_ua': lang === 'ua',
            })}
          >
            {lang === 'en'
              ? 'mental health recovery program'
              : 'програма психологічного відновлення'}
          </p>
          <p className='hero__description hero__description--bottom'>
            {lang === 'en' ? 'June - August 2023' : 'червень - серпень 2023'}
          </p>
        </div>
      </div>
    </section>
  );
};
