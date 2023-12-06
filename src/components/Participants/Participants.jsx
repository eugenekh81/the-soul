import './Participants.scss';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import ageDiagram from '/images/about/about--age-graph.png';
import ukraineMap from '/images/about/about--ukraine-map.png';
import europeMap from '/images/about/about--europe-map.png';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const Participants = () => {
  const lang = useLang();

  return (
    <section className='page__section section participants'>
      <div className='container container--geo'>
        <h2 className='section__title'>
          {lang === 'en' ? 'Participants' : 'Учасники'}
        </h2>

        <div className='participants__content'>
          <p className='section__description participants__description'>
            {lang === 'en' ? (
              <>
                Participants filled a registration form, which allowed us to get
                to know each person better. The war forced many people to leave
                their homes, so participants joined our programme from all over
                the world and Ukraine - 29% are outside Ukraine and are
                distributed across Europe and the world, and 71% are in Ukraine
              </>
            ) : (
              <>
                При реєстрації учасники заповнювали форму, що дозволило нам
                ближче познайомитися з кожною людиною. Війна змусила багатьох
                покинути свої домівки, тому до нашої програми приєдналися
                учасники з усього світу та України - 29% знаходяться за межами
                України та розподілені по Європі та світу, а 71% – в Україні.
              </>
            )}
          </p>
          <div className='participants__image participants__image--ukraine-map'>
            <img src={ukraineMap} alt='Ukraine demographics' />
          </div>
          <div className='participants__image participants__image--europe-map'>
            <img src={europeMap} alt='Europe demographics' />
          </div>
        </div>

        <h3 className='section__subtitle'>
          {lang === 'en' ? 'AGE STRUCTURE' : 'ВІК УЧАСНИКІВ'}
        </h3>

        <Row className='participants__age-structure'>
          <Col xs={10} sm={4} lg={5} className='participants__list-container'>
            <ul className='participants__list'>
              <li className='participants__list-item'>
                <div className='participants__percentage'>47%</div>
                <div className='participants__category'>
                  {lang === 'en'
                    ? 'women aged 36 - 50 y.o.'
                    : 'жінки віком 36 - 50 років'}
                </div>
              </li>
              <li className='participants__list-item'>
                <div className='participants__percentage'>20%</div>
                <div className='participants__category'>
                  {lang === 'en'
                    ? 'women under 35 y.o.'
                    : 'жінки віком до 35 років'}
                </div>
              </li>
              <li className='participants__list-item'>
                <div className='participants__percentage'>13%</div>
                <div className='participants__category'>
                  {lang === 'en'
                    ? 'women aged 50+'
                    : 'жінки віком до понад 50 років'}
                </div>
              </li>
            </ul>
          </Col>
          <Col xs={10} sm={8} lg={5}>
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
};
