import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './MentalState.scss';
import { mentalStateLegend } from '../../data/mentalStateLegend.js';
import diagramMobile from '/images/about/about--diagram--mobile.png';
import womanSadEn from '/images/about/about--girl-sad--en.png';
import womanHappyEn from '/images/about/about--girl-happy--en.png';
import womanSadUa from '/images/about/about--girl-sad--ua.png';
import womanHappyUa from '/images/about/about--girl-happy--ua.png';
import { MentalStateItem } from '../MentalStateItem/MentalStateItem';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider.jsx';

export const MentalState = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className='page__section section mental-state'>
      <div className='container'>
        <h3 className='section__subtitle'>
          {lang === 'en'
            ? 'MENTAL STATE OF THE PARTICIPANTS'
            : 'ПСИХОЛОГІЧНИЙ СТАН УЧАСНИКІВ'}
        </h3>

        <p className='section__description participants__description'>
          {lang === 'en'
            ? 'All the participants are people affected by war. They have lost their mental health and are prone to serious conditions. We suggested that they indicate in the registration form what worries them the most.'
            : "Всі учасники – люди, постраждали від війни. Вони втратили  психологічне здоров'я і схильні до травматичних станів. В реєстраційній формі вони вказали, що їх найбільше хвилює."}
        </p>
        <Row className='mental-state__content'>
          <Col sm={12} md={8} lg={5} className='mental-state__image'>
            <img
              className='mental-state__image--conditions-graph'
              src={diagramMobile}
              alt='Conditions chart'
            />
          </Col>
          <Col className='mental-state__list-container' sm={12} md={12} lg={7}>
            <ul className='mental-state__list'>
              {mentalStateLegend.map((item) => (
                <MentalStateItem key={item.id} {...item} />
              ))}
            </ul>
          </Col>
        </Row>
      </div>

      <div className='mental-state__girls-pictures'>
        <div className="container">
          <div className="mental-state__container">
        <Row className='mental-state__girls-images mental-state__girls-images--swap-images'>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={5}
            className='mental-state__item mental-state__item-description'
          >
            {lang === 'en'
              ? 'Participants described their well-being in their own words - their feelings, experiences, emotions and mental health'
              : 'Учасники своїми словами описували свій стан – почуття, переживання, емоції, думки та настрої.'}
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={7}
            className='mental-state__item mental-state__image'
          >
            <img
              src={lang === 'en' ? womanSadEn : womanSadUa}
              alt='mental state before the program'
              className='mental-state__image--girl-sad'
            />
          </Col>
        </Row>
        <Row>
          <p className='mental-state__description--middle'>
            {lang === 'en'
              ? 'It was important to determine what people want at this stage, so each participant answered the following question:'
              : 'Важливо було визначити, до чого люди прагнуть на цьому етапі, тому кожен учасник відповів на таке запитання:'}
          </p>
        </Row>
        <Row className='mental-state__girls-images'>
          <Col
            xs={12}
            sm={12}
            md={12}
            lg={5}
            className='mental-state__item mental-state__item-description mental-state__item-description--last'
          >
            <span className='menal-state__question'>
              {lang === 'en'
                ? 'Which changes would you like to see in your life after completing the mental Recovery Programme?'
                : 'Які зміни ви хотіли б побачити у своєму житті після проходження Програми психічного відновлення?'}
            </span>
          </Col>

          <Col
            xs={12}
            sm={12}
            md={12}
            lg={7}
            className='mental-state__item mental-state__image'
          >
            <img
              src={lang === 'en' ? womanHappyEn : womanHappyUa}
              alt='mental state after the program'
              className='mental-state__image--girl-happy'
            />
          </Col>
        </Row>
          </div>
        </div>
      </div>
    </section>
  );
};
