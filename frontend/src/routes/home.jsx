import { Outlet, useLoaderData } from 'react-router-dom';
import Bouton from '../ui/Basics/Bouton';
import Card from '../ui/Basics/Card';
import { fetchMovies } from '../lib/loaders';

export async function moviesLoader(){
  let movies = fetchMovies();
  return movies;
}

export default function Home() {

  const data = useLoaderData();
  console.log(data);

  return (
    <div className="flex flex-col gap-4">
      <div className='p-16 flex gap-4 flex-wrap'>
        {data.map(el => 
          <Card {...el}/>)
        }
      </div>
    </div>
  );
}