import PropTypes from 'prop-types';
import { useState } from 'react';
import cn from 'classnames';
import { useLang } from '../../hooks/useLang';

export const CopyValue = ({ value }) => {
  const [copied, setCopied] = useState(false);
  const lang = useLang();

  const handleCopy = async () => {
    setCopied(true);
    await navigator.clipboard.writeText(value);
  };

  if (setCopied) {
    setTimeout(() => setCopied(false), 1500);
  }

  return (
    <button
      type='button'
      className='payment-block__destination'
      onClick={handleCopy}
/*       onTouchStart={handleCopy}
      onTouchEnd={handleCopy} */
    >
      <p className='payment-block__account-number'>{value}</p>
      <div className='payment-block__copy-block'>
        {lang === 'en' ? (
          <span
            className={cn('payment-block__copy-text', {
              'payment-block__copy-text--copied': copied,
            })}
          >
            {copied ? 'Copied' : 'Copy'}
          </span>
        ) : (
          <span
            className={cn('payment-block__copy-text', {
              'payment-block__copy-text--copied': copied,
            })}
          >
            {copied ? 'Скопійовано' : 'Скопіювати'}
          </span>
        )}

        {copied ? (
          <svg
            data-v-4f2e3be5=''
            width='24'
            height='24'
            viewBox='0 0 24 24'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
            className='payment-block__copy-icon'
            onClick={handleCopy}
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
            onClick={handleCopy}
          >
            <path
              d='M18 5.086L12.914 0H5a3 3 0 00-3 3v17h16V5.086zM4 18V3a1 1 0 011-1h7v4h4v12H4zm18-9v15H7v-2h13V7l2 2z'
              fill='#111'
            ></path>
          </svg>
        )}
      </div>
    </button>
  );
};

CopyValue.propTypes = {
  value: PropTypes.string.isRequired,
};
