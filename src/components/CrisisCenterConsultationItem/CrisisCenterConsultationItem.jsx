import PropTypes from 'prop-types';
import { useEffect } from 'react';
import { useRef } from 'react';
import { useState } from 'react';

export const CrisisCenterConsultationItem = ({
  id,
  title,
  text,
  selectedId,
  setSelectedId,
}) => {
  const [height, setHeight] = useState('0');

  const content = useRef(null);
  console.log(content.current?.scrollHeight);
  useEffect(() => {
    setHeight(selectedId === id ? `${content.current?.scrollHeight}px` : '0');
  }, [selectedId]);

  return (
    <li
      className='consultations__item'
      onClick={() => {
        setSelectedId(selectedId === id ? null : id);
      }}
    >
      <h3 className='consultations__topic'>{title}</h3>
      <p
        className='consultations__description'
        style={{ height }}
        ref={content}
      >
        <br />
        {text}
        <br />
        <br />
      </p>
    </li>
  );
};

CrisisCenterConsultationItem.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  text: PropTypes.string,
  selectedId: PropTypes.number,
  setSelectedId: PropTypes.func,
};
