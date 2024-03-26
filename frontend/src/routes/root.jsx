import { Outlet } from 'react-router-dom';
import NavBar from '../ui/NavBar';

export default function Home() {
    return (
        <>
            <NavBar/>
            {<Outlet/>}
        </>
    )
}