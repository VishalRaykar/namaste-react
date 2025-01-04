import React from "react"

class UserClass extends React.Component{

    constructor(props){
        super(props);
        this.state={
           count : 0 ,
           count2 : 1 ,
        };

        console.log("Child Constructor");
    }
    
    componentDidMount(){
        
        console.log("Child componentDidMount called");
    }

    render(){
        console.log("Child Render ");

        const {name, location}= this.props;
        const {count, count2}=this.state
        
        return (            
        <div className="m-2 p-2 border">
            <h2>Count : {count}</h2>
            <button className="px-4 py-2 bg-gray-100 m-4 rounded-lg" onClick={()=>{
                this.setState({
                    count : count+1
                });
            }}>Count Increase</button>
            <h2>Count2 : {count2}</h2>
            <h2>Name : {name}</h2>
            <h3>Location : {location}</h3>
            <h4>contact : @{name}</h4>
        </div>
        )
    }

}

export default UserClass;