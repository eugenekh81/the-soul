import './About.scss';

export const About = () => {
  return (
    <section className='about'>
      <div className='container'>
        <p className='about__description'>
          Ukrainian circle was created for Ukrainians who were affected by the
          war to help them recover and restore their mental health, improve
          their well-being and empower them with psychological self-help skills
        </p>

        <h2 className='about__title'>Key concepts</h2>

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
      </div>
    </section>
  );
};
