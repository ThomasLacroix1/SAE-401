import { Outlet, useLoaderData } from 'react-router-dom';
import { fetchCategory } from '../lib/loaders';

import CatNavBar from '../ui/CatNavbar';

export async function categoryLoader(){
  let cat = await fetchCategory();
  return cat;
}

export default function CategoriesNav() {

  const cat = useLoaderData();

  return (
      <>
        <CatNavBar data={cat}/>
        {<Outlet/>}
      </>
  );
}