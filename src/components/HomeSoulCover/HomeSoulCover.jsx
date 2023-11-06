import Ratio from 'react-bootstrap/Ratio';
import './HomeSoulCover.scss';

export const HomeSoulCover = () => {
  return (
    <section className='page__section section soul-cover'>
      <div className='container'>
        <Ratio aspectRatio='16x9' className='soul-cover__video-container'>
         <iframe width="560" height="315" src="https://www.youtube.com/embed/CL0daxScqpI?si=c9unNHasCNnwpvXD" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
        </Ratio>
      </div>
    </section>
  );
};
