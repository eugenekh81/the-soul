import { useContext } from 'react';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';

import './AboutCenter.scss';
import { LangContext } from '../../context/LangContextProvider';

export const AboutCenter = () => {
  const { lang } = useContext(LangContext);
  const { ref: mainPhotoRef, inView } = useInView();

  return (
    <section className='page__section section about-center'>
      <div className='container'>
        <h2 className='about-center__title section__title'>
          {lang === 'en' ? 'About Us' : 'Про Нас'}
        </h2>

        <div className='about-center__content'>
          <div
            className={cn(
              'about-center__image-container',
              'animation',
              'animation__fade-up',
              { 'animation__fade-up--fire': inView }
            )}
          >
            <img src='/images/home/home--team.png' alt='The Soul Team' />
          </div>
          <div className='about-center__text-container' ref={mainPhotoRef}>
            <p className='about-center__text'>
              {lang === 'en'
                ? 'The Soul Psychology Center was founded in Feb 2021.'
                : 'Центр психології The Soul був заснований у лютому 2021 року.'}
            </p>
            <p className='about-center__text'>
              {lang === 'en' ? (
                <>
                  <span>When the war started</span>, in February 2022 we opened
                  the Crisis Center providing free mental health services to
                  people affected and traumatized by the war and we officially
                  registered our NGO -
                  <span>Ukrainian Psychology Center &quot;THE SOUL&quot;</span>
                </>
              ) : (
                <>
                  <span>Коли почалася війна</span> у лютому 2022 року ми
                  переформатували свою діяльність під Кризовий центр, який
                  надавав безкоштовну психологічну допомогу людям, постраждалим
                  від війни. З лютого 2023 року ми працюємо як громадська
                  організація –{' '}
                  <span>Український психологічний центр «ДУША»</span>
                </>
              )}
            </p>
            <p className='about-center__text'>
              {lang === 'en' ? (
                <>
                  <span>Our mission</span> is to help Ukrainians cope and
                  survive mentally, recover from the war trauma and build
                  resilience to be able to create a new future for themselves,
                  our country and next generations.
                </>
              ) : (
                <>
                  <span>Наша місія</span> - допомогти українцям подолати травму
                  війни, відновити психологічне здоровʼя та надати інструменти
                  боротьби зі стресом та підкріпити віру в майбутнє, та
                  здатність будувати його для себе, нашої країни та наступних
                  поколінь.
                </>
              )}
            </p>
            <p className='about-center__text'>
              {lang === 'en' ? (
                <>
                  <span>We strive</span> to make psychotherapy and mental health
                  services accessible and attractive to people, to make it an
                  integral part of everyday life - same as grocery shopping or a
                  visit to a theater, buying medicines or taking care of
                  one&apos;s body.
                </>
              ) : (
                <>
                  <span>Ми прагнемо</span> зробити послуги психотерапії та
                  психічного здоров&apos;я доступними та привабливими для людей,
                  зробити їх невід&apos;ємною частиною повсякденного життя – так
                  само, як покупка продуктів чи відвідування театру, покупка
                  ліків чи турбота про своє тіло.
                </>
              )}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
