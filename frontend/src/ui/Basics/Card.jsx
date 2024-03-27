export default function Card({name, description, image, time}) {
    return ( 
        <div id={name} className="group relative w-cardWidth h-cardHeight rounded-xl overflow-hidden duration-0 border-2 border-transparent origin-bottom after:absolute after:inset-0 hover:scale-102 hover:border-white hover:duration-300 hover:after:bg-backgroundGradient">
            <img className="rounded-xl h-full" src={image} alt={name} />
            <div className="absolute bottom-0 left-0 w-full p-4 gap-2 text-white translate-y-40 group-hover:translate-y-0 duration-33 z-10">
                <span className="font-extrabold">{time}</span>
                <span className="font-extrabold"> • </span>
                <span className="font-semibold">{description}</span>
            </div>
        </div>   
    );    
}