import './Partners.scss';
import consciousness from './images/partners/consciousness-centered.png';
import katieEastman from './images/partners/Katie_Eastman-centered.png';
import renovare from './images/partners/renovare.png';
import EKR from './images/partners/EKR.png';


export const Partners = () => {
  return (
    <section className="page__section section partners">
      <div className="container">
        <h2 className="section__title">Partners</h2>

        <ul className="partners__list">
          <li className="partners__partner">
            <a href="#" className="partners__link">
              <img src={consciousness} alt="Consciousness" />
            </a>
          </li>
          <li className="partners__partner">
            <a href="#" className="partners__link">
              <img src={katieEastman} alt="Katie Eastman" />
            </a>
          </li>
          <li className="partners__partner">
            <a href="#" className="partners__link">
              <img src={renovare} alt="Renovare" />
            </a>
          </li>
          <li className="partners__partner">
            <a href="#" className="partners__link renovare">
              <img src={EKR} alt="" />
            </a>
          </li>
        </ul>
          <button type='submit' className='subscribe__button'>
            Donate
          </button>
      </div>
    </section>
  );
};
