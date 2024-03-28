import PropTypes from 'prop-types';
import { CrisisCenterConsultationItem } from '../CrisisCenterConsultationItem/CrisisCenterConsultationItem';

export const CrisisCenterConsultationList = ({ items }) => {
  console.log(items);
  return (
    <ul className='consultations__list'>
      {items.map((c) => (
        <CrisisCenterConsultationItem {...c} key={c.id} />
      ))}
    </ul>
  );
};

CrisisCenterConsultationList.propTypes = {
  items: {
    title: PropTypes.string,
    text: PropTypes.string,
  },
};
