import React, { useState } from "react";
import Bouton from "../Basics/Bouton";

export default function Movie({ name, director, synopsis, horizontal_image, time, category, url }) {
    const [isOpen, setIsOpen] = useState(false);

    const openPopup = () => {
        setIsOpen(true);
    };

    const closePopup = () => {
        setIsOpen(false);
    };

    return (
        <>
        <div className={isOpen? "bg-black opacity-30 pointer-events-none" : null}>
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
                <Bouton size="big" className="uppercase" onClick={openPopup}>
                    <svg fill="#000000" height="14px" id="play" viewBox="0 0 224.075 224.075">
                        <g><g><path d="M216.2,99.23L20.5,1.63c-2.1-1.1-4.8-1.6-6.9-1.6v0C5.7,0.53,0,6.33,0,14.23v195.7c0,10.5,11,17.3,20.5,12.6l195.7-98.1 C226.7,119.23,226.7,104.53,216.2,99.23z M27.8,187.33V36.73l150.6,75L27.8,187.33z" /></g></g>
                    </svg>
                    Regarder
                </Bouton>
            </div>
            <div className="relative w-full max-h-movieHeight h-fit overflow-hidden z-0 after:absolute after:inset-0 after:bg-movieGradient before:absolute before:bg-movieGradient2 before:inset-0">
                <img src={horizontal_image} alt={name} className="w-full h-full object-cover object-top"/>
            </div>
        </div>
        {isOpen && (
            <div className="absolute flex flex-col gap-2 text-white top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                <svg className="absolute -right-2 -top-2 cursor-pointer" onClick={closePopup} width="16" height="16" viewBox="0 0 16 16" fill="white" xmlns="http://www.w3.org/2000/svg">
                    <path d="M15.3281 13.1211L10.2031 7.97656L15.3398 2.89844C15.5508 2.6875 15.5508 2.34375 15.3398 2.13281L13.8789 0.664062C13.7773 0.5625 13.6406 0.507812 13.4961 0.507812C13.3516 0.507812 13.2148 0.566406 13.1133 0.664062L8 5.72656L2.87891 0.667969C2.77734 0.566406 2.64063 0.511719 2.49609 0.511719C2.35156 0.511719 2.21484 0.570313 2.11328 0.667969L0.65625 2.13672C0.445312 2.34766 0.445312 2.69141 0.65625 2.90234L5.79297 7.98047L0.671875 13.1211C0.570313 13.2227 0.511719 13.3594 0.511719 13.5039C0.511719 13.6484 0.566406 13.7852 0.671875 13.8867L2.13281 15.3555C2.23828 15.4609 2.375 15.5156 2.51563 15.5156C2.65234 15.5156 2.79297 15.4648 2.89844 15.3555L8 10.2305L13.1055 15.3516C13.2109 15.457 13.3477 15.5117 13.4883 15.5117C13.625 15.5117 13.7656 15.4609 13.8711 15.3516L15.332 13.8828C15.4336 13.7813 15.4922 13.6445 15.4922 13.5C15.4883 13.3594 15.4297 13.2227 15.3281 13.1211Z" fill="white"/>
                </svg>
                <div className="w-videoWidth aspect-16/9">
                    <iframe width="100%" height="100%" src={url} title={name} allow="autoplay; encrypted-media; picture-in-picture" allowFullScreen></iframe>
                </div>
            </div>
        )}
        </>
    )
}