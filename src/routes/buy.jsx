import { useLoaderData } from 'react-router-dom';
import { fetchPricingData } from '../lib/loaders';

import Pricing from '../ui/Pricing';

export async function loader(){
  let pricingData = await fetchPricingData();
  return pricingData;
}

export default function Buy() {

  const data = useLoaderData();

  return (
    <> 
      <Pricing {...data}/>
    </>
  );
  
}
