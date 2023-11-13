import { useParams } from 'react-router-dom';
import MarynaYakhnoPhoto from '/images/team/myakhno-mobile.png';

export const MarynaYakhno = () => {
  const { lang } = useParams();
  return (
    <section className='page__section page__section--therapist section team__page therapist'>
      <div className='therapist__header-background'>
        <div className='container'>
          <div className='therapist__header'>
            <div className='therapist__description'>
              <h1 className='therapist__name'>
                {lang === 'en' ? 'Maryna Yakhno' : 'Марина Яхно'}
              </h1>
              <div className='therapist__role therapist__role--last-child'>
                {lang === 'en' ? 'PSYCHOLOGIST' : 'ПСИХОЛОГ'}
              </div>

              <a href='#' className='therapist__book-button'>
                {lang === 'en'
                  ? 'Book a consultation'
                  : 'Записатися на консультацію'}
              </a>
            </div>

            <div className='therapist__image-container'>
              <img
                src={MarynaYakhnoPhoto}
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
            {lang === 'en'
              ? 'Analytically oriented psychologist with 7+ years of work experience'
              : 'Аналітично орієнтований психолог з досвідом роботи понад 7 років'}
          </div>

          <h4 className='therapist__about-subtitle'>
            {lang === 'en' ? 'Education' : 'Освіта'}
          </h4>

          <div className='therapist__about-description'>
            {lang === 'en' ? (
              <>
                First - technical education (NTUU KPI)
                <br />
                Second - Psychology (KNU named after T. Shevchenko)
                <br />
                <br />
                10+ years of training in psychodynamic approach and in Jungian
                analysis and psychotherapy
              </>
            ) : (
              <>
                Перша – технічна (НТУУ КПІ)
                <br />
                Друга – психологія (КНУ ім. Т.Г. Шевченка)
                <br />
                <br />
                Понад 10 років навчання на авторських програмах і курсах в
                психодинамічному напрямі та в методі юнгіанського аналізу.
              </>
            )}
          </div>

          <h4 className='therapist__about-subtitle'>
            {lang === 'en' ? 'Experience' : 'Досвід'}
          </h4>

          <div className='therapist__about-description'>
            <ul className='therapist__list'>
              <li className='therapist__list-item'>
                {lang === 'en' ? 'PTSD trainer' : 'Тренер по роботі з ПТСР'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? '8+ years of personal therapy'
                  : 'Понад 8 років особистої терапії'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'Experience in working in public institution "Youth-friendly Clinic" at Kyiv City Skin and Venereal Hospital'
                  : 'Досвід роботи в державних установах “Клініка, дружня до молоді” при Київській міській шкірно-венерологічній лікарні'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'Helping families in the process of divorce as well as other crisis situations at the "City Children’s Center" of the Kyiv City Children’s Services.'
                  : 'Допомога сім’ям, що переживають розлучення або перебувають в інших кризових ситуаціях при “Міському центрі дитини” Київської служби у справах дітей'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'Host of self-development and self-discovery groups'
                  : 'Ведуча груп саморозвитку та самопізнення'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'Co-author of the "Style Therapy" project'
                  : 'Співавтор проекта "Терапія стилем"'}
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
                  {lang === 'en'
                    ? 'War-time requests:'
                    : 'Актуальні запити в воєнний час'}
                </span>
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Depression, lack of strength and energy, anxiety, fears, panic attacks'
                      : 'Пригніченість, відсутність сил та енергії , тривожність, страхи, панічні атаки'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Difficulties in making decisions about the future (where to live, which work line to choose)'
                      : 'Складність зробити вибір у подальшому житті (де лишатися жити, який напрям роботи обрати далі)'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Conflicts in the family, feelings of guilt, anger, resentment towards loved ones'
                      : 'Відносини – як зберегти відносини на відстані, підтримка при завершенні стосунків, незрозумілі стосунки'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Parental counseling for children (fears, sleep disorders, aggressive behavior, self-blame, reluctance to communicate with anyone)'
                      : 'Конфлікти у сім’ї, почуття провини, злості, образи щодо близьких людей'}
                  </li>
                </ul>
              </li>
              <li className='therapist__list-item'>
                <span style={{ fontWeight: 700 }}>
                  {lang === 'en'
                    ? 'Self-esteem and self-worth:'
                    : 'Самооцінка і самоцінність:'}
                </span>
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Self-criticizm and self-destructive behavior'
                      : 'Самокритика та самоїдство'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Self-doubt' : 'Невпевненість у собі'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Inability to love and appreciate oneself'
                      : 'Нездатність любити та цінувати себе'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Excessive sensitivity to criticism, lack of self-worth'
                      : 'Надчутливість до критики, брак самооцінки'}
                  </li>
                </ul>
              </li>
              <li className='therapist__list-item'>
                <span style={{ fontWeight: 700 }}>
                  {lang === 'en' ? 'Relationships:' : 'Відносини:'}
                </span>
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Inability to find a romantic partner'
                      : 'Нездатність знайти кохану людину'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Self-doubt' : 'Постійні сумніви у собі'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Inability to love and appreciate oneself'
                      : 'Нездатність любити та цінувати себе'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? 'Inability to let go of past partner / relationships'
                      : 'Нездатніть відпустити колишнього партнера / стосунки'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Fear of ending toxic relationships' : 'Нездатність завершити токсичні стосунки через страх залишитися самій / самому'}
                  </li>
                </ul>
              </li>
              <li className='therapist__list-item'>
                <span style={{ fontWeight: 700 }}>
                {lang === 'en' ? 'Search for meaning:' : 'Пошук сенсів'}

                </span>
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? "Search for one's purpose in life" : 'Пошук призначення у житті'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Loneliness' : 'Самотність'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Apathy' : 'Апатія'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Depression' : 'Депресія'}
                  </li>
                </ul>
              </li>
              <li className='therapist__list-item'>
                <span style={{ fontWeight: 700 }}>
                {lang === 'en' ? 'Underachievment and unfulfillment:' : 'Самоідентичність та творча самореалізація:' }
                </span>
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Not being needed by others' : 'Відчуття непотрібності оточуючим'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en' ? 'Absence of clear goals in life' : 'Відсутність чітких життєвих цілей'}
                  </li>
                  <li className='therapist__list-item'>
                    {lang === 'en'
                      ? "Inability to adequately assess one's strengths and weaknesses"
                      : 'Неспроможність адекватно оцінити власні переваги та слабкі сторони'}
                  </li>
                </ul>
              </li>
            </ul>
          </div>

          <a href='#' className='therapist__book-button button--centered'>
            {lang === 'en'
              ? 'Book a consultation'
              : 'Записатися на консультацію'}
          </a>
        </div>
      </div>
    </section>
  );
};
