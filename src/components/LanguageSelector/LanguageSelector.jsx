import './LanguageSelector.scss';
import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import cn from 'classnames';

export const LanguageSelector = () => {
  const { lang, setLang } = useContext(LangContext);

  const languageToggler = () => {
    if (lang === 'en') {
      return setLang('ua');
    }

    setLang('en');
  };
  return (
    <div className='language-selector'>
      <button
        className={cn('language-selector__button', {
          'language-selector__button--active': lang === 'en',
        })}
        onClick={() => setLang('en')}
      >
        en
      </button>
      <div
        className={cn('language-selector__toggler-window', {
          'language-selector__toggler-window--en': lang === 'en',
          'language-selector__toggler-window--ua': lang === 'ua',
        })}
        onClick={languageToggler}
      >
        <div
          className={cn(
            'language-selector__toggler',
            { 'language-selector__toggler--lang-en': lang === 'en' },
            { 'language-selector__toggler--lang-ua': lang === 'ua' }
          )}
        ></div>
      </div>
      <button
        className={cn('language-selector__button', {
          'language-selector__button--active': lang === 'ua',
        })}
        onClick={() => setLang('ua')}
      >
        ua
      </button>
    </div>
  );
};
