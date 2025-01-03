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
        <div className="user-card">
            <h2>Count : {count}</h2>
            <button onClick={()=>{
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