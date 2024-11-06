import { createBrowserRouter } from "react-router-dom";
import Cart from "../Components/Cart";
import ProductCards from "../Components/ProductCards";
import Wishlist from "../Components/Wishlist";
import MainLayout from "../Layouts/MainLayout";
import Dashboard from "../Pages/Dashboard";
import Errorpage from "../Pages/Errorpage";
import Home from "../Pages/Home";
import ProductDetails from "../Pages/ProductDetails";
import Statictics from "../Pages/Statictics";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        errorElement: <Errorpage></Errorpage>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
                loader: () => fetch('/categories.json'),
                children: [
                    {
                        path: '/',
                        loader: () => fetch('/products.json'),
                        element: <ProductCards></ProductCards>
                    },
                    {
                        path: '/productcards/:category',
                        loader: () => fetch('/products.json'),
                        element: <ProductCards></ProductCards>
                    }
                ]
            },
            {
                path: '/productdetails/:product_id',
                element: <ProductDetails></ProductDetails>,
                loader: () => fetch('/products.json'),
            },
            {
                path: '/statictics',
                loader: () => fetch('/products.json'),
                element: <Statictics></Statictics>
            }
            ,
            {
                path: '/dashboard',
                element: <Dashboard></Dashboard>,
                children: [
                    // {
                    //     path: 'home',
                    //     element: <Cart></Cart>
                    // },
                    {
                        path: 'cart',
                        element: <Cart></Cart>
                    },
                    {
                        path: 'wishlist',
                        element: <Wishlist></Wishlist>
                    }
                ]
            }
        ]
    },
]);

export default routes