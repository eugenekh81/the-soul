import './JoinTheProgram.scss';
import { useLang } from '../../hooks/useLang';

export const JoinTheProgram = () => {
  const lang = useLang();
  return (
    <section className='page__section section join-the-program'>
      <div className='container'>
        <h2 className='section__title block-centered'>
          {lang === 'en' ? 'JOIN' : 'Приєднатись'}
        </h2>

        <div className='join-the-program__content'>
          <p className='section__description'>
            {lang === 'en'
              ? 'You are welcome to participate in the Ukrainian Circle project, it is available in our Telegram channel.'
              : 'Ви можете стати учасником Програми в будь-який час. '}
          </p>
          <p className='section__description'>
            {lang === 'en'
              ? 'All you need to do is submit the form below to enroll'
              : 'Для цього вам необхідно заповнити форму реєстрації та долучитись до нашого Телеграм-каналу'}
          </p>

          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSeYA4pNgP0AgMVi93cLSBnwq5PNOdLGqqfGOTTH5ZUn1_d-RA/viewform'
            className='button section__button'
            target='_blank'
            rel='noreferrer'
          >
            {lang === 'en' ? 'Join' : 'Приєднатись'}
          </a>
        </div>
      </div>
    </section>
  );
};
