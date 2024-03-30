import { useLoaderData } from 'react-router-dom';
import { fetchMoviesByCat } from '../lib/loaders';
import Movies from '../ui/Movies';

export async function moviesbycatLoader({params}){
  let mov = await fetchMoviesByCat(params.catId);
  return mov;
}

export default function CategoriesPage() {

  const mov = useLoaderData();
  
  return (
    <div className='p-10'>
      <Movies data={mov}></Movies>
    </div>
  );
}