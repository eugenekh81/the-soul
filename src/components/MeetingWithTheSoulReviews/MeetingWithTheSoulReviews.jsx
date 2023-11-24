import { useContext } from 'react';
import './MeetingWithTheSoulReviews.scss';
import { LangContext } from '../../context/LangContextProvider';

export const MeetingWithTheSoulReviews = () => {
  const { lang } = useContext(LangContext);

  return (
    <section className='meeting-soul-reviews page__section section'>
      <h2 className='section__title'>
        {lang === 'en' ? 'Reviews' : 'Відгуки'}
      </h2>
      <ul className='meeting-soul-reviews__list'>
        <li className='meeting-soul-reviews__item meeting-soul-reviews__item--blue'>
          {lang === 'en'
            ? "Thanks a lot for Saturday's meetings! It is very important for me to have such an opportunity to receive psychological support every week and talk about painful issues. Special thanks for the meeting that was devoted to the plans for the future and stabilization techniques to cope with stress. I use them quite often and teach my children to breathe to calm down and relieve anxiety. Thank you very much♥️!"
            : 'Дякую за суботні зустрічі! Це дуже важливо для мене мати таку можливість кожного тижня отримати психологічну підтримку та поспілкуватись на болючі теми. Окрема подяка за Зустріч про плани на майбутнє та стабілізаційні техніки від стресу. Я їх використовую дуже часто та вчу своїх дітей дихати, щоб заспокоїтись та знімати тривогу. Велика вам подяка♥️!'}

          <div className='meeting-soul-reviews__notification meeting-soul-reviews__notification--blue'>
            12:34
            <svg
              className='meeting-soul-reviews__notification-icon'
              viewBox='0 0 23 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.73828 7.9375L5.53175 12.625L14.6361 1.375M10.8426 10.75L12.36 12.625L21.4643 1.375'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </li>

        <li className='meeting-soul-reviews__item meeting-soul-reviews__item--green'>
          {lang === 'en'
            ? "‘Meetings with the Soul' became for me the breath of fresh air that helped to gather my thoughts and start making decisions. Before I was ‘psychologically stuck' - everyone was waiting for this nightmare to end soon. Thanks to your support, I began to plan my life again and settled down in a new place in a new country. Thank you for this project, it helped me find strength and brought back hope!🤗"
            : 'Зустрічі з Душею стали для мене тим ковтком свіжого повітря, що допоміг зібратись та почати приймати рішення. До того як була наче завмерла - все чекала, що це жахіття скоро закінчиться. Завдяки вашій підтримці я почала знову планувати своє життя та облаштовуватись на новому місці в новій країні. Дякую вам за цей проект, він допоміг мені зібратись з силами та повернув надію!🤗'}

          <div className='meeting-soul-reviews__notification meeting-soul-reviews__notification--green'>
            12:46
            <svg
              className='meeting-soul-reviews__notification-icon'
              viewBox='0 0 23 14'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M1.73828 7.9375L5.53175 12.625L14.6361 1.375M10.8426 10.75L12.36 12.625L21.4643 1.375'
                stroke='currentColor'
                strokeWidth='2'
                strokeLinecap='round'
                strokeLinejoin='round'
              />
            </svg>
          </div>
        </li>
      </ul>
    </section>
  );
};
