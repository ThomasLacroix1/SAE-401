export default function Card({name, description, image, duree}) {
    return ( 
        <div className="group relative w-cardWidth h-cardHeight rounded-xl overflow-hidden duration-0 border-2 border-transparent origin-bottom after:absolute after:inset-0 hover:scale-102 hover:border-white hover:duration-300 hover:after:bg-backgroundGradient">
            <img className="rounded-xl" src={image} alt={name} />
            <div className="absolute bottom-0 left-0 w-full p-4 gap-2 text-white translate-y-20 group-hover:translate-y-0 duration-33 z-10">
                <span className="font-extrabold">{duree}</span>
                <span className="font-extrabold"> • </span>
                <span className="font-semibold">{description}</span>
            </div>
        </div>   
    );    
}