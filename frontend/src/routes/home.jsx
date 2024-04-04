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
      <div className='mt-6 p-movieLeft flex flex-col gap-14 mobile:items-center'>
        <h1 className='font-bold text-2xl text-font drop-shadow-movie'>Nos Films</h1>
        <Movies data={mov}/>
      </div>
    </>
  );
}