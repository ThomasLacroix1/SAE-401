import {NavLink} from 'react-router-dom';
import Bouton from '../Basics/Bouton';

export default function CatNavBar({data}) {

    return (
        <nav className='flex w-full items-center justify-center bg-secondaryBackground'>
          {data.map(el =>
            <NavLink to={`/categories/${el.id}`} key={el.id} className={({ isActive }) => `hover:text-primary ${isActive ? "text-primary" : "text-navigation"}`}>
              <Bouton intent="navigation" size="catNavigation" className='uppercase hover:bg-white/20'>{el.name}</Bouton>
            </NavLink>
          )}
        </nav>
    )
}