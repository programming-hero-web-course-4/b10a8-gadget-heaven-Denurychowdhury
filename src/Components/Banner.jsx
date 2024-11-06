/* eslint-disable react/prop-types */
// import { useEffect, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";


const Banner = ({ title, paragraph, btnone, btntwo }) => {
    const { pathname } = useLocation()
    // const [isActive, setIsactive] = useState(false)
    // useEffect(() => {
    //     // const newpath = path.includes(pathname)
    //     setIsactive(pathname == "/dashboard")
    // }, [pathname])
    return (
        <>
            <div className={`bg-[#9538e2]  ${pathname === '/' ? ' md:w-11/12 mx-auto rounded-b-xl md:py-28 py-14 ' : 'md:py-24 py-14'}   `}>
                <div className="flex flex-col md:justify-center items-center text-center md:w-3/4 mx-auto w-full space-y-4">
                    <h1 className="md:text-5xl font-bold text-white ">{title}</h1>
                    <p className="text-white font-thin md:w-2/3">{paragraph}</p>
                    {
                        pathname === '/' && <button className="bg-white px-5 py-3 rounded-2xl">
                            {btnone}
                        </button>
                    }
                    {
                        pathname.startsWith('/dashboard') &&
                        <div>
                            <NavLink to={`/dashboard/cart`}
                                className={({ isActive }) => `bg-transparent  px-7 rounded-full py-2 ${isActive ? 'bg-white text-purple-500' : 'bg-transparent'}`}>
                                {btnone}
                            </NavLink>
                            <NavLink to={`/dashboard/wishlist`} className={({ isActive }) => `bg-transparent px-7 rounded-full py-2 ${isActive ? 'bg-white text-purple-600' : 'bg-transparent'}`}>
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