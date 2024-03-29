import { Outlet, useLoaderData } from 'react-router-dom';
import { fetchMovies } from '../lib/loaders';
import Movies from '../ui/Movies';

export async function moviesLoader(){
  let movies = await fetchMovies();
  return movies;
}

export default function Home() {

  const data = useLoaderData();

  return (
    <Movies data={data}/>
  );
}