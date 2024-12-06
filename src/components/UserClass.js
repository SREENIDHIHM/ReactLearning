import React from "react";

class UserClass extends React.Component{
    constructor (props){
        super(props);

        this.state = {
            userInfo : {
                location: "Default",
                avatar_url :"Dummy",
            },
        };

        //console.log("Child Class is Called")
    }
    async componentDidMount(){
        //console.log("Chiled ComponentDidMount is Called");
        const data = await fetch("https://api.github.com/users/SREENIDHIHM");
        const json = await data.json();

        this.setState({
            userInfo: json,
        });
        console.log(json);
    }
    render(){
        const{location, avatar_url}= this.state.userInfo;
        return (
            <div className="user-card">
                <img src={avatar_url}/>
            <h2>Location: {location}</h2>
            <h3>location : Mysore, Karnataka</h3>
            <h4>Contact : sri@gmail.com</h4>
        </div>
    );
    }
}
export default UserClass;