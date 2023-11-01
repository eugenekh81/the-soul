import './PastProjects.scss';

export const PastProjects = () => {
  return (
    <section className='page__section section past-projects'>
      <div className='container'>
        <h2 className='section__title'>Past projects</h2>

        <div className='projects__past-project past-project'>
          <div className='past-project__image'>
            <img
              src='/images/projects/projects--crisis-center.jpg'
              alt='Crisis center'
            />
          </div>
          <div className='past-project__description'>
            In February 2022 from the Soul Development Center, we became
            the Soul Crisis Center. We were helping all people affected by the
            war to maintain their mental health, deal with the trauma and take
            difficult decisions.
            <br />
            <br />
            During 2022, we provided about 100 sessions to women, men, parents with children who needed mental health support. We were doing this pro bono and with the help of our international sponsors.
          </div>
        </div>

        <div className='projects__past-project past-project past-project--reverse'>
          <div className='past-project__image'>
            <img
              src='/images/projects/projects--groups.jpg'
              alt='Live groups'
            />
          </div>
          <div className='past-project__description'>
            In autumn 2022, we launched a series of Psychological support groups
            called “Meetings with The Soul” Every Saturday at 11:00 am people
            could join us online via Zoom for a free group therapy session.
            <br />
            <br />
            We designed every meet-up around a particular theme and these
            sessions were helping people process their difficult feelings and
            emotions, take some important decisions, share what&apos;s happening in
            their lives and receive support from each other and our
            psychologists.
          </div>
        </div>
        <div className='projects__past-project past-project'>
          <div className='past-project__image'>
            <img
              src='/images/projects/projects--meetings-with-soul.jpg'
              alt='Meetings with soul'
            />
          </div>
          <div className='past-project__description'>
            In autumn 2022, we launched a series of Psychological support groups
            called “Meetings with The Soul” Every Saturday at 11:00 am people
            could join us online via Zoom for a free group therapy session.
            <br />
            <br />
            We designed every meet-up around a particular theme and these
            sessions were helping people process their difficult feelings and
            emotions, take some important decisions, share what&apos;s happening in
            their lives and receive support from each other and our
            psychologists.
          </div>
        </div>
      </div>
    </section>
  );
};
