import { useLang } from '../../hooks/useLang';
import './Footer.scss';

export const Footer = () => {
  const lang = useLang();
  return (
    <footer className='page__section section footer'>
      <div className='container'>
        <div className='footer__content'>
          <div className='footer__links'>
            <div className='footer__title'>
              {lang === 'en' ? 'Contact Us' : 'Контакти'}
            </div>
            <a
              href='tel:+380996696437'
              className='footer__contact footer__phone'
            >
              +38 (099) 669 64 37
            </a>

            <a
              href='mailto:psysoulcenter@gmail.com'
              className='footer__contact footer__email'
            >
              psysoulcenter@gmail.com
            </a>

            <address className='footer__address-container'>
              <a
                href='https://maps.app.goo.gl/2KJrcCEBJxVKcxSZ9'
                className='footer__contact footer__address'
              >
                {lang === 'en' ? 'Kyiv, Ukraine' : 'Київ, Україна'}
              </a>
            </address>
          </div>

          <div className='footer__social social'>
            <div className='social__title'>
              {lang === 'en' ? 'Follow us' : 'Соцмережі'}
            </div>
            <div className='social__icons'>
              <a
                href='https://www.facebook.com/TheSoul.Psychology/'
                className='social__icon social__icon--fb'
                target='_blank'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  version='1.1'
                  viewBox='0 0 20 20'
                >
                  <path d='M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6S15.302,0.4,10,0.4z M12.274,7.034h-1.443  c-0.171,0-0.361,0.225-0.361,0.524V8.6h1.805l-0.273,1.486H10.47v4.461H8.767v-4.461H7.222V8.6h1.545V7.726  c0-1.254,0.87-2.273,2.064-2.273h1.443V7.034z' />
                </svg>
              </a>
              <a
                href='https://www.instagram.com/psysoulcenter/'
                target='_blank'
                className='social__icon social__icon--ig'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  version='1.1'
                  viewBox='0 0 20 20'
                >
                  <path d='M13 10c0 1.657-1.343 3-3 3s-3-1.343-3-3c0-0.171 0.018-0.338 0.049-0.5h-1.049v3.997c0 0.278 0.225 0.503 0.503 0.503h6.995c0.277 0 0.502-0.225 0.502-0.503v-3.997h-1.049c0.031 0.162 0.049 0.329 0.049 0.5zM10 12c1.104 0 2-0.896 2-2s-0.896-2-2-2-2 0.896-2 2 0.896 2 2 2zM12.4 7.9h1.199c0.166 0 0.301-0.135 0.301-0.3v-1.199c0-0.166-0.135-0.301-0.301-0.301h-1.199c-0.166 0-0.301 0.135-0.301 0.301v1.199c0.001 0.165 0.136 0.3 0.301 0.3zM10 0.4c-5.302 0-9.6 4.298-9.6 9.6s4.298 9.6 9.6 9.6c5.302 0 9.6-4.298 9.6-9.6s-4.298-9.6-9.6-9.6zM15 13.889c0 0.611-0.5 1.111-1.111 1.111h-7.778c-0.611 0-1.111-0.5-1.111-1.111v-7.778c0-0.611 0.5-1.111 1.111-1.111h7.778c0.611 0 1.111 0.5 1.111 1.111v7.778z' />
                </svg>
              </a>
              <a
                href='https://t.me/Psysoulcenter'
                target='_blank'
                className='social__icon social__icon--tg'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  version='1.1'
                  viewBox='0 0 29 29'
                >
                  <path d='M18.578 20.422l2.297-10.828c0.203-0.953-0.344-1.328-0.969-1.094l-13.5 5.203c-0.922 0.359-0.906 0.875-0.156 1.109l3.453 1.078 8.016-5.047c0.375-0.25 0.719-0.109 0.438 0.141l-6.484 5.859-0.25 3.563c0.359 0 0.516-0.156 0.703-0.344l1.687-1.625 3.5 2.578c0.641 0.359 1.094 0.172 1.266-0.594zM28 14c0 7.734-6.266 14-14 14s-14-6.266-14-14 6.266-14 14-14 14 6.266 14 14z' />
                </svg>
              </a>
              <a
                href='https://www.youtube.com/@thesoulpsychologycenter/videos'
                target='_blank'
                className='social__icon social__icon--yt'
                rel='noreferrer'
              >
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  xmlnsXlink='http://www.w3.org/1999/xlink'
                  version='1.1'
                  id='Youtube_w_x2F__circle'
                  x='0px'
                  y='0px'
                  viewBox='0 0 20 20'
                  enableBackground='new 0 0 20 20'
                  xmlSpace='preserve'
                >
                  <path d='M11.603,9.833L9.357,8.785C9.161,8.694,9,8.796,9,9.013v1.974c0,0.217,0.161,0.319,0.357,0.228l2.245-1.048  C11.799,10.075,11.799,9.925,11.603,9.833z M10,0.4c-5.302,0-9.6,4.298-9.6,9.6s4.298,9.6,9.6,9.6s9.6-4.298,9.6-9.6  S15.302,0.4,10,0.4z M10,13.9c-4.914,0-5-0.443-5-3.9s0.086-3.9,5-3.9s5,0.443,5,3.9S14.914,13.9,10,13.9z' />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
