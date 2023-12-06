import Row from 'react-bootstrap/Row';
import { modules } from '../../data/modules';

import './ModulesList.scss';

import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import { ModuleItem } from '../ModuleItem/';

export const ModulesList = () => {
  const lang = useLang();
  return (
    <section className='page__section section modules'>
      <div className='container'>
        <h2 className='section__title'>
          {lang === 'en' ? 'Structure' : 'Структура програми'}
        </h2>

        <Row className='modules__list'>
          {modules.map((module) => (
            <ModuleItem key={module.id} {...module} />
          ))}
        </Row>
      </div>
    </section>
  );
};
