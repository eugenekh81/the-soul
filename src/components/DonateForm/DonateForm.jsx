import { useState } from 'react';
import './DonateForm.scss';
import { useLang } from '../../hooks/useLang';
import cn from 'classnames';

/* async function sha1(str) {
  const enc = new TextEncoder();
  const hash = await crypto.subtle.digest('SHA-1', enc.encode(str));
  return hash;
} */

export const DonateForm = () => {
  const lang = useLang();
  const [amount, setAmount] = useState(0);
  const [mode, setMode] = useState('donate');
/*   const [data, setData] = useState('');
  const [signature, setSignature] = useState(''); */

  const handleFormSubmit = (e) => {
    e.preventDefault();
  };

/*   useEffect(() => {
    codeData().then((result) => {
      setData(result.codedData);
      setSignature(result.signature_code);
    });
  }, [amount]); */

/*   const codeData = async () => {
    const private_key = 'sandbox_VFGYdM7B5C9bfpd6YIHJnIpdqJGv6x1XyRAOx1is';
    const public_key = 'sandbox_i39057759049';

    const data = {
      action: mode,
      amount,
      currency: 'UAH',
      description: mode === 'donation' ? 'Donation' : 'Subscription',
      version: 3,
      private_key,
      public_key,
    };

    const jsonString = JSON.stringify(data);
        console.log(jsonString, 'this is json string');

    const codedData = btoa(jsonString);
        console.log(codedData, 'this is coded data');

    const signatureString = private_key + codedData + private_key;
    const signature_code = await sha1(signatureString).then((res) => btoa(res));

        console.log(signature_code, 'this is signature code');
    console.log(signatureString, 'this is signature string');
    // console.log(codedData, signature_code);
    return { codedData, signature_code };
  };
*/

  return (
    <>
      <form className='donate-form' onSubmit={handleFormSubmit}>
        <div className='donate-form__mode-selector'>
          <button
            type='button'
            className={cn('donate-form__mode-button', {
              'donate-form__mode-button--active': mode === 'donate',
            })}
            onClick={() => {
              setMode('donate');
            }}
          >
            {lang === 'en' ? '' : 'Разовий внесок'}
          </button>
          <button
            type='button'
            className={cn('donate-form__mode-button', {
              'donate-form__mode-button--active': mode === 'subscribe',
            })}
            onClick={() => {
              setMode('subscribe');
            }}
          >
            {lang === 'en' ? '' : 'Підписка'}
          </button>
          <div className='donate-form__marker'></div>
        </div>
        <label className='donate-form__label'>
          {lang === 'en'
            ? "Enter the amount you'd like to donate:"
            : 'Вкажіть бажану суму:'}
          <input
            min={0}
            type='text'
            className='donate-form__input'
            value={amount}
            onChange={(e) => {
              setAmount(e.target.value);
            }}
          />
        </label>
        <button type='submit' className='donate-form__button'>
          {lang === 'en' ? 'Donate' : 'Підтримати'}
        </button>
      </form>


      {/* <form
        method='POST'
        action='https://www.liqpay.ua/api/3/checkout'
        acceptCharset='utf-8'
      >
        <input
          type='hidden'
          name='data'
           // value='eyJwdWJsaWNfa2V5Ijoic2FuZGJveF9pMzkwNTc3NTkwNDkiLCJ2ZXJzaW9uIjoiMyIsImFjdGlvbiI6InBheSIsImFtb3VudCI6IjMiLCJjdXJyZW5jeSI6IlVBSCIsImRlc2NyaXB0aW9uIjoidGVzdCIsIm9yZGVyX2lkIjoiMDAwMDAxIn0='
          value={data}
        />

        <input
          type='hidden'
          name='signature'
          // value='9msc1u3B3BCRfSL/EcMyMlwCoVY='
          // value='/4LhC/egfizoCvKQCbgCm6A3eYg='
          value={signature}
        />
        <input type='image' src='//static.liqpay.ua/buttons/p1ru.radius.png' />
      </form> */}
    </>
  );
};
