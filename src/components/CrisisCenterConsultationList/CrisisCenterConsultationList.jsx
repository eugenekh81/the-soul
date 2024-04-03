import PropTypes from 'prop-types';
import { CrisisCenterConsultationItem } from '../CrisisCenterConsultationItem/CrisisCenterConsultationItem';
import { useState } from 'react';

export const CrisisCenterConsultationList = ({ items }) => {
  const [selectedId, setSelectedId] = useState(null);
  console.log(selectedId, 'selected ID');

  return (
    <div className="consultations__lists">
    <ul className='consultations__list'>
      {items.slice(0,4).map((c) => (
        <CrisisCenterConsultationItem
          {...c}
          key={c.id}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </ul>
    <ul className='consultations__list'>
      {items.slice(4).map((c) => (
        <CrisisCenterConsultationItem
          {...c}
          key={c.id}
          selectedId={selectedId}
          setSelectedId={setSelectedId}
        />
      ))}
    </ul>

    </div>
  );
};

CrisisCenterConsultationList.propTypes = {
  items: PropTypes.array,
};
