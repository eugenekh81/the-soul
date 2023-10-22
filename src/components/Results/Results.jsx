import './Results.scss';
import { infographics } from '../../data/infographics';
import { ResultsItem } from '../ResultsItem/ResultsItem';

import Carousel from 'react-bootstrap/Carousel';

export const Results = () => {
  return (
    <section className='page__section section infographics'>
      <div className='container'>
        <h2 className='section__title'>Results</h2>
        <p className='section__description' style={{ textAlign: 'center' }}>
          Over the course of the Program, the following key results were
          achieved:
        </p>
        <div className='infographics__list'>
          <Carousel variant='dark'>
            <Carousel.Item>
              {infographics.slice(0, 3).map((i) => (
                <ResultsItem {...i} key={i.id} />
              ))}
            </Carousel.Item>
            <Carousel.Item>
              {infographics.slice(3, 6).map((i) => (
                <ResultsItem {...i} key={i.id} />
              ))}
            </Carousel.Item>
            <Carousel.Item>
              {infographics.slice(6, 9).map((i) => (
                <ResultsItem {...i} key={i.id} />
              ))}
            </Carousel.Item>
          </Carousel>
        </div>

        <ul className='infographics__list--desktop'>
          {infographics.map((i) => (
            <ResultsItem {...i} key={i.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};
