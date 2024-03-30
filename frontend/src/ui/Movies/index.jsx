import Card from '../Basics/Card';

export default function Movies({data}) {
    return (
        <div className='flex gap-4 flex-wrap'>
            {data.map(el => 
                <Card key={el.name} {...el}/>)
            }
        </div>
    )
}