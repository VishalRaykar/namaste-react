import {useEffect, useState, useContext} from "react";
import companyLogo from '../Images/logo-main.jpg';
import {Link} from 'react-router-dom';
import useOnlineStatus from "../Utils/useOnlineStatus";
import UserContext from "../Utils/UserContext";

const Header = ()=>{
    const [btnName,setBtnName] = useState("Login");

    console.log("Header Rendered");

    const contextData = useContext(UserContext);

    // when the dependancy array is not provided then the useEffect will trigger the call back function everytime the component rerenders.
    // useEffect(()=>{
    //     console.log("UseEffect Called");
    // });

    //when the dependancy array is empty then the useEffect will trigger the call back function only on initial render
    // useEffect(()=>{
    //     console.log("UseEffect Called");
    // },[]);

    //when the dependancy array is provided then the useEffect will trigger the call back function every time the value changes for the dependency
    useEffect(()=>{
        console.log("UseEffect Called");
    },[btnName]);

    const onlineStatus = useOnlineStatus();

    return (
        <div className="flex justify-between shadow-lg mb-2 px-2">
            <div className="logo-container">
            <Link to="/"><img className="w-56" src={companyLogo} /></Link>
            </div>
            <div className="flex items-center">
                <ul className="flex p-4 m-4">
                    {/* if we use anchor tag for routing , it will reload whole page */}
                    <li className="px-4">Online Status : {onlineStatus? "✅":"🔴"}</li>
                    <li className="px-4"><Link to="/grocery">Grocery</Link></li>
                    <li className="px-4"><Link to="/">Home</Link></li>
                    <li className="px-4"><Link to="/about"> About Us</Link></li>
                    <li className="px-4"><Link to="/contact">Contact Us</Link></li>
                    <li className="px-4">Cart</li>
                    <button className="login-button px-4" onClick={()=>{
                        btnName=="Login"? setBtnName("Logout"):setBtnName("Login");
                    }}>{btnName}</button>
                    <li className="px-4">{contextData.loggedInUser}</li>
                </ul>
            </div>
        </div>
    )
};

export default Header;