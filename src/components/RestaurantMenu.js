import { useState , useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router";
import { MENU_API, CDNI_URL} from "../utils/constants";
const RestaurantMenu = ()=>{
const [resInfo , setResInfo] = useState(null);
const {resId} = useParams();
    useEffect(()=> {
        fetchMenu();
    },[]);

    const fetchMenu = async()=>{
        const data = await fetch(MENU_API + resId);
        const json = await data.json();
        console.log(json)
        setResInfo(json.data);
    };

    if(resInfo === null ) return<Shimmer/>;

    const { name , cuisines , costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const{itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (

        <div className="menu">
            <h1>{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul className="item-container">
                {
                    itemCards?.map(item => 
                        <div className="items-card">
                        <img className="res-logo"alt="res-logo"src= {CDNI_URL + item.card.info.imageId}/>
                        <li key={item.card.info.id}><h3>{item.card.info.name}-{item.card.info.price}</h3><h4>{item.card.info.description}</h4>
                        </li></div>)
                }
            </ul>
        </div>
    );
};
export default RestaurantMenu;