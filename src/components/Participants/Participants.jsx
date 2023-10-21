import './Participants.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ageDiagram from '/images/about/about--age-graph.png';
import ukraineMap from '/images/about/about--ukraine-map.png';
import europeMap from '/images/about/about--europe-map.png';

export const Participants = () => (
  <section className='page__section section participants'>
    <div className='container container--geo'>
      <h2 className='section__title'>Participants</h2>

      <p className='section__description'>
        Participants filled a registration form, which allowed us to get to know
        each person better. The war forced many people to leave their homes, so
        participants joined our programme from all over the world and Ukraine.
        In terms of the proportion, 29% are outside Ukraine and are distributed
        across Europe and the world, and 71% are in Ukraine
      </p>

      <Row>
        <Col xs={12} sm={7} className='participants__image'>
            <img
              src={ukraineMap}
              alt='Ukraine demographics'
              className='participants__image--ukraine-map'
            />
        </Col>
        <Col xs={12} sm={5} className='participants__image'>
            <img
              src={europeMap}
              alt='Europe demographics'
              className=' participants__image--europe-map'
            />
          </Col>
      </Row>

      <h3 className='section__subtitle'>AGE STRUCTURE</h3>

      <Row>
        <Col xs={12} sm={6}>
          <ul className='participants__list'>
            <li className='participants__list-item'>
              47% - women aged 36 - 50 y.o.
            </li>
            <li className='participants__list-item'>
              up to 20% - women under 35 y.o.
            </li>
            <li className='participants__list-item'>13% - women aged 50+</li>
          </ul>
        </Col>
        <Col xs={12} sm={6}>
          <div className='participants__image'>
            <img
              src={ageDiagram}
              alt='Age chart'
              className='participants__image--age-graph'
            />
          </div>
        </Col>
      </Row>
    </div>
  </section>
);
