/* eslint-disable react/prop-types */
import { NavLink } from "react-router-dom";


const Productcategories = ({ categories }) => {
    console.log(categories)
    return (
        <div className="flex flex-col gap-3 bg-white p-2 rounded-lg h-fit">
            <NavLink to='/' className={({ isActive }) => `px-5 py-3 rounded-full text-base font-base  ${isActive ? 'bg-purple-500 text-white font-extrabold' : 'text-gray-400 bg-[#f3f3f3]'}`}>All product</NavLink>
            {
                categories.map(
                    category =>
                        <NavLink
                            to={`/productcards/${category.category}`}
                            key={category.id}
                            className={({ isActive }) => `px-6 py-2 rounded-full text-base font-base  ${isActive ? 'bg-purple-500 text-white font-extrabold' : 'text-gray-400 bg-[#f3f3f3]'}`}
                        >
                            {category.category}
                        </NavLink>
                )
            }
        </div>
    );
};

export default Productcategories;