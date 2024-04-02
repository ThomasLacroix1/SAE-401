import { useState } from "react";
import SearchMovies from "../SearchMovies";

export default function Search({ data }) {
    const [searchResults, setSearchResults] = useState(data);

    const handleChange = (event) => {
        const searchTerm = event.target.value.toLowerCase();
        const results = data.filter(movie => movie.name.toLowerCase().includes(searchTerm) || movie.director.toLowerCase().includes(searchTerm));
        setSearchResults(results);
    };

    return (
        <>  
            <div className="flex justify-center">
                <input type="search" onChange={handleChange} placeholder="Recherchez les films que vous voulez" className="placeholder-navigation bg-secondaryBackground text-lg pl-6 font-bold h-16 w-full rounded border-b-1 border-white "/>
            </div>
            <div className="mt-16">
                <SearchMovies data={searchResults}/>
            </div>
            
        </>
    );
}