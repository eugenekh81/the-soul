
import { Outlet } from 'react-router-dom';
import { Header } from '/src/components/Header/';
import { Contacts } from '/src/components/Contacts/';

export const Root = () => {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>

      <Contacts />
    </>
  );
};
