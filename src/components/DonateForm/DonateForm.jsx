import { useContext, useRef, useState } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import './DonateForm.scss';

export const DonateForm = () => {
  const { lang } = useContext(LangContext);
  const [amount, setAmount] = useState(0);

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

  const donateInputField = useRef(null);

  return (
    <form className='donate-form' onSubmit={handleFormSubmit}>
      <label className='donate-form__label'>
        {lang === 'en'
          ? "Enter the amount you'd like to donate:"
          : 'Вкажіть бажану суму:'}
        <input
          min={0}
          type='text'
          className='donate-form__input'
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
          ref={donateInputField}
        />
      </label>
      <button type='submit' className='donate-form__button'>
        {lang === 'en' ? 'Donate' : 'Підтримати'}
      </button>
    </form>
  );
};
