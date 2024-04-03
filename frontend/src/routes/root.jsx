import { Outlet } from 'react-router-dom';
import NavBar from '../ui/NavBar';
import Footer from '../ui/Footer'

export default function Home() {
    return (
        <>
            <NavBar/>
            {<Outlet/>}
            <Footer/>
        </>
    )
}