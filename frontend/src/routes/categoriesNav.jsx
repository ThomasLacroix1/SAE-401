import { Navigate, Outlet, useLoaderData } from 'react-router-dom';
import { fetchCategory } from '../lib/loaders';

import CatNavBar from '../ui/CatNavBar';

export async function categoryLoader(){
  let cat = await fetchCategory();
  return cat;
}

export default function CategoriesNav() {

  const cat = useLoaderData();

  return (
      <>
        <CatNavBar data={cat}/>
        <Navigate to="/categories/3"/>
        {<Outlet/>}
      </>
  );
}