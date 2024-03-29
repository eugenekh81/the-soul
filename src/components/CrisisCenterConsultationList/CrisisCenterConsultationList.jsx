import PropTypes from 'prop-types';
import { CrisisCenterConsultationItem } from '../CrisisCenterConsultationItem/CrisisCenterConsultationItem';
import { useState } from 'react';

export const CrisisCenterConsultationList = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);
  console.log(selectedId, 'selected ID');

  return (
    <ul className='consultations__list'>
      {items.map((c) => (
        <CrisisCenterConsultationItem
          {...c}
          key={c.id}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </ul>
  );
};

CrisisCenterConsultationList.propTypes = {
  items: PropTypes.array,
};
