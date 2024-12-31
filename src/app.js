import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import Header from "./components/Header";
import Body from "./components/Body";

/**
 * Header
 * -Logo
 * -Nav Items
 * Body
 * -Searchbar
 * -RestaurantContainer
 * --RestaurantCard
 * ---Image
 * ---Name of res, rating, cuisine, time
 * Footer
 *-Copyright
 *-Links
 *-Address
 *-Contact
 */



const AppLayout = ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
};

const root = createRoot(document.getElementById("root"));
root.render(<AppLayout/>);
