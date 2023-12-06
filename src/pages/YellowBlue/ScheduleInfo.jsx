import { useLang } from '../../hooks/useLang.jsx';

export const ScheduleInfo = () => {
  const lang = useLang();

  return (
    <section className='yellow-blue__schedule-info'>
      <div className='container'>
        <div className='yellow-blue__schedule-content'>
          <div className='yellow-blue__event-info'>
            <p className='yellow-blue__event-text'>
              {lang === 'en'
                ? 'Dress code: wearing or having something yellow-blue would be nice to express your solidarity with Ukrainian people.'
                : 'Дрес-код: ви можете мати щось жовто-блакитне аби висловити свою солідарність з українським народом'}
            </p>
            <p className='yellow-blue__event-text yellow-blue__event-text--center'>
              <strong>{lang === 'en' ? 'When?' : 'Коли?'}</strong>
            </p>
            <ul className='yellow-blue__timezones-list'>
              <li className='yellow-blue__timezones-item'>
                {lang === 'en'
                  ? 'Friday, December, 15, 7 pm – 9 pm Kyiv, Ukraine (EET)'
                  : 'Пʼятниця, 15 грудня, 19:00 - 21:00, Київ, Україна'}
              </li>
              <li className='yellow-blue__timezones-item'>
                {lang === 'en'
                  ? 'Friday, December 15, 9 am – 11 am Seattle, WA (PST)'
                  : 'Пʼятниця, 15 грудня, 9:00 - 1:00, Сіетл, Вашингтон (PST)'}
              </li>
              <li className='yellow-blue__timezones-item'>
                {lang === 'en'
                  ? 'Friday, December 15, 12 pm – 2 pm Boston, MA (EST)'
                  : 'Пʼятниця, 15 грудня, 12:00 - 14:00, Бостон, Масачусетс (EST)'}
              </li>
              <li className='yellow-blue__timezones-item'>
                {lang === 'en'
                  ? 'Saturday, December 16, 1 am – 3 am Singapore (SST)'
                  : 'Субота, 16 грудня, 01:00 - 03:00, Сінґапур (SST)'}
              </li>
            </ul>
            <p className='yellow-blue__event-text'>
              {lang === 'en'
                ? 'Language: English and Ukrainian (translation will be available).'
                : 'Мова: англійська та українська (переклад буде забезпечено).'}
            </p>
            <p className='yellow-blue__event-text'>
              {lang === 'en'
                ? 'Recording of the event will be available so that you may watch it later at your convenience.'
                : 'Відеозапис події буде доступний для перегляду у зручний для вас час.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
