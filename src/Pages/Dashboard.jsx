import { Outlet } from "react-router-dom";
import Banner from "../Components/Banner";
import usetitle from "../Utils/title";


const Dashboard = () => {
    usetitle('Dashboard')
    return (
        <div>
            <Banner
                btnone={'Cart'}
                btntwo={'Wishlist'}
                title={'Dashboard'}
                paragraph=
                {'"Your Cart, Your Wishlist! Review, update, and checkout your favorite gadgets all in one place—seamless shopping just a click away!"'}
            >
            </Banner>
            {/* children */}
            <div className="md:w-11/12 mx-auto">
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Dashboard;