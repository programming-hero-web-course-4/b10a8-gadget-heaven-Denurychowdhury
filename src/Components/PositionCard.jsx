/* eslint-disable react/prop-types */

import { useLocation } from "react-router-dom";

const PositionCard = ({ bannerimg, product }) => {
    // const { pathname } = useLocation()
    // console.log(product);
    // const {product product_image, price, specification, availability, product_title, description } = product;
    return (
        <div className=' -translate-y-1/4 md:mt-0 mt-4 '>
            <div className='md:w-3/5 mx-auto   rounded-lg md:p-4 p-2 border-2 border-gray-400'>
                <img className='rounded-lg md:h-56 w-full' src={bannerimg} alt="" />
            </div>
        </div>
    );
};

export default PositionCard;