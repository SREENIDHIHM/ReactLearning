
import UserContext from "../utils/UserContext";
import User from "./User";
import UserClass from "./UserClass";
import React from "react";

class About extends React.Component{
    constructor(props){
        super(props);
        //console.log("Parent Class Components is called")
    }

    componentDidMount(){
        //console.log("Parent componentDidMount Called")
    }

    render(){

        //console.log("parent Render is Called");
        return(
            <div>
                <h1>About</h1>
                <div> loggedInUser:
                <UserContext>
                    {({loggedInUser})=><h1 className="text-xl font-bold">{loggedInUser}</h1>}
                </UserContext>
                </div>
                
                <User  name = {"Good one (function)"}/>
                <UserClass name ={"Godd on for Components"}/>
            </div>
        );

    }
}
export default About;
