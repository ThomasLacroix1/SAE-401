import {Link} from 'react-router-dom';

export default function NavBar() {

    return (
      <nav className="bg-background flex items-center justify-between px-5 py-3 border-b-2 border-b-primary">
        <img className="w-20 p-2.5" src="assets/images/logo-itvX.webp" alt="Logo"/>
        <a href="#" className='text-white'>
          <svg className='h-5 w-5' width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="Account icon" role="img"><title>Account icon</title><path fill-rule="evenodd" clip-rule="evenodd" d="M9.00024 0C6.79111 0 5.00024 1.79086 5.00024 4C5.00024 6.20914 6.79111 8 9.00024 8C11.2094 8 13.0002 6.20914 13.0002 4C13.0002 1.79086 11.2094 0 9.00024 0ZM7.00024 4C7.00024 2.89543 7.89567 2 9.00024 2C10.1048 2 11.0002 2.89543 11.0002 4C11.0002 5.10457 10.1048 6 9.00024 6C7.89567 6 7.00024 5.10457 7.00024 4Z" fill="currentColor"></path><path d="M3.00026 10C2.55378 10 2.16139 10.296 2.03873 10.7253L0.0387335 17.7253C-0.112991 18.2563 0.194501 18.8098 0.725536 18.9615C1.25657 19.1132 1.81006 18.8058 1.96178 18.2747L3.75456 12H14.246L16.0387 18.2747C16.1905 18.8058 16.7439 19.1132 17.275 18.9615C17.806 18.8098 18.1135 18.2563 17.9618 17.7253L15.9618 10.7253C15.8391 10.296 15.4467 10 15.0003 10H3.00026Z" fill="currentColor"></path></svg>
        </a>
      </nav>
    );

}

