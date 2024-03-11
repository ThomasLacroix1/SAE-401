import {Link} from 'react-router-dom';

export default function NavBar() {

    return (

      <nav className="bg-background flex align-center justify-between p-3 border-b-2 border-b-primary">
        <img className="w-20 p-2.5 flex items-center justify-between" src="assets/images/logo-itvX.webp" alt="Logo"/>
        <img className='fill-bouton' src="assets/icons/profile.svg" alt="Profile" />
      </nav>
    );

}

