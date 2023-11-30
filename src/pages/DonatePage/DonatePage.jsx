import { useContext } from 'react';
import { LangContext } from '../../context/LangContextProvider';
import './DonatePage.scss';
import { DonateForm } from '../../components/DonateForm';

export const DonatePage = () => {
  const { lang } = useContext(LangContext);
  return (
    <div className='donate-page'>
      <section className='page__section section donate-page__hero'>
        <h1 className='donate-page__main-title'>
          {lang === 'en' ? 'Donate' : 'Підтримати'}
        </h1>
      </section>

      <section className='page__section section donate-page__content'>
        <div className='container'>
          <div className='donate-page__text-container'>
            <p className='donate-page__text'>
              {lang === 'en'
                ? 'Everything we do is free of charge for everyone. We have worked and will continue to work only because of your support.'
                : 'Вся наша діяльність - безоплатна для людей. Ми працювали і працюємо тільки завдяки вашій підтримці.'}
            </p>
            <p className='donate-page__text'>
              {lang === 'en'
                ? 'We encourage you to join and contribute to the mental health of Ukrainians who have suffered from the war, lost their loved ones, family, home, and have been forced to leave their homeland.'
                : 'Ми закликаємо вас долучитись та зробити внесок у ментальне здоровʼя українців, що постраждали від війни, втратили рідних, сімʼю, домівку, були змушені виїхати за кордон тощо.'}
            </p>
            <p className='donate-page__text'>
              {lang === 'en'
                ? 'You may donate any amount to support our Center - this donation will be used to fun our project and sustain our operations.'
                : 'Ви можете переказати будь-яку комфортну вам суму в підтримку нашого Центру - вона буде направлена на реалізацію наших проектів та підтримку діяльності.'}
            </p>
          </div>

          <DonateForm />

          <div className='donate-page__text-container'>
            <p className='donate-page__text donate-page__text--tc'>
              {lang === 'en'
                ? 'The funds collected by the Non-Governmental Organization \'Ukrainian Center of Psychology "The Soul"\' (hereinafter - "The Soul Psychology Center") are gathered for the implementation of projects by The Soul Psychology Center aimed at providing free assistance to civilians affected by the war between Russia and Ukraine, both within and beyond Ukraine\'s borders, both offline and online. By making a charitable contribution through the LiqPay tool, you give consent to this and agree that the donation amount is non-refundable. Any remaining funds designated for a specific project may be reallocated to upcoming projects of The Soul Psychology Center.'
                : 'Грошові кошти, зібрані Громадською організацією \'Український Центр психології "Душа"\' (далі - Центр психології "Душа") збираються задля реалізації проектів Центру психології "Душа "з метою надання безоплатної допомоги цивільним особам, постраждалим від війні Росії з Україною, як на території України, так і за її межами, як офлайн, так і онлайн. Сплачуючи благодійний внесок через інструмент LiqPay ви даєте згоду на це, а також погоджуєтесь на те, що сума пожертвування не підлягає поверненню. Залишок коштів, направлених на певний проект може бути перерозподілений на наступні проекти Центру психології "Душа".'}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};
