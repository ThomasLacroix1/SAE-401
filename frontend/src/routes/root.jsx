import { Outlet } from 'react-router-dom';
import NavBar from '../ui/NavBar';
import Button from '../ui/Basics/Bouton';
import Card from '../ui/Basics/Card';

export default function Root() {

  return (
    <div className="flex flex-col gap-4">
      <NavBar/>
      <div className='p-16 flex gap-4'>
        <Card/>
        <Card/>
      </div>
      {/* <Outlet/> */}
    </div>
  );
}
