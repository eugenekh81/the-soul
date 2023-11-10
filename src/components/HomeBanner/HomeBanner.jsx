import './HomeBanner.scss';

export const HomeBanner = () => {
  return (
    <>
      <section className='home-hero'>
        <div className='home-hero__banner'>
        </div>
        <div className="home-hero__text-container noselect">
          <h1 className='home-hero__title'>
            THE S<img src='/images/home/title-o.png'/>UL
          </h1>
          <p className="home-hero__subtitle">psychology center</p>
       </div>
      </section>
    </>
  );
};
