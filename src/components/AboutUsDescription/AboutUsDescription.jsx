import documents from '/images/about-us/about-us--documents.jpg';

export const AboutUsDescription = () => {
  return (
    <section className='about-us__description page__section section'>
      <div className='container'>
        <div className='about-us__description-content'>
          <div className='about-us__description-text-container'>
            <p className='about-us__description-text'>
              Український Центр психології THE SOUL - це професійне обʼєднання
              психологів різних напрямів, створене з метою надання психологічної
              допомоги людям.
            </p>
            <p className='about-us__description-text'>
              Український Центр Психології The Soul “Душа” був створений 2
              лютого 2021 року як ініціативний союз психологів, які практикують
              у різних напрямках (психоаналіз, психотерапія, юнгіанський аналіз,
              схема терапія, психодрама, танце-рухова та тілесно-орієнтована
              терапії).
            </p>
            <p className='about-us__description-text'>
              З 2023 року ми працюємо як Громадська організація “Український
              Центр психології “Душа”.
            </p>
            <p className='about-us__description-text'>
              В нашій команді 4 психологи - Олександра Шиманова, Марія
              Винницька, Марина Яхно та Ірина Роєнко. Всі ми знаходимось в
              різних кінцях світу - Олександра - Бельгія, Марія - Сінгапур,
              Марина та Ірина - Україна, але працюємо разом, обʼєднані однією
              метою та місією.
            </p>
          </div>
          <div className='about-us__description-documents-container'>
            <img
              src={documents}
              alt='The Soul Center documents'
              className='about-us__description-documents'
            />
          </div>
        </div>
      </div>
    </section>
  );
};
