import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import { CDNI_URL} from "../utils/constants";
const RestaurantMenu = ()=>{
const {resId} = useParams();

const resInfo = useRestaurantMenu(resId)
    if(resInfo === null ) return<Shimmer/>;

    const { name , cuisines , costForTwoMessage} = resInfo?.cards[2]?.card?.card?.info;
    const{itemCards}= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card;
    return (

        <div className="menu">
            <h1 className="font-bold text-lg">{name}</h1>
            <p>{cuisines.join(",")} - {costForTwoMessage}</p>
            <h2>Menu</h2>
            <ul className="flex flex-wrap p-4 w-auto">
                {
                    itemCards?.map(item => 
                        <div className="flex p-4 m-4 bg-gray-100 rounded-lg">
                        <img className="rounded-2xl"alt="res-logo"src= {CDNI_URL + item.card.info.imageId}/>
                        <li className="p-4 m-4" key={item.card.info.id}><h3>{item.card.info.name}-{item.card.info.price}</h3><h4>{item.card.info.description}</h4>
                        </li></div>)
                }
            </ul>
        </div>
    );
};
export default RestaurantMenu;