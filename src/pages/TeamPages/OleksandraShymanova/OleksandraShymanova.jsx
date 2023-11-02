import OleksandraShymanovaPhoto from '/images/team/ashymanova-mobile.png';

export const OleksandraShymanova = () => {
  return (
    <section className='page__section page__section--therapist section team__page therapist'>
          <div className='container'>
        <div className='therapist__header'>
          <div className='therapist__description'>
            <h1 className='therapist__name'>Oleksandra Shymanova</h1>
            <div className='therapist__role'>
              ANALYTICALLY ORIENTED PSYCHOLOGIST
            </div>
            <div className='therapist__role'>
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
    </section>
  );
};
