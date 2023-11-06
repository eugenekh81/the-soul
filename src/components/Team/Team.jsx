import Carousel from 'react-bootstrap/Carousel';
import './Team.scss';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

import OleksandraShymanova from '/images/team/ashymanova-mobile.png';
import MariyaVynnytska from '/images/team/mvynnytska-mobile.png';
import IrynaRoyenko from '/images/team/iroyenko-mobile.png';
import MarynaYakhno from '/images/team/myakhno-mobile.png';
import { NavLink } from 'react-router-dom';
export const Team = () => {
  return (
    <section className='page__section page__section--bgc-green section team'>
      <div className='container'>
        <h2 className='section__title'>Team </h2>

        <div className='team__list'>
          <Carousel className='team__carousel' variant='dark'>
            <Carousel.Item interval={3000}>
              <NavLink className='team__person person' to='/the-soul/en/team/oleksandra-shymanova'>
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={OleksandraShymanova}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>Olexandra Shymanova</h3>

                <p className='person__role'>
                  Psychologist
                  <br />
                  founder of The Soul Center
                </p>
              </NavLink>
            </Carousel.Item>
            <Carousel.Item>
              <NavLink className='team__person person' to='/the-soul/en/team/mariya-vynnytska'>
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
              </NavLink>
            </Carousel.Item>
            <Carousel.Item>
              <NavLink className='person' to='/the-soul/en/team/iryna-royenko'>
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={IrynaRoyenko}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>Iryna Royenko</h3>

                <p className='person__role'>Psychologist</p>
              </NavLink>
            </Carousel.Item>
            <Carousel.Item>
              <NavLink className='person' to='/the-soul/en/team/maryna-yakhno'>
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={MarynaYakhno}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>Maryna Yakhno</h3>

                <p className='person__role'>Psychologist</p>
              </NavLink>
            </Carousel.Item>
          </Carousel>
        </div>

        <Row className='team__list--desktop'>
              <Col sm={6} lg={3} className='team__person'>
                <NavLink className='person' to='/the-soul/en/team/oleksandra-shymanova'>
                  <div className='person__image-container'>
                    <img
                      className='person__image'
                      src={OleksandraShymanova}
                      alt='Team member'
                    />
                  </div>

                  <h3 className='person__name'>
                    Oleksandra Shymanova
                  </h3>

                  <p className='person__role'>
                    Psychologist
                    <br />
                    founder
                  </p>
                </NavLink>
              </Col>
              <Col sm={6} lg={3} className='team__person'>
                <NavLink className='person' to='/the-soul/en/team/mariya-vynnytska'>
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
                  co-founder
                </p>
                </NavLink>
              </Col>
              <Col sm={6} lg={3} className='team__person'>
              <NavLink className='person' to='/the-soul/en/team/iryna-royenko'>
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={IrynaRoyenko}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>Iryna Royenko</h3>

                <p className='person__role'>Psychologist</p>
              </NavLink>
              </Col>
              <Col sm={6} lg={3}  className='team__person'>
              <NavLink className='person' to='/the-soul/en/team/maryna-yakhno'>
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={MarynaYakhno}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>Maryna Yakhno</h3>

                <p className='person__role'>Psychologist</p>
                </NavLink>
              </Col>
        </Row>
      </div>
    </section>
  );
};
