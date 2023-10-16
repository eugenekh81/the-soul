import './Partners.scss';
import consciousness from '/images/partners/consciousness-centered.png';
import katieEastman from '/images/partners/Katie_Eastman-centered.png';
import renovare from '/images/partners/renovare.png';
import EKR from '/images/partners/EKR.png';
import Carousel from 'react-bootstrap/Carousel';

export const Partners = () => {
  return (
    <section className='page__section section partners'>
      <div className='container'>
        <h2 className='section__title'>Partners</h2>
        <div className='partners-list'>
          <Carousel>
            <Carousel.Item interval={3000}>
              <a
                href='https://www.wca.earth/'
                className='partner__link'
                target='_blank'
                rel='noreferrer'
              >
                <img src={consciousness} alt='Consciousness' />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a
                href='https://drkatieeastman.com/about'
                className='partner__link'
                target='_blank'
                rel='noreferrer'
              >
                <img src={katieEastman} alt='Katie Eastman' />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a
                href='#'
                className='partners__link'
                target='_blank'
                rel='noreferrer'
              >
                <img src={renovare} alt='Renovare' />
              </a>
            </Carousel.Item>
            <Carousel.Item>
              <a
                href='https://www.ekrfoundation.org/'
                className='partners__link renovare'
                target='_blank'
                rel='noreferrer'
              >
                <img src={EKR} alt='' />
              </a>
            </Carousel.Item>
          </Carousel>
        </div>
        <button type='submit' className='subscribe__button'>
          Donate
        </button>
      </div>
    </section>
  );
};
