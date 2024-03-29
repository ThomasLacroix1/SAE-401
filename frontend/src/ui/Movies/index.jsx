import Card from '../Basics/Card';

export default function Movies({data}) {
    return (
        <div className="flex flex-col gap-4">
            <div className='p-16 flex gap-4 flex-wrap'>
            {data.map(el => 
                <Card key={el.name} {...el}/>)
            }
            </div>
        </div>
    )
}