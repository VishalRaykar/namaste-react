import UserClassApiSample from "./UserClassApiSample"
import { Component } from "react";
import UserContext from "../Utils/UserContext";

class About extends Component{
    
    constructor(props){
        super(props);
        console.log("Parent Component Constructor");
    }

    componentDidMount(){
        console.log("Parent componentDidMount called");

    }


    render(){
        
        console.log("Parent render called");
        return (
            <div className="m-4 p-4">
                <h1>This is about page.</h1>
                <UserContext.Consumer>
                    {({loggedInUser})=><h1>{loggedInUser}</h1>}
                </UserContext.Consumer>
                <br></br>
                <UserClassApiSample name={"Deepak"} location={"Delhi"}/>
            </div>
        );
    };
    
}


export default About;