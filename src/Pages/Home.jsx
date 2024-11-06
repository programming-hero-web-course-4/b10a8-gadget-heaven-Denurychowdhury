
import { Outlet, useLoaderData, useLocation } from "react-router-dom";
import bannerimg from '../assets/banner.jpg';
import Banner from "../Components/Banner";
import Footer from "../Components/Footer";
import PositionCard from "../Components/PositionCard";
import Productcategories from "../Components/Productcategories";
import usetitle from "../Utils/title";

const Home = () => {
    usetitle('Home')
    const data = useLoaderData()

    // console.log(data);
    return (
        <div>
            {/* banner section */}
            <Banner
                title={'Upgrade Your Tech Accessorize with Gadget Heaven Accessories'}
                paragraph={'Explore the latest gadgets that will take your experience to the next level. From smart devices  to the coolest accessories, we have it all!'}
                btnone={'shop now'}
            ></Banner>
            <PositionCard bannerimg={bannerimg}></PositionCard>
            <div className="text-center text-3xl">
                <h1>Explore Cutting-Edge Gadgets</h1>
            </div>
            <div className="flex  md:flex-row flex-col my-10  md:w-10/12 mx-auto lg:gap-10">
                <Productcategories categories={data}></Productcategories>
                <Outlet></Outlet>
            </div>
        </div>
    );
};

export default Home;