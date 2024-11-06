/* eslint-disable react/prop-types */

// import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";





const Card = ({ card }) => {
    // const { category } = useParams()
    // console.log(category);
    const { product_id, product_title, product_image, price, category } = card;
    const navigate = useNavigate()
    // const isSmart = category === "Smart Watches"
    // console.log(isSmart);
    const handlenav = () => {
        navigate(`/productdetails/${product_id}`)
    }
    return (
        <div className="p-3 border border-gray-300  rounded-lg">
            <div className="card bg-base-100  shadow-xl">
                <figure>
                    <img
                        src={product_image}
                        alt="Shoes"
                        className="h-40 w-full"
                    />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{product_title}</h2>
                    <p>Price:{price}k</p>
                    <div className="card-actions">
                        {/* <NavLink to={`./productdetails/${product_id}`}> */}
                        <button onClick={handlenav} className="btn border border-fuchsia-500 bg-transparent rounded-full">View Details</button>
                        {/* </NavLink> */}
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Card;