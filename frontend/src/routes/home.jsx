import { useLoaderData } from 'react-router-dom';
import { fetchMovies, fetchMoviesInFront } from '../lib/loaders';
import Movies from '../ui/Movies';
import Carrousel from '../ui/Carrousel';

export async function moviesLoader(){
  let movies = await fetchMovies();
  let inFront = await fetchMoviesInFront();
  return {mov:movies, inFront};
}

export default function Home() {

  const {mov, inFront} = useLoaderData();

  return (
    <>
      <Carrousel data={inFront}/>
      <div className='mt-6 p-10'>
        <Movies data={mov}/>
      </div>
    </>
  );
}