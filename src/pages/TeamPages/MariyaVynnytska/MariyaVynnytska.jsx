import { useParams } from 'react-router-dom';
import MariyaVynnytskaPhoto from '/images/team/mvynnytska-mobile.png';
import { Helmet } from 'react-helmet';

export const MariyaVynnytska = () => {
  const { lang } = useParams();
  return (
    <>
      <Helmet>
        <html lang={lang} />
        <title>
          {lang === 'en'
            ? 'The Soul | Mariya Vynnytska'
            : 'The Soul | Марія Винницька'}
        </title>
        <meta
          name='description'
          content="The Soul Ukrainian Center of Psychology is a professional collaboration of psychologists from different disciplines, established to offer psychological support to people and provide a choice of the most effective methods and approaches. The Ukrainian Center of Psychology, The Soul 'Душа', was created on February 2, 2021, as an initiative and creative union of psychologists practicing in various fields (such as psychoanalysis)."
        />
        <meta
          name='robots'
          content='noindex, nofollow, max-image-preview:large'
        ></meta>
        <link rel='canonical' href='https://ukrainiancircle.com.ua/'></link>
      </Helmet>
      <section className='page__section page__section--therapist section team__page therapist'>
        <div className='therapist__header-background'>
          <div className='container'>
            <div className='therapist__header'>
              <div className='therapist__description'>
                <h1 className='therapist__name'>
                  {lang === 'en' ? 'Mariya Vynnytska' : 'Марія Винницька'}
                </h1>
                <div className='therapist__role'>
                  {lang === 'en' ? 'PSYCHOLOGIST' : 'ПСИХОЛОГ'}
                </div>
                <div className='therapist__role therapist__role--last-child'>
                  {lang === 'en'
                    ? 'CO-FOUNDER OF "THE SOUL" PSYCHOLOGY CENTER'
                    : 'СПІВЗАСНОВНИЦЯ ЦЕНТРУ ПСИХОЛОГІЇ THE SOUL'}
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
                  src={MariyaVynnytskaPhoto}
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
                ? 'Psychoanalyst, business coach, systemic family therapist'
                : 'Психоаналітик, бізнес коуч, системно-сімейний терапевт'}
            </div>

            <h4 className='therapist__about-subtitle'>
              {lang === 'en' ? 'Education' : 'Освіта'}
            </h4>

            <div className='therapist__about-description'>
              {lang === 'en' ? (
                <>
                  First - Philology, International Journalism and Law
                  <br />
                  Second - Clinical Psychoanalysis
                </>
              ) : (
                <>
                  Перша – філологія, міжнародна журналістика та право, друга –
                  Клінічний психоаналіз
                </>
              )}
            </div>

            <h4 className='therapist__about-subtitle'>
              {lang === 'en' ? 'Experience' : 'Досвід'}
            </h4>

            <div className='therapist__about-description'>
              <ul className='therapist__list'>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'More than 1,000 hours of personal therapy'
                    : 'Понад 1000 годин особистої терапії'}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'More than 100 constellations for clients'
                    : 'Понад 100 розстановок для клієнтів'}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'Conducting consultations and leading groups since 2012: in Ukrainian, Russian and English'
                    : 'Консультації і групи веду з 2012 року: українською, російською та англійською '}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? ''
                    : '15+ років досвіду у міжнародних проектах і управлінні '}
                </li>

                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'conducting individual counseling, trainings and seminars, conference'
                    : 'Проводжу індивідуальне консультування, тренінги та семінари, виступи на конференціях'}
                </li>
              </ul>
            </div>

            <div className='therapist__about-description'>
              {lang === 'en'
                ? 'In my work, I use the following methods:'
                : 'В своїй роботі використовую методи:'}
              <ul className='therapist__list'>
                <li className='therapist__list-item'>
                  {lang === 'en' ? 'Psychoanalysis' : 'Психоаналіз'}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'Systemic family therapy'
                    : 'Системно-сімейну терапію'}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'Organizational and business psychology'
                    : 'Организаційну та бізнес психологію'}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en' ? 'Coaching tools' : 'Коучингові інструменти'}
                </li>
              </ul>
            </div>

            <h4 className='therapist__about-subtitle'>
              {lang === 'en'
                ? 'Requests I work with:'
                : 'Запити, з якими працює:'}
            </h4>
            <div className='therapist__about-description'>
              <ul className='therapist__list'>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'How to increase income and have better quality of life'
                    : 'Як збільшити дохід і мати кращу якість життя'}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'How to build fruitful relationships with others while working for someone or being your own boss'
                    : 'Як будувати плідні стосунки з іншими, працюючи на когось чи на себе'}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'How to improve your existing business, better manage people, processes, projects and achieve your goals'
                    : 'Як налагодити свій існуючий бізнес, краще управляти людьми, процесами, проектами і досягати цілі'}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'How to find your occupation and create your dream project'
                    : 'Як знайти свою справу і створити проект мрії'}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'How to resolve conflicts in a team, with subordinates, managers, partners'
                    : 'Як вирішувати конфлікти у команді, з підлеглими, керівником та партнерами'}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'How to increase your corporate career growth and develop your natural talents'
                    : 'Як рости в кар’єрі у компанії та ровивати свої природні таланти'}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en'
                    ? 'How to become happier at work, grow, get profit and satisfaction'
                    : 'Як стати щасливішим в роботі, рости, отримувати прибуток і задоволення'}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en' ? (
                    <>
                      <b>Difficult period of life:</b> crisis, war, trauma,
                      separation, relocation, changing or losing a job, lack of
                      inner support, anxiety, fear of future
                    </>
                  ) : (
                    <>
                      <b>Складний період життя:</b> криза, війна, травма,
                      розлука, переїзд, зміна чи втрата роботи, немає
                      внутрішньої опори, тривога, страх щодо майбутнього
                    </>
                  )}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en' ? (
                    <>
                      <b>Relationships with others:</b> couple difficulties,
                      repeated negative scenarios, conflicts, devaluation,
                      resentment and anger
                    </>
                  ) : (
                    <>
                      <b>Взаємини з іншими:</b> труднощі у парі, повторюються
                      негативні сценарії, конфлікти, знецінення, образи та гнів
                    </>
                  )}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en' ? (
                    <>
                      <b>Painful feelings and states:</b> depression, apathy,
                      despair, envy, irritability, anger, sadness, shame and
                      guilt
                    </>
                  ) : (
                    <>
                      <b>Болісні почуття та стани:</b> депресія, апатія, розпач,
                      заздрість, дратівливість, злість, смуток, сором та вина
                    </>
                  )}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en' ? (
                    <>
                      <b>Decisions and actions:</b> when the choice is
                      necessary, help in finding energy for a change, building a
                      vision for a certain period of life, a dream or a goal.
                    </>
                  ) : (
                    <>
                      <b>Рішення та дії:</b> коли треба зробити вибір, знайти
                      енергію для змін та побудувати бачення на певний період
                      життя або під якусь мрію чи ціль
                    </>
                  )}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en' ? (
                    <>
                      <b>Relationship with yourself:</b> rejection of yourself
                      and your body, low self-esteem, sleep disorders, eating
                      disorders, lack of satisfaction and joy in life,
                      self-targeted aggression and disappointment
                    </>
                  ) : (
                    <>
                      <b>Стосунки з собою:</b> неприйняття себе та свого тіла,
                      низька самооцінка, поганий сон, харчові розлади, немає
                      задоволення та радості у житті, аутоагресія та
                      розчарування
                    </>
                  )}
                </li>
                <li className='therapist__list-item'>
                  {lang === 'en' ? (
                    <>
                      <b>Adaptation in a new country</b> in the process of
                      migration, war or marriage with a foreigner
                    </>
                  ) : (
                    <>
                      <b>Адаптація в новій країні</b> під час еміграції, війни
                      чи шлюбу з іноземцем
                    </>
                  )}
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
    </>
  );
};
