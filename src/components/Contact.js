import User from "./User"
import UserClass from "./UserClass"

const Contact =()=>{
    return (
        <div>
            <User name={"Vishal"} location={"Mumbai"}/>
            <UserClass name={"Deepak"} location={"Delhi"}/>
            <User name={"Suraj"} location={"Mumbai"}/>
        </div>
    )
};

export default Contact;