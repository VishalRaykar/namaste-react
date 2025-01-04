 import { useState } from "react";

const User = ({name, location})=>{
     const [count,setCount]= useState(0);
     const [count2,setCount2]= useState(1);
    return (
        <div className="m-2 p-2 border">
            <h2>Count : {count}</h2>
            <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={()=>{
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