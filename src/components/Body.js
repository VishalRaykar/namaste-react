import RestaurantCard from "./RestaurantCard";
import resList from "../Utils/mockData";
import {useState} from "react";

const Body = ()=>{
    const [searchValue, setSearchValue] = useState('');
    const [listOfRestaurants, setListOfRestaurants] = useState(resList);
    function onChange(event) {
        setSearchValue(event.target.value);
        setListOfRestaurants(resList);
        console.log(event.target.value);
        if(event.target.value!="")
        {
            setListOfRestaurants(resList.filter((res)=> res.info.name.toLowerCase().includes(event.target.value.toLowerCase())))
        }else{            
            setListOfRestaurants(resList);
        }
    }

    return (
        <div className="body">
            <div className="filter">
                <button className="filter-btn" 
                    onClick={()=>{
                        setListOfRestaurants(listOfRestaurants.filter((res)=> res.info.avgRating > 4.3))
                    }}
                >Top Rated Restaurants</button>
            </div>
            
            <div className="filter">
                <input className="search" id="search" value={searchValue}
                    onChange={ (e)=>onChange(e) } />
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