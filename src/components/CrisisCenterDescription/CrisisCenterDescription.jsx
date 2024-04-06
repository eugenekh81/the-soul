import psychologist1 from '/images/projects/crisis-center--images/1.png';
import psychologist2 from '/images/projects/crisis-center--images/2.png';
import psychologist3 from '/images/projects/crisis-center--images/3.png';
import psychologist4 from '/images/projects/crisis-center--images/4.png';
import psychologist5 from '/images/projects/crisis-center--images/5.png';

import { useLang } from '../../hooks/useLang';

export const CrisisCenterDescription = () => {
  const lang = useLang();
  return (
    <section className='section crisis-center__description'>
      <div className='container'>
        <h2 className='crisis-center__title section__title'>
          {lang === 'en' ? 'Therapy sessions' : 'Живі терапевтичні групи'}
        </h2>
        <div className='crisis-center__description-content'>
          <div className='crisis-center__text-content'>
            <p className='crisis-center__text'>
              {lang === 'en'
                ? 'In February 2022, we opened a Crisis Center that provided free psychological support to people affected by the war.'
                : 'У лютому 2022 року ми відкрили Кризовий центр, який надавав безкоштовну психологічну допомогу людям, постраждалим від війни.'}
            </p>
            <p className='crisis-center__text'>
              {lang === 'en'
                ? "We reoriented our work towards crisis activities. Any Ukrainian could contact us; all they needed to do was to write 'Need help,' and we would connect them with a psychologist, schedule a time and channel of communication. We worked online, so we could help both those who left and those who stayed in Ukraine."
                : 'Ми переформатували свою роботу на кризову діяльність. До нас міг звернутись кожен українець, йому потрібно було тільки написати “Потрібна допомога” і ми зконтактовували людину з психологом, призначали час та спосіб звʼязку. Працювали онлайн, тож мали змогу допомагати і тим, хто виїхав і тим, хто залишився в Україні.'}
            </p>
            <p className='crisis-center__text'>
              {lang === 'en'
                ? 'In 2023, we resumed the work of the Crisis Center and added 5 more psychologists for online crisis counseling. In total, we conducted over 200 consultations and several dozen live group sessions in Ukraine and European countries.'
                : 'У 2023 ми відновили роботу Кризового Центру та долучили ще 5 психологів до кризового консультування онлайн. Загалом було проведено більше 200 консультацій та декілька десятків живих груп в Україні та країнах Європи.'}
            </p>
          </div>
          <div className='crisis-center__image-container'>
            <img
              className='crisis-center__image'
              src={psychologist2}
              alt='Psychologist photo'
            />
            <p className='crisis-center__image-text'>
              {lang === 'en' ? 'Spain' : 'Іспанія'}
            </p>
            <img
              className='crisis-center__image'
              src={psychologist5}
              alt='Psychologist photo'
            />
            <p className='crisis-center__image-text'>
              {lang === 'en' ? 'Germany' : 'Німеччина'}
            </p>
            <img
              className='crisis-center__image'
              src={psychologist3}
              alt='Psychologist photo'
            />
            <p className='crisis-center__image-text'>
              {lang === 'en' ? 'Belguim' : 'Бельгія'}
            </p>
            <img
              className='crisis-center__image'
              src={psychologist1}
              alt='Psychologist photo'
            />
            <p className='crisis-center__image-text'>
              {lang === 'en' ? 'Ukraine' : 'Україна'}
            </p>
            <img
              className='crisis-center__image'
              src={psychologist4}
              alt='Psychologist photo'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
