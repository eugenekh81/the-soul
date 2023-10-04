import './ModulesList.scss';
import module1__image from '../../../public/images/modules/module-1/module1-main.png';
import module2__image from '../../../public/images/modules/module-2/module2-main.png';
import module3__image from '../../../public/images/modules/module-3/module3-main.png';
import module4__image from '../../../public/images/modules/module-4/module4-main.png';
import module5__image from '../../../public/images/modules/module-5/module5-main.png';
import module6__image from '../../../public/images/modules/module-6/module6-main.png';
import module7__image from '../../../public/images/modules/module-7/module7-main.png';
import module8__image from '../../../public/images/modules/module-8/module8-main.png';
import module9__image from '../../../public/images/modules/module-9/module9-main.png';

// import Carousel from 'react-bootstrap/Carousel';

export const ModulesList = () => {
  return (
    <section className="modules">
      <div className="container">
      <h2 className="modules__title">
        The programme consists of 9 modules:
      </h2>

      <ul className="modules__list">
        <li className="modules__module module">
          <h3 className="module__title">
            Module 1. Feelings and emotions
          </h3>

          <div className="module__image-container">
            <img className="module__image" src={module1__image} alt="" />
          </div>
          {/* <div className="module__carousel">
           <Carousel>
      <Carousel.Item interval={3000}>
        <img src={module1__image}  className="module__image" alt="module 1" />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src={module1__image}  className="module__image" alt="module 1" />
        {/* <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={3000}>
        <img src={module1__image}  className="module__image" alt="module 1" />
        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
          </Carousel>
          </div>
          */}


          <p className="module__description">
            Objective: understand one&apos;s state and conditions, and not to direct your emotions at destroying yourself and others. Learn to deal with difficult feelings and process them like &quot;in a transformer booth&quot;. In fact, the Program became such a &quot;transformer booth&quot; to help people cope with their conditions and give them support.
          </p>
          <a href="#" className="module__report-button">
            Detailed report: Module 1
          </a>
        </li>

        <li className="modules__module module">
          <h3 className="module__title">
            Module 2. Body
          </h3>

          <div className="module__image-container">
            <img className="module__image" src={module2__image} alt="" />
          </div>

          <p className="module__description">
            Objective: learn relaxation techniques and stress relief through physical exercises. The body is supposed to help us cope with everything that we are going through, and we are need to learn how to support our body.
          </p>
          <a href="#" className="module__report-button">
            Detailed report: Module 2
          </a>
        </li>
        <li className="modules__module module">
          <h3 className="module__title">
            Module 3. Strength and confidence
          </h3>

          <div className="module__image-container">
            <img className="module__image" src={module3__image} alt="" />
          </div>

          <p className="module__description">
            Objective: investigate and explore their own aggression and to learn how to deal with it constructively and apply for creativity, effective actions or work. This was the most popular question among participants.
          </p>
          <a href="#" className="module__report-button">
            Detailed report: Module 3
          </a>
        </li>
        <li className="modules__module module">
          <h3 className="module__title">
            Module 4. Love and relationships
          </h3>

          <div className="module__image-container">
            <img className="module__image" src={module4__image} alt="" />
          </div>

          <p className="module__description">
            Objective: find feeling of self-love, get to know yourself better. And then look at the relationships honestly, without illusions and false expectations, and to accept a partner or make a decision about separation, look for new ways to be together and support each other.
          </p>
          <a href="#" className="module__report-button">
            Detailed report: Module 4
          </a>
        </li>
        <li className="modules__module module">
          <h3 className="module__title">
            Module 5. Freedom and responsibility
          </h3>

          <div className="module__image-container">
            <img className="module__image" src={module5__image} alt="" />
          </div>

          <p className="module__description">
            Objective: understand the concepts of freedom, independence, dependence on another person and interdependence, learn how to distinguish them. It&apos;s important to understand the difference between freedom <b>from</b> something (someone) and freedom to do something. The goal is also to work through separation from the parents and obsolete ideas about yourself that no longer serve you.
          </p>
          <a href="#" className="module__report-button">
            Detailed report: Module 5
          </a>
        </li>

        <li className="modules__module module">
          <h3 className="module__title">
            Module 6. Home, safe space and belonging
          </h3>

          <div className="module__image-container">
            <img className="module__image" src={module6__image} alt="" />
          </div>

          <p className="module__description">
            Objective: find, build your own shelter in the soul and find it in life, to walk the &quot;hero&apos;s path to oneself&quot;. In this module, participants can discover their safe space inside, think deeply about the meaning of home and what it means to them and how to re-create such sense and feeling of home regardless of their current location and circumstances.
          </p>
          <a href="#" className="module__report-button">
            Detailed report: Module 6
          </a>
        </li>
        <li className="modules__module module">
          <h3 className="module__title">
            Module 7. Money and wellbeing
          </h3>

          <div className="module__image-container">
            <img className="module__image" src={module7__image} alt="" />
          </div>

          <p className="module__description">
            Objective:  better understand your feelings, stereotypes, attitudes and psychological blocks concerning money. Rediscover your inner resources, strengths, talents and skills. Understand the income amount for today and set the target income, activate your confidence and start taking real steps.
          </p>
          <a href="#" className="module__report-button">
            Detailed report: Module 7
          </a>
        </li>


        <li className="modules__module module">
          <h3 className="module__title">
            Module 8. Unity and Integration
          </h3>

          <div className="module__image-container">
            <img className="module__image" src={module8__image} alt="" />
          </div>

          <p className="module__description">
            Objective: overcome the schism in the Ukrainian society and in one&apos;s own soul. Establishing what unites us all regardless of where we are, and apply our ability to connect with ourselves and to others. The whole person needs to be able to integrate different parts of the soul. The module was aimed at helping accepting others, being more tolerant and caring no matter the differences.
          </p>
          <a href="#" className="module__report-button">
            Detailed report: Module 8
          </a>
        </li>

        <li className="modules__module module">
          <h3 className="module__title">
            Module 9. The future
          </h3>

          <div className="module__image-container">
            <img className="module__image" src={module9__image} alt="" />
          </div>

          <p className="module__description">
            Objective: develop an ability to see and imagine the future, take baby steps and have faith in something good, overcome the consequences of trauma and assess the extent how the 5 main signs of post-traumatic growth are expressed in one&apos;s life. The ability to see the future is a symbol of recovery and connection with life.
          </p>

          <a href="#" className="module__report-button">
            Detailed report: Module 9
          </a>
        </li>

      </ul>
      </div>


    </section>
  );
};
