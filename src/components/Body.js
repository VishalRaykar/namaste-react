import RestaurantCard, {withPureVegLable} from "./RestaurantCard";
import {useState} from "react";
import {useEffect} from "react";
import Shimmer from "./Shimmer";
import {Link} from "react-router-dom";
import useOnlineStatus from "../Utils/useOnlineStatus";

const Body = ()=>{
    const [listOfRestaurants, setListOfRestaurants] = useState([]);
    const [filteredRestaurants, setfilteredRestaurants] = useState([]);
    const [searchText, setSearchText] = useState([]);

    
    const PureVegLableCard = withPureVegLable(RestaurantCard);

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

    const onlineStatus = useOnlineStatus();
    if(onlineStatus===false) return <h1>Looks like you're offline</h1>;

    console.log(listOfRestaurants);

    //Conditional Rendering
    return listOfRestaurants.length===0 ? <Shimmer/>: (
        <div className="justify-center">
            <div className="filter flex">
                
                <div className="m-4 p-4">
                    <input type="text" className="border border-black" value={searchText} onChange={(e)=>{setSearchText(e.target.value)}} />
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={()=>{
                        setfilteredRestaurants(listOfRestaurants.filter((res)=> res.info.name.toLowerCase().includes(searchText.toLowerCase())))
                    }}>Search</button>
                </div>

                <div className="m-4 p-4 flex items-center">
                    <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" 
                        onClick={()=>{
                            setfilteredRestaurants(listOfRestaurants.filter((res)=> res.info.avgRating > 4.3))
                        }}
                    >Top Rated Restaurants</button>
                </div>
            </div>
            <div className="justify-center">
            <div className="flex flex-wrap">
                {
                    filteredRestaurants.map(restaurant=>
                    <Link to={"/restaurants/"+restaurant.info.id}>
                        {
                            restaurant.info.veg?<PureVegLableCard  key={restaurant.info.id} resInfo={restaurant}/>:<RestaurantCard key={restaurant.info.id} resInfo={restaurant} />
                        }
                    </Link>)
                }
            </div>

            </div>
        </div>
    )
};

export default Body;