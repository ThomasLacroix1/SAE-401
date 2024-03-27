import { Outlet, defer, useLoaderData, Await } from 'react-router-dom';
import { fetchMovies, fetchCategory } from '../lib/loaders';
import Categories from '../ui/Categories';

export async function moviesbycatLoader(){
  let categories = await fetchCategory();
  let movies = await fetchMovies();
  return {mov:movies, cat:categories};
}

export default function CategoriesPage() {

  const {cat, mov} = useLoaderData();

  return (
      <Categories cat={cat} mov={mov}/>
  );
}