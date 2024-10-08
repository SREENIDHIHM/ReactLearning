import React from "react";
import ReactDOM from "react-dom/client";

const Header = () =>{
    return(
        <div className= "header">
            <div className="logo-container">
                <img className="logo" src ="https://png.pngtree.com/template/20191024/ourmid/pngtree-food-delivery-logo-design-fast-delivery-service-sign-image_323015.jpg"/>
            </div>
            <div className = "nav-items">
                <ul>
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Contact Us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
};

const RestaurantCard = (props) =>{
    const {resName , cusine}= props;
  return(
<div className ="res-card">
    <img className= "reslogo" src="https://i0.wp.com/foodntravel.in/wp-content/uploads/2023/02/Fresh-Catch-Seafood-Restaurant.jpg?fit=1280%2C720&ss"/>
    <h3>{resName}</h3>
    <h4>{cusine}</h4>
    <h4>4.4 Stars</h4>
    <h4>38 minutes</h4>
</div>
  );
};

const Body = ()=> {
    return(
        <div className="body">
            <div className ="search">Search</div>
            <div className = "res-container">
                <RestaurantCard
                 resName="Meghana Food" 
                 cusine= "North Indian, Asian"/>
                <RestaurantCard
                 resName="KFC" 
                 cusine= "Burger, Fast Food"/>

            </div>
        </div>
    );
};

const AppLayout = () => {
return (
    <div className ="app">
   <Header/>
   <Body/>
    </div>
)
};
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppLayout/>);


