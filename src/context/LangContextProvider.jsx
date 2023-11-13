import PropTypes from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

export const LangContext = createContext({ lang: 'en', setLang: () => {} });

export const LangContextProvider = ({ children }) => {
  const [lang, setLang] = useState('en');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const langValue = useMemo(
    () => ({
      lang,
      setLang,
    }),
    [lang]
  );

  console.log(location, 'this is location in context');
  const url = `/${lang}${pathname.slice(3)}`;
  console.log(url);

  useEffect(() => {
    console.log(pathname, 'pathname changed');
    navigate(url);
  }, [pathname, lang]);

  return (
    <LangContext.Provider value={langValue}>{children}</LangContext.Provider>
  );
};

LangContextProvider.propTypes = {
  children: PropTypes.element,
};
