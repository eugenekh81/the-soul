import MariyaVynnytskaPhoto from '/images/team/mvynnytska-mobile.png';

export const MariyaVynnytska = () => {
  return (
    <section className='page__section page__section--therapist section team__page therapist'>
      <div className='therapist__header-background'>
        <div className='container'>
          <div className='therapist__header'>
            <div className='therapist__description'>
              <h1 className='therapist__name'>Mariya Vynntska</h1>
              <div className='therapist__role'>PSYCHOLOGIST</div>
              <div className='therapist__role therapist__role--last-child'>
                CO-FOUNDER OF “THE SOUL” PSYCHOLOGY CENTER
              </div>

              <a href='#' className='therapist__book-button'>
                Book a consultation
              </a>
            </div>

            <div className='therapist__image-container'>
              <img
                src={MariyaVynnytskaPhoto}
                alt='Therapist'
                className='therapist__photo'
              />
            </div>
          </div>
        </div>
      </div>

      <div className='therapist__about'>
        <div className='container'>
          <h3 className='therapist__about-title'>Background</h3>

          <div className='therapist__about-description'>
            Psychoanalyst, business coach, systemic family therapist
          </div>

          <h4 className='therapist__about-subtitle'>Education</h4>

          <div className='therapist__about-description'>
            First - Philology, International Journalism and Law
            <br />
            Second - Clinical Psychoanalysis
          </div>

          <h4 className='therapist__about-subtitle'>Experience</h4>

          <div className='therapist__about-description'>
            More than 1,000 hours of personal therapy
            <br />
            More than 100 constellations for clients
            <br />
            Conducting consultations and leading groups since 2012: in
            Ukrainian, Russian and English
            <br />
            more than 15 years of experience in international projects and
            management
            <br />
            conducting individual counseling, trainings and seminars, conference
            talks
          </div>

          <div className='therapist__about-description'>
            Run individual and group therapy sessions
          </div>

          <div className='therapist__about-description'>
            In my work, I use the following methods:
            <ul className='therapist__list'>
              <li className='therapist__list-item'>Psychoanalysis</li>
              <li className='therapist__list-item'>Systemic family therapy</li>
              <li className='therapist__list-item'>
                Organizational and business psychology
              </li>
              <li className='therapist__list-item'>Coaching tools</li>
            </ul>
          </div>

          <h4 className='therapist__about-subtitle'>Requests I work with:</h4>
          <div className='therapist__about-description'>
            <ul className='therapist__list'>
              <li className='therapist__list-item'>
                How to increase income and have better quality of life
              </li>
              <li className='therapist__list-item'>
                How to build fruitful relationships with others while working
                for someone or for yourself
              </li>
              <li className='therapist__list-item'>
                How to improve your existing business, better manage people,
                processes, projects and achieve your goals
              </li>
              <li className='therapist__list-item'>
                How to find your occupation and create your dream project
              </li>
              <li className='therapist__list-item'>
                How to resolve conflicts in a team, with subordinates, managers,
                partners
              </li>
              <li className='therapist__list-item'>
                How to increase your corporate career growth and develop your
                natural talents
              </li>
              <li className='therapist__list-item'>
                How to become happier at work, grow, get profit and satisfaction
              </li>
              <li className='therapist__list-item'>
                <b>Difficult period of life:</b> crisis, war, trauma,
                separation, relocation, changing or losing a job, lack of inner
                support, anxiety, fear of future
              </li>
              <li className='therapist__list-item'>
                <b>Relationships with others:</b> couple difficulties, repeated
                negative scenarios, conflicts, devaluation, resentment and anger
              </li>
              <li className='therapist__list-item'>
                <b>Painful feelings and states:</b> depression, apathy, despair,
                envy, irritability, anger, sadness, shame and guilt
              </li>
              <li className='therapist__list-item'>
                <b>Decisions and actions:</b> when the choice is necessary, help
                in finding energy for a change, building a vision for a certain
                period of life, a dream or a goal.
              </li>
              <li className='therapist__list-item'>
                <b>Relationship with yourself:</b> rejection of yourself and your body, low self-esteem, sleep disorders, eating disorders, lack of satisfaction and joy in life, self-targeted aggression and disappointment
              </li>
              <li className='therapist__list-item'>
                <b>Adaptation in a new country</b> in the process of migration, war or marriage with a foreigner
              </li>
            </ul>
          </div>

          <a href='#' className='therapist__book-button button--centered'>
            Book a consultation
          </a>
        </div>
      </div>
    </section>
  );
};
