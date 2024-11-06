/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import usetitle from "../Utils/title";


const Banner = ({ title, paragraph, btnone, btntwo }) => {
    const { pathname } = useLocation()
    usetitle('Dashboard')

    const nav = useNavigate()
    const handlenavigate = () => {
        nav('/dashboard/cart')
    }
    return (
        <>
            <div className={`bg-[#9538e2]  ${pathname === '/' ? ' md:w-11/12 mx-auto rounded-b-xl md:py-28 py-14 ' : 'md:py-28 py-14'}   `}>
                <div className="flex flex-col md:justify-center items-center text-center md:w-3/4 mx-auto w-full space-y-4">
                    <h1 className="md:text-5xl font-bold text-white ">{title}</h1>
                    <p className="text-white font-thin md:w-2/3">{paragraph}</p>
                    {
                        pathname === '/' && <button onClick={handlenavigate} className="bg-white text-xl px-5 font-bold  text-purple-500 py-3 rounded-2xl">
                            {btnone}
                        </button>
                    }
                    {
                        pathname.startsWith('/dashboard') &&
                        <div className="flex justify-between items-center gap-3">
                            <NavLink to={`/dashboard/cart`}
                                className={({ isActive }) => `bg-transparent border text-base  border-white px-8 rounded-full py-2 ${isActive ? 'bg-white text-purple-500 font-extrabold' : ' text-white bg-transparent'}`}>
                                {btnone}
                            </NavLink>
                            <NavLink to={`/dashboard/wishlist`} className={({ isActive }) => `bg-transparent border border-white text-base px-8 rounded-full py-2 ${isActive ? 'bg-white font-extrabold text-purple-600' : 'text-white bg-transparent'}`}>
                                {btntwo}
                            </NavLink>
                        </div>
                    }
                </div>
            </div >
        </>
    );
};

export default Banner;