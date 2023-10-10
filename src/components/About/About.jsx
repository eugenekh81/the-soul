import './About.scss';

export const About = () => {
  return (
    <section className='page__section section about'>
      <div className='container'>
        <p className='about__description'>
          Ukrainian circle was created for Ukrainians who were affected by the
          war to help them recover and restore their mental health, improve
          their well-being and empower them with psychological self-help skills
        </p>

        <h2 className='section__title'>Key concepts</h2>

        <ul className='about__list'>
          <li className='about__list-item'>
            Ukrainian Architectonics
            <br/>
            History, arts and culture, values and identity
          </li>
          <li className='about__list-item'>
            Post-traumatic growth
            <br/>
            Theory and best practices
          </li>
          <li className='about__list-item'>
            Cross-generational trauma prevention
            <br/>
            Possibilities of new wars in the future
          </li>
          <li className='about__list-item'>
            Fostering unity
            <br/>
            Overcoming the schism in Ukrainian society
          </li>
        </ul>

        <h2 className='about__title'>Demographics</h2>

        <p className='about__description'>
          Participants filled a registration form, which allowed us to get to know each person better.
          The war forced many people to leave their homes, so participants joined our programme from all over the world and Ukraine. In terms of the proportion, 29% are outside Ukraine and are distributed across Europe and the world, and 71% are in Ukraine
        </p>

        <div className="about__image about__image--ukraine-map"></div>
        <div className="about__image about__image--europe-map"></div>

        <h3 className="about__subtitle">
          AGE STRUCTURE
        </h3>

        <ul className="about__list">
          <li className="about__list-item">
            47% - women aged 36 - 50 y.o.
          </li>
          <li className="about__list-item">
            up to 20% - women under 35 y.o.
          </li>
          <li className="about__list-item">
            13% - women aged 50+
          </li>
        </ul>

        <div className="about__image about__image--age-graph"></div>

        <h3 className="about__subtitle">
          PSYCHOLOGICAL STATE OF THE PARTICIPANTS
        </h3>

        <p className="about__description">
          All the participants are people  affected by war. They have lost their mental health and are prone to serious conditions. We suggested that they indicate in the registration form what worries them the most. And here are the results:
        </p>

        <div className="about__image">
          <img className="about__image--conditions-graph" src="/images/about/about--diagram--mobile.png" alt="" />
        </div>

        <ul className="about__list">
          <li className="about__list-item">
            Severe physical conditions: insomnia, anxiety, panic attacks, loss of appetite, excessive appetite, palpitations, deterioration of health
          </li>
          <li className="about__list-item">
            Distortion of mental balance: self-doubt, doubts about one&apos;s abilities, loss of inner support, feeling sad and helpless, self-criticism
          </li>
          <li className="about__list-item">
            Problems in personal relationships: loneliness, worries, conflicts, divorce, betrayal, lack of relationships
          </li>
          <li className="about__list-item">
            Problems with work and income: loss of confidence in one&apos;s skills and abilities, loss of business or job, lack of fulfillment, lack of motivation, no ability to earn, conflicts in the team or with management
          </li>
          <li className="about__list-item">
            Self-identity problems: loss of self and meaning, re-evaluation of values and goals, loss of desires, confusion about &quot;Who am I?&quot;, feeling of isolation
          </li>
          <li className="about__list-item">
            Mental conditions: apathy, powerlessness, depression, lack of interest in life, outbursts of anger, irritability, anxiety, excessive control
          </li>
        </ul>

      <h2 className="about__subtitle">
        Participants described their well-being in their own words, in their own words about feelings, experiences, emotions and mental health
      </h2>

      <div className="about__image about__image--girl-sad"></div>

      <h2 className="about__subtitle">
        It was important to determine what people want at this stage, so each participant answered the following question:
        <br /><br />
        What changes would you like to see in your life after completing the Psychological Recovery Programme?
      </h2>

      <div className="about__image about__image--girl-happy"></div>

      </div>
    </section>
  );
};
