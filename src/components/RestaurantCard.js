import {CDN_URL} from "../Utils/constants";

const RestaurantCard = (props)=>{
    const {resInfo}=props;

    const {
        cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo
    } = resInfo?.info

    return (
        <div className="m-4 p-4 w-[250px] rounded-lg bg-gray-100 hover:bg-gray-200">
            <img className="rounded-lg" alr="res-logo" 
            src={CDN_URL+cloudinaryImageId}/>
            <h3 className=" font-bold text-xl">{name}</h3>
            <h4>{cuisines.join(", ")}</h4>
            <ul>
                <li>
                    {avgRating} stars
                </li>
                <li>
                    {sla.deliveryTime} minutes
                </li>
                <li>
                    {costForTwo}
                </li>
            </ul>          
            
            
        </div>
    )
};

export const withPureVegLable = (RestaurantCard) =>{
    return(props)=>{
       return(
       <div>
        <label className="absolute bg-green-800 text-white p-2 m-2 rounded-lg">
            Pure Veg
        </label>
        <RestaurantCard {...props}/>
    </div>) 
    }
}

export default RestaurantCard;