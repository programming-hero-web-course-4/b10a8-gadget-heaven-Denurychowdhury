import { useContext, useEffect, useState } from "react";
import { PiSlidersBold } from "react-icons/pi";
import { RxCrossCircled } from "react-icons/rx";
import { Modal } from 'react-responsive-modal';
import 'react-responsive-modal/styles.css';
import { useNavigate } from "react-router-dom";
import { CartCount } from "../Layouts/MainLayout";
import { getCartItem, handleRemove } from "../Utils";
import usetitle from "../Utils/title";
import checkmark from '../assets/Group.png';
const Cart = () => {
    usetitle('Carts')
    const [open, setOpen] = useState(false);
    // modal contents
    const navigate = useNavigate()
    const modalget = () => {
        navigate("/")
    }
    const onOpenModal = () => setOpen(true);
    const onCloseModal = () => setOpen(false);

    // count context api
    const [count, setCount] = useContext(CartCount)

    // set to cart 
    const [cart, setCart] = useState([])

    // add price on the cart
    const [money, setMoney] = useState(0)

    useEffect(() => {
        const product = getCartItem()
        console.log(product);
        setCart(product)
        const moneys = product.reduce((prev, current) => prev + current.price, 0)
        // console.log(moneys);
        setMoney(money + moneys)
    }, [])

    // sorted by category cart
    const handlesort = () => {
        const newCart = getCartItem()
        const sorted = newCart.sort((a, b) => b.price - a.price)
        setCart(sorted)
    }
    // cart remove from the cart
    const handleRemoveCart = (product_id) => {
        handleRemove(product_id)
        // console.log('remove');
        const allcarts = getCartItem()
        setCart(allcarts)
        const moneys = allcarts.reduce((prev, current) => prev + current.price, 0)
        console.log(moneys);
        setMoney(moneys)
        const carn = 1;
        setCount(count + carn)
    }
    return (
        <div className="grid grid-cols-1 gap-4 my-10 md:w-11/12 mx-auto ">
            <div className="flex justify-between items-center">
                <div className="text-2xl font-bold">
                    <h1>Cart</h1>
                </div>
                <div className="flex md:flex-row flex-col item-center gap-4">
                    <div className="my-auto"><h1 className="md:text-2xl font-bold">Total Cost:{money}</h1></div>
                    <button onClick={handlesort} className=" btn border border-fuchsia-500  bg-transparent rounded-full">
                        <span className="text-xl text-purple-500 flex items-center bg-gradient-to-r from-purple-500 to-[#da62e6] bg-clip-text text-transparent">Filter by price
                            <span className="text-purple-400">
                                <PiSlidersBold />
                            </span>
                        </span>
                    </button>
                    <button onClick={onOpenModal} className="btn text-xl text-white border border-fuchsia-500 rounded-full bg-gradient-to-b from-purple-600 to-[#da62e6]" >purchase</button>
                </div>
            </div>
            {
                cart.map(item =>
                    <div key={item.product_id} className=" flex md:flex-row flex-col rounded-lg justify-between items-center p-4 bg-slate-200">
                        <div className="flex md:flex-row flex-col gap-5 justify-between">
                            <Modal open={open} center showCloseIcon={false}>
                                <div className="flex flex-col border-2 border-gray-400 rounded-2xl  items-center px-10  justify-between">
                                    <div>
                                        <img className="" src={checkmark} alt="Success" />
                                    </div>
                                    <h2>Payment Successfully</h2>
                                    <p>Thanks for purchasing.</p>
                                    <p>Total:{money}</p>
                                    <button className="btn" onClick={() => { onCloseModal(), modalget(), localStorage.clear() }}>CLose</button>
                                </div>
                            </Modal>
                            <div>
                                <img className="md:h-24 md:w-36 w-full rounded-md" src={item.product_image} alt="" />
                            </div>
                            <div>
                                <h1 className="text-xl font-bold">{item.product_title}</h1>
                                <p>{item.description}</p>
                                <p>Price:${item.price}</p>
                            </div>
                        </div>
                        <div>
                            <button onClick={() => handleRemoveCart(item.product_id)} className="text-3xl text-red-500"><RxCrossCircled /></button>
                        </div>
                    </div>
                )
            }
        </div>
    );
};

export default Cart;