import {NavLink} from 'react-router-dom';
import Bouton from '../Basics/Bouton';

export default function CatNavBar({data}) {

    return (
        <nav className='flex w-full h-12 mobile:h-10 items-center justify-center bg-secondaryBackground overflow-hidden flex-row flex-nowrap'>
            <div className="absolute left-0 px-1 py-catNav bg-secondaryBackground hidden mobile:block shadow-cat hover:bg-navigation hover:text-white cursor-pointer">
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#AAC0C8"><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#AAC0C8"/> </g></svg>
            </div>
            {data.map(el =>
                <NavLink to={`/categories/${el.id}`} key={el.id} className={({ isActive }) => `hover:text-primary ${isActive ? "text-primary" : "text-navigation"}`}>
                <Bouton intent="navigation" size="catNavigation" className='mobile:text-sm uppercase hover:bg-navigation'>{el.name}</Bouton>
                </NavLink>
            )}
            {/* <div className="absolute right-0 px-1 py-catNav bg-secondaryBackground hidden mobile:block after:absolute -left-2 after:shadow-cat">
                <svg width="25px" height="25px" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" stroke="#AAC0C8" transform='rotate(180)'><g id="SVGRepo_bgCarrier" strokeWidth="0"/><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"/><g id="SVGRepo_iconCarrier"> <path d="M14.2893 5.70708C13.8988 5.31655 13.2657 5.31655 12.8751 5.70708L7.98768 10.5993C7.20729 11.3805 7.2076 12.6463 7.98837 13.427L12.8787 18.3174C13.2693 18.7079 13.9024 18.7079 14.293 18.3174C14.6835 17.9269 14.6835 17.2937 14.293 16.9032L10.1073 12.7175C9.71678 12.327 9.71678 11.6939 10.1073 11.3033L14.2893 7.12129C14.6799 6.73077 14.6799 6.0976 14.2893 5.70708Z" fill="#AAC0C8"/> </g></svg>
            </div> */}
        </nav>
    )
}