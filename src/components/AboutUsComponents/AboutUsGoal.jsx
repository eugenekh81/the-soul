import { useLang } from '../../hooks/useLang';
import handsAndPlant from '/images/about-us/about-us--hands-and-plant.jpg';

export const AboutUsGoal = () => {
  const lang = useLang();

  return (
    <section className='page__section section about-us__goal'>
      <div className='container'>
        <h2 className='section__title'>
          {lang === 'en' ? 'Goal and mission' : 'Мета та місія'}
        </h2>

        <div className='about-us__goal-content'>
          <div className='about-us__goal-img-container'>
            <img src={handsAndPlant} alt='' className='about-us__goal-img' />
          </div>
          <div className='about-us__goal-text-container'>
            <p className='about-us__goal-text'>
              {lang === 'en'
                ? 'With the onset of the war, our priority is to support Ukrainians in coping with the psychological impact of wartime trauma, providing psychological assistance in dealing with grief, and aiding in the recovery and reconstruction of their lives.'
                : 'З початком війни приорітет нашої діяльності - підтримання українців в процесі переживання воєнної травми, психологічний супровід у роботі горюванням та допомога у відновленні та побудуванні подальшого життя.'}
            </p>
            <p className='about-us__goal-text'>
              {lang === 'en'
                ? 'The mission of our center is to assist Ukrainians in navigating the path from the trauma of war, grief, and loss to recovery and post-traumatic growth.'
                : 'Місія нашого центру - допомогти українцям пройти щлях від травми війни, горя та втрати до відновлення та посттравматичного зростання.'}
            </p>
            <p className='about-us__goal-text'>
              {lang === 'en'
                ? 'We strive to overcome the schism in the hearts of Ukrainians and society, seeking to unite and restore the integrity of each individual and the nation as a whole.'
                : 'Ми хочемо зробити максимум для подолання розколу в душах українців та суспільстві. Обʼєднати та відновити цілісніть кожної особистості та нації в цілому.'}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};
