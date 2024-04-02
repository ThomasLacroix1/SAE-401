import HorizontalCard from '../Basics/HorizontalCard';

export default function SearchMovies({data}) {
    return (
        <div className='flex gap-4 flex-wrap'>
            {data.map(el => 
                <HorizontalCard key={el.name} {...el}/>)
            }
        </div>
    )
}