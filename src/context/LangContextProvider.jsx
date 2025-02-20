import PropTypes from 'prop-types';
import { createContext, useEffect, useMemo, useState } from 'react';
import { useLocation, useNavigate, useParams } from 'react-router-dom';

export const LangContext = createContext({ lang: 'en', setLang: () => {} });

export const LangContextProvider = ({ children }) => {
  const { lang: paramsLang } = useParams();
  const [lang, setLang] = useState(paramsLang || 'en');
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const langValue = useMemo(
    () => ({
      lang,
      setLang,
    }),
    [lang]
  );

  const url = `/${lang}${pathname.slice(3)}`;
console.log(url);

  useEffect(() => {
    navigate(url);
  }, [lang]);

  return (
    <LangContext.Provider value={langValue}>{children}</LangContext.Provider>
  );
};

LangContextProvider.propTypes = {
  children: PropTypes.element,
};
