import './ModulesList.scss';
import module1cover from '/images/modules/m1.png';
import module2cover from '/images/modules/m2.png';
import module3cover from '/images/modules/m3.png';
import module4cover from '/images/modules/m4.png';
import module5cover from '/images/modules/m5.png';
import module6cover from '/images/modules/m6.png';
import module7cover from '/images/modules/m7.png';
import module8cover from '/images/modules/m8.png';
import module9cover from '/images/modules/m9.png';

import module1report from '/pdf/module-reports/module-1__summary.pdf';
import module2report from '/pdf/module-reports/module-2__summary.pdf';
import module3report from '/pdf/module-reports/module-3__summary.pdf';
import module4report from '/pdf/module-reports/module-4__summary.pdf';
import module5report from '/pdf/module-reports/module-5__summary.pdf';
import module6report from '/pdf/module-reports/module-6__summary.pdf';
import module7report from '/pdf/module-reports/module-7__summary.pdf';
import module8report from '/pdf/module-reports/module-8__summary.pdf';
import module9report from '/pdf/module-reports/module-9__summary.pdf';

// import Carousel from 'react-bootstrap/Carousel';

export const ModulesList = () => {
  return (
    <section className='page__section section modules'>
      <div className='container'>
        <h2 className='section__title'>Structure</h2>

        <ul className='modules__list'>
          <li className='modules__module module'>
            <div className='module__img-container'>
              <img
                className='module__cover'
                src={module1cover}
                alt='Module cover'
              />
              <div className='module__cover-text'>
                <p className='module__number'>Module 1</p>
                <p className='module__title'>
                  Feelings
                  <br />
                  and
                  <br />
                  emotions
                </p>
              </div>
            </div>

            <p className='module__description'>
              Objective: understand one&apos;s state and conditions, and not to
              direct your emotions at destroying yourself and others. Learn to
              deal with difficult feelings and process them like &quot;in a
              transformer booth&quot;. In fact, the Program became such a
              &quot;transformer booth&quot; to help people cope with their
              conditions and give them support.
            </p>
            <a
              href={module1report}
              className='button'
              target='_blank'
              rel='noreferrer'
            >
              Detailed report: Module 1
            </a>
          </li>

          <li className='modules__module module'>
            <div className='module__img-container'>
              <img
                className='module__cover'
                src={module2cover}
                alt='Module cover'
              />
              <div className='module__cover-text'>
                <p className='module__number'>Module 2</p>
                <p className='module__title'>Body</p>
              </div>
            </div>

            <p className='module__description'>
              Objective: learn relaxation techniques and stress relief through
              physical exercises. The body is supposed to help us cope with
              everything that we are going through, and we are need to learn how
              to support our body.
            </p>
            <a
              href={module2report}
              className='button'
              target='_blank'
              rel='noreferrer'
            >
              Detailed report: Module 2
            </a>
          </li>
          <li className='modules__module module'>
            <div className='module__img-container'>
              <img
                className='module__cover'
                src={module3cover}
                alt='Module cover'
              />
              <div className='module__cover-text'>
                <p className='module__number'>Module 3</p>
                <p className='module__title'>
                  Strength
                  <br />
                  and
                  <br />
                  confidence
                </p>
              </div>
            </div>

            <p className='module__description'>
              Objective: investigate and explore their own aggression and to
              learn how to deal with it constructively and apply for creativity,
              effective actions or work. This was the most popular question
              among participants.
            </p>
            <a
              href={module3report}
              className='button'
              target='_blank'
              rel='noreferrer'
            >
              Detailed report: Module 3
            </a>
          </li>
          <li className='modules__module module'>
            <div className='module__img-container'>
              <img
                className='module__cover'
                src={module4cover}
                alt='Module cover'
              />
              <div className='module__cover-text'>
                <p className='module__number'>Module 4</p>
                <p className='module__title'>
                  Love
                  <br />
                  and
                  <br />
                  relationships
                </p>
              </div>
            </div>

            <p className='module__description'>
              Objective: find feeling of self-love, get to know yourself better.
              And then look at the relationships honestly, without illusions and
              false expectations, and to accept a partner or make a decision
              about separation, look for new ways to be together and support
              each other.
            </p>
            <a
              href={module4report}
              className='button'
              target='_blank'
              rel='noreferrer'
            >
              Detailed report: Module 4
            </a>
          </li>
          <li className='modules__module module'>
            <div className='module__img-container'>
              <img
                className='module__cover'
                src={module5cover}
                alt='Module cover'
              />
              <div className='module__cover-text'>
                <p className='module__number'>Module 5</p>
                <p className='module__title'>
                  Freedom
                  <br />
                  and
                  <br />
                  responsibility
                </p>
              </div>
            </div>

            <p className='module__description'>
              Objective: understand the concepts of freedom, independence,
              dependence on another person and interdependence, learn how to
              distinguish them. It&apos;s important to understand the difference
              between freedom <b>from</b> something (someone) and freedom to do
              something. The goal is also to work through separation from the
              parents and obsolete ideas about yourself that no longer serve
              you.
            </p>
            <a
              href={module5report}
              className='button'
              target='_blank'
              rel='noreferrer'
            >
              Detailed report: Module 5
            </a>
          </li>

          <li className='modules__module module'>
            <div className='module__img-container'>
              <img
                className='module__cover'
                src={module6cover}
                alt='Module cover'
              />
              <div className='module__cover-text'>
                <p className='module__number'>Module 6</p>
                <p className='module__title'>
                  Home,
                  <br />
                  safe space
                  <br />
                  and
                  <br />
                  belonging
                </p>
              </div>
            </div>

            <p className='module__description'>
              Objective: find and build your own shelter in the soul and find it
              in life, to walk the &quot;hero&apos;s path to oneself&quot;. In
              this module, participants can discover their safe space inside,
              think deeply about the meaning of home and what it means to them
              and how to re-create such sense and feeling of home regardless of
              their current location and circumstances.
            </p>
            <a
              href={module6report}
              className='button'
              target='_blank'
              rel='noreferrer'
            >
              Detailed report: Module 6
            </a>
          </li>
          <li className='modules__module module'>
            <div className='module__img-container'>
              <img
                className='module__cover'
                src={module7cover}
                alt='Module cover'
              />
              <div className='module__cover-text'>
              <p className='module__number'>Module 7</p>
              <p className='module__title'>
                Money
                <br />
                and
                <br />
                wellbeing
              </p>
              </div>
            </div>

            <div className='module__content'>

            </div>

            <p className='module__description'>
              Objective: better understand your feelings, stereotypes, attitudes
              and psychological blocks concerning money. Rediscover your inner
              resources, strengths, talents and skills. Understand the income
              amount for today and set the target income, activate your
              confidence and start taking real steps.
            </p>
            <a
              href={module7report}
              className='button'
              target='_blank'
              rel='noreferrer'
            >
              Detailed report: Module 7
            </a>
          </li>

          <li className='modules__module module'>
            <div className='module__img-container'>
              <img
                className='module__cover'
                src={module8cover}
                alt='Module cover'
              />
              <div className='module__cover-text'>
              <p className='module__number'>Module 8</p>
              <p className='module__title'>
                Unity
                <br />
                and
                <br />
                Integration
              </p>
              </div>
            </div>

            <p className='module__description'>
              Objective: overcome the schism in the Ukrainian society and in
              one&apos;s own soul. Establishing what unites us all regardless of
              where we are, and apply our ability to connect with ourselves and
              to others. The whole person needs to be able to integrate
              different parts of the soul. The module was aimed at helping
              accepting others, being more tolerant and caring no matter the
              differences.
            </p>
            <a
              href={module8report}
              className='button'
              target='_blank'
              rel='noreferrer'
            >
              Detailed report: Module 8
            </a>
          </li>

          <li className='modules__module module'>
          <div className='module__img-container'>
              <img
                className='module__cover'
                src={module9cover}
                alt='Module cover'
              />
              <div className='module__cover-text'>
              <p className='module__number'>Module 9</p>
              <p className='module__title'>The future</p>
              </div>
            </div>

            <p className='module__description'>
              Objective: develop an ability to see and imagine the future, take
              baby steps and have faith in something good, overcome the
              consequences of trauma and assess the extent how the 5 main signs
              of post-traumatic growth are expressed in one&apos;s life. The
              ability to see the future is a symbol of recovery and connection
              with life.
            </p>

            <a
              href={module9report}
              className='button'
              target='_blank'
              rel='noreferrer'
            >
              Detailed report: Module 9
            </a>
          </li>
        </ul>
      </div>
    </section>
  );
};
