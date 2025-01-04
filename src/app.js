import React,{lazy, Suspense} from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import RestaurantMenu from "./components/RestaurantMenu";
import Shimmer from "./components/Shimmer";
// import Grocery from "./components/Grocery";

//Chunking
//Dynamic Bundling
//Lazy Loading
//On Demand loading

const Grocery = lazy(()=>import("./components/Grocery"));

const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Outlet/>
        </div>
    )
};

const appRouter = createBrowserRouter([
    {
        path:"/",
        element:<AppLayout/>,
        children:[
            {
                path:"/",
                element:<Body/>
            },
            {
                path:"/grocery",
                element:<Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },
            {
                path:"/about",
                element:<About/>
            },
            {
                path:"/contact",
                element:<Contact/>
            },
            {
                path:"/restaurants/:resId",
                element:<RestaurantMenu/>
            }
        ],
        errorElement:<Error/>
    }
]);

const root = createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
