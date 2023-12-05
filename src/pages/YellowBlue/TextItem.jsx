import PropTypes from 'prop-types';
import { useContext, useEffect, useState } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import { useInView } from 'react-intersection-observer';
import cn from 'classnames';

export const TextItem = ({ text }) => {
  const { lang } = useContext(LangContext);
  const { ref, inView } = useInView();
  const [animated, setAnimated] = useState(false);

  useEffect(() => {
    if (inView) {
      setAnimated(true);
    }
  }, [inView]);

  return (

  );
};

TextItem.propTypes = {
  text: PropTypes.shape({
    text: {
      en: PropTypes.string.isRequired,
      ua: PropTypes.string.isRequired,
    },
  }),
};
