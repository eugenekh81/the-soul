import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import './YellowBlue.scss';
import { Hero } from './Hero.jsx';
import { NavLink } from 'react-router-dom';

export const YellowBlue = () => {
  const { lang } = useContext(LangContext);

  return (
    <div className='yellow-blue'>
      <Hero />

      <section className='yellow-blue__information page__section section reveal'>
        <div className='container'>
          <div className='yellow-blue__information-container'>
            <p className='yellow-blue__text-item'>
              {lang === 'en'
                ? 'We are honored to invite you to an online event called Yellow Blue!'
                : 'Маємо честь запросити вас на онлайн подію під назвою Yellow Blue!'}
            </p>
            <p className='yellow-blue__text-item'>
              {lang === 'en' ? 'Why Yellow Blue?' : 'Чому Yellow Blue?'}
            </p>
            <p className='yellow-blue__text-item'>
              {lang === 'en'
                ? 'As you may know, the Ukrainian flag is yellow and blue🇺🇦, yet this is only one part of the story. It appears also that the pronunciation of the English words “yellow-blue” together sounds very similar to the Ukrainian phrase “Ya liubliu” which means “I LOVE YOU”.'
                : 'Як відомо, український прапор жовто-блакитний, але це лише частина історії. Цікаво, що вимова англійських слів «Yellow Blue» разом звучить дуже схоже на українську фразу «Ya liubliu», що означає «Я ТЕБЕ ЛЮБЛЮ».'}
            </p>
            <p className='yellow-blue__text-item'>
              {lang === 'en'
                ? 'Since the beginning of the war, our team of the Ukrainian NGO Psychology Center THE SOUL has been providing free mental health support to many people affected by the war atrocities. We run workshops and individual sessions. In 2023, we launched an online mental health recovery program called '
                : 'З початку війни наша команда надає безкоштовну психологічну підтримку людям, які страждають від впливу руйнівних дій. Ми проводимо майстер-класи та індивідуальні заняття, терапевтичні групи і консультації. У 2023 році ми запустили онлайн-програму відновлення психічного здоров’я '}
              {
                <NavLink to={`/${lang}/projects/ukrainian-circle`}>
                  {lang === 'en' ? '"UKRAINIAN CIRCLE"' : '«УКРАЇНСЬКЕ КОЛО»'}
                </NavLink>
              }
              {lang === 'en'
                ? ', which impacted the lives of more than 200 people and families. All our work became possible thanks to the compassion and love that we received from many across the globe.'
                : ', яка вплинула на життя понад 200 людей та їх родини. Уся наша робота стала можливою завдяки підтримці та любові, які ми отримували від багатьох людей зі всього світу.'}
            </p>
            <p className='yellow-blue__text-item'>
              {lang === 'en'
                ? 'So for us, this event is to celebrate love for Ukraine on the one hand, and compassion across borders, on the other one. It is also about the love for the soul, an invisible yet very precious part we all have.'
                : 'Тож для нас ця подія має відзначити любов до України, з одного боку, та емпатію і людяність , яке не має меж і кордонів, - з іншого. Цей захід також про любов до душі - невидимої, але дуже дорогоцінної частини, яка є у всіх нас і кожного.'}
            </p>
            <p className='yellow-blue__text-item'>
              {lang === 'en'
                ? 'Please join us for an informal session to share some stories of loss and growth, despair and hope. This is a 2-hour event where you can dive deeper into the very fabric of Ukrainian society, culture, and resilience. As mental health practitioners, we will be sharing our work but first and most of all, we will be celebrating the stories of the people we serve and the strength of a global community that can move mountains even when things seem impossible.'
                : 'Будь ласка, приєднуйтесь до нас на неформальну зустріч, щоб поділитися історіями втрат та надбання, відчаю та надії, любові та віри. Це 2-годинний захід, де ви зможете глибше зануритися в сам дух українського суспільства, його культури та стійкості. Як фахівці із психічного здоров’я, ми будемо ділитися своєю роботою, але перш за все - ми будемо визначати історії людей, для яких ми працюємо, і силу глобальної спільноти, яка може зрушити гори, навіть коли все здається неможливим.'}
            </p>
            <p className='yellow-blue__text-item'>
              {lang === 'en'
                ? 'We believe that our experience can be used by other countries in humanitarian crises, as the models we tested are flexible and scalable. We hope to have the opportunity to both roll out our programs and contribute to the international development world through sharing our lessons.'
                : 'Ми віримо, що наш досвід може бути корисний іншим країнам під час гуманітарної кризи, оскільки моделі, які ми тестували, є гнучкі та можуть масштабуватись. Ми сподіваємося, що матимемо можливість й надалі втілювати наші програми і зробити свій внесок у міжнародний світ, поділившись тим, що ми пройшли.'}
            </p>
            <p className='yellow-blue__text-item'>
              {lang === 'en'
                ? 'If you have a heart for Ukraine and are interested in mental health, please join us for this pre-Christmas storytelling session.'
                : 'Якщо ви любите Україну та/або вас цікавить психічне здоров’я, будь ласка, приєднуйтесь до нас на цю передріздвяну зустріч.'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
