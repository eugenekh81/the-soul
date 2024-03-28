import { useLang } from '../../hooks/useLang';

export const CrisisCenterBanner = () => {
  const lang = useLang();
  return (
    <div className='crisis-center__banner'>
      <h1 className='crisis-center__main-title animation animation__fade-up animation__fade-up--fire'>
        {lang === 'en' ? 'Crisis Center' : 'Кризовий Центр'}
        <br />
        The Soul
      </h1>
    </div>
  );
};
