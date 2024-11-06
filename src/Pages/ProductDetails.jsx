import { useContext, useEffect, useState } from "react";
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useLoaderData, useLocation, useParams } from "react-router-dom";
import Banner from "../Components/Banner";
import { CartCount, Wishcart } from "../Layouts/MainLayout";
import { getCartItem, handleaddCart } from "../Utils";
import usetitle from "../Utils/title";
import { IoMdStar } from "react-icons/io";
import { toast } from "react-toastify";



const ProductDetails = () => {
    usetitle("Details")
    const [count, setCount] = useContext(CartCount)
    const { wish, setWish } = useContext(Wishcart)
    console.log(wish);
    const { pathname } = useLocation()
    const { product_id } = useParams();
    // console.log(product_id);
    const data = useLoaderData()
    const [details, setDetails] = useState({})
    // const [count, setCount] = useState(0)
    // console.log(details);
    const [isActives, setIsActives] = useState(false)
    useEffect(() => {
        const newdata = data.find(product => product.product_id == product_id)
        // console.log(newdata);
        setDetails(newdata)
        const exist = getCartItem()
        const isExist = exist.filter(product => product.product_id == product_id)
        if (isExist) {
            setIsActives(false)
        }
    }, [data, product_id])
    // console.log(details);
    const handledTocarts = (details) => {
        handleaddCart(details)
        setCount(count + 1)
    }
    return (
        <div>
            {
                pathname === `/productdetails/${product_id}` &&
                <Banner
                    title={'Product Details'}
                    paragraph={'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
                >
                </Banner>
            }
            <div>
                <div className=' md:-translate-y-1/4 pt-4 '>
                    <div className='md:w-3/5 w-full mx-auto flex md:flex-row flex-col gap-10 bg-white p-4 rounded-lg '>
                        <div className="">
                            <img className='rounded-lg h-full  w-full' src={details.product_image} alt="" />
                        </div>
                        <div className="space-y-1">
                            <h1 className="text-2xl font-bold">{details.product_title}</h1>
                            <p className="text-xl font-bold">Price:${details.price}</p>
                            {
                                details.availability ? <h1 className="bg-[#eaf5e6] text-xl text-[#309C08] px-5 py-1 border-2 border-[#309C08] w-fit rounded-full">In stock</h1> : ''
                            }
                            <p>{details.description}</p>
                            <h1 className="font-semibold text-xl">Specificaction:</h1>
                            <ul className="list-decimal ml-4 text-gray-400">
                                {
                                    details.specification?.map((list, index) => <li key={index}>{list}</li>)
                                }
                            </ul>
                            <div className="rating  flex flex-col">
                                <h1 className="text-base font-bold flex items-center">Rating  <span className="text-[#f9c004]"><IoMdStar /></span></h1>
                                <div className="flex items-center ">
                                    <div className="text-xl flex text-[#f9c004]">
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                        <IoMdStar />
                                    </div>
                                    <span className=""><IoMdStar /></span>
                                </div>
                            </div>
                            <div className="flex items-center gap-4">
                                <button onClick={() => handledTocarts(details)} className="px-4 py-2 rounded-full flex items-center text-white font-bold bg-purple-500"><span>Add to cart</span><FiShoppingCart /></button>
                                <button disabled={isActives} onClick={() => { setWish([...wish, details]), setIsActives(true), toast.success('Add to wishlist') }} className="p-3 rounded-full border border-gray-400"><FaRegHeart /></button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProductDetails;