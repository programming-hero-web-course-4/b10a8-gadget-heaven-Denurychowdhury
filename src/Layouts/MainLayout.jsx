import { createContext, useState } from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import usetitle from "../Utils/title";



export const Wishcart = createContext()
export const CartCount = createContext()
const MainLayout = () => {
    const [count, setCount] = useState(0)
    const [wish, setWish] = useState([])
    usetitle('Home')
    return (

        <div className="bg-[#f6f6f6] pt-3">
            {/* Navbar */}
            <Wishcart.Provider value={{ wish, setWish }}>
                <CartCount.Provider value={[count, setCount]}>
                    <Navbar></Navbar>
                    {/* Outlet */}
                    <div className="min-h-screen[calc(100vh-232px)] ">
                        <Outlet></Outlet>
                    </div>
                    {/* footer */}
                    <Footer></Footer>
                    <ToastContainer position="top-center" ></ToastContainer>
                </CartCount.Provider>
            </Wishcart.Provider>
        </div>
    );
};

export default MainLayout;