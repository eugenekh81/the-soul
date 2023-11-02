
import { Outlet } from 'react-router-dom';
import { Header } from '/src/components/Header/';
import { Contacts } from '/src/components/Contacts/';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';

export const Root = () => {
  return (
    <ScrollToTop>
      <Header />
      <main className='page__main'>
        <Outlet />
      </main>

      <Contacts />
    </ScrollToTop>
  );
};
