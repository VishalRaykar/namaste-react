import React from "react";
import ReactDOM from "react-dom";
import { createRoot } from 'react-dom/client';
import companyLogo from './Images/logo.jpg';
import userIcon from './Images/user.png';

// Functional Components - New - Function that returns a react element 


// Component Composition
const HeaderComponent =  () => (    
    <div className="header">
         <img className="headerimages" src={companyLogo}/>
         <input type="text" placeholder="Search.."></input>
         <img className="headerimages" src={userIcon}/>
    </div>
);

//JSX => React.createElement => Js Object => HTMLElement(render)
const root = createRoot(document.getElementById("root"));
root.render(<HeaderComponent/>);
