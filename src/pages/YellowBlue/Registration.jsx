import { NavLink } from 'react-router-dom';
import { useLang } from '../../hooks/useLang';

export const Registration = () => {
  const lang = useLang();
  return (
    <section className='page__section section yellow-blue__registration'>
      <div className='container'>
        <div className='yellow-blue__registration-content'>
          <h3 className='yellow-blue__registration-title'>
            {lang === 'en'
              ? 'Fill out the registration form to receive the invitation link'
              : 'Заповніть реєстраційну форму для отримання посилання на подію'}
          </h3>

          <NavLink
            className='yellow-blue__registration-button'
            to='https://tinyurl.com/bdefjy5z'
            target='_blank'
          >
            {lang === 'en' ? 'Register' : 'Реєстрація'}
          </NavLink>
        </div>
      </div>
    </section>
  );
};
