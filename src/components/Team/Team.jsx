import Carousel from 'react-bootstrap/Carousel';
import './Team.scss';
import Row from 'react-bootstrap/Row';

import OlexandraShymanova from '/images/team/oshymanova-mobile.png';
import MariyaVynnytska from '/images/team/mvynnytska-mobile.png';
import IrynaRoyenko from '/images/team/iroyenko-mobile.png';
import MarynaYakhno from '/images/team/myakhno-mobile.png';
import { team } from '../../data/team.js';

import { NavLink } from 'react-router-dom';
import { TeamMember } from '../TeamMember/TeamMember.jsx';
import { useLang } from '../../hooks/useLang.jsx';

export const Team = () => {
  const lang = useLang();
  return (
    <section className='page__section page__section--bgc-green section team'>
      <div className='container'>
        <h2 className='section__title'>{lang === 'en' ? 'Team' : 'Команда'}</h2>

        <div className='team__list'>
          <Carousel className='team__carousel' variant='dark'>
            <Carousel.Item interval={3000}>
              <NavLink
                className='team__person person'
                to={`/${lang}/team/olexandra-shymanova`}
              >
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={OlexandraShymanova}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>
                  {lang === 'en'
                    ? 'Olexandra Shymanova'
                    : 'Олександра Шиманова'}
                </h3>

                <p className='person__role'>
                  {lang === 'en' ? (
                    <>
                      psychologist
                      <br />
                      founder
                    </>
                  ) : (
                    <>
                      психолог
                      <br />
                      засновник
                    </>
                  )}
                </p>
              </NavLink>
            </Carousel.Item>
            <Carousel.Item>
              <NavLink
                className='team__person person'
                to={`/${lang}/team/mariya-vynnytska`}
              >
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={MariyaVynnytska}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>
                  {lang === 'en' ? 'Mariya Vynnytska' : 'Марія Винницька'}
                </h3>

                <p className='person__role'>
                  {lang === 'en' ? (
                    <>
                      psychologist
                      <br />
                      co-founder
                    </>
                  ) : (
                    <>
                      психолог
                      <br />
                      співзасновник
                    </>
                  )}
                </p>
              </NavLink>
            </Carousel.Item>
            <Carousel.Item>
              <NavLink className='person' to={`/${lang}/team/iryna-royenko`}>
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={IrynaRoyenko}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>
                  {lang === 'en' ? 'Iryna Royenko' : 'Ірина Роєнко'}
                </h3>

                <p className='person__role'>
                  {lang === 'en' ? 'psychologist' : 'психолог'}
                </p>
              </NavLink>
            </Carousel.Item>
            <Carousel.Item>
              <NavLink className='person' to={`/${lang}/team/maryna-yakhno`}>
                <div className='person__image-container'>
                  <img
                    className='person__image'
                    src={MarynaYakhno}
                    alt='Team member'
                  />
                </div>

                <h3 className='person__name'>
                  {lang === 'en' ? 'Maryna Yakhno' : 'Марина Яхно'}
                </h3>

                <p className='person__role'>
                  {lang === 'en' ? 'psychologist' : 'психолог'}
                </p>
              </NavLink>
            </Carousel.Item>
          </Carousel>
        </div>

        <Row className='team__list--desktop'>
          {/*           <Col sm={6} lg={3} className='team__person'>
            <NavLink
              className='person'
              to={`/${lang}/team/olexandra-shymanova`}
            >
              <div className='person__image-container'>
                <img
                  className='person__image'
                  src={OlexandraShymanova}
                  alt='Team member'
                />
              </div>

              <h3 className='person__name'>
                {' '}
                {lang === 'en' ? 'Olexandra Shymanova' : 'Олександра Шиманова'}
              </h3>

              <p className='person__role'>
                {lang === 'en' ? (
                  <>
                    psychologist
                    <br />
                    psychologist
                  </>
                ) : (
                  <>
                    психолог
                    <br />
                    засновник
                  </>
                )}
              </p>
            </NavLink>
          </Col>
          <Col sm={6} lg={3} className='team__person'>
            <NavLink className='person' to={`/${lang}/team/mariya-vynnytska`}>
              <div className='person__image-container'>
                <img
                  className='person__image'
                  src={MariyaVynnytska}
                  alt='Team member'
                />
              </div>

              <h3 className='person__name'>
                {lang === 'en' ? 'Mariya Vynnytska' : 'Марія Винницька'}
              </h3>

              <p className='person__role'>
                {lang === 'en' ? (
                  <>
                    psychologist
                    <br />
                    co-founder
                  </>
                ) : (
                  <>
                    психолог
                    <br />
                    співзасновник
                  </>
                )}
              </p>
            </NavLink>
          </Col>
          <Col sm={6} lg={3} className='team__person'>
            <NavLink className='person' to={`/${lang}/team/iryna-royenko`}>
              <div className='person__image-container'>
                <img
                  className='person__image'
                  src={IrynaRoyenko}
                  alt='Team member'
                />
              </div>

              <h3 className='person__name'>
                {lang === 'en' ? 'Iryna Royenko' : 'Ірина Роєнко'}
              </h3>

              <p className='person__role'>
                {lang === 'en' ? 'psychologist' : 'психолог'}
              </p>
            </NavLink>
          </Col>
          <Col sm={6} lg={3} className='team__person'>
            <NavLink className='person' to={`/${lang}/team/maryna-yakhno`}>
              <div className='person__image-container'>
                <img
                  className='person__image'
                  src={MarynaYakhno}
                  alt='Team member'
                />
              </div>

              <h3 className='person__name'>
                {lang === 'en' ? 'Maryna Yakhno' : 'Марина Яхно'}
              </h3>

              <p className='person__role'>
                {lang === 'en' ? 'psychologist' : 'психолог'}
              </p>
            </NavLink>
          </Col> */}

          {team.map((t) => (
            <TeamMember key={t.id} {...t} />
          ))}
        </Row>
      </div>
    </section>
  );
};
