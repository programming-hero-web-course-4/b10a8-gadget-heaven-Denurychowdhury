
import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import Card from "./Card";

import noproduct from '../assets/noproduct.jpg';
import usetitle from "../Utils/title";

const ProductCards = () => {
    usetitle('Home')
    const data = useLoaderData()
    // console.log(data);
    const { category } = useParams()
    // console.log(category);
    const [cards, setCards] = useState([])

    useEffect(() => {
        if (category) {
            const newdata = [...data].filter(product => product.category === category)
            setCards(newdata)
        }
        else {
            setCards(data.slice(0, 9))
        }
    }, [data, category])
    // console.log(cards);
    return (
        <div>
            {cards.length !== 0 ?
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 ">
                    {
                        cards.map(card => <Card key={card.product_id} card={card}></Card>)
                    }
                </div> :
                <div className="flex  justify-center items-center">
                    <div>
                        <h1 className="text-2xl mb-3 font-bold text-purple-500 flex items-center bg-gradient-to-r from-purple-500 to-[#da62e6] bg-clip-text text-transparent">Not Available Data on this page</h1>
                        <img src={noproduct} alt="" />
                    </div>
                </div>
            }
        </div>
    );
};

export default ProductCards;