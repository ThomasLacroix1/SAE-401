import { useState } from 'react';
import { fetchSetEmail } from '../../lib/loaders';
import Bouton from '../Basics/Bouton';

export default function Profile({email}) {
    const [mail, setMail] = useState('');

    const handleInputChange = (event) => {
        setMail(event.target.value);
    };

    const handleSetMail = () => {
      if (mail !== ''){
        fetchSetEmail(mail);
        window.location.reload(true);
      }
      
    }

    return (
      <div className='flex items-center flex-col gap-16'>
        <h1 className='text-2xl font-bold uppercase text-font'>Votre Profil</h1>
        <div className='flex flex-col gap-10'>
            <div className='flex flex-col items-center gap-6'>
                <h2 className='text-lg font-bold text-font'>Informations Personnelles</h2>
                <h3 className='text-base text-font'><span className='font-semibold'>Votre adresse mail : </span>{email}</h3>
                <div className='flex gap-2'>
                  <input type="text" placeholder='Nouvelle Adresse Mail' className='placeholder-navigation text-navigation bg-secondaryBackground text-lg pl-2 font-semibold h-12 w-full rounded border-b-1 border-white' onChange={handleInputChange}/>
                  <Bouton intent="primary" size="medium" onClick={handleSetMail}>Valider</Bouton>
                </div>
                
            </div>
        </div>
        
      </div>
    );
}