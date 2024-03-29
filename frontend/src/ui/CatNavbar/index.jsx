import {Link} from 'react-router-dom';

export default function CatNavBar({data}) {
    return (
        <nav >
          {data.map(el =>
            <Link to={`categories/${el.id}`} key={el.id}></Link>
          )}
        </nav>
    )
}