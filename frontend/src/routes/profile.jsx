import { useLoaderData } from 'react-router';
import { fetchActualUser } from '../lib/loaders';
import Profile from '../ui/Profile';

export async function userLoader() {
    let user = await fetchActualUser();
    return user;
}

export default function ProfilePage(){

    const user = useLoaderData();
    if (user.watchlist == null){
        user.watchlist == [];
    }
    console.log(user);

    return (
        <div className='mt-6 p-6'>
            <Profile />
        </div>
    )
}