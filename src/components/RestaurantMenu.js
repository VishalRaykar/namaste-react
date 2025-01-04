import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API_URL_1, MENU_API_URL_2 } from "../Utils/constants";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu"
const RestaurantMenu=()=>{

    const params = useParams();
    resInfo = useRestaurantMenu(params.resId);

    if(resInfo== null || resInfo.length === 0) return <Shimmer/>;

    const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    
    const {itemCards} = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    console.log(itemCards);
    return (
        <div className="menu">
            <img className="res-logo-main" alr="res-logo-main" 
                        src={CDN_URL+cloudinaryImageId}/>
            <h1>{name}</h1>
            <h3>{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars | {sla.deliveryTime} minutes | {costForTwoMessage}</h4>
            <ul>
                
                    {
                        itemCards?.map(item=><li key={item.id}>{item.card.info.name} | Rs. {item.card.info.finalPrice/100}</li>)
                    }
                
            </ul> 
        </div>
    )
};

export default RestaurantMenu;