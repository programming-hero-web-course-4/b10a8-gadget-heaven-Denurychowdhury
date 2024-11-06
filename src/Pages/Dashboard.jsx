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
                {'Explore the latest gadgets that will take your experience to the next level. From smart devices to the coolest accessories, we have it all!'}
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