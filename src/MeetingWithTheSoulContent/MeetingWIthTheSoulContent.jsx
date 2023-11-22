import { MeetingWithTheSoulGallery } from '../components/MeetingWithTheSoulGallery';

export const MeetingWIthTheSoulContent = () => {
  return (
    <section className='page__section section meeting-soul__content'>
      <div className='container'>
        <div className='meeting-soul__description-content'>
          <p className='meeting-soul__description'>
            Восени 2022 року наш Центр запустив серію груп психологічної
            підтримки «Зустрічі з душею» - щосуботи об 11:00 протягом 3 місяців
            люди могли приєднатися онлайн через Zoom на безкоштовну групову
            терапію.
          </p>
          <p className='meeting-soul__description'>
            Кожна зустріч була присвячена певній темі, і направлена на допомогу
            людям пережити свої важкі почуття та емоції, прийняти важливі
            рішення, поділитися тим, що відбувається в їхньому житті, і отримати
            підтримку один від одного та від наших психологів.
          </p>
        </div>

        <MeetingWithTheSoulGallery />

        <div className='meeting-soul__description-content meeting-soul__description-content--dark-green'>
          <p className='meeting-soul__description'>
            Групи по суботам сприяли відновленню після травми війни та стійкості
            до стресових подій, поверненню контроля над своїм життям та взяття
            відповідальності на себе. Даний проект допоміг жінкам повернутись до
            життя серед війни та опанувати методики психологічного
            саморегулювання.
          </p>
        </div>
      </div>
    </section>
  );
};
