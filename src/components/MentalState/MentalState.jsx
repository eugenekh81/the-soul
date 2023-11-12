import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import './MentalState.scss';

import diagramMobile from '/images/about/about--diagram--mobile.png';
import womanSad from '/images/about/about--girl-sad.png';
import womanHappy from '/images/about/about--girl-happy.png';

export const MentalState = () => (
  <section className='page__section section mental-state'>
    <div className='container'>
      <h3 className='section__subtitle'>MENTAL STATE OF THE PARTICIPANTS</h3>

      <p className='section__description participants__description'>
        All the participants are people affected by war. They have lost their
        mental health and are prone to serious conditions. We suggested that
        they indicate in the registration form what worries them the most.
        <br/>
        <br/>
        <strong>And here are the results:</strong>
      </p>
    </div>
      <Row className='mental-state__content'>
        <Col sm={12} md={8} lg={4} className='mental-state__image'>
          <img
            className='mental-state__image--conditions-graph'
            src={diagramMobile}
            alt='Conditions chart'
          />
        </Col>
        <Col className='mental-state__list-container' sm={12} md={12} lg={8}>
          <ul className='mental-state__list'>
            <li className='mental-state__list-item'>
              <span className='mental-state__list-item--state'>13%</span>
              Severe physical conditions: insomnia, anxiety, panic attacks, loss
              of appetite, excessive appetite, palpitations, deterioration of
              health
            </li>
            <li className='mental-state__list-item'>
              <span className='mental-state__list-item--state'>24%</span>
              Distortion of mental balance: self-doubt, doubts mental-state
              one&apos;s abilities, loss of inner support, feeling sad and
              helpless, self-criticism
            </li>
            <li className='mental-state__list-item'>
              <span className='mental-state__list-item--state'>12%</span>
              Problems in personal relationships: loneliness, worries,
              conflicts, divorce, betrayal, lack of relationships
            </li>
            <li className='mental-state__list-item'>
              <span className='mental-state__list-item--state'>17%</span>
              Problems with work and income: loss of confidence in one&apos;s
              skills and abilities, loss of business or job, lack of
              fulfillment, lack of motivation, no ability to earn, conflicts in
              the team or with management
            </li>
            <li className='mental-state__list-item'>
              <span className='mental-state__list-item--state'>16%</span>
              Self-identity problems: loss of self and meaning, re-evaluation of
              values and goals, loss of desires, confusion about &quot;Who am
              I?&quot;, feeling of isolation
            </li>
            <li className='mental-state__list-item'>
              <span className='mental-state__list-item--state'>19%</span>
              Mental conditions: apathy, powerlessness, depression, lack of
              interest in life, outbursts of anger, irritability, anxiety,
              excessive control
            </li>
          </ul>
        </Col>
      </Row>

<div className="mental-state__container">
      <Row className='mental-state__girls-images mental-state__girls-images--swap-images'>
        <Col
          xs={12}
          sm={12}
          md={12}
          lg={5}
          className='mental-state__item mental-state__item-description'
        >
          Participants described their well-being in their own words - their
          feelings, experiences, emotions and mental health
        </Col>

        <Col
          xs={12}
          sm={12}
          md={12}
          lg={7}
          className='mental-state__item mental-state__image'
        >
          <img
            src={womanSad}
            alt='mental state before the program'
            className='mental-state__image--girl-sad'
          />
        </Col>
      </Row>
      <Row>
        <p className='mental-state__description--middle'>
          It was important to determine what people want at this stage, so each
          participant answered the following question:
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
            Which changes would you like to see in your life after completing
            the mental Recovery Programme?
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
            src={womanHappy}
            alt='mental state after the program'
            className='mental-state__image--girl-happy'
          />
        </Col>
      </Row>
</div>

  </section>
);
