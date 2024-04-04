import Card from '../Basics/Card';
import HorizontalCard from '../Basics/HorizontalCard'; 
import { useEffect, useState } from 'react';

export default function Movies({ data }) {
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 550);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 800);
        };
  
        window.addEventListener('resize', handleResize);
  
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <div className='flex gap-4 flex-wrap mobile:justify-center'>
            {data.map(el => 
                isLargeScreen ? ( 
                    <Card key={el.name} {...el} />
                ) : (
                    <HorizontalCard key={el.name} {...el} />
                )
            )}
        </div>
    );
}