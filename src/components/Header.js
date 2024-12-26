import { LOGO_URL } from "../utils/constants";
import { useState , useContext } from "react";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const [btnNameReact, setBtnNameReact] = useState("Login");
  console.log("Header render");
  const onlineStatus =useOnlineStatus();
  const {loggedInUser} = useContext(UserContext);
// Subscribing the store using selector inside the hook
const cartItems = useSelector((store) => store.cart.items);
console.log(cartItems)
  return (
    <div className="flex justify-between bg-white shadow-lg mb-2">
      <div className="logo-container">
        <img className="w-24" src={LOGO_URL } />
      </div>
      <div className="flex items-center">
        <ul className="flex p-4 m-4">
          <li className="px-4 text-black hover:">onlineStatus : {onlineStatus ? "✅ " : "⛔"}</li>
          <li className="px-4 text-black "><Link to ="/">Home</Link></li>
          <li className="px-4 text-black"><Link to = "/about">About Us</Link></li>
          <li className="px-4 text-black"><Link to="/contact">Contact Us</Link></li>
          <li className="px-4 text-black "><Link to="/grocery">Grocery</Link></li>
          <li className="px-4 text-black "> <Link to="/cart">Cart - ({cartItems.length} items)</Link></li>
          <button
            className="px-1 py-1 rounded-full bg-red-500 hover:bg-orange-500"
            onClick={() => {
              btnNameReact === "Login"
                ? setBtnNameReact("Logout")
                : setBtnNameReact("Login");
            }}
          >
            {btnNameReact}
          </button>
          <li className="px-4 font-bold ">{loggedInUser}</li>
        </ul>
      </div>
    </div>
  );
};

export default Header;