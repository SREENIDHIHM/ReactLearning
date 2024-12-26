import { CDN_URL } from "../utils/constants.js";

const RestaurantCard = (props) => {
  const { resData } = props;

  console.log(resData);

  const {
    cloudinaryImageId,
    name,
    avgRating,
    cuisines,
    costForTwo,
    sal,
  } = resData?.info;

  return (
    <div className="m-2 p-2 w-72 rounded-lg bg-gray-100 hover:bg-gray-200 shadow-2xl">
      <img
        className="rounded-lg shadow-lg"
        alt="res-logo"
        src={CDN_URL + cloudinaryImageId}
      />
      <div className="p-2 m-2 w-auto">
      <h3 className="font-bold py-4 text-lg">{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      </div>
     
    </div>
  );
};

export const withPromtedLabel =(RestaurantCard)=>{
  return(props) =>{

    return(
      <div>
        <label className="p-2 m-8 bg-black
         text-white absolute rounded-2xl">Promoted</label>
        <RestaurantCard {...props} />
      </div>
    )
  }
}

export default RestaurantCard;