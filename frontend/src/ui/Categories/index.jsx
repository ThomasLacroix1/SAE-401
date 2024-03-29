import { useState } from 'react';
import Card from '../Basics/Card';

export default function Categories({cat, mov}) {
    const [selectedValue, setSelectedValue] = useState('');

    const handleChange = (event) => {
        setSelectedValue(event.target.value);
        
    };

    return (
        <div>
            <select className='p-4' id="selectCat" defaultValue="all" name="category" onChange={handleChange}>
                <option key="all" value="all">Toutes</option>
                {cat.map(el =>
                    <option key={el.name} value={el.name}>{el.name}</option>
                )}
            </select>
            <div className='p-16 flex gap-4 flex-wrap'>
                {mov.map(movie => {

                    if (selectedValue === "all" || selectedValue === "") {
                        return <Card key={movie.name} {...movie} />;
                        
                    } else {
                        return movie.category.map(category => {
                            if (category.name === selectedValue) {
                                return <Card key={movie.name} {...movie} />;
                            }
                        });
                    }
                })}

            </div>
        </div>
    );
}