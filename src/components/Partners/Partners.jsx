import './Partners.scss';

export const Partners = () => {
  return (
    <section className="page__section section partners">
      <div className="container">
        <h2 className="section__title">Partners</h2>

        <ul className="partners__list">
          <li className="partners__partner">
            <a href="#" className="partners__link">
              <img src="/images/partners/consciousness1.png" alt="" />
            </a>
          </li>
          <li className="partners__partner">
            <a href="#" className="partners__link">
              <img src="/images/partners/Katie_Eastman.png" alt="" />
            </a>
          </li>
          <li className="partners__partner">
            <a href="#" className="partners__link">
              <img src="/images/partners/renovare.png" alt="" />
            </a>
          </li>
          <li className="partners__partner">
            <a href="#" className="partners__link renovare">
              <img src="/images/partners/EKR_Horizontal_Logo_Black-Rev2-1-removebg-preview 1.png" alt="" />
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
