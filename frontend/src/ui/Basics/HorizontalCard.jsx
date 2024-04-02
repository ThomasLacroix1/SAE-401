import { Link } from "react-router-dom";

export default function HorizontalCard({id, name, description, horizontal_image, time}) {
    return ( 
        <Link to={`/movie/${id}`}><div id={name} className="group relative w-hCardWidth h-hCardHeight rounded-xl p-2">
            <img className="rounded-xl h-3/4 w-full object-cover duration-0 border-2 border-transparent origin-bottom group-hover:scale-102 group-hover:border-white group-hover:duration-300 group-hover:shadow-CardBox z-10" src={horizontal_image} alt={name} />
            <div className="w-full px-1 mt-2 flex flex-col gap-1 duration-33">
                <h1 className="font-bold text-sm text-navigation">{name}</h1>
                <p className="font-normal text-hCardText text-white">{description}</p>
            </div>
        </div></Link>
    );    
}