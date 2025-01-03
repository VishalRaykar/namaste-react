import UserClass from "./UserClass"
import { Component } from "react";


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
            <div>
                <h1>This is about page.</h1>
                <UserClass name={"Deepak"} location={"Delhi"}/>
                <UserClass name={"Deepak"} location={"Delhi"}/>
            </div>
        );
    };
    
}


export default About;