import {createBrowserRouter } from "react-router-dom";
import ProductList from "../components/ProductList";
import AppLayout from "./appLayout";
import ErrorPage from "../utils/ErrorPage";
import ProductDetails from "../components/ProductDetails";

export const router=createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        errorElement:<ErrorPage/>,
        children: [
            {
                path:"/",
                element:<ProductList/>
            },
            {
                path:"product/:productId",
                element:<ProductDetails/>
            }
        ]

    }
])