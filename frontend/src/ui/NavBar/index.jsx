import {NavLink, Link} from 'react-router-dom';
import Bouton from '../Basics/Bouton';

export default function NavBar() {

    return (
      <nav className="bg-background flex items-center justify-between px-12 py-3 border-b-2 border-b-primary">
        <Link to="/"><img className="w-20 p-2.5" src="/assets/images/logo-itvX.webp" alt="Logo"/></Link>
        <div className='flex flex-row gap-3'>
          <NavLink to="/" className={({ isActive }) => isActive ? "text-primary" : ""}> 
            <Bouton intent="navigation" size="bigNoBack" className="uppercase">Accueil</Bouton>
          </NavLink>
          <NavLink to="/categories/1" className={({ isActive }) => isActive ? "text-primary" : ""}>
            <Bouton intent="navigation" size="bigNoBack" className="uppercase">Categories</Bouton>
          </NavLink>
        </div>
        <div className='flex flex-row gap-4'>
          <NavLink href="#" className='text-white hover:text-primary active:text-primary'>
            <svg className='h-6 w-6' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Account icon" role="img"><title>Account icon</title><path d="M9.00024 0C6.79111 0 5.00024 1.79086 5.00024 4C5.00024 6.20914 6.79111 8 9.00024 8C11.2094 8 13.0002 6.20914 13.0002 4C13.0002 1.79086 11.2094 0 9.00024 0ZM7.00024 4C7.00024 2.89543 7.89567 2 9.00024 2C10.1048 2 11.0002 2.89543 11.0002 4C11.0002 5.10457 10.1048 6 9.00024 6C7.89567 6 7.00024 5.10457 7.00024 4Z" fill="currentColor"></path><path d="M3.00026 10C2.55378 10 2.16139 10.296 2.03873 10.7253L0.0387335 17.7253C-0.112991 18.2563 0.194501 18.8098 0.725536 18.9615C1.25657 19.1132 1.81006 18.8058 1.96178 18.2747L3.75456 12H14.246L16.0387 18.2747C16.1905 18.8058 16.7439 19.1132 17.275 18.9615C17.806 18.8098 18.1135 18.2563 17.9618 17.7253L15.9618 10.7253C15.8391 10.296 15.4467 10 15.0003 10H3.00026Z" fill="currentColor"></path></svg>
          </NavLink>
          <NavLink href="#" className='text-white hover:text-primary'>
            <svg className='h-6 w-6' width="18" height="18" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Search icon" role="img"><title>Search icon</title><path d="M14 0.666672C6.63619 0.666672 0.666656 6.63621 0.666656 14C0.666656 21.3638 6.63619 27.3333 14 27.3333C17.2017 27.3333 20.1398 26.2048 22.4383 24.3239L25.0572 26.9428C25.5779 27.4635 26.4221 27.4635 26.9428 26.9428C27.4635 26.4221 27.4635 25.5779 26.9428 25.0572L24.3239 22.4383C26.2048 20.1398 27.3333 17.2017 27.3333 14C27.3333 6.63621 21.3638 0.666672 14 0.666672ZM3.33332 14C3.33332 8.10897 8.10895 3.33334 14 3.33334C19.891 3.33334 24.6667 8.10897 24.6667 14C24.6667 19.891 19.891 24.6667 14 24.6667C8.10895 24.6667 3.33332 19.891 3.33332 14Z" fill="currentColor"></path></svg>
          </NavLink>
        </div>
      </nav>
    );
}