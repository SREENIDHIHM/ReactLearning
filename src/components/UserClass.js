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
            <div className="user-card m-2 p-2 flex flex-wrap bg-gray-100 shadow-2xl">
                <img className= "size-52 shadow-2xl rounded-full"src={avatar_url}/>
            <h2 className="p-4 m-4 font-bold relative">Location: {location}</h2>
            <h3 className="p-4 m-4 font-bold relative">location : Mysore, Karnataka</h3>
            <h4 className="p-4 m-4 font-bold">Contact : sri@gmail.com</h4>
        </div>
    );
    }
}
export default UserClass;