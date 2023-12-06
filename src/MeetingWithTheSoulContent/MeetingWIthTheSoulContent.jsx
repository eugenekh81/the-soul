import { MeetingWithTheSoulGallery } from '../components/MeetingWithTheSoulGallery';
import { MeetingWithTheSoulReviews } from '../components/MeetingWithTheSoulReviews';
import { useLang } from '../hooks/useLang';

export const MeetingWIthTheSoulContent = () => {
  const lang = useLang();

  return (
    <section className='page__section section meeting-soul__content'>
      <div className='container'>
        <div className='meeting-soul__description-content'>
          <p className='meeting-soul__description'>
            {lang === 'en'
              ? 'In fall 2022, our Center launched a series of group therapy sessions “Meetings with the Soul”. These were the groups of psychological support which people could join online via Zoom free of charge every Saturday at 11:00 am for 3 months.'
              : 'Восени 2022 року наш Центр запустив серію груп психологічної підтримки «Зустрічі з душею» - щосуботи об 11:00 протягом 3 місяців люди могли приєднатися онлайн через Zoom на безкоштовну групову терапію.'}
          </p>
          <p className='meeting-soul__description'>
            {lang === 'en'
              ? 'Every meeting was dedicated to a specific topic, and aimed at helping people overcome their difficult feelings and emotions, make important decisions, share what was happening in their lives, and receive support from each other and from our psychologists.'
              : 'Кожна зустріч була присвячена певній темі, і направлена на допомогу людям пережити свої важкі почуття та емоції, прийняти важливі рішення, поділитися тим, що відбувається в їхньому житті, і отримати підтримку один від одного та від наших психологів.'}
          </p>
        </div>

        <MeetingWithTheSoulGallery />

        <div className='meeting-soul__description-content'>
          <p className='meeting-soul__description'>
            {lang === 'en'
              ? '12 meetings were focused on supporting a general emotional wellbeing of women affected by the war. Participants in a safe and calm atmosphere had an opportunity to share their experiences and feelings, hopes and pains and tell their stories of war and stories of their family. At each meeting, women did practical exercises aimed at overcoming stress and anxiety conditions, restoring strength and resilience, coping with emotions, forming resourceful states and fostering psychological desire to live. '
              : '12 зустрічей були присвячені підтримці загального емоційного стану жінок, постраждалих від війни.  Учасниці у безпечному просторі мали змогу ділитись своїми переживаннями та почуттями, надіями та болями, розповідали свої історії війни та історії свого роду. На кожній зустрічі жінки виконували практичні вправи, направлені на подолання стресу та важких станів, відновлення сил та внутрішніх опор,  опанування емоцій,  формування ресурсних станів та психологічного повернення до життя.'}
          </p>
          <p className='meeting-soul__description'>
            {lang === 'en'
              ? "Among these exercises, we proposed the studies of archetypes in oneself (through meditative practices), helping to reconnect with one's goals and desires, overcome the division of life into BEFORE and AFTER the war, and heal the traumas and emotional wounds. The participants discussed feelings and emotions, changes that happened around them and changes that occurred in their souls."
              : 'Серед них - дослідження архетипу Афіни в собі (медитативна практика), зʼєднання зі своїми цілями та бажаннями (розстановочна вправа), подолання розколу життя на ДО та ПІСЛЯ та подолання розколу в душі після травми тощо. Обговорювали почуття та емоції, зміни що відбуваються довкола та зміни, що відбуваються у кожного в душі.'}
          </p>
        </div>

        <MeetingWithTheSoulReviews />

        <div className='meeting-soul__description-content meeting-soul__description-content--dark-green'>
          <p className='meeting-soul__description'>
            {lang === 'en'
              ? 'We were happy to discover that Saturday groups contributed to recovering from the war trauma and helped our participants in many ways: to build resilience, cope with stressful situations and events better, re-claim control over their lives and take responsibility for themselves. This project helped women to return to life amidst the war and to master the methods of psychological self-regulation.'
              : 'Групи по суботам сприяли відновленню після травми війни та стійкості до стресових подій, поверненню контроля над своїм життям та взяття відповідальності на себе. Даний проект допоміг жінкам повернутись до життя серед війни та опанувати методики психологічного саморегулювання.'}
          </p>
        </div>
      </div>
    </section>
  );
};
