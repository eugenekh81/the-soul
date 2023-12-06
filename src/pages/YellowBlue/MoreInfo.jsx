import { NavLink } from 'react-router-dom';
import { useLang } from '../../hooks/useLang';

export const MoreInfo = () => {
  const lang = useLang();

  return (
    <section className='page__section section yellow-blue__more-info'>
      <div className='container'>
        <div className='yellow-blue__more-info-content'>
          <h3 className='yellow-blue__more-info-title'>
            {lang === 'en'
              ? 'For more information about the Ukrainian Psychology Center "The Soul", please visit'
              : 'Для додаткової інформації про Український психологічний центр "Душа" відвідайте сторінки'}
          </h3>

          <div className='yellow-blue__more-info-buttons'>
            <NavLink
              className='yellow-blue__more-info-button'
              to={`/${lang}/about-us`}
            >
              {lang === 'en' ? 'About us' : 'Про нас'}
            </NavLink>
            <NavLink
              className='yellow-blue__more-info-button'
              to={`/${lang}/projects/ukrainian-circle`}
            >
              {lang === 'en' ? 'Projects' : 'Проєкти'}
            </NavLink>
          </div>
          <p className='yellow-blue__more-info-text'>
            {lang === 'en'
              ? 'If you know someone who might be interested in participating in Yellow Blue, please feel free to invite as many people as you like. Sharing is caring and we’d appreciate it if you could spread the word'
              : 'Якщо ви знаєте когось, кому може бути цікава участь у Yellow Blue, будь ласка, запросіть скільки завгодно людей. Ділитись – це значить турбуватись, і ми будемо вдячні, якщо ви поширите цю інформацію'}
          </p>
          <p className='yellow-blue__more-info-text yellow-blue__more-info-text--big'>
            {lang === 'en'
              ? 'We are looking forward to seeing you! '
              : 'Ми з нетерпінням чекаємо на вас!'}
          </p>
        </div>
      </div>
    </section>
  );
};
