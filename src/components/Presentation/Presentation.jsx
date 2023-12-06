import './Presentation.scss';
import Ratio from 'react-bootstrap/Ratio';
import detailedReport from '/pdf/project-report/final_report_Ukrainian_Circle_Program.pdf';
import { useLang } from '../../hooks/useLang';

export const Presentation = () => {
  const lang = useLang();
  return (
    <section className='section page__section presentation'>
      <div className='container'>
        <h2 className='presentation__title'>
          {lang === 'en'
            ? 'Presentation of the Ukrainian Circle Project by the founders of the Centre - Maria Vynnytska and Olexandra Shymanova'
            : 'Презентація Програми психологічного відновлення “Українське коло” від засновниць Центру - Олександри Шиманової та Марії Винницької'}
        </h2>

        <Ratio aspectRatio='16x9' className='presentation__video-container'>
          <iframe
            src='https://www.youtube.com/embed/kEemfcvEBq8?si=v00h1BEAijdpEaTa'
            title='YouTube video player'
            allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
            allowFullScreen
          ></iframe>
        </Ratio>

        <a
          href={detailedReport}
          className='button button--centered'
          target='_blank'
          rel='noreferrer'
        >
          {lang === 'en' ? 'Detailed Program Report' : 'Детально про Програму'}
        </a>
      </div>
    </section>
  );
};
