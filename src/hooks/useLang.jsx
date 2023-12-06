import { useContext } from 'react';
import { LangContext } from '../context/LangContextProvider';

export const useLang = () => {
  const { lang } = useContext(LangContext);

  return lang;
};
