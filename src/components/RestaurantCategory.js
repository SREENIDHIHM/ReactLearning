import ItemList from "./ItemList";
import { useState } from "react";


const RestaurantCategory= ({data , showItem ,setShowIndex})=>{

const handleClick=()=>{
//    setShowItems(!showItem);
setShowIndex();


}
console.log(data);
    return<div>
        <div className="w-6/12 m-auto my-4 shadow-2xl bg-gray-100 p-4">
        <div className="flex justify-between cursor-pointer" onClick={handleClick}>
        <span className="font-bold">{data.title}({data.itemCards.length})</span>
        <span>{showItem ?"⬇️":"⬆️"}</span>
        </div>
        { showItem && <ItemList items ={data.itemCards}/>}
            
        </div>
        
    </div>
}
export default RestaurantCategory;