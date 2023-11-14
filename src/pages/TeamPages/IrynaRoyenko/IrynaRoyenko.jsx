import { useParams } from 'react-router-dom';
import IrynaRoyenkoPhoto from '/images/team/iroyenko-mobile.png';

export const IrynaRoyenko = () => {
  const { lang } = useParams();
  return (
    <section className='page__section page__section--therapist section team__page therapist'>
      <div className='therapist__header-background'>
        <div className='container'>
          <div className='therapist__header'>
            <div className='therapist__description'>
              <h1 className='therapist__name'>
                {lang === 'en' ? 'Iryna Royenko' : 'Ірина Роєнко'}
              </h1>
              <div className='therapist__role therapist__role--last-child'>
                {lang === 'en' ? 'PSYCHOLOGIST' : 'ПСИХОЛОГ'}
              </div>

              <a
                href={
                  lang === 'en'
                    ? '#'
                    : 'https://docs.google.com/forms/d/e/1FAIpQLSc7lG2-EZP0OvoqtWU1X13zCRavwsvprP-tqPcX6FyEArKhXA/viewform'
                }
                target='_blank'
                className='therapist__book-button'
                rel='noreferrer'
              >
                {lang === 'en'
                  ? 'Book a consultation'
                  : 'Записатися на консультацію'}
              </a>
            </div>

            <div className='therapist__image-container'>
              <img
                src={IrynaRoyenkoPhoto}
                alt='Therapist'
                className='therapist__photo'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='therapist__about'>
        <div className='container'>
          <h3 className='therapist__about-title'>
            {lang === 'en' ? 'Background' : 'Про психолога'}
          </h3>

          <div className='therapist__about-description'>
            {lang === 'en' ? (
              <>
                Psychologist, game practitioner, a leader of the
                transformational game{' '}
                <b>&quot;Women Who Run With the Wolves&quot;</b>
              </>
            ) : (
              <>
                Психолог, ігропрактик, ведуча Трансформаційної жіночої гри{' '}
                <b>&quot;Та, що біжить з вовками&quot;</b>
              </>
            )}
          </div>

          <h4 className='therapist__about-subtitle'>
            {lang === 'en' ? 'Education' : 'Освіта'}
          </h4>

          <div className='therapist__about-description'>
            <ul className='therapist__list'>
              <li className='therapist__list-item'>
                {lang === 'en' ? (
                  <>
                    First - International Relations
                    <br />
                    Second - Psychology
                  </>
                ) : (
                  <>
                    Перша – у сфері міжнародних відносин, друга – психологічна.
                  </>
                )}
              </li>
            </ul>
          </div>

          <h4 className='therapist__about-subtitle'>
            {lang === 'en' ? 'Experience' : 'Досвід'}
          </h4>
          <div className='therapist__about-description'>
            <ul className='therapist__list'>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? '150+ hours of personal therapy'
                  : 'Понад 150 годин особистої терапії'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? '50+ hours of supervision'
                  : 'Понад 50 годин супервізії'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en' ? (
                  <>
                    Host of the transformational game{' '}
                    <b>&quot;Women Who Run With the Wolves&quot;</b>
                  </>
                ) : (
                  <>
                    Ведуча Трансформаційної жіночої гри{' '}
                    <b>&quot;Та, що біжить з вовками&quot;</b>
                  </>
                )}
              </li>
            </ul>
          </div>

          <div className='therapist__about-description'>
            {lang === 'en'
              ? 'In my work, I use the following methods:'
              : 'В своїй роботі використовую методи:'}
            <ul className='therapist__list'>
              <li className='therapist__list-item'>
                {lang === 'en' ? 'Psychodrama' : 'Психодрама'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'Eye movement desensitization and reprocessing (EMDR)'
                  : 'Десенсибілізація та репроцесуалізація (тобто опрацювання травми) рухом очей (EMDR)'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'Metaphorical and associative cards'
                  : 'Метафорично-асоціаціативні карти'}
              </li>
            </ul>
          </div>

          <h4 className='therapist__about-subtitle'>
            {lang === 'en'
              ? 'Requests I work with:'
              : 'Запити, з якими працює:'}
          </h4>
          <div className='therapist__about-description'>
            <ul className='therapist__list' style={{ listStyle: 'none' }}>
              <li className='therapist__list-item'>
                <span style={{ fontWeight: 700 }}>
                  {lang === 'en' ? 'Relationships:' : 'Відносини:'}
                </span>

                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'difficulties in relationships (s/he does not hear me, emotional instability, when it feels "I can\'t do this anymore", or "I am doing everything for him/her, and he/she doesn\'t appreciate it")'
                      : 'Складнощі у відносинах (він/вона мене не чує, емоційна нестабільність, коли "я так більше не можу", коли "я для нього/неї все, а він не цінує")'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Breakup up/divorce, loss of loved ones, processing grief (based my own experience)'
                      : 'Розрив/розлучення, втрата близьких, проживання горя (на власному досвіді)'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Loneliness in relationships, emotional alienation and remoteness'
                      : 'Самотність у відносинах, емоційна відчуженість та віддаленість'}
                  </li>
                </ul>
              </li>
              <li className='therapist__list-item'>
                <span style={{ fontWeight: 700 }}>
                  {lang === 'en' ? 'Searching for oneself:' : 'Пошук себе:'}
                </span>

                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Lack of self-realization'
                      : 'Відсутність самореалізації'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Self-doubt' : 'Невпевненість в собі'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Self-esteem improvement'
                      : 'Підвищення самооцінки'}
                  </li>
                </ul>
              </li>
              <li className='therapist__list-item'>
                <span style={{ fontWeight: 700 }}>
                  {lang === 'en'
                    ? 'Emotional and physical manifestations:'
                    : 'Емоційні та тілесні прояви:'}
                </span>
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Fears' : 'Страхи'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Panic attacks' : 'Панічні атаки'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Apathy' : 'Апатія'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Life on autopilot'
                      : 'Життя на автопілоті'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Powerlessness' : 'Безсилля'}
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <a
            href={
              lang === 'en'
                ? '#'
                : 'https://docs.google.com/forms/d/e/1FAIpQLSc7lG2-EZP0OvoqtWU1X13zCRavwsvprP-tqPcX6FyEArKhXA/viewform'
            }
            target='_blank'
            className='therapist__book-button'
            rel='noreferrer'
          >
            {lang === 'en'
              ? 'Book a consultation'
              : 'Записатися на консультацію'}
          </a>
        </div>
      </div>
    </section>
  );
};
