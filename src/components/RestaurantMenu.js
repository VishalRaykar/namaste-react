import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { CDN_URL, MENU_API_URL_1, MENU_API_URL_2 } from "../Utils/constants";
import {useParams} from "react-router-dom";
import useRestaurantMenu from "../Utils/useRestaurantMenu"
import ItemCategory from "./ItemCategory";
const RestaurantMenu=()=>{

    const params = useParams();
    const resInfo = useRestaurantMenu(params.resId);

    if(resInfo== null || resInfo.length === 0) return <Shimmer/>;

    const {cloudinaryImageId, name, cuisines, avgRating, sla, costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    //const {itemCards} = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards[1].card.card;
    const categories = resInfo?.cards[4].groupedCard.cardGroupMap.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")

    console.log(categories);
    return (
        <div className="m-4 p-4">
            <img className="shadow-xl w-56" alr="res-logo-main" 
                        src={CDN_URL+cloudinaryImageId}/>
            <div className="pt-2 font-bold text-2xl">{name}</div>
            <h3 className="text-gray-500">{cuisines.join(", ")}</h3>
            <h4>{avgRating} stars | {sla.deliveryTime} minutes | {costForTwoMessage}</h4>
            {/* <ul className="m-2 p-1">                
                    {
                        itemCards?.map(item=><li key={item.id} className="pt-1">- {item.card.info.name} | Rs. {item.card.info.finalPrice/100}</li>)
                    }                
            </ul>  */}

            {
                categories?.map((itemCategory, index)=>
                <ItemCategory 
                key={itemCategory?.card?.card?.name} 
                itemcatdata={itemCategory?.card?.card} /> )
            }
        </div>
    )
};

export default RestaurantMenu;