import Ratio from 'react-bootstrap/Ratio';
import './HomeSoulCover.scss';

export const HomeSoulCover = () => {
  return (
    <section className='page__section section soul-cover'>
      <div className='container'>
        <Ratio aspectRatio='16x9' className='soul-cover__video-container'>
          <iframe
            src='https://www.youtube.com/embed/CL0daxScqpI?si=Ywlb1lj9fyEpI5bg'
            title='YouTube video player'
            frameBorder='0'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </Ratio>
      </div>
    </section>
  );
};
