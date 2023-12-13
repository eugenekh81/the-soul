import './PaymentBlock.scss';
import payPalLogo from '/images/donate/paypal.png';
import { useState } from 'react';
import cn from 'classnames';
import { useLang } from '../../hooks/useLang';
import { CopyValue } from '../CopyValue/CopyValue';
import { NavLink } from 'react-router-dom';

export const PaymentBlock = () => {
  const [paymentMethod1Open, setPaymentMethod1Open] = useState(false);
  const [paymentMethod2Open, setPaymentMethod2Open] = useState(false);
  const [paymentMethod3Open, setPaymentMethod3Open] = useState(false);
  const [paymentMethod4Open, setPaymentMethod4Open] = useState(false);
  const [paymentMethod5Open, setPaymentMethod5Open] = useState(false);
  const [paymentMethod6Open, setPaymentMethod6Open] = useState(false);

  const [banksList1Open, setBanksList1Open] = useState(false);
  const [banksList2Open, setBanksList2Open] = useState(false);

  const lang = useLang();

  return (
    <section className='payments'>
      <article
        className={cn('payment-block', {
          'payment-block--open': paymentMethod1Open,
        })}
      >
        <button
          type='button'
          className='payment-block__title'
          onClick={() => setPaymentMethod1Open(!paymentMethod1Open)}
        >
          {lang === 'en' ? 'Bank transfer (UAH)' : 'Банківський переказ (ГРН)'}
        </button>

        <div className='payment-block__content'>
          <label className='payment-block__label'>
            <span className='payment-block__label-text'>Назва компанії</span>
            <CopyValue value='45120359' />
          </label>

          <label className='payment-block__label'>
            <span className='payment-block__label-text'>ЄДРПОУ</span>
            <CopyValue value='45120359' />
          </label>

          <label className='payment-block__label'>
            <span className='payment-block__label-text'>
              Призначення платежу
            </span>
            <CopyValue value='Безповоротній благодійний внесок' />
          </label>

          <label className='payment-block__label'>
            <span className='payment-block__label-text'>Номер рахунку</span>
            <CopyValue value='UA 16 305299 00000 26009040130741' />
          </label>
        </div>
      </article>

      <article
        className={cn('payment-block', {
          'payment-block--open': paymentMethod2Open,
        })}
      >
        <button
          type='button'
          className='payment-block__title'
          onClick={() => setPaymentMethod2Open(!paymentMethod2Open)}
        >
          {lang === 'en'
            ? 'Bank transfer (USD)'
            : 'Банківський переказ (Долар США)'}
        </button>

        <div className='payment-block__content'>
          <p className='payment-block__company-name'>
            ГО УКРАЇНСЬКИЙ ПСИХОЛОГІЧНИЙ ЦЕНТР &quot;ДУША&quot;
          </p>

          <label className='payment-block__label'>
            <span className='payment-block__label-text'>IBAN</span>
            <CopyValue value='UA 04 305299 00000 26000000139424' />
          </label>

          <label className='payment-block__label'>
            <span className='payment-block__label-text'>Назва банку</span>
            <CopyValue value='JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE' />
          </label>

          <label className='payment-block__label'>
            <span className='payment-block__label-text'>SWIFT</span>
            <CopyValue value='PBANUA2X' />
          </label>

          <label className='payment-block__label'>
            <span className='payment-block__label-text'>
              Призначення платежу
            </span>
            <CopyValue value='Безповоротній благодійний внесок' />
          </label>

          <div
            className={cn('payment-block__banks', {
              'payment-block__banks--open': banksList1Open,
            })}
          >
            <button
              type='button'
              className='payment-block__accordion'
              onClick={() => {
                setBanksList1Open(!banksList1Open);
              }}
            >
              {' '}
              Банки кореспонденти
            </button>

            <ul className='payment-block__banks-list'>
              <li className='payment-block__bank-item'>
                <p className='payment-block__bank-info'>
                  Рахунок у банку-кореспонденті <span>001-1-000080</span>
                </p>
                <p className='payment-block__bank-info'>
                  SWIFT Code банку-кореспондента <span>CHASUS33</span>
                </p>
                <p className='payment-block__bank-info'>
                  Банк-кореспондент{' '}
                  <span>JP Morgan Chase Bank, New York, USA</span>
                </p>
              </li>
              <li className='payment-block__bank-item'>
                <p className='payment-block__bank-info'>
                  Рахунок у банку-кореспонденті <span>890-0085-754</span>
                </p>
                <p className='payment-block__bank-info'>
                  SWIFT Code банку-кореспондента <span>IRVT US 3N</span>
                </p>
                <p className='payment-block__bank-info'>
                  Банк-кореспондент{' '}
                  <span>The Bank of New York Mellon, New York, USA</span>
                </p>
              </li>
              <li className='payment-block__bank-item'>
                <p className='payment-block__bank-info'>
                  Рахунок у банку-кореспонденті <span>36445343</span>
                </p>
                <p className='payment-block__bank-info'>
                  SWIFT Code банку-кореспондента <span>CITI US 33</span>
                </p>
                <p className='payment-block__bank-info'>
                  Банк-кореспондент <span>Citibank N.A., NEW YORK, USA</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article
        className={cn('payment-block', {
          'payment-block--open': paymentMethod3Open,
        })}
      >
        <button
          type='button'
          className='payment-block__title'
          onClick={() => setPaymentMethod3Open(!paymentMethod3Open)}
        >
          {lang === 'en' ? 'Bank transfer (EUR)' : 'Банківський переказ (Євро)'}
        </button>

        <div className='payment-block__content'>
          <p className='payment-block__company-name'>
            ГО УКРАЇНСЬКИЙ ПСИХОЛОГІЧНИЙ ЦЕНТР &quot;ДУША&quot;
          </p>

          <label className='payment-block__label'>
            <span className='payment-block__label-text'>IBAN</span>
            <CopyValue value='UA 04 305299 00000 26008030133492' />
          </label>

          <label className='payment-block__label'>
            <span className='payment-block__label-text'>Назва банку</span>
            <CopyValue value='JSC CB "PRIVATBANK", 1D HRUSHEVSKOHO STR., KYIV, 01001, UKRAINE' />
          </label>

          <label className='payment-block__label'>
            <span className='payment-block__label-text'>SWIFT</span>
            <CopyValue value='PBANUA2X' />
          </label>

          <label className='payment-block__label'>
            <span className='payment-block__label-text'>
              Призначення платежу
            </span>
            <CopyValue value='Безповоротній благодійний внесок' />
          </label>

          <div
            className={cn('payment-block__banks', {
              'payment-block__banks--open': banksList2Open,
            })}
          >
            <button
              type='button'
              className='payment-block__accordion'
              onClick={() => {
                setBanksList2Open(!banksList2Open);
              }}
            >
              {' '}
              Банки кореспонденти
            </button>

            <ul className='payment-block__banks-list'>
              <li className='payment-block__bank-item'>
                <p className='payment-block__bank-info'>
                  Рахунок у банку-кореспонденті <span>400886700401</span>
                </p>
                <p className='payment-block__bank-info'>
                  SWIFT Code банку-кореспондента <span>COBADEFF</span>
                </p>
                <p className='payment-block__bank-info'>
                  Банк-кореспондент{' '}
                  <span>Commerzbank AG, Frankfurt am Main, Germany</span>
                </p>
              </li>
              <li className='payment-block__bank-item'>
                <p className='payment-block__bank-info'>
                  Рахунок у банку-кореспонденті <span>6231605145</span>
                </p>
                <p className='payment-block__bank-info'>
                  SWIFT Code банку-кореспондента <span>CHASDEFX</span>
                </p>
                <p className='payment-block__bank-info'>
                  Банк-кореспондент{' '}
                  <span>J.P.MORGAN AG, FRANKFURT AM MAIN, GERMANY</span>
                </p>
              </li>
            </ul>
          </div>
        </div>
      </article>

      <article
        className={cn('payment-block', {
          'payment-block--open': paymentMethod4Open,
        })}
      >
        <button
          type='button'
          className='payment-block__title payment-block__title--paypal'
          onClick={() => setPaymentMethod4Open(!paymentMethod4Open)}
        > PAYPAL
          <img className="payment-block__logo-image" src={payPalLogo} alt="PayPal" />
        </button>

        <div className='payment-block__content'>
          <CopyValue value='innavolak@gmail.com' />
        </div>
      </article>

      <article
        className={cn('payment-block', {
          'payment-block--open': paymentMethod5Open,
        })}
      >
        <button
          type='button'
          className='payment-block__title'
          onClick={() => setPaymentMethod5Open(!paymentMethod5Open)}
        >
          Credit / Debit Card
        </button>

        <div className='payment-block__content'>
          <NavLink
            to={`https://www.liqpay.ua/${lang}/checkout/i59265553187`}
            target='_blank'
            className='donate-page__liqpay'
          >
            {lang === 'en' ? 'Card transfer' : 'Переказ на картку'}
          </NavLink>
        </div>
      </article>
    </section>
  );
};
