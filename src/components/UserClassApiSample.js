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
        <div className="m-4 p-4">
            <h2 className="m-1 font-bold">Name : {login}</h2>
            <h3 className="m-1">Id : {id}</h3>
            <img className="my-2 pt-2 w-48 border-black shadow-2xl" src={avatar_url} />
        </div>
        )
    }

}

export default UserClassApiSample;