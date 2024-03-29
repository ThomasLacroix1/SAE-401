import { Outlet, useLoaderData } from 'react-router-dom';
import { fetchMoviesByCat } from '../lib/loaders';
import { useState } from 'react';
import Movies from '../ui/Movies';

export async function moviesbycatLoader(id){
  let mov = await fetchMoviesByCat(id);
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