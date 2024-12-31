import RestaurantCard from "./RestaurantCard";
import {useState} from "react";
import {useEffect} from "react";
import Shimmer from "./shimmer";


const Body = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState([]);
    useEffect(()=>{
        fetchData();
    },[]);

    fetchData=async ()=>{
        const data=await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.1477697&lng=72.9360907&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        //Optional Chaining       
        setListOfRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
        setfilteredRestaurants(json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants);
    }

    //Conditional Rendering
    return listOfRestaurants.length===0? <Shimmer/>: (
        <div className="body">
            <div className="filter">
                
                <div className="search">
                    <input type="text" className="search-box" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                    <button onClick={()=>{
                        setfilteredRestaurants(listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    }}>Search</button>
                </div>

                <button className="filter-btn" 
                    onClick={()=>{
                        setfilteredRestaurants(listOfRestaurants.filter((res)=> res.info.avgRating > 4.3))
                    }}
                >Top Rated Restaurants</button>
            </div>
            
            <div className="res-container">
                {
                    filteredRestaurants.map(restaurant=><RestaurantCard key={restaurant.info.id} resInfo={restaurant} />)
                }
            </div>
        </div>
    )
};

export default Body;