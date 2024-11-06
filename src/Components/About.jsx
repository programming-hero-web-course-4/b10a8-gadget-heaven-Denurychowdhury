import { CiShoppingTag } from "react-icons/ci";
import { FaCogs } from "react-icons/fa";
import { GiShoppingBag } from "react-icons/gi";
import { GrUserSettings } from "react-icons/gr";
import { LuShieldQuestion } from "react-icons/lu";
import { MdAttachEmail } from "react-icons/md";
import { TbShoppingCartSearch } from "react-icons/tb";
import usetitle from "../Utils/title";
import Banner from "./Banner";
import { RiKeyLine } from "react-icons/ri";
import { IoIdCardOutline } from "react-icons/io5";

const About = () => {
    usetitle('About us')
    return (
        <div>
            <div>
                <Banner
                    title={'About Us'}
                    paragraph={'We’re passionate about bringing innovation to your fingertips with a carefully curated selection of high-quality, cutting-edge products.'}
                >
                </Banner>
                <div className="md:w-11/12 mx-auto md:my-10 flex flex-col space-y-4 ">
                    <div className="bg-white p-2 rounded-lg">
                        <h1 className="text-xl font-bold flex items-center">Who We Are <span className="text-xl"><LuShieldQuestion /></span></h1>
                        <p className="text-base text-purple-400">
                            Welcome to Gadgets Heaven, where innovation meets everyday life!
                            We are a team of tech enthusiasts dedicated to bringing you the
                            latest and most innovative gadgets on the market. From smart home
                            devices to the coolest wearable tech, we carefully curate our selection
                            to offer products that make life easier, more exciting, and, of course,
                            a little bit cooler.
                        </p>
                    </div>
                    <div className="bg-white p-2 rounded-lg">
                        <h1 className="text-xl font-bold flex items-center gap-2">Our Mission <FaCogs /></h1>
                        <p className="text-base text-purple-400">
                            Our mission is simple: to make cutting-edge technology accessible to everyone.
                            We believe that the right gadgets can transform the way we live,
                            work, and play, and we’re committed to finding products that do just that.
                            Every product we carry has been selected for its quality, design, and functionality.
                        </p>
                    </div>
                    <div className="bg-white p-2 rounded-lg">
                        <h1 className="text-xl font-bold flex items-center gap-2">Why Shop With Us?<GiShoppingBag /></h1>
                        <div className="text-purple-400 list-disc">
                            <p className="flex items-center gap-2"><span className="text-xl"><CiShoppingTag /></span>Curated Selection: We handpick the latest gadgets, ensuring quality and relevance to our customers.</p>
                            <p className="flex  items-center gap-2"><span className="text-xl"><CiShoppingTag /></span> Customer-Centric: Our customer support team is here to guide you every step of the way—from answering questions to post-purchase support.</p>
                            <p className="flex items-center gap-2"><span className="text-xl"><CiShoppingTag /></span>Best Price Guarantee: We offer competitive prices and regular promotions to make the best tech affordable.</p>
                        </div>
                    </div>
                    <div className="bg-white p-2 rounded-lg">
                        <h1 className="text-xl font-bold flex items-center gap-2">Visit Us <IoIdCardOutline /></h1>
                        <div className="text-purple-400 list-disc">
                            Stop by any of our store locations to see our products in action or
                            to get hands-on demonstrations from our expert staff. We also offer an
                            engaging online shopping experience, so you can explore and shop from anywhere.
                        </div>
                    </div>
                </div>
                <div className="flex flex-col justify-center items-center ">
                    <h1 className="mb-5 text-2xl font-bold text-purple-500 flex items-center bg-gradient-to-r from-purple-500 to-[#da62e6] bg-clip-text text-transparent">Join Our Community</h1>
                    <div className="space-y-3">
                        <label className="input input-bordered flex items-center gap-2">
                            <input type="text" className="grow" placeholder="Search" />
                            <TbShoppingCartSearch />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <MdAttachEmail />
                            <input type="text" className="grow" placeholder="Email" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <GrUserSettings />
                            <input type="text" className="grow" placeholder="Username" />
                        </label>
                        <label className="input input-bordered flex items-center gap-2">
                            <RiKeyLine />
                            <input type="password" className="grow" value="password" />
                        </label>
                        <button className="btn flex w-full text-xl text-white border border-fuchsia-500 rounded-full bg-gradient-to-b from-purple-600 to-[#da62e6]">Submit</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;