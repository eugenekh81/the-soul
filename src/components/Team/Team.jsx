import './Team.scss';
import AlexandraShymanova from '/images/team/photo-1.jpg';
import MariyaVynnytska from '/images/team/photo-2.jpg';
import IrynaRoenko from '/images/team/photo-3.jpg';
import MarynaYakhno from '/images/team/photo-4.jpg';

export const Team = () => {
  return (
    <section className='team'>
      <h2 className='team__title'>Our team </h2>
      <div className='container'>
        <ul className='team__list'>
          <li className='team__person person'>
            <div className='person__image-container'>
              <img
                className='person__image'
                src={AlexandraShymanova}
                alt='Team member'
              />
            </div>

            <h3 className='person__name'>Alexandra Shymanova</h3>

            <p className='person__role'>
              Psychologist
              <br />
              co-founder of The Soul Center
            </p>
          </li>
          <li className='team__person person'>
            <div className='person__image-container'>
              <img
                className='person__image'
                src={MariyaVynnytska}
                alt='Team member'
              />
            </div>

            <h3 className='person__name'>Mariya Vynnytska</h3>

            <p className='person__role'>
              Psychologist
              <br />
              co-founder of The Soul Center
            </p>
          </li>
          <li className='team__person person'>
            <div className='person__image-container'>
              <img
                className='person__image'
                src={IrynaRoenko}
                alt='Team member'
              />
            </div>

            <h3 className='person__name'>Iryna Roenko</h3>

            <p className='person__role'>
              Psychologist
            </p>
          </li>
          <li className='team__person person'>
            <div className='person__image-container'>
              <img
                className='person__image'
                src={MarynaYakhno}
                alt='Team member'
              />
            </div>

            <h3 className='person__name'>Maryna Yakhno</h3>

            <p className='person__role'>
              Psychologist
            </p>
          </li>
        </ul>
      </div>
    </section>
  );
};
