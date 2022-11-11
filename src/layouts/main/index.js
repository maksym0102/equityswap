import { Outlet } from 'react-router-dom';
// material
//
import MainNavbar from './MainNavbar';
import MainFooter from './MainFooter';

// ----------------------------------------------------------------------

export default function MainLayout() {
  return (
    <>
      <MainNavbar />
      <div>
        <Outlet />
      </div>
      <MainFooter />
    </>
  );
}
