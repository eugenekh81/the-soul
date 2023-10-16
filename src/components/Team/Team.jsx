import Carousel from 'react-bootstrap/Carousel';
import './Team.scss';
import AlexandraShymanova from '/images/team/ashymanova-mobile.png';
import MariyaVynnytska from '/images/team/mvynnytska-mobile.png';
import IrynaRoenko from '/images/team/iroenko-mobile.png';
import MarynaYakhno from '/images/team/myakhno-mobile.png';
export const Team = () => {
  return (
    <section className='page__section section team'>
      <div className='container'>
        <h2 className='section__title'>Team </h2>

        <div className='team__list'>
          <Carousel>
            <Carousel.Item interval={3000}>
              <div className='team__person person'>
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={AlexandraShymanova}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>Alexandra Shymanova</h3>

                <p className='person__role'>
                  Psychologist
                  <br />
                  co-founder of The Soul Center
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='team__person person'>
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={MariyaVynnytska}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>Mariya Vynnytska</h3>

                <p className='person__role'>
                  Psychologist
                  <br />
                  co-founder of The Soul Center
                </p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='team__person person'>
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={IrynaRoenko}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>Iryna Roenko</h3>

                <p className='person__role'>Psychologist</p>
              </div>
            </Carousel.Item>
            <Carousel.Item>
              <div className='team__person person'>
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={MarynaYakhno}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>Maryna Yakhno</h3>

                <p className='person__role'>Psychologist</p>
              </div>
            </Carousel.Item>
          </Carousel>
        </div>
      </div>
    </section>
  );
};
