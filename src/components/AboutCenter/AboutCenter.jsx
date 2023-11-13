import { useContext } from 'react';
import './AboutCenter.scss';
import { LangContext } from '../../context/LangContextProvider';

export const AboutCenter = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className='page__section section about-center'>
      <div className='container'>
        <h2 className='about-center__title section__title'>
          {lang === 'en' ? 'About Us' : 'Про Нас'}
        </h2>

        <div className="about-center__content">
        <div className="about-center__image-container">
          <img src="/images/home/home--team.png" alt="The Soul Team" />
        </div>
        <p className='about-center__text'>
          The Soul Psychology Center was founded in Feb 2021.
          <br />
          <br />
          <span>When the war started</span>, in Feb 2022 we opened the Crisis Center
          providing free mental health services to people affected and
          traumatized by the war. In February 2023, we officially registered our
          NGO - <span>Ukrainian Psychology Center &quot;THE SOUL&quot;</span>
          <br />
          <br />
          <span>Our mission</span> is to help Ukrainians cope and survive mentally, recover from the war trauma and build resilience to be able to create a new future for themselves, our country and next generations.
          <br />
          <br />
          <span>We strive</span> to make psychotherapy and mental health services accessible and attractive to people, to make it an integral part of everyday life - same as grocery shopping or a visit to a theater, buying medicines or taking care of one&apos;s body.
        </p>

        </div>
      </div>
    </section>
  );
};
