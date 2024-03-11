import { Outlet } from 'react-router-dom';
import NavBar from '../ui/NavBar';
import Button from '../ui/Basics/Bouton';

export default function Root() {

  return (
    <div class="bg-background flex gap-4 w-full">
      <NavBar/>
      <Button>Watch Now</Button>
      {/* <Outlet/> */}
    </div>
  );
}
