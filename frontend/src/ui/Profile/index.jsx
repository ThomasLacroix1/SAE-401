import Bouton from '../Basics/Bouton';
import { useState } from 'react';

export default function Profile({email, history}) {
    

    return (
      <div className='text-font flex items-center flex-col gap-16'>
        <h1 className='text-2xl font-bold uppercase'>Votre Profil</h1>
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col gap-4'>
                <h2 className='text-lg font-bold'>Informations Personnelles</h2>
                <h3 className='text-base'><span className='font-semibold'>Votre adresse mail :</span>{email}</h3>
            </div>
            <div className='flex flex-col gap-4'>
                <h2 className='text-lg font-bold'>Historique</h2>
                {/* <h3 className='text-base'><span className='font-semibold'>Votre adresse mail :</span>{email}</h3> */}
            </div>
        </div>
        
      </div>
    );
}