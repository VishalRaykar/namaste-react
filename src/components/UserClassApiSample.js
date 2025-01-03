import React from "react"

class UserClassApiSample extends React.Component{

    constructor(props){
        super(props);

        this.state={
            userinfo:{
                login: "user",
                id:"default",
                avatar_url:""
            }
        }
    }
    
    async componentDidMount(){
        //Api Call
        console.log("Child componentDidMount");
       const data = await fetch("https://api.github.com/users/VishalRaykar");
       const json = await data.json();
       console.log(json);
       console.log("Child componentDidMount");
       this.setState({
        userinfo:json
       });
    }

    render(){

        const {login, id, avatar_url}= this.state.userinfo;
        
        return (            
        <div className="user-card">
            <h2>Name : {login}</h2>
            <h3>Id : {id}</h3>
            <img className="image" src={avatar_url} />
        </div>
        )
    }

}

export default UserClassApiSample;