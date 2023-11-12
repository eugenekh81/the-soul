import './JoinTheProgram.scss';

export const JoinTheProgram = () => {
  return (
    <section className='page__section section join-the-program'>
      <div className='container'>
        <h2 className='section__title block-centered'>JOIN THE PROGRAM</h2>

        <div className='join-the-program__content'>
          <p className='section__description'>
            You are welcome to participate in the Ukrainian Circle project, it
            is available in our Telegram channel.
            <br />
            <br />
            To enroll, all you need to do is to submit the form below
          </p>

          <a
            href='https://docs.google.com/forms/d/e/1FAIpQLSeYA4pNgP0AgMVi93cLSBnwq5PNOdLGqqfGOTTH5ZUn1_d-RA/viewform'
            className='button section__button'
            target='_blank'
            rel='noreferrer'
          >
            Join
          </a>
        </div>
      </div>
    </section>
  );
};
