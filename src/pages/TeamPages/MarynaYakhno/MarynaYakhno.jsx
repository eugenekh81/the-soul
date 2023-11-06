import MarynaYakhnoPhoto from '/images/team/myakhno-mobile.png';

export const MarynaYakhno = () => {
  return (
    <section className='page__section page__section--therapist section team__page therapist'>
      <div className='therapist__header-background'>
        <div className='container'>
          <div className='therapist__header'>
            <div className='therapist__description'>
              <h1 className='therapist__name'>Maryna Yakhno</h1>
              <div className='therapist__role therapist__role--last-child'>
                PSYCHOLOGIST
              </div>

              <a href='#' className='therapist__book-button'>
                Book a consultation
              </a>
            </div>

            <div className='therapist__image-container'>
              <img
                src={MarynaYakhnoPhoto}
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
            Analytically oriented psychologist with 7+ years of work experience
          </div>

          <h4 className='therapist__about-subtitle'>Education</h4>

          <div className='therapist__about-description'>
            First - technical education (NTUU KPI)
            <br />
            Second - Psychology (KNU named after T. Shevchenko)
            <br />
            10+ years of training in psychodynamic approach and in Jungian analysis and psychotherapy
          </div>

          <h4 className='therapist__about-subtitle'>Experience</h4>

          <div className='therapist__about-description'>
            PTSD trainer
            <br />
            8+ years of personal therapy
            <br />
            Experience in working in public institutions “Clinic Friendly to Youth” at Kyiv City Skin and Venereal Hospital.
            <br />
            Additional experience in helping families in the process of divorce or in other crisis situations at the “City Children&apos;s Center” of the Kyiv City Children&apos;s Services.
            <br />
            Leader of self-development and self-discovery groups.
            <br />
            Co-author of the <b>“Style Therapy”</b> project.
          </div>

          <h4 className='therapist__about-subtitle'>Requests I work with:</h4>

          <div className='therapist__about-description'>
            <ul className='therapist__list' style={{ listStyle: 'none' }}>
              <li className='therapist__list-item'>
                War-time requests:
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                  Depression, lack of strength and energy, anxiety, fears, panic attacks
                  </li>
                  <li className='therapist__list-item'>
                  Difficulties in making decisions about the future (where to live, which work line to choose)
                  </li>
                  <li className='therapist__list-item'>
                  Conflicts in the family, feelings of guilt, anger, resentment towards loved ones
                  </li>
                  <li className='therapist__list-item'>
                  Parental counseling for children (fears, sleep disorders, aggressive behavior, self-blame, reluctance to communicate with anyone)
                  </li>
                </ul>
              </li>
              <li className='therapist__list-item'>
                Self-esteem and self-worth:
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    Self-criticizm and self-destructive behavior
                  </li>
                  <li className='therapist__list-item'>Self-doubt</li>
                  <li className='therapist__list-item'>
                    Inability to love and appreciate oneself
                  </li>
                  <li className='therapist__list-item'>
                    Excessive sensitivity to criticism, lack of self-worth
                  </li>
                </ul>
              </li>
              <li className='therapist__list-item'>
                Relationships:
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    Inability to find a romantic partner
                  </li>
                  <li className='therapist__list-item'>Self-doubt</li>
                  <li className='therapist__list-item'>
                    Inability to love and appreciate oneself
                  </li>
                  <li className='therapist__list-item'>
                    Inability to let go past partner / relationships
                  </li>
                  <li className='therapist__list-item'>
                    Fear of ending toxic relationships
                  </li>
                </ul>
              </li>
              <li className='therapist__list-item'>
                Search for meaning:
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    Search for one&apos;s purpose in life
                  </li>
                  <li className='therapist__list-item'>
                    Loneliness
                  </li>
                  <li className='therapist__list-item'>
                    Apathy
                  </li>
                  <li className='therapist__list-item'>
                    Depression
                  </li>
                 </ul>
              </li>
              <li className='therapist__list-item'>
                Underachievment and unfulfillment:
                <ul className='therapist__list'>
                  <li className='therapist__list-item'>
                    Not being needed
                  </li>
                  <li className='therapist__list-item'>
                    Absence of clear goals in life
                  </li>
                  <li className='therapist__list-item'>
                    Inability to adequately assess one&apos;s strong and weak qualities
                  </li>
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
