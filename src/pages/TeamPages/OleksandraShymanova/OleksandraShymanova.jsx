import OleksandraShymanovaPhoto from '/images/team/ashymanova-mobile.png';

export const OleksandraShymanova = () => {
  return (
    <section className='page__section page__section--therapist section team__page therapist'>
      <div className='therapist__header-background'>
        <div className='container'>
          <div className='therapist__header'>
            <div className='therapist__description'>
              <h1 className='therapist__name'>Oleksandra Shymanova</h1>
              <div className='therapist__role'>
                ANALYTICALLY ORIENTED PSYCHOLOGIST
              </div>
              <div className='therapist__role therapist__role--last-child'>
                FOUNDER OF THE “SOUL” PSYCHOLOGY CENTER
              </div>

              <a href='#' className='therapist__book-button'>
                Book a consultation
              </a>
            </div>

            <div className='therapist__image-container'>
              <img
                src={OleksandraShymanovaPhoto}
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
            Psychologist, psychotherapist specialized in Jungian analysis, more
            than 10 years of consulting experience
          </div>

          <h4 className='therapist__about-subtitle'>Education</h4>

          <div className='therapist__about-description'>
            Two higher educations - MA in Psychology, MA in International
            Relations.
          </div>

          <h4 className='therapist__about-subtitle'>Experience</h4>

          <div className='therapist__about-description'>
            More than 5,000 hours of practical psychotherapeutic help
            <br />
            Run individual and group therapy sessions
          </div>

          <div className='therapist__about-description'>
            In my work, I use the following methods:
            <ul className='therapist__list'>
              <li className='therapist__list-item'>
                Jungian analysis</li>
              <li className='therapist__list-item'>
                Body-oriented therapy</li>
              <li className='therapist__list-item'>
                Procedural model</li>
              <li className='therapist__list-item'>
                Systemic family constellations
              </li>
              <li className='therapist__list-item'>Gestalt therapy</li>
            </ul>
          </div>

          <div className='therapist__about-description'>
            More than 5,000 hours of practical psychotherapeutic help
          </div>

          <h4 className='therapist__about-subtitle'>
            Requests I work with:
          </h4>
          <div className='therapist__about-description'>
            <ul className='therapist__list'>
              <li className='therapist__list-item'>
                Dissatisfaction with the quality of life, desire and intention
                to be happy
              </li>
              <li className='therapist__list-item'>
                traumatic events and their consequences
              </li>
              <li className='therapist__list-item'>
                “everything is wrong and everything goes wrong and i don&apos;t
                understand why” - we analyze the causes and consequences, and
                learn to do things differently
              </li>
              <li className='therapist__list-item'>
                difficult, unpleasant, complicated relationships with loved
                ones, emotional “swings”, feelings of “loneliness”, regardless
                of whether you are in relationships or not, feeling of emptiness
                or, on the contrary, “flooding” with worries
              </li>
              <li className='therapist__list-item'>
                feeling of senselessness and purposelessness of existence, lack
                of fulfillment in personal and professional life, general
                pointlessness of everything that happens or vice versa - I do,
                do, do a lot and very efficiently, but there is no satisfaction
                and tranquility, a feeling of an eternal race, and, exhaustion
              </li>
              <li className='therapist__list-item'>
                lack of truly close, healthy, effective and developing
                relationships - with relatives, loved ones, friends, colleagues,
                acquaintances, and ultimately with yourself
              </li>
              <li className='therapist__list-item'>
                you repeatedly make the same mistakes, the feeling of a vicious
                circle and repetition of wrong actions
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
