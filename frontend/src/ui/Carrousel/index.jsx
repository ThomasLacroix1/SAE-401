import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import Bouton from "../Basics/Bouton";

export default function Carrousel({ data }) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth > 800);

    const goToNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
    };

    const goToPrevious = () => {
        setCurrentIndex((prevIndex) => (prevIndex === 0 ? data.length - 1 : prevIndex - 1));
    };
    
    useEffect(() => {
        const timer = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex === data.length - 1 ? 0 : prevIndex + 1));
        }, 10000);

        return () => clearInterval(timer);
    }, [currentIndex, data.length]);

    useEffect(() => {
        const handleResize = () => {
            setIsLargeScreen(window.innerWidth > 800);
        };
  
        window.addEventListener('resize', handleResize);
  
        return () => {
            window.removeEventListener('resize', handleResize);
        }; 
    }, []);

    return (
        <div className="overflow-hidden">
            <div className="relative">
                {data.map((elmt, index) => (
                    <div key={ index } className={`relative ${index === currentIndex ? '' : 'hidden'}`}>
                        <div className="absolute flex flex-col gap-6 mobile:gap-4 z-10 top-1/4 left-movieLeft w-movieText">
                            <h1 className="text-font font-bold text-3xl w-2/3 drop-shadow-movie mobile:text-xl tablet:text-2xl">{elmt.name}</h1>
                            <div className="text-details text-sm mobile:text-xs tablet:text-xs">
                                {elmt.category.map((el, index) => (
                                    <React.Fragment key={index}>
                                        <span className="uppercase font-medium">{el.name}</span>
                                        {index !== elmt.category.length - 1 && <span> • </span>}
                                    </React.Fragment>
                                ))}
                                <span> • </span>
                                <span className="uppercase font-medium">{elmt.time}</span>
                            </div>
                            <div className="flex flex-col gap-3 text-lg mobile:text-xs tablet:text-base">
                                <p className="text-font drop-shadow-movie">{elmt.description}</p>
                            </div>
                            {isLargeScreen ? 
                            <Link to={`/movie/${elmt.id}`}><Bouton size="big" className="uppercase">
                                En Savoir Plus
                            </Bouton></Link> 
                            : 
                            <Link to={`/movie/${elmt.id}`}><Bouton size="small" className="uppercase">
                                En Savoir Plus
                            </Bouton></Link>
                            }
                        </div>
                        <div className="relative w-full mobile:h-mobileCarrouselHeight h-carrouselHeight overflow-hidden z-0 after:absolute after:inset-0 after:bg-movieGradient before:absolute before:bg-movieGradient2 before:inset-0">
                            <img src={elmt.horizontal_image} alt={elmt.name} className="w-full h-full object-cover object-top"/>
                        </div>
                    </div>
                ))}     
                <div className="absolute flex items-center left-movieLeft top-2/3 mobile:top-3/4 gap-4">
                    <button onClick={goToPrevious}><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff"><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"/> </g></svg></button>
                    <div className="flex gap-3">
                        {data.map( (el, index) => <div key={index} className={`rounded-full w-2 h-2 bg-navigation cursor-pointer ${index === currentIndex ? 'shadow-dot bg-white' : ''}`} onClick={() => setCurrentIndex(index)}></div>)}
                    </div>
                    <button onClick={goToNext}><svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#ffffff" transform="rotate(180)"><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round" /><g id="SVGRepo_iconCarrier" > <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#ffffff"/> </g></svg></button>
                </div>
            </div>
        </div>
    );
}