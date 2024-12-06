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
                <User  name = {"Good one (function)"}/>
                <UserClass name ={"Godd on for Components"}/>
            </div>
        );

    }
}
export default About;