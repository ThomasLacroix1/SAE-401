import {Link} from 'react-router-dom';
import Bouton from '../Basics/Bouton';

export default function CatNavBar({data}) {

    return (
        <nav className='flex w-full items-center justify-center bg-secondaryBackground'>
          {data.map(el =>
            <Link to={`/categories/${el.id}`} key={el.id}>
              <Bouton intent="navigation" size="bigNoBack" className='uppercase hover:bg-white/20'>{el.name}</Bouton>
            </Link>
          )}
        </nav>
    )
}