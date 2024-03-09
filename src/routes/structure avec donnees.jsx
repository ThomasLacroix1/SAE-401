import { useLoaderData, defer, Await } from 'react-router-dom';
import { fetchOurTeams, fetchTestimonialData } from '../lib/loaders';
import { Suspense } from 'react';

import Team from '../ui/Team';
import Testimonial from '../ui/Testimonial'
import TeamSkeleton from '../ui/Team/TeamSkeleton';

export async function loader({params}){
  let ourteams = fetchOurTeams(params.teamName);
  let testimonialData = await fetchTestimonialData(params.teamName)
  return defer({team:ourteams, testimonial:testimonialData});
}

export default function OurTeams() {

  const data = useLoaderData();

  return (
    <> 
      <Suspense fallback={<TeamSkeleton/>}>
        <Await resolve={data.team} errorElement={<div>Failed to load team data</div>}>
            {teamData => <Team {...teamData}/>}
        </Await>
      </Suspense>
      <Testimonial data={data.testimonial}/>
    </>
  );
  
}
