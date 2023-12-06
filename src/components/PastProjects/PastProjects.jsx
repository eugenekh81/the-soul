import Ratio from 'react-bootstrap/Ratio';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './PastProjects.scss';
import { useLang } from '../../hooks/useLang';

export const PastProjects = () => {
  const lang = useLang();

  return (
    <section className='page__section section past-projects'>
      <div className='container'>
        <h2 className='section__title'>
          {lang === 'en' ? 'Past projects' : 'Реалізовані проекти'}
        </h2>

        <Row className='projects__past-project past-project'>
          <Col
            sm={8}
            md={7}
            lg={7}
            xl={4}
            className='past-project__video-container'
          >
            <Ratio aspectRatio='16x9' className='soul-cover__video-container'>
              <iframe
                src='https://www.youtube.com/embed/F63pu641Tdk?si=_Vyg2cDFIskYuInh'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </Ratio>
          </Col>
          <Col
            sm={8}
            md={10}
            lg={7}
            xl={8}
            className='past-project__description'
          >
            <h3 className='past-project__title'>
              {lang === 'en' ? <>Crisis Center</> : <>Кризовий центр</>}
            </h3>
            <p className='past-project__paragraph'>
              {lang === 'en'
                ? 'In February 2022 from the Soul Development Center, we turned into the Soul Crisis Center. We were helping all people affected by the war to maintain their mental health, deal with the trauma and take difficult decisions.'
                : 'У лютому 2022 року з Центру розвитку душі ми перетворилися на Кризовий центр The Soul. Ми допомагали всім людям, що постраждали від війни, зберегти психічне здоров’я, подолати травму та прийняти важкі рішення.'}
            </p>
            <p className='past-project__paragraph'>
              {lang === 'en'
                ? 'In 2022, we provided about 100 sessions to women, men, parents with children who needed mental health support. We were doing this for free and with the help of our international sponsors.'
                : 'У 2022 році ми провели близько 100 психологічних консультацій жінкам, чоловікам, батькам з дітьми, які потребували допомоги. Ми робили це безкоштовно для людей та за підтримки наших міжнародних спонсорів.'}
            </p>
          </Col>
        </Row>

        <Row className='projects__past-project past-project past-project--reverse'>
          <Col
            sm={8}
            md={7}
            lg={7}
            xl={4}
            className='past-project__video-container'
          >
            <Ratio aspectRatio='16x9' className='soul-cover__video-container'>
              <iframe
                src='https://www.youtube.com/embed/SQPVRJa9jf8?si=So5GaOg-5Qylc1NV'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </Ratio>
          </Col>
          <Col
            sm={8}
            md={10}
            lg={7}
            xl={8}
            className='past-project__description'
          >
            <h3 className='past-project__title'>
              {lang === 'en' ? 'Support Groups' : 'Групова підтримка'}
            </h3>
            <p className='past-project__paragraph'>
              {lang === 'en'
                ? 'In January 2023, we revived the work of our Crisis Center with a new force, providing individual and group sessions to the people.'
                : 'У січні 2023 року ми  відновили роботу нашого Кризового центру у новому форматі, проводячи індивідуальні та групові заняття з людьми.'}
            </p>

            <p className='past-project__paragraph'>
              {lang === 'en' ? (
                <>
                  We expanded our team of psychologists and now have additional
                  5 mental health specialists who are able to work with
                  Ukrainian refugees and displaced persons inside and outside
                  the country.
                  <br />
                  <br />
                  Individual sessions are very much in demand.
                </>
              ) : (
                <>
                  Ми запросили в нашу команду ще 5 психологів, що дало нам змогу
                  працювати з біженцями та переміщеними особами поза межами
                  країни.
                  <br />
                  <br />
                  Було проведено ряд живих груп в різних країнах та залишились
                  актуальними індивідуальні консультації.
                </>
              )}
            </p>
            <p className='past-project__paragraph'>
              {lang === 'en'
                ? 'During  January - March 2023 alone we provided more than 100 sessions'
                : 'Лише за січень-березень 2023 року ми провели ще понад 100 онлайн-сесій.'}
            </p>
          </Col>
        </Row>

        <Row className='projects__past-project past-project'>
          <Col
            sm={8}
            md={7}
            lg={7}
            xl={4}
            className='past-project__video-container'
          >
            <Ratio aspectRatio='16x9' className='soul-cover__video-container'>
              <iframe
                src='https://www.youtube.com/embed/UQFVVzhYQBo?si=SX1EEjptZXCUajm6'
                title='YouTube video player'
                frameBorder='0'
                allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
                allowFullScreen
              ></iframe>
            </Ratio>
          </Col>
          <Col
            sm={8}
            md={10}
            lg={7}
            xl={8}
            className='past-project__description'
          >
            <h3 className='past-project__title'>
              {lang === 'en' ? 'Meetings with The Soul' : 'Зустрічі з Душею'}
            </h3>
            <p className='past-project__paragraph'>
              {lang === 'en'
                ? 'In autumn 2022, we launched a series of Psychological support groups called “Meetings with The Soul” - every Saturday at 11:00 am people could join us online via Zoom for a free group therapy session.'
                : 'Восени 2022 року ми запустили серію груп психологічної підтримки «Зустрічі з душею» - щосуботи об 11:00 люди могли приєднатися до нас онлайн через Zoom на безкоштовну групову терапію.'}
            </p>
            <p className='past-project__paragraph'>
              {lang === 'en'
                ? "We designed every meet-up around a particular theme and these sessions were helping people process their difficult feelings and emotions, take some important decisions, share what's happening in their lives and receive support from each other andour psychologists."
                : 'Кожна зустріч була присвячена певній темі, і направлена на допомогу людям пережити свої важкі почуття та емоції, прийняти важливі рішення, поділитися тим, що відбувається в їхньому житті, і отримати підтримку один від одного та від наших психологів.'}
            </p>
          </Col>
        </Row>
      </div>
    </section>
  );
};
