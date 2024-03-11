import { Outlet } from 'react-router-dom';
import NavBar from '../ui/NavBar';
import Button from '../ui/Basics/Bouton';

export default function Root() {

  return (
    <>
      <NavBar/>
      <Button/>
      {/* <Outlet/> */}
    </>
  );
}
