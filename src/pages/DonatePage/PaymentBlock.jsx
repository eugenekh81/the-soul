import { useState } from 'react';

export const PaymentBlock = () => {
  const [copied, setCopied] = useState(false);
  const account_number = 'UA 47 305299 00000 26005026707459 XXX';

  const handleCopy = async () => {
    await navigator.clipboard.writeText(account_number);
    setCopied(true);

    setTimeout(() => setCopied(false), 1500);
  };

  return (
    <section className='payment-block'>
      <div className='container'>
        <h2 className='payment-block__title'>Банківський переказ по Україні</h2>

        <p className='payment-block__description'>
          Якщо ви плануєте благодійний внесок від імені юридичної особи та
          бажаєте поспілкуватись з командою партнерств, заповніть форму за
          посиланнямarrow-up-right.svg, щоб ми сконтактували з вами.
        </p>

        <p className='payment-block__company-name'>
          ГО Психологічний Центр &quot;Душа&quot;
        </p>

        <p className='payment-block__account-info'>
          ЄДРПОУ{' '}
          <span className='payment-block__account-info--bold'>43720363</span>
        </p>

        <p className='payment-block__account-info'>
          Призначення платежу{' '}
          <span className='payment-block__account-info--bold'>
            Благодійний безповоротний внесок
          </span>
        </p>

        <div className='payment-block__destination' onClick={handleCopy}>
          <p className='payment-block__account-number'>{account_number}</p>
          <div className='payment-block__copy-block'>
            <span className='payment-block__copy-text'>
              {copied ? ' Скопійовано' : 'Скопіювати'}
            </span>
            {copied ? (
              <svg
                data-v-4f2e3be5=''
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='donation-field__icon-copied fs-0'
              >
                <g
                  clipPath='url(#copied_svg__clip0_1118_7115)'
                  stroke='#4E51FF'
                  strokeWidth='2'
                  strokeLinejoin='round'
                >
                  <path d='M17.297 6.504l-9.02 10.863-6.49-7.247M22.533 6.523l-9.02 10.863'></path>
                </g>
                <defs>
                  <clipPath id='copied_svg__clip0_1118_7115'>
                    <path fill='#fff' d='M0 0h24v24H0z'></path>
                  </clipPath>
                </defs>
              </svg>
            ) : (
              <svg
                data-v-4f2e3be5=''
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'
                className='payment-block__copy-icon'
              >
                <path
                  d='M18 5.086L12.914 0H5a3 3 0 00-3 3v17h16V5.086zM4 18V3a1 1 0 011-1h7v4h4v12H4zm18-9v15H7v-2h13V7l2 2z'
                  fill='#111'
                ></path>
              </svg>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};
