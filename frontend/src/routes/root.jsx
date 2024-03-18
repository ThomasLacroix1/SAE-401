import { Outlet } from 'react-router-dom';
import NavBar from '../ui/NavBar';
import Button from '../ui/Basics/Bouton';

export default function Root() {

  return (
    <div className="flex flex-col gap-4">
      <NavBar/>
      <div className='p-2'>
        <Button intent="primary">Watch Now</Button>
      </div>
      {/* <Outlet/> */}
    </div>
  );
}
