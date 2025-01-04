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
       this.setState({
        userinfo:json
       });
    }

    componentDidUpdate(){
        console.log("componentDidUpdate called");
    }

    
    componentWillUnmount(){
        console.log("componentWillUnmount called");
    }

    render(){

        const {login, id, avatar_url}= this.state.userinfo;
        console.log("Render");
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