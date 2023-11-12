import IrynaRoyenkoPhoto from '/images/team/iroyenko-mobile.png';

export const IrynaRoyenko = () => {
  const aboutDescription = (
    <>
      Psychologist, game practitioner, a leader of the transformational game {' '}
      <b>“Women Who Run With the Wolves”</b>
    </>
  );

  return (
    <section className='page__section page__section--therapist section team__page therapist'>
      <div className='therapist__header-background'>
        <div className='container'>
          <div className='therapist__header'>
            <div className='therapist__description'>
              <h1 className='therapist__name'>Iryna Royenko</h1>
              <div className='therapist__role therapist__role--last-child'>
                PSYCHOLOGIST
              </div>

              <a href='#' className='therapist__book-button'>
                Book a consultation
              </a>
            </div>

            <div className='therapist__image-container'>
              <img
                src={IrynaRoyenkoPhoto}
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

          <div className='therapist__about-description'>{aboutDescription}</div>

          <h4 className='therapist__about-subtitle'>Education</h4>

          <div className='therapist__about-description'>
            First - International Relations
            <br />
            Second - Psychology
          </div>

          <h4 className='therapist__about-subtitle'>Experience</h4>

          <div className='therapist__about-description'>
            150+ hours of personal therapy
            <br />
            50+ hours of supervision
          </div>

          <div className='therapist__about-description'>
            Run individual and group therapy sessions
          </div>

          <div className='therapist__about-description'>
            In my work, I use the following methods:
            <ul className='therapist__list'>
              <li className='therapist__list-item'>Psychodrama</li>
              <li className='therapist__list-item'>
                Eye movement desensitization and reprocessing (EMDR)
              </li>
              <li className='therapist__list-item'>
                Metaphorical and associative cards
              </li>
              <li className='therapist__list-item'>
                host of the transformationl game{' '}
                <b>“Women Who Run With the Wolves”</b>
              </li>
            </ul>
          </div>

          <h4 className='therapist__about-subtitle'>Requests I work with:</h4>
          <div className='therapist__about-description'>
            <ul className='therapist__list' style={{ listStyle: 'none' }}>
              <li className='therapist__list-item'>
                Relationships:
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    difficulties in relationships (s/he does not hear me,
                    emotional instability, when it feels “I can&apos;t do this
                    anymore”, or “I am doing everything for him/her, and he/she
                    does not appreciate”)
                  </li>
                  <li className='therapist__list-item'>
                    Breakup up/divorce, loss of loved ones, processing grief
                    (based my own experience)
                  </li>
                  <li className='therapist__list-item'>
                    Loneliness in relationships, emotional alienation and
                    remoteness
                  </li>
                </ul>
              </li>
              <li className='therapist__list-item'>
                In search for oneself:
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    Lack of self-realization
                  </li>
                  <li className='therapist__list-item'>Self-doubt</li>
                  <li className='therapist__list-item'>
                    Self-esteem improvement
                  </li>
                </ul>
              </li>
              <li className='therapist__list-item'>
                Emotional and physical manifestations:
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>Fears</li>
                  <li className='therapist__list-item'>Panic attacks</li>
                  <li className='therapist__list-item'>Apathy</li>
                  <li className='therapist__list-item'>Life on autopilot</li>
                  <li className='therapist__list-item'>Powerlessness</li>
                </ul>
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
