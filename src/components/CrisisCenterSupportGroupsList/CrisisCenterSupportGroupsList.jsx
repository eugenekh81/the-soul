import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import { crisisCenter } from '../../data/crisisCenter';
import { CrisisCenterSupportGroupsItem } from '../CrisisCenterSupportGroupsItem/CrisisCenterSupportGroupsItem';
import Carousel from 'react-bootstrap/Carousel';

export const CrisisCenterSupportGroupsList = () => {
  const { lang } = useContext(LangContext);
  return (
    <>
      <Carousel className='support-groups__carousel carousel-dark'>
        {crisisCenter[lang].supportGroups.gallery.map((g) => (
          <Carousel.Item className='support-groups__carousel-item' key={g.id}>
            <CrisisCenterSupportGroupsItem {...g} />
          </Carousel.Item>
        ))}
      </Carousel>
      <ul className='support-groups__list support-groups__list--desktop'>
        {crisisCenter[lang].supportGroups.gallery.map((g) => (
          <CrisisCenterSupportGroupsItem key={g.id} {...g} />
        ))}
      </ul>
    </>
  );
};
