import { useState } from "react";
const User =(props)=>{
const [count]=useState(0);
const [count1]=useState(1);

return(
    <div className="user-card">
        <h2>Count: {count}</h2>
        <h2>Count : {count1}</h2>
        <h2>Name : {props.name}</h2>
        <h3>location : Mysore, Karnataka</h3>
        <h4>Contact : sri@gmail.com</h4>
    </div>
)
}
export default User;