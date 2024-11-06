import { useContext, useEffect, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import { FaRegHeart } from "react-icons/fa";
import { IoCartOutline } from "react-icons/io5";
import { NavLink, useLocation } from "react-router-dom";
import { CartCount } from "../Layouts/MainLayout";
// import { itemlength } from "../Utils";
// import usetitle from "../Utils/title";


const Navbar = () => {
    const { pathname } = useLocation();
    const [count] = useContext(CartCount)
    const [isActive, setIsactive] = useState(false)
    useEffect(() => {
        // const newpath = path.includes(pathname)
        setIsactive(pathname == "/")
    }, [pathname])
    return (
        <>
            <div className={`flex justify-between items-center md:w-11/12 ${isActive ? 'bg-[#9538e2] text-white rounded-t-xl' : ''}   mx-auto  z-40 '} `}>
                <div className="">
                    <div className="dropdown">
                        <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                            <AiOutlineMenu />
                        </div>
                        <ul
                            tabIndex={0}
                            className="menu menu-sm gap-3 dropdown-content bg-base-100 rounded-box z-[1] mt-3  p-2 shadow">
                            <NavLink
                                className={({ isActive }) => `text-xl py-3 rounded-lg ${isActive ? '  md:text-white underline ' : '  '}`} to='/'>
                                Home</NavLink>
                            <NavLink
                                className={({ isActive }) => `text-xl py-3 rounded-lg ${isActive ? '  text-purple-500 underline ' : ' '}`}
                                to='/statictics'>Statictics</NavLink>
                            <NavLink
                                className={({ isActive }) => `text-xl py-3 rounded-lg ${isActive ? '  text-purple-500 underline ' : ' '}`}
                                to='/dashboard/cart'>Dashboard</NavLink>
                            <NavLink
                                className={({ isActive }) => `text-xl py-3 rounded-lg ${isActive ? '  text-purple-500 underline ' : ' '}`}
                                to='/about'>About us</NavLink>
                        </ul>
                    </div>
                    <a className="btn btn-ghost text-xl">Gadget Heaven</a>
                </div>
                <div className=" hidden lg:flex">
                    <ul className="menu menu-horizontal gap-5 px-1">
                        <NavLink
                            className={({ isActive }) => `text-xl py-3 rounded-lg px-3 ${isActive ? '  text-white underline ' : '  '}`} to='/'>
                            Home</NavLink>
                        <NavLink
                            className={({ isActive }) => `text-xl py-3  rounded-lg px-3 ${isActive ? '  text-purple-500  underline ' : '  '}`}
                            to='/statictics'>Statictics</NavLink>
                        <NavLink
                            className={({ isActive }) => `text-xl py-3 rounded-lg px-3 ${isActive ? '  text-purple-500 underline ' : '  '}`}
                            to='/dashboard/cart'>Dashboard</NavLink>
                        <NavLink
                            className={({ isActive }) => `text-xl py-3 rounded-lg ${isActive ? '  text-purple-500 underline ' : ''}`}
                            to='/about'>About us</NavLink>
                    </ul>
                </div>
                <div className="flex gap-4">
                    <p className="relative flex items-center text-black">
                        <span className={`p-3 rounded-full border  border-gray-300 ${isActive ? 'bg-white' : ''}`}>
                            <IoCartOutline />
                        </span>
                        <span className={`absolute -top-3 px-1 rounded-full bg-purple-300 left-6`}> {count}</span>
                    </p>
                    <p className="relative flex items-center text-black">
                        <span className={`p-3 rounded-full border  border-gray-300 ${isActive ? 'bg-white' : ''}`}>
                            <FaRegHeart />
                        </span>
                        <span className={`absolute -top-3 px-1 rounded-full bg-purple-300  left-6`}>
                            {0}
                        </span>
                    </p>
                </div>
            </div >
        </>
    );
};

export default Navbar;