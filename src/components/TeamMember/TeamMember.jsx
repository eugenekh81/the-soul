import PropTypes from 'prop-types';
import { useInView } from 'react-intersection-observer';
import { useEffect, useState } from 'react';
import Col from 'react-bootstrap/Col';
import { NavLink } from 'react-router-dom';
import cn from 'classnames';
import { useLang } from '../../hooks/useLang';

export const TeamMember = ({ imgSrc, name, link, role }) => {
  const { ref: mainPhotoRef, inView } = useInView();
  const [animated, setAnimated] = useState(false);
  const lang = useLang();

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  return (
    <Col
      sm={6}
      lg={3}
      className={cn('team__person', 'animation', 'animation__fade-up', {
        'animation__fade-up--fire': inView || animated,
      })}
    >
      <NavLink className='person' to={`/${lang}/team/${link}`}>
        <div className='person__image-container'>
          <img className='person__image' src={imgSrc} alt='Team member' />
        </div>

        <h3 className='person__name'> {name[lang]}</h3>
        <div className='animation__point' ref={mainPhotoRef}></div>
        <p className='person__role'>
          {role[lang][0]}
          {role[lang][1] && (
            <>
              <br />
              {role[lang][1]}
            </>
          )}
        </p>
      </NavLink>
    </Col>
  );
};

TeamMember.propTypes = {
  imgSrc: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  role: PropTypes.array.isRequired,
};
