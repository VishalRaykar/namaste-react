import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import {useEffect} from "react";
import Shimmer from "./shimmer";


const Body = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1477697&lng=72.9360907&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        console.log(json);
        console.log(json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants); 
        //Optional Chaining       
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);

    }

    //Conditional Rendering
    return listOfRestaurants.length===0? <Shimmer/>: (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                    onClick={()=>{
                        setListOfRestaurants(listOfRestaurants.filter((res)=> res.info.avgRating > 4.3))
                    }}
                >Top Rated Restaurants</button>
            </div>
            
            <div className="res-container">
                {
                    listOfRestaurants.map(restaurant=><RestaurantCard key={restaurant.info.id} resInfo={restaurant} />)
                }
            </div>
        </div>
    )
};

export default Body;