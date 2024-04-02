import { useLoaderData } from 'react-router-dom';
import { fetchMovies } from '../lib/loaders';
import Search from '../ui/Search';

export async function moviesLoader(){
  let movies = await fetchMovies();
  return movies;
}

export default function SearchPage() {

  const data = useLoaderData();

  return (
    <div className='p-movieLeft'>
        <Search data={data}/>
    </div>
  );
}