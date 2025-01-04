import {useEffect, useState} from "react";
import companyLogo from '../Images/logo-main.jpg';
import {Link} from 'react-router-dom';
import useOnlineStatus from "../Utils/useOnlineStatus";

const Header = ()=>{
    const [btnName,setBtnName] = useState("Login");

    console.log("Header Rendered");

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
        <div className="header">
            <div className="logo-container">
            <Link to="/"><img className="logo" src={companyLogo} /></Link>
            </div>
            <div className="nav-items">
                <ul>
                    {/* if we use anchor tag for routing , it will reload whole page */}
                    <li>Online Status : {onlineStatus? "✅":"🔴"}</li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about"> About Us</Link></li>
                    <li><Link to="/contact">Contact Us</Link></li>
                    <li>Cart</li>
                    <button className="login-button" onClick={()=>{
                        btnName=="Login"? setBtnName("Logout"):setBtnName("Login");
                    }}>{btnName}</button>
                </ul>
            </div>
        </div>
    )
};

export default Header;