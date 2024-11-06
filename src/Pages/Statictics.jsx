import { useLoaderData } from "react-router-dom";

import { Area, Bar, CartesianGrid, ComposedChart, Legend, Line, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Banner from "../Components/Banner";
import usetitle from "../Utils/title";

const Statictics = () => {
    usetitle('Statictics')
    const data = useLoaderData()
    console.log(typeof data);
    const bardata = data.map(item => ({
        name: item.product_title,
        price: item.price,
        rating: item.rating,
        id: item.id
    }));
    console.log(typeof bardata);
    return (
        <div className="">
            <div>
                <Banner
                    title={'Statistics'}
                    paragraph={'Our gadget shop website has seen a 40% increase in user engagement this month, with a 25% boost in new visitor traffic driven by promotions on trending tech products.'}
                >
                </Banner>
            </div>
            <div className="md:w-11/12 mx-auto w-full flex justify-center items-center mt-10">
                <ResponsiveContainer width="100%" height={400}>
                    <ComposedChart
                        data={bardata}
                        margin={{
                            top: 20,
                            right: 20,
                            bottom: 20,
                            left: 20,
                        }}
                    >
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        <CartesianGrid stroke="#D8A7D3" />

                        <Area type="monotone" dataKey="rating" fill="#9538e2" stroke="#9538e2" />
                        <Bar dataKey="price" barSize={20} fill="#9538e2" />
                        <Line type="monotone" dataKey="id" stroke="#D8A7D3" />
                    </ComposedChart>
                </ResponsiveContainer>
            </div>

        </div >
    );
};

export default Statictics;