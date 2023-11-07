import Ratio from 'react-bootstrap/Ratio';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PastProjects.scss';

export const PastProjects = () => {
  return (
    <section className='page__section section past-projects'>
      <div className='container'>
        <h2 className='section__title'>Past projects</h2>

        <Row className='projects__past-project past-project'>
          <Col sm={8} md={7} lg={7} xl={4} className='past-project__video-container'>
            <Ratio aspectRatio='16x9' className='soul-cover__video-container'>
              <iframe
                src='https://www.youtube.com/embed/F63pu641Tdk?si=_Vyg2cDFIskYuInh'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </Ratio>
          </Col>
          <Col sm={8} md={10} lg={7} xl={8} className='past-project__description'>
            <h3 className='past-project__title'>Crisis Center</h3>
              <p className='past-project__paragraph'>
                In February 2022 from the Soul Development Center, we turned
                into the Soul Crisis Center. We were helping all people affected
                by the war to maintain their mental health, deal with the trauma
                and take difficult decisions.
              </p>
              <p className='past-project__paragraph'>
                In 2022, we provided about 100 sessions to women, men, parents
                with children who needed mental health support. We were doing
                this for free and with the help of our international sponsors.
              </p>
          </Col>
        </Row>

        <Row className='projects__past-project past-project past-project--reverse'>
        <Col sm={8} md={7} lg={7} xl={4} className='past-project__video-container'>
            <Ratio aspectRatio='16x9' className='soul-cover__video-container'>
              <iframe
                src='https://www.youtube.com/embed/SQPVRJa9jf8?si=So5GaOg-5Qylc1NV'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </Ratio>
          </Col>
          <Col sm={8} md={10} lg={7} xl={8} className='past-project__description'>
          <h3 className='past-project__title'>Crisis Groups</h3>
            <p className='past-project__paragraph'>
              In January 2023, we revived the work of our Crisis Center with a
              new force, providing individual and group sessions to the people.
            </p>

            <p className='past-project__paragraph'>
              We expanded our team of psychologists and now have + 5 mental
              health specialists able to do the work with Ukrainian refugees and
              displaced persons inside and outside the country.
              <br />
              Individual sessions are very much in demand.
            </p>
            <p className='past-project__paragraph'>
              During just January - March 2023 only, we provided more than 100 sessions
            </p>
          </Col>
        </Row>

        <Row className='projects__past-project past-project'>
        <Col sm={8} md={7} lg={7} xl={4} className='past-project__video-container'>
            <Ratio aspectRatio='16x9' className='soul-cover__video-container'>
              <iframe
                src='https://www.youtube.com/embed/UQFVVzhYQBo?si=SX1EEjptZXCUajm6'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowfullscreen
              ></iframe>
            </Ratio>
          </Col>
          <Col sm={8} md={10} lg={7} xl={8} className='past-project__description'>
            <h3 className='past-project__title'>Meeting with The Soul</h3>
            <p className='past-project__paragraph'>
              In autumn 2022, we launched a series of Psychological support
              groups called “Meetings with The Soul” - every Saturday at 11:00
              am people could join us online via Zoom for a free group therapy
              session.
            </p>
            <p className='past-project__paragraph'>
              We designed every meet-up around a particular theme and these
              sessions were helping people process their difficult feelings and
              emotions, take some important decisions, share what&apos;s
              happening in their lives and receive support from each other and
              our psychologists.
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};
