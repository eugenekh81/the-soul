import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import cn from 'classnames';

export const PartnersItem = ({ link, imgSrc }) => {
  const { ref: partnerRef, inView } = useInView();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);
  return (
    <li
      className={cn('partners__list-item', 'animation', 'animation__fade-up', {
        'animation__fade-up--fire': animated || inView,
      })}
    >
      <a
        href={`https://${link}`}
        className='partners__link'
        target='_blank'
        rel='noreferrer'
      >
        <img src={imgSrc} alt='' className='partners__logo' />
      </a>
      <div className='animation__point' ref={partnerRef}></div>
    </li>
  );
};

PartnersItem.propTypes = {
  link: PropTypes.string,
  imgSrc: PropTypes.string.isRequired,
};
