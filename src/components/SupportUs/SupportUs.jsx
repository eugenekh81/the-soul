
import sprite from '/images/concepts/concepts.svg';
import './SupportUs.scss';

export const SupportUs = () => {
  return (
    <section className="page__section section support-us">
      <div className="container">
        <h2 className="section__title">Support Us</h2>
        <p className="section__description text-center">
          The Ukrainian Circle project is a non-profit social initiative and is created by our colleagues in The Soul Centre.
        </p>
        <p className="section__description text-center">
          If you would like to support The Ukrainian Circle project, you may donate any amount you wish - any help is appreciated!
        </p>


        <a href="" className="button section__button">
              <svg className='support-us__icon'>
                  <use href={sprite + '#plant'} />
              </svg>
          Donate now
              </a>
      </div>
    </section>
  );
};
