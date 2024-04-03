import { useLoaderData } from 'react-router';
import { fetchActualUser } from '../lib/loaders';

export async function userLoader() {
    let user = await fetchActualUser();
    return user;
}

export default async function WatchlistPage(){

    const user = useLoaderData();
    console.log(user);
    if (user.watchlist == null){
        user.watchlist == [];
    }

    return (
        <div className='mt-6 p-movieLeft'>
            <Movies {...user.watchlist}/>
        </div>
    )
}