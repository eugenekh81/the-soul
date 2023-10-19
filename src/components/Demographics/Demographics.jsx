import './Demographics.scss';
import ageDiagram from '/images/about/about--age-graph.png';
import ukraineMap from '/images/about/about--ukraine-map.png';
import europeMap from '/images/about/about--europe-map.png';

export const Demographics = () => (
  <section className="page__section demographics">
    <div className="container">
      <h2 className='section__title'>Demographics</h2>

      <p className='demographics__description'>
        Participants filled a registration form, which allowed us to get to know each person better.
        The war forced many people to leave their homes, so participants joined our programme from all over the world and Ukraine. In terms of the proportion, 29% are outside Ukraine and are distributed across Europe and the world, and 71% are in Ukraine
      </p>

      <div className="demographics__image">
          <img src={ukraineMap} alt="Ukraine demographics" className="demographics__image--ukraine-map" />
      </div>
      <div className="demographics__image">
          <img src={europeMap} alt="Europe demographics" className=" demographics__image--europe-map" />
      </div>

      <h3 className="demographics__subtitle">
        AGE STRUCTURE
      </h3>

      <ul className="demographics__list">
        <li className="demographics__list-item">
          47% - women aged 36 - 50 y.o.
        </li>
        <li className="demographics__list-item">
          up to 20% - women under 35 y.o.
        </li>
        <li className="demographics__list-item">
          13% - women aged 50+
        </li>
      </ul>

      <div className="demographics__image">
        <img src={ageDiagram} alt="Age chart" className="demographics__image--age-graph" />
      </div>
    </div>
  </section>
);
