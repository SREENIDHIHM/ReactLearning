import { useState } from "react";
const User =(props)=>{
const [count]=useState(0);
const [count1]=useState(1);

return(
    <div className="m-2 p-2 flex flex-wrap bg-gray-100 shadow-2xl">
        <h2 className="p-4 m-4 font-bold relative">Count: {count}</h2>
        <h2 className="p-4 m-4 font-bold">Count : {count1}</h2>
        <h2 className="p-4 m-4 font-bold relative">Name : {props.name}</h2>
        <h3 className="p-4 m-4 font-bold relative">location : Mysore, Karnataka</h3>
        <h4 className="p-4 m-4 font-bold relative">Contact : sri@gmail.com</h4>
    </div>
)
}
export default User;