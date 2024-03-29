import { useLoaderData } from 'react-router-dom';
import { fetchMoviesByCat } from '../lib/loaders';
import Movies from '../ui/Movies';

export async function moviesbycatLoader({params}){
  console.log(params.catId)
  let mov = await fetchMoviesByCat(params.catId);
  console.log(mov)
  return mov;
}

export default function CategoriesPage() {

  const mov = useLoaderData();
  
  return (
      <>
        <Movies data={mov}></Movies>
      </>
  );
}