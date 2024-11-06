import { useContext } from "react";
import { RxCrossCircled } from "react-icons/rx";
import { Wishcart } from "../Layouts/MainLayout";
import { handleaddCart } from "../Utils";
import usetitle from "../Utils/title";


const Wishlist = () => {
    usetitle('whislist')
    // context
    // const getdata = getCartItem()
    // console.log(getdata);
    const { wish, setWish } = useContext(Wishcart);
    // const { product_image, description, product_title, price } = wish;
    // console.log(wish);
    const handledTocarts = (details) => {
        handleaddCart(details)
    }
    return (
        <div className="md:w-11/12 mx-auto my-8">
            <h1>wishlist</h1>
            {
                wish.map(item => <div key={item.product_id} className="flex md:flex-row flex-col justify-between items-center p-3 border rounded-xl bg-white">
                    <div className="flex md:flex-row flex-col items-center gap-5">
                        <div className="">
                            <img className="h-32 w-40 rounded-xl" src={item.product_image} alt="" />
                        </div>
                        <div className="space-y-3">
                            <h1 className="text-xl font-bold">{item.product_title}</h1>
                            <p>{item.description}</p>
                            <p>Price:{item.price}</p>
                            <button
                                onClick={() => handledTocarts(item)}
                                className="btn text-xl text-white border border-fuchsia-500 rounded-full bg-gradient-to-b from-purple-600 to-[#da62e6]">
                                Add to Cart</button>
                        </div>
                    </div>
                    <div>
                        <button onClick={() => setWish([])}
                            className="text-3xl text-red-500"><RxCrossCircled /></button>
                    </div>
                </div>)
            }
        </div>
    );
};

export default Wishlist;