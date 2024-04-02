import HorizontalCard from '../Basics/HorizontalCard';

export default function SearchMovies({data}) {
    return (
        <div className='flex gap-4 flex-wrap mobile:justify-center'>
            {data.map(el => 
                <HorizontalCard key={el.name} {...el}/>)
            }
        </div>
    )
}