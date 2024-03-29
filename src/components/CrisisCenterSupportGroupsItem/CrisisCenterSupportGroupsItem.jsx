import PropTypes from 'prop-types';

export const CrisisCenterSupportGroupsItem = ({
  id,
  location,
  title,
  date,
}) => {
  return (
    <li className='support-groups__item'>
      <div className='support-groups__image-container'>
        <img
          src={`/images/projects/crisis-center--images/support-groups/${id}.jpg`}
          alt='Support group image'
          className='support-groups__image'
        />
      </div>
      <div className='support-groups__text-content'>
        <p className='support-groups__location'>{location}</p>
        <h3 className='support-groups__topic'>{title}</h3>
        <p className='support-groups__date'>{date}</p>
      </div>
    </li>
  );
};

CrisisCenterSupportGroupsItem.propTypes = {
  id: PropTypes.number,
  location: PropTypes.string,
  title: PropTypes.string,
  date: PropTypes.string,
};
