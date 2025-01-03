 import { useState } from "react";

const User = ({name, location})=>{
     const [count,setCount]= useState(0);
     const [count2,setCount2]= useState(1);
    return (
        <div className="user-card">
            <h2>Count : {count}</h2>
            <button onClick={()=>{
                setCount(count+1);
            }}>Count Increase</button>
            <h2>Count2 : {count2}</h2>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>contact : @{name}</h4>
        </div>
    )
}

export default User;