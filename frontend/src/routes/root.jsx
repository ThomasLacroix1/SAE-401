import { Outlet } from 'react-router-dom';
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer'
import { fetchActualUser } from '../lib/loaders';

export async function userLoader() {
    // let user = await fetchActualUser();
    return null;
}

export default function Home() {
    return (
        <>
            <NavBar/>
            {<Outlet/>}
            <Footer/>
        </>
    )
}