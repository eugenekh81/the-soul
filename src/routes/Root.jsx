
import { Outlet } from 'react-router-dom';
import { Header } from '/src/components/Header/';
import { Footer } from '/src/components/Footer/';
import { ScrollToTop } from '../components/ScrollToTop/ScrollToTop';

export const Root = () => {
  return (
    <ScrollToTop>
      <Header />
      <main className='page__main'>
        <Outlet />
      </main>
      <Footer />
    </ScrollToTop>
  );
};
