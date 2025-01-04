import { MENU_API_URL_1, MENU_API_URL_2 } from "../Utils/constants";
import{useState,useEffect} from "react"

const useRestaurantMenu = (resId)=>{

    const [resInfo,setResInfo]=useState(null);

    useEffect(()=>{
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const data = await fetch(MENU_API_URL_1+resId+MENU_API_URL_2);
        const json = await data.json();
        setResInfo(json.data);
    };

    return resInfo;

}

export default useRestaurantMenu;