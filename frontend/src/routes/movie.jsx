import { useLoaderData } from 'react-router-dom';
import { fetchMovie } from '../lib/loaders';
import Movie from '../ui/Movie';

export async function movieLoader({params}){
  let mov = await fetchMovie(params.movId);
  return mov;
}

export default function MoviePage() {

  const mov = useLoaderData();
  
  return (
    <Movie {...mov}/>
  );
}