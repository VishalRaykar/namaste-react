import {CDN_URL} from "../Utils/constants";

const RestaurantCard = (props)=>{
    const {resInfo}=props;

    const {
        cloudinaryImageId, name, cuisines, avgRating, sla, costForTwo
    } = resInfo?.info

    return (
        <div className="res-card" style={{ backgroundColor:"#f0f0f0"}}>
            <img className="res-logo" alr="res-logo" 
            src={CDN_URL+cloudinaryImageId}/>
            <h3>{name}</h3>
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

export default RestaurantCard;