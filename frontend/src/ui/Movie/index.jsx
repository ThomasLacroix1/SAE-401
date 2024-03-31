import React from "react";
import Bouton from "../Basics/Bouton";

export default function Movie({name, director, synopsis, horizontal_image, time, category}) {
    return (
        <>  
            <div className="absolute flex flex-col gap-6 z-10 top-1/4 left-movieLeft">
                <h1 className="text-font font-bold text-3xl drop-shadow-movie">{name}</h1>
                <div className="text-details text-sm">
                    {category.map((el, index) => (
                        <React.Fragment key={index}>
                            <span className="uppercase font-medium" key={el.name}>{el.name}</span>
                            {index !== category.length - 1 && <span> • </span>}
                        </React.Fragment>
                    ))}
                    <span> • </span>
                    <span className="uppercase font-medium">{time}</span>
                </div>
                <div className="flex flex-col gap-3">
                    <p className="text-font w-2/5 drop-shadow-movie"><span className="font-bold">Director :</span> {director}</p>
                    <p className="text-font w-2/5 drop-shadow-movie">{synopsis}</p>
                </div>
                <a href=""><Bouton size="big" className="uppercase">
                    <svg fill="#000000" height="14px" id="play" viewBox="0 0 224.075 224.075" ><g><g><path d="M216.2,99.23L20.5,1.63c-2.1-1.1-4.8-1.6-6.9-1.6v0C5.7,0.53,0,6.33,0,14.23v195.7c0,10.5,11,17.3,20.5,12.6l195.7-98.1 C226.7,119.23,226.7,104.53,216.2,99.23z M27.8,187.33V36.73l150.6,75L27.8,187.33z"/></g></g>
                    </svg>
                    Watch
                </Bouton></a>
            </div>
            <div className="relative w-full h-fit overflow-hidden z-0">
                <img src={horizontal_image} alt={name} className="w-full h-auto"/>
                <div className="absolute top-0 left-0 w-full h-full bg-movieGradient"></div>
                <div className="absolute top-0 left-0 w-full h-full bg-movieGradient2"></div>
            </div>            
        </>
    )
}