import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';

export const MeetingWithTheSoulBanner = () => {
  const { lang } = useContext(LangContext);
  return (
    <section className='meeting-soul'>
      <div className='meeting-soul__banner'>
        <h1 className='meeting-soul__main-title'>
          {lang === 'en' ? <>Meeting with the Soul</> : <>Зустрічі з Душею</>}
        </h1>
      </div>
    </section>
  );
};
