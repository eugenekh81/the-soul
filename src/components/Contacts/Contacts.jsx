import './Contacts.scss';

export const Contacts = () => {
  return (
    <section className='section contacts'>
      <div className='container'>
        <h2 className='section__title'>Contacts</h2>

        <div className='contacts__content'>
          <a
            href='tel:+38(067)4451284'
            className='contacts__contact contacts__phone'
          >
            +38 (067) 445 1284
          </a>

          <a
            href='mailto:psysoulcenter@gmail.com'
            className='contacts__contact contacts__email'
          >
            psysoulcenter@gmail.com
          </a>

          <address className='contacts__address-container'>
            <a
              href='https://maps.app.goo.gl/2KJrcCEBJxVKcxSZ9'
              className='contacts__contact contacts__address'
            >
              39 Antonovycha str, apt.22, Kyiv, Ukraine
            </a>
          </address>
        </div>

        <div className="contacts__subscribe subscribe">
          <div className="subscribe__title">
            Subscribe to our newsletter
          </div>
          <form >

          <input
            className="subscribe__item subscribe__name"
            type="text"
            placeholder='Name'
          />
          <input
            className="subscribe__item subscribe__email"
            type="email"
            placeholder='Email'
          />
          <input
            className="subscribe__item subscribe__tel"
            type="tel"
            placeholder='Phone number'
          />
          <button type='submit' className='subscribe__button'>Subscribe</button>
          </form>
        </div>
        <div className="contacts__social social">
          <div className="social__title">
            Follow us on socials
          </div>
          <div className="social__icons">
          <a href="#" className="social__icon social__icon--fb">
          <svg xmlns="http://www.w3.org/2000/svg" version="1.1" viewBox="0 0 24 24">
            <path  d="M21.984 12q0-2.063-0.773-3.867t-2.156-3.188-3.188-2.156-3.867-0.773-3.867 0.773-3.188 2.156-2.156 3.188-0.773 3.867q0 1.828 0.586 3.445t1.688 2.93 2.555 2.203 3.141 1.219v-6.797h-1.969v-3h1.969v-2.484q0-0.984 0.492-1.781t1.266-1.266 1.758-0.469h2.484v3h-1.969q-0.422 0-0.727 0.305t-0.305 0.68v2.016h3v3h-3v6.938q1.922-0.188 3.563-1.031t2.859-2.18 1.898-3.047 0.68-3.68z"/>
</svg>
          </a>
          <a className="social__icon social__icon--ig">
            <svg>
              <use href="/images/icons/social-icons.svg#instagram"></use>
            </svg>
          </a>
          <a className="social__icon social__icon--tg">
          <svg>
            <use href="/images/icons/social-icons.svg#telegram"></use>
            </svg>
          </a>
          <a className="social__icon social__icon--yt">
          <svg>
              <use href="/images/icons/social-icons.svg#youtube"></use>
            </svg>
          </a>
          </div>
        </div>

        <div className="contacts__map">
          <iframe
              src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d970.4634719594828!2d30.513038985310693!3d50.433281529530994!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x40d4cee2d347bc75%3A0xb338869328d0e562!2sAntonovycha%20St%2C%2039%2C%20Kyiv%2C%2002000!5e0!3m2!1sen!2sua!4v1696716746302!5m2!1sen!2sua'
              allowfullscreen=''
              loading='lazy'
              referrerPolicy='no-referrer-when-downgrade'
            ></iframe>
        </div>
      </div>
    </section>
  );
};
