
import { toast } from "react-toastify";
// get data on storage
const getCartItem = () => {
    const card = localStorage.getItem('product')
    if (card) {
        const cart = JSON.parse(card)
        return cart;
    }
    else {
        return [];
    }
}
// set data on storage

const handleaddCart = (product) => {
    const products = getCartItem()
    const newProduct = products.find(details => details.product_id == product.product_id)
    if (newProduct) return toast.error('Already exist')
    products.push(product)
    localStorage.setItem('product', JSON.stringify(products))
    toast.success('Add to cart!')

}
// handle remove
const handleRemove = (product_id) => {
    const cards = getCartItem()
    const remaining = cards.filter(details => details.product_id != product_id)
    localStorage.setItem('product', JSON.stringify(remaining))
}

const itemlength =()=> {
    const items = getCartItem()
    const length = items.length;
    console.log(length);
    return length;
}

export { getCartItem, handleaddCart, handleRemove, itemlength };

