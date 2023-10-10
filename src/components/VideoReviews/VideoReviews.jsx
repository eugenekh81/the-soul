import './VideoReviews.scss';

export const VideoReviews = () => {
  return (
    <section className='page__section section video-reviews'>
      <div className='container'>
      <h2 className='section__title'>Video Reviews</h2>
        <div className='video-reviews__item'>
          <iframe
            src='https://www.youtube.com/embed/fEuExMpBU_o?si=x6k3GVOaYExfrJSb'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </div>
        <div className='video-reviews__item'>
          <iframe
            width='560'
            height='315'
            src='https://www.youtube.com/embed/Go9A6_EpRn8?si=Lux-SfoVLVAoq_Np'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowfullscreen
          ></iframe>
        </div>
      </div>
    </section>
  );
};
