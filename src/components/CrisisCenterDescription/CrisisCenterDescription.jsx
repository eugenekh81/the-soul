import psychologist1 from '/images/projects/crisis-center--images/1.png';
import psychologist2 from '/images/projects/crisis-center--images/2.png';
import psychologist3 from '/images/projects/crisis-center--images/3.png';
import psychologist4 from '/images/projects/crisis-center--images/4.png';
import psychologist5 from '/images/projects/crisis-center--images/5.png';

import { useLang } from '../../hooks/useLang';

export const CrisisCenterDescription = () => {
  const lang = useLang();
  return (
    <div className='crisis-center__description'>
      <div className='container'>
        <div className='crisis-center__description-content'>
          <div className='crisis-center__text-content'>
            <p className='crisis-center__text'>
              У лютому 2022 року ми відкрили Кризовий центр, який надавав
              безкоштовну психологічну допомогу людям, постраждалим від війни.
            </p>
            <p className='crisis-center__text'>
              Ми переформатували свою роботу на кризову діяльність. До нас міг
              звернутись кожен українець, йому потрібно було тільки написати
              “Потрібна допомога” і ми зконтактовували людину з психологом,
              назначали час та спосіб звʼязку. Працювали онлайн, тож мали змогу
              допомагати і тим, хто виїхав і тим, хто залишився в Україні. 
            </p>
            <p className='crisis-center__text'>
              У 2023 ми відновили роботу Кризового Центру та долучили ще 5
              психологів до кризового консультування онлайн. Загалом було
              проведено більше 200 консультацій та декілька десятків живих груп
              в Україні та країнах Європи.
            </p>
          </div>
          <div className='crisis-center__image-container'>
            <img
              className='crisis-center__image'
              src={psychologist2}
              alt='Psychologist photo'
            />
            <p className='crisis-center__image-text'>Text 1</p>
            <img
              className='crisis-center__image'
              src={psychologist5}
              alt='Psychologist photo'
            />
            <img
              className='crisis-center__image'
              src={psychologist3}
              alt='Psychologist photo'
            />
            <p className='crisis-center__image-text crisis-center__image-text--wide'>Живі терапевтичні групи</p>

            <img
              className='crisis-center__image'
              src={psychologist1}
              alt='Psychologist photo'
            />
            <p className='crisis-center__image-text'>Text 1</p>
            <img
              className='crisis-center__image'
              src={psychologist4}
              alt='Psychologist photo'
            />
          </div>
        </div>
      </div>
    </div>
  );
};
