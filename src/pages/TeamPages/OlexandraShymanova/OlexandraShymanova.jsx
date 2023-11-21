import { useParams } from 'react-router-dom';
import OlexandraShymanovaPhoto from '/images/team/oshymanova-mobile.png';

export const OlexandraShymanova = () => {
  const { lang } = useParams();
  return (
    <section className='page__section page__section--therapist section team__page therapist'>
      <div className='therapist__header-background'>
        <div className='container'>
          <div className='therapist__header'>
            <div className='therapist__description'>
              <h1 className='therapist__name'>
                {lang === 'en' ? 'Olexandra Shymanova' : 'Олександра Шиманова'}
              </h1>
              <div className='therapist__role'>
                {lang === 'en'
                  ? 'ANALYTICALLY ORIENTED PSYCHOLOGIST'
                  : 'АНАЛІТИЧНО ОРІЄНТОВАНИЙ ПСИХОЛОГ'}
              </div>
              <div className='therapist__role therapist__role--last-child'>
                {lang === 'en'
                  ? 'FOUNDER OF "THE SOUL" PSYCHOLOGY CENTER'
                  : 'ЗАСНОВНИЦЯ ЦЕНТРУ ПСИХОЛОГІЇ THE SOUL'}
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
                src={OlexandraShymanovaPhoto}
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
              ? 'Psychologist, psychotherapist specialized in Jungian analysis with more than 10 years of consulting experience'
              : 'Психолог- психотерпевт у напрямку юнгіанського аналізу з досвідом консультування понад 10 років'}
          </div>

          <h4 className='therapist__about-subtitle'>
            {lang === 'en' ? 'Education' : 'Освіта'}
          </h4>

          <div className='therapist__about-description'>
            {lang === 'en'
              ? 'Two higher educations - MA in Psychology, MA in International Relations'
              : 'Дві вищі освіти – перша у сфері міжнародних відносин, друга – психологічна'}
          </div>

          <h4 className='therapist__about-subtitle'>
            {lang === 'en' ? 'Experience' : 'Досвід'}
          </h4>

          <div className='therapist__about-description'>
            {lang === 'en' ? (
              <>
                More than 5,000 hours of practical psychotherapeutic help
                <br />
                Run individual and group therapy sessions
              </>
            ) : (
              <>
                Понад 5000 годин практичної психотерапевтичної допомоги
                <br />
                Працюю як індивідуально, так і провожду групову терапію
              </>
            )}
          </div>

          <div className='therapist__about-description'>
            {lang === 'en'
              ? 'In my work, I use the following methods:'
              : 'В своїй роботі використовую методи:'}

            <ul className='therapist__list'>
              <li className='therapist__list-item'>
                {lang === 'en' ? 'Jungian analysis' : 'юнгіанського аналізу'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'Body-oriented therapy'
                  : 'тілесно-орієнтованого методу'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en' ? 'Procedural model' : 'процесуальної моделі'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'Systemic family constellations'
                  : 'системно-сімейних розстановок'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en' ? 'Gestalt therapy' : 'гештальт-терапії'}
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
                  ? 'dissatisfaction with the quality of life, desire and intention to be happy'
                  : 'незадоволеність якістю життя, бажання та намір бути щасливим'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'traumatic events and their consequences'
                  : 'травматичні події та їх наслідки'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? '“everything is wrong and everything goes wrong and I don&apos;t understand why” - we analyze the causes and consequences, and learn to do things differently'
                  : '“все не так і все не те й незрозуміло чому” – розбираємо причини, наслідки, і вчимось робити по-іншому'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'difficult, unpleasant, complicated relationships with loved ones, emotional “swings”, feelings of “loneliness”, regardless of whether you are in relationships or not, feeling of emptiness or, on the contrary, “flooding” with worries'
                  : 'складні, неприємні, важкі стосунки з близькими людьми, емоційні “гойдалки”, почуття “самотності”, незалежно від того в парі ви чи ні, порожнеча або навпаки “затопленість” переживаннями'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'feeling of senselessness and purposelessness of existence, lack of fulfillment in personal and professional life, general pointlessness of everything that happens or vice versa - I do, do, do a lot and very efficiently, but there is no satisfaction and tranquility, a feeling of an eternal race, and, exhaustion'
                  : 'відчуття безглуздості та безцільності існування, нереалізованість в особистому та професійному житті, загальна безглуздість всього, що відбувається чи навпаки – роблю-роблю, багато ефективно, але задоволеності та спокою все немає, відчуття вічної гонки, і, як наслідок загнаності'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'lack of truly close, healthy, effective and developing relationships - with relatives, loved ones, friends, colleagues, acquaintances, and ultimately with yourself'
                  : 'відсутність по-справжньому близьких, здорових, ефективних та розвиваючих відносин – з рідними, близькими, друзями, колегами, знайомими, із самими собою врешті-решт'}
              </li>
              <li className='therapist__list-item'>
                {lang === 'en'
                  ? 'you repeatedly make the same mistakes, the feeling of a vicious circle and repetition of wrong actions'
                  : 'постійно наступаєте на одні й ті ж граблі, відчуття замкнутого кола та повтору помилкових дій'}
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
