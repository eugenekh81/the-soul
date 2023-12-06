import './Results.scss';
import { results } from '../../data/results';
import { ResultsItem } from '../ResultsItem/ResultsItem';

import Carousel from 'react-bootstrap/Carousel';
import { useLang } from '../../hooks/useLang';

export const Results = () => {
  const lang = useLang();
  return (
    <section className='page__section section results'>
      <div className='container'>
        <h2 className='section__title'>
          {lang === 'en' ? 'Results' : 'Результати'}
        </h2>
        <p
          className='results__description--main'
          style={{ textAlign: 'center' }}
        >
          {lang === 'en'
            ? 'Over the course of the Program, the following key results were achieved:'
            : 'Під час реалізації Програми було досягнуто такі основні результати:'}
        </p>
        <div className='results__list'>
          <Carousel variant='dark' className='results__carousel'>
            <Carousel.Item>
              {results.slice(0, 3).map((i) => (
                <ResultsItem {...i} key={i.id} />
              ))}
            </Carousel.Item>
            <Carousel.Item>
              {results.slice(3, 6).map((i) => (
                <ResultsItem {...i} key={i.id} />
              ))}
            </Carousel.Item>
            <Carousel.Item>
              {results.slice(6, 9).map((i) => (
                <ResultsItem {...i} key={i.id} />
              ))}
            </Carousel.Item>
          </Carousel>
        </div>

        <ul className='results__list--desktop'>
          {results.map((i) => (
            <ResultsItem {...i} key={i.id} />
          ))}
        </ul>
      </div>
    </section>
  );
};
