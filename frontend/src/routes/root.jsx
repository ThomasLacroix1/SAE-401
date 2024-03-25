import { Outlet } from 'react-router-dom';
import NavBar from '../ui/NavBar';
import Button from '../ui/Basics/Bouton';
import Card from '../ui/Basics/Card';
import { fetchMovies } from '../lib/loaders';

export async function moviesLoader(){
  let movies = fetchMovies();
  return movies;
}

export default function Root() {

  const data = useLoaderData();
  console.log(data);

  return (
    <div className="flex flex-col gap-4">
      <NavBar/>
      <div className='p-16 flex gap-4'>
        <Card data={data}/>
      </div>
      {/* <Outlet/> */}
    </div>
  );
}