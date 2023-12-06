import { useLang } from '../../hooks/useLang';

export const MeetingWithTheSoulBanner = () => {
  const lang = useLang();
  return (
    <section className='meeting-soul'>
      <div className='meeting-soul__banner'>
        <h1 className='meeting-soul__main-title animation animation__fade-up animation__fade-up--fire'>
          {lang === 'en' ? <>Meetings with The Soul</> : <>Зустрічі з Душею</>}
        </h1>
      </div>
    </section>
  );
};
